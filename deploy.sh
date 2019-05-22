set -u
npm run build
pushd dist
git init
git add -A
git commit -m "deploy"
git push -f https://github.com/kimnyholm/espurna-device-locator master:gh-pages
popd
