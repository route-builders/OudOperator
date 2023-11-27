git checkout develop && git pull

branch_name="feature/update_pkgs_$(date +%Y%m%d%H)"

git checkout -b $branch_name
git pull origin master
npx npm-check-updates -u
rm -rf package-lock.json yarn.lock
npm install

# npm run test && git add . && git commit -m "update pkgs" && git push -u origin $branch_name && gh pr create --fill
