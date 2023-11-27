git checkout develop && git pull

branch_name="feature/update_pkgs_$(date +%Y%m%d)"

git checkout -b $branch_name
npx npm-check-updates -u
npm install

npm run test && git add . && git commit -m "update pkgs" && git push -u origin $branch_name && gh pr create --fill
