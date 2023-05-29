const fs = require('fs');
const semver = require('semver');

// load package.json
const packageJSON = JSON.parse(fs.readFileSync('package.json'));

// bump up patch version
const version = semver.inc(packageJSON.version, 'patch');

// update package.json
packageJSON.version = version;
fs.writeFileSync('package.json', `${JSON.stringify(packageJSON, undefined, 2)}\n`);
