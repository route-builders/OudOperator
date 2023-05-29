const fs = require('fs');

const packageJSON = JSON.parse(fs.readFileSync('package.json'));
process.stdout.write(`v${packageJSON.version}`);
