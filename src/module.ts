import { defineNuxtModule, addPluginTemplate } from '@nuxt/kit';
import { join, resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import { createRequire } from 'module';
import { PluginConfig } from '@inkline/inkline';
import { NuxtModule } from '@nuxt/schema';

interface ModuleConfig {
    css: boolean;
    sassVariables: string[];
}

export const module: NuxtModule<PluginConfig & ModuleConfig> = defineNuxtModule({
    meta: {
        name: '@inkline/nuxt',
        version: '3',
        configKey: 'inkline',
        compatibility: {
            nuxt: '>=2.0.0',
            bridge: true
        }
    },
    setup: ({ sassVariables, css, ...moduleOptions }, { options }) => {
        const runtimeDir = fileURLToPath(new URL('./runtime', import.meta.url));

        if (css) {
            options.css = (sassVariables || [])
                .concat(['@inkline/inkline/inkline.scss'])
                .concat(options.css || []);
        }

        options.build.transpile.push('@inkline/inkline');

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
                transpile: true,
                global: false
            });
        }
    }
});

export default module;
