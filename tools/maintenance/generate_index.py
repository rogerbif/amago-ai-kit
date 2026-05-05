import os
import re

def generate_index(skills_dir, output_file):
    print(f"📚 Gerando índice de skills...")
    
    skills = []
    
    for root, dirs, files in os.walk(skills_dir):
        if "SKILL.md" in files:
            skill_path = os.path.join(root, "SKILL.md")
            folder_name = os.path.basename(root)
            
            with open(skill_path, 'r', encoding='utf-8') as f:
                content = f.read()
            
            # Extract name and description from frontmatter
            name_match = re.search(r'name:\s*(.*)', content)
            desc_match = re.search(r'description:\s*(.*)', content)
            
            name = name_match.group(1).strip() if name_match else folder_name
            desc = desc_match.group(1).strip() if desc_match else "Sem descrição."
            
            skills.append((name, desc, folder_name))

    skills.sort()
    
    with open(output_file, 'w', encoding='utf-8') as f:
        f.write("# 📚 Catálogo de Skills (Amago Elite)\n\n")
        f.write("Este é o índice automático de todas as habilidades disponíveis no kit.\n\n")
        f.write("| Skill | Descrição | Diretório |\n")
        f.write("| :--- | :--- | :--- |\n")
        for name, desc, folder in skills:
            f.write(f"| **{name}** | {desc} | `skills/{folder}` |\n")
            
    print(f"✨ Índice gerado com sucesso em: {output_file}")

if __name__ == "__main__":
    skills_path = os.path.join(os.getcwd(), "skills")
    output_path = os.path.join(os.getcwd(), "SKILLS_CATALOG.md")
    generate_index(skills_path, output_path)
