import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import postcss from 'rollup-plugin-postcss';
import postcssModules from 'postcss-modules';

const cssExportMap = {};

export default {
    entry: 'src/main.js',
    format: 'cjs',
    plugins: [
        // enables us to resolve packages located in node_modules
        resolve(),
        // converts CommonJS modules into a format Rollup understands
        commonjs({ sourceMap: false }),
        // compile CSS Modules
        postcss({
            plugins: [
                postcssModules({
                    getJSON(id, exportTokens) {
                        cssExportMap[id] = exportTokens;
                    }
                }),
            ],
            getExport(id) {
                return cssExportMap[id];
            },
            extract: true
        }),
        // transform ES6 code
        babel({ exclude: 'node_modules/**' })
    ],
    dest: 'dist/bundle.js'
};
