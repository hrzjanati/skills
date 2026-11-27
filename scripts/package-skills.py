from pathlib import Path
import json
from zipfile import ZipFile, ZIP_DEFLATED
root = Path(__file__).resolve().parents[1]
names = [x["name"] for x in json.loads((root/"catalog.json").read_text(encoding="utf-8"))]
out = root/"downloads"
out.mkdir(exist_ok=True)
def pack(filename, selected):
    with ZipFile(out/filename, "w", ZIP_DEFLATED) as z:
        for name in selected:
            folder = root/name
            assert (folder/"SKILL.md").is_file(), name
            for p in sorted(folder.rglob("*")):
                if p.is_file() and not p.is_symlink():
                    z.write(p, p.relative_to(root))
    with ZipFile(out/filename) as z:
        assert z.testzip() is None
for name in names:
    pack(name+".zip", [name])
pack("startup-skills-kit.zip", [n for n in names if n not in {"reverse-engineering-fa","skill-creator"}])
print(f"Created {len(names)+1} archives")
