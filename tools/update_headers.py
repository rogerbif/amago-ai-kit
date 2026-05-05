import os
import re

HEADER = "# 🛡️ Amago Academy - 2026\n\n"

def update_skill_files(skills_dir):
    for root, dirs, files in os.walk(skills_dir):
        if "SKILL.md" in files:
            file_path = os.path.join(root, "SKILL.md")
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()
            
            # If already has the header, skip
            if "Amago Academy - 2026" in content:
                continue
            
            # Find where frontmatter ends
            match = re.search(r'^---\s*\n.*?\n---\s*\n', content, re.DOTALL)
            if match:
                end_pos = match.end()
                new_content = content[:end_pos] + HEADER + content[end_pos:]
                
                with open(file_path, 'w', encoding='utf-8') as f:
                    f.write(new_content)
                print(f"Updated: {file_path}")

if __name__ == "__main__":
    skills_path = os.path.join(os.getcwd(), "skills")
    update_skill_files(skills_path)
