yarn build &&
git checkout gh-pages &&
rm -f *.html *.css *.jpg *.png *.js &&
mv dist/* ./ &&
rm -rf dist/ &&
git add . &&
git commit -m "update gh-pages branch" &&
git push &&
git checkout - 