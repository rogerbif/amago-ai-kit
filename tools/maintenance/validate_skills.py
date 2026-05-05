import os
import re
import sys
import yaml

def validate_skills(skills_dir):
    print(f"🔍 Validando skills em: {skills_dir}")
    
    skill_count = 0
    errors = []
    
    for root, dirs, files in os.walk(skills_dir):
        if "SKILL.md" in files:
            skill_count += 1
            skill_path = os.path.join(root, "SKILL.md")
            rel_path = os.path.relpath(skill_path, skills_dir)
            
            with open(skill_path, 'r', encoding='utf-8') as f:
                content = f.read()
            
            # 1. Frontmatter Check
            fm_match = re.search(r'^---\s*\n(.*?)\n?---(?:\s*\n|$)', content, re.DOTALL)
            if not fm_match:
                errors.append(f"❌ {rel_path}: Missing YAML frontmatter")
                continue
            
            try:
                metadata = yaml.safe_load(fm_match.group(1)) or {}
                
                # Check mandatory fields
                if "name" not in metadata:
                    errors.append(f"❌ {rel_path}: Missing 'name' in frontmatter")
                if "description" not in metadata:
                    errors.append(f"❌ {rel_path}: Missing 'description' in frontmatter")
                
            except yaml.YAMLError as e:
                errors.append(f"❌ {rel_path}: YAML Syntax Error - {e}")

            # 2. Check "When to Use" section
            if not re.search(r'##\s+When\s+to\s+Use', content, re.IGNORECASE):
                # Check Portuguese version too
                if not re.search(r'##\s+Quando\s+Usar', content, re.IGNORECASE):
                    print(f"⚠️  {rel_path}: Missing '## When to Use' or '## Quando Usar' section")

    print(f"\n📊 Verificadas {skill_count} skills.")
    if errors:
        print(f"\n❌ Erros Encontrados:")
        for e in errors:
            print(e)
        return False
    
    print("\n✨ Todas as skills passaram na validação básica!")
    return True

if __name__ == "__main__":
    skills_path = os.path.join(os.getcwd(), "skills")
    validate_skills(skills_path)
