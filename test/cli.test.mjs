import {test} from 'node:test';
import assert from 'node:assert/strict';
import {mkdtempSync,readFileSync,existsSync,writeFileSync,rmSync} from 'node:fs';
import {tmpdir} from 'node:os';
import {join} from 'node:path';
import {spawnSync} from 'node:child_process';
import {fileURLToPath} from 'node:url';
const cli=fileURLToPath(new URL('../bin/cli.mjs',import.meta.url));
test('independent install, update, uninstall, reject traversal',()=>{
 const cwd=mkdtempSync(join(tmpdir(),'hrz-test-'));
 const run=(...args)=>spawnSync(process.execPath,[cli,...args,'--agent','both','--project','--yes'],{cwd,encoding:'utf8'});
 try{
 assert.equal(run('install','kavenegar-sms').status,0);
 for(const dir of ['.claude','.agents']){
 const p=join(cwd,dir,'skills','kavenegar-sms');
 assert.ok(existsSync(join(p,'SKILL.md')));
 assert.ok(!existsSync(join(cwd,dir,'skills','zibal-payment')));
 }
 assert.equal(run('update').status,0);
 assert.equal(run('uninstall','kavenegar-sms').status,0);
 assert.ok(!existsSync(join(cwd,'.agents','skills','kavenegar-sms')));
 assert.notEqual(run('install','../evil').status,0);
 }finally{rmSync(cwd,{recursive:true,force:true});}
});
