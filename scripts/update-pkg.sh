git checkout develop && git pull
git checkout -b feature/update_pkgs_$(date +%Y%m%d)
npx npm-check-updates -u
npm install

npm run test && git add . && git commit -m "update pkgs" && gh pr create --fill
