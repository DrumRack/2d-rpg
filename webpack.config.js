const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
    devtool: 'inline-source-map',
    plugins: [
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: 'src/index.html'
                },
                {
                    from: 'resources',
                    to: 'images'
                }
            ]
        })
    ]
}