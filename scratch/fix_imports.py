import glob
import os

portfolio_dir = r'd:\CVS\Portfolio'

for root, _, files in os.walk(portfolio_dir):
    if 'node_modules' in root or '.git' in root or '.next' in root:
        continue
    for file in files:
        if file.endswith('.js') or file.endswith('.jsx'):
            filepath = os.path.join(root, file)
            with open(filepath, 'r', encoding='utf-8') as f:
                content = f.read()
            
            original_content = content
            content = content.replace('"../components/', '"@/components/')
            content = content.replace('"../../components/', '"@/components/')
            content = content.replace('"../data/', '"@/data/')
            content = content.replace('"../../data/', '"@/data/')
            
            if content != original_content:
                with open(filepath, 'w', encoding='utf-8') as f:
                    f.write(content)
                print(f'Updated {filepath}')
