import * as shell from 'shelljs';
import { resolve } from 'path';

const __root = resolve(__dirname, '..');

shell.cd(resolve(__root, 'tests', 'app'));
shell.exec('npm run build');
