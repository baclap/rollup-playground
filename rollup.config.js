import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';

export default {
    entry: 'src/main.js',
    format: 'cjs',
    plugins: [
        // enables us to resolve packages located in node_modules
        resolve(),
        // converts CommonJS modules into a format Rollup understands
        commonjs({ sourceMap: false }),
        // transform ES6 code
        babel({ exclude: 'node_modules/**' })
    ],
    dest: 'dist/bundle.js'
};
