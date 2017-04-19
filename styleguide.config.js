const { createConfig } = require('@webpack-blocks/webpack2');
const babel = require('@webpack-blocks/babel6');

function scssTransform() {
    return () => {
        return ({
            module: {
                loaders: [
                    {
                        test: /\.scss/,
                        loaders: [
                            'style-loader',
                            {
                                loader: 'css-loader',
                                options: {
                                    modules: true,
                                    importLoaders: 1,
                                    localIdentName: '[path][name]__[local]__[hash:base64:5]'
                                }
                            },
                            'sass-loader'
                        ]
                    }
                ]
            }
        });
    }
}

module.exports = {
    components: 'src/**/*.js',
    webpackConfig: createConfig([
        babel({
            presets: ["react", "es2015"]
        }),
        scssTransform()
	])
};
