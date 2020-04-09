#!/usr/bin/env sh

set -e

npm run build

cd docs/.vuepress/dist

git init
git add -A
git commit -m 'deploy docs'

git push -f git@github.com:lq782655835/vuepress-plugin-demo-block.git master:gh-pages

cd -
rm -rf docs/.vuepress/dist
