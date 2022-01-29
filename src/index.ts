import { defineNuxtModule, addPluginTemplate } from '@nuxt/kit';
import { join, resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import { createRequire } from 'module';

const __inklineRequire = createRequire(import.meta.url);
const __inklineFilename = fileURLToPath(import.meta.url);
const __inklineDirname = dirname(__inklineFilename);

export default defineNuxtModule({
    meta: {
        name: '@inkline/nuxt',
        version: '3',
        configKey: 'inkline',
        compatibility: {
            nuxt: '>=2.0.0',
            bridge: true
        }
    },
    setup: (moduleOptions, { options }) => {
        options.css = ['@inkline/inkline/inkline.scss'].concat(options.css || []);

        addPluginTemplate({
            src: resolve(__inklineDirname, 'plugin.ejs'),
            options: moduleOptions
        });
    },
    hooks: {
        'components:dirs' (dirs) {
            dirs.push({
                path: join(dirname(__inklineRequire.resolve('@inkline/inkline')), 'components'),
                pathPrefix: false,
                pattern: '**/*.vue',
                ignore: ['**/examples/*.vue'],
                transpile: true
            });
        }
    }
});
