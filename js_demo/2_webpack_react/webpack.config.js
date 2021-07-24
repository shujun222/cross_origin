const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',

    module: {
        rules: [
            { 
                test: /\.(js|jsx)$/, 
                exclude: /node_modules/, 
                loader: 'babel-loader' 
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        })
    ],

    devServer: {
        host: 'localhost',
        open: true,

        // 服务器代理，解决开发环境下的跨域问题
        proxy: {
            // 1. 先去掉app1的域名，让/app1/service开头的服务直接发给webpack-dev-server
            // 2. 再由这里转给targe
            // '/api/service': {
            //     target: 'http://localhost:3006',
            //     changeOrigin: true,
            // },
        }
    }

}