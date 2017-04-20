import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import postcss from 'rollup-plugin-postcss';
import postcssModules from 'postcss-modules';
import autoprefixer from 'autoprefixer';
import sass from 'node-sass';

const preprocessor = (content, id) => new Promise((resolve, reject) => {
    const result = sass.renderSync({ file: id });
    resolve({ code: result.css.toString() });
});

const cssExportMap = {};

export default {
    entry: 'src/main.js',
    format: 'cjs',
    external: ['react'],
    plugins: [
        // enables us to resolve packages located in node_modules
        resolve(),
        // converts CommonJS modules into a format Rollup understands
        commonjs({ sourceMap: false }),
        // compile CSS Modules
        postcss({
            preprocessor,
            plugins: [
                autoprefixer({ browsers: 'last 2 versions' }),
                postcssModules({
                    getJSON(id, exportTokens) {
                        cssExportMap[id] = exportTokens;
                    }
                })
            ],
            getExport(id) {
                return cssExportMap[id];
            },
            extensions: ['.scss'],
            extract: true
        }),
        // transform ES6 code
        babel({
            exclude: 'node_modules/**',
            presets: [
                'react',
                ['es2015', { modules: false }]
            ],
            plugins: ['external-helpers']
        })
    ],
    dest: 'dist/bundle.js'
};
