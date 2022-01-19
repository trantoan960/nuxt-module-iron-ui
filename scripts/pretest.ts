import * as shell from 'shelljs';
import { resolve } from 'path';

const __root = resolve(__dirname, '..');

shell.cd(__root);
shell.exec('npm run build');
shell.mkdir('-p', './tests/app/modules/inkline');
shell.cp('-R', './lib/*', './tests/app/modules/inkline');

if (!shell.test('-e', './tests/app/node_modules')) {
    shell.cd('./tests/app');
    shell.exec('npm install');
}
