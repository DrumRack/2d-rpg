const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
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