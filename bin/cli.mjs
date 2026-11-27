#!/usr/bin/env node
import {readFileSync,writeFileSync,existsSync,mkdirSync,cpSync,renameSync,rmSync,lstatSync} from 'node:fs';
import {join,dirname} from 'node:path';
import {homedir} from 'node:os';
import {fileURLToPath} from 'node:url';
import {createInterface} from 'node:readline/promises';
const root=dirname(dirname(fileURLToPath(import.meta.url)));
const catalog=JSON.parse(readFileSync(join(root,'catalog.json'),'utf8'));
const all=catalog.map(x=>x.name);
const version=JSON.parse(readFileSync(join(root,'package.json'),'utf8')).version;
const args=process.argv.slice(2);
const cmd=args.shift()||'help';
const option=(key)=>{const i=args.indexOf(key);if(i<0)return undefined;if(!args[i+1]||args[i+1].startsWith('--'))throw Error('Missing value for '+key);return args[i+1];};
const positional=args.filter((x,i)=>!x.startsWith('--')&&!(i>0&&args[i-1]==='--agent'));
const project=args.includes('--project');
const yes=args.includes('--yes')||args.includes('-y');
const roots={'claude':join(project?process.cwd():homedir(),'.claude','skills'),'codex':join(project?process.cwd():homedir(),'.agents','skills')};
const marker='.hrzjanati-managed.json';
const stamp=()=>new Date().toISOString().replace(/[:.]/g,'-');
const prompt=async(q)=>{if(!process.stdin.isTTY)throw Error('Interactive terminal required; supply --agent and skill name or --yes.');const rl=createInterface({input:process.stdin,output:process.stdout});try{return (await rl.question(q)).trim();}finally{rl.close();}};
const exists=p=>{try{lstatSync(p);return true;}catch(e){if(e.code==='ENOENT')return false;throw e;}};
const managed=(p,n)=>{try{const s=lstatSync(p);if(!s.isDirectory()||s.isSymbolicLink())return false;const m=JSON.parse(readFileSync(join(p,marker),'utf8'));return m.package==='hrzjanati-skills'&&m.name===n;}catch{return false;}};
function backup(p,n){const dest=join(dirname(dirname(p)),'hrzjanati-skills-backups',stamp()+'-'+n+'-'+process.pid);mkdirSync(dirname(dest),{recursive:true});if(exists(dest))throw Error('Backup already exists: '+dest);renameSync(p,dest);return dest;}
function install(base,n,updating=false){
 const src=join(root,n),dest=join(base,n),temp=join(base,'.hrz-tmp-'+n+'-'+process.pid);
 if(!existsSync(join(src,'SKILL.md')))throw Error('Missing packaged skill: '+n);
 if(exists(dest)&&!managed(dest,n)){console.log('SKIP unmanaged existing skill: '+dest);return;}
 if(updating&&!managed(dest,n))return;
 mkdirSync(base,{recursive:true});if(exists(temp))throw Error('Temporary path already exists: '+temp);
 let saved;
 try{cpSync(src,temp,{recursive:true,errorOnExist:true,force:false});writeFileSync(join(temp,marker),JSON.stringify({package:'hrzjanati-skills',name:n,version},null,2));
 if(exists(dest))saved=backup(dest,n);
 renameSync(temp,dest);console.log('Installed '+n+' -> '+dest+(saved?' (backup: '+saved+')':''));
 }catch(e){if(saved&&!exists(dest))renameSync(saved,dest);throw e;}finally{if(exists(temp))rmSync(temp,{recursive:true,force:true});}
}
function show(){console.log('HRZJanati Skills '+version+'\n');for(const x of catalog)console.log(x.name+' — '+x.description);}
async function main(){
 if(['help','--help','-h'].includes(cmd)){console.log('hrzjanati-skills '+version+'\nsetup | list | install <name|startup|all> | update | uninstall <name|all> | doctor\nOptions: --agent claude|codex|both, --project, --yes\nUse npm exec --package=hrzjanati-skills@latest -- hrzjanati-skills update for the latest package.');return;}
 if(cmd==='--version'){console.log(version);return;}if(cmd==='list'){show();return;}
 if(!['setup','install','update','uninstall','doctor'].includes(cmd))throw Error('Unknown command: '+cmd);
 let agent=option('--agent');if(!agent)agent=cmd==='doctor'?'both':await prompt('Agent / دستیار (claude/codex/both): ');
 if(!['claude','codex','both'].includes(agent))throw Error('Invalid agent');
 const targets=agent==='both'?Object.values(roots):[roots[agent]];
 if(cmd==='doctor'){for(const b of targets){console.log(b);for(const n of all)if(exists(join(b,n)))console.log('  '+n+': '+(managed(join(b,n),n)?'managed':'external'));}return;}
 let selection=positional;
 if(cmd==='setup'&&!selection.length){show();selection=(await prompt('Skill names separated by spaces, or startup / all: ')).split(/\s+/).filter(Boolean);}
 if(cmd==='update'&&!selection.length)selection=['all'];
 if(!selection.length)throw Error('Choose skill name, startup or all');
 const chosen=[...new Set(selection.flatMap(n=>n==='all'?all:n==='startup'?all.filter(x=>x!=='reverse-engineering-fa'&&x!=='skill-creator'):[n]))];
 if(chosen.some(n=>!all.includes(n)))throw Error('Unknown skill name');
 console.log(cmd+': '+chosen.join(', ')+'\nTargets: '+targets.join(', '));
 if(!yes&& !/^y(es)?$/i.test(await prompt('Proceed? [y/N] '))){console.log('Cancelled');return;}
 for(const b of targets)for(const n of chosen){const p=join(b,n);if(cmd==='uninstall'){if(managed(p,n))console.log('Removed '+n+'; backup: '+backup(p,n));else console.log('SKIP unmanaged or absent '+n);}else install(b,n,cmd==='update');}
 console.log('Done. Restart the agent if necessary. External tools are not installed automatically.');
}
main().catch(e=>{console.error(e.message);process.exitCode=1;});
