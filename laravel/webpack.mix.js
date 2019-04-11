const mix = require('laravel-mix');
const path = require('path');
const fs = require('fs');

require('laravel-mix-eslint');
require('laravel-mix-stylelint');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

const sassOptions = (mix.inProduction()) ? {
    outputStyle: 'compressed'
} : {
    outputStyle: 'nested'
};

// ページ毎のjs,scssのエントリポイントをここに追加する
const entryPoints = [
    'index',
    'home',
    'mypage/index',
    'common'
];

for (let ep of entryPoints) {
    // ↓はLaravel 5.5用のpathなのでそれ以降のバージョンの場合は適宜修正してください。
    let jsPath = `resources/assets/js/${ep}.js`,
        sassPath = `resources/assets/sass/${ep}.scss`;

    try {
        fs.accessSync(path.resolve(jsPath));
        mix.js(jsPath, 'public/js');
    } catch (err) {}
    try {
        fs.accessSync(path.resolve(sassPath));
        mix.sass(sassPath, 'public/css', sassOptions);
    } catch (err) {}
}

mix.webpackConfig({
        output: {
            publicPath: '/hogehoge/'
        },
        resolve: {
            modules: [
                path.resolve('./resources/assets/'),
                'node_modules'
            ]
        }
    })
    .eslint()
    .stylelint({
        configFile: './.stylelintrc.js',
        files: ['**/*.scss']
    })
    .extract(['jquery', 'bootstrap', 'vue']);

if (mix.inProduction()) {
    mix.version();
}
