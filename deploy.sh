#!/usr/bin/env sh

set -e

npm run build

cd docs/.vuepress/dist

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:xiguaxigua/vuepress-plugin-demo-block.git master:gh-pages

cd -
rm -rf docs/.vuepress/dist
