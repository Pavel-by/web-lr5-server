const path = require('path');

module.exports = {
    entry: path.join(__dirname, 'src/www.js'),
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, "/lib/"),
    },
    devtool: "eval-source-map",
    target: 'node',
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude:  /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        "presets": [
                            ["@babel/preset-env", {
                                "useBuiltIns": "usage",
                                "corejs": 3
                            }],
                            "@babel/preset-flow"
                        ],
                        "plugins": [
                            "@babel/plugin-proposal-class-properties"
                        ]
                    }
                }
            }
        ]
    }
};