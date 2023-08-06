#!/bin/bash

git_repo="SilvioCavalcantiBonfim/Figmaland"
subdiretorio="dist"
branch_github_pages="gh-pages"

cd "$subdiretorio"

git init

git add .

git commit -m "Deploy para o GitHub Pages"


git remote add origin "https://github.com/$git_repo.git"

git checkout -b $branch_github_pages

git push -u origin $branch_github_pages --force

echo "Deploy para o GitHub Pages concluído!"