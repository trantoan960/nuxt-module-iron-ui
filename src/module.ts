import { defineNuxtModule, addPluginTemplate } from '@nuxt/kit';
import { join, resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import { createRequire } from 'module';
import { PluginConfig } from "@inkline/inkline";

export interface ModuleOptions extends PluginConfig {}

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
        const runtimeDir = fileURLToPath(new URL('./runtime', import.meta.url));

        options.css = ['@inkline/inkline/inkline.scss'].concat(options.css || []);
        options.build.transpile.push(runtimeDir);

        addPluginTemplate({
            src: resolve(runtimeDir, 'plugin.ejs'),
            options: moduleOptions
        });
    },
    hooks: {
        'components:dirs' (dirs) {
            const inklineRequire = createRequire(import.meta.url);

            dirs.push({
                path: join(dirname(inklineRequire.resolve('@inkline/inkline')), 'components'),
                pathPrefix: false,
                pattern: '**/*.vue',
                ignore: ['**/examples/*.vue'],
                transpile: true
            });
        }
    }
});
