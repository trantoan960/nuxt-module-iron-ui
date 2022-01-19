<p align="center">
    <a href="http://inkline.io/">
        <img src="https://raw.githubusercontent.com/inkline/inkline.io/main/src/assets/images/logo/logo-black.svg" alt="Inkline logo" width=72 height=72>
    </a>
</p>

<h1 align="center">Inkline - Nuxt 3 Module</h1>

<p align="center">
    Nuxt 3 Module for Inkline, the intuitive UI Components library that gives you the foundation for building high quality, accessible, and customizable Vue.js Design Systems. Inkline is written and maintained by <a href="https://twitter.com/alexgrozav">@alexgrozav</a>. 
    <br/>
    <br/>
    <a href="https://inkline.io">Homepage</a>
    ·
    <a href="https://inkline.io/docs/introduction">Documentation</a>
    ·
    <a href="https://github.com/inkline/inkline/issues">Issue Tracker</a>
</p>

<br/>
<br/>

## Installation

### 1. **Create a project**

Create a new Nuxt.js application using the `nuxi` CLI command below or using the [Nuxt.js](https://v3.nuxtjs.org/getting-started/installation/) guide, and follow the instructions provided by the installation wizard.

```
npx nuxi init my-nuxt-app

cd my-nuxt-app

npm install
```

### 2. **Install Inkline and dependencies**

Install and save Inkline and the Inkline Nuxt 3 Module as a project dependency.

```
npm install --save @inkline/inkline @inkline/nuxt
```

Inkline uses [Sass](https://sass-lang.com) to pre-process and compile its CSS files. You will need to install it as a development dependency in order to compile the stylesheets.

~~~bash
npm install --save-dev sass
~~~

### 3. **Configure your project**

Open your `nuxt.config.ts` or `nuxt.config.js` file and configure your application to use Inkline.

```js
import { defineNuxtConfig } from 'nuxt3';

export default defineNuxtConfig({
    buildModules: [
        '@inkline/nuxt'
    ],
    css: [
        '~/main.scss'
    ],
    inkline: {
        // Plugin options (optional)
    }
});
```

### 4. **Configure your design**

Next, create a new file called `main.scss` and import Inkline. Learn more about the Design System.

~~~scss
@import '@inkline/inkline/css/variables';
@import '@inkline/inkline/css/mixins';

:root {
    --color--primary--h: 195deg;
    --color--primary--s: 77%;
    --color--primary--l: 39%;
}
~~~

### 5. Enjoy using Inkline

Awesome work! You can now start using all the features that Inkline has to offer.

## Troubleshooting

**No "exports" defined in ../my-nuxt-app/node_modules/@nuxt/kit/package.json**

Create a patch file under `scripts/patch.js` and run it.

~~~js
// scripts/patch.js
const fs = require('fs');
const path = require('path');

const target = path.resolve(__dirname, '../node_modules/@nuxt/kit/package.json');
const contents = fs.readFileSync(target);
const replaced = contents.replace(
    '"import": "./lib/index.mjs"', 
    '"import": "./lib/index.mjs", "require": "./lib/index.mjs"'
);

fs.writeFileSync(target)
~~~

~~~bash
node patch.js
~~~

Optionally, add it to your **package.json** as a `postinstall` script.
