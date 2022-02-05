const fs = require('fs');
const path = require('path');

const target = path.resolve(__dirname, '../node_modules/@nuxt/kit/package.json');
const contents = fs.readFileSync(target);
const replaced = contents.toString().replace(
    '"import": "./lib/index.mjs"',
    '"import": "./lib/index.mjs", "require": "./lib/index.mjs"'
);

fs.writeFileSync(target, replaced);
