const path = require('path')                            
const HTMLPlugin = require('html-webpack-plugin')       
const webpack = require("webpack")                      
const ExtractPlugin = require("extract-text-webpack-plugin")
const baseConfig = require("./webpack.config.base")
const merge = require("webpack-merge")
const vueClientPlugin = require('vue-server-renderer/client-plugin')

const isDev = process.env.NODE_ENV === "development"    

const devServer = {                                
    port: 8000,                                    
    host: '127.0.0.1',                              
    overlay: {
        errors: true,                              
    },
    headers: {'Access-Control-Allow-Origin':'*'},
    historyApiFallback: {
        index: '/public/index.html'
    },
    // open: true ,                                 
    hot: true                                       
}

let config

const defaultPlugin = [
    new webpack.DefinePlugin({                      
        'process.env': {                             
            NODE_ENV: isDev ? '"development"' : '"production"'
        }
    }),
    new HTMLPlugin({
        template:path.join(__dirname, 'template.html')
    }),
     new vueClientPlugin()                            
]

if (isDev) {
    config = merge(baseConfig, {
        module:{
            rules:[
                {
                    test: /\.styl/,
                    use: [
                        'style-loader',                     
                        'css-loader',                       
                        {
                            loader: 'postcss-loader',
                            options: {
                                sourceMap: true,           
                            }                              
                        },
                        'stylus-loader'                     
                    ]
                } 
            ]
        },
        devtool:'#cheap-module-eval-source-map',
        devServer,
        plugins: defaultPlugin.concat([
            new webpack.HotModuleReplacementPlugin(),
            new webpack.NoEmitOnErrorsPlugin()
        ])
    })
} else {
     config = merge(baseConfig,{
         entry: {
             app: path.join(__dirname, '../client/client-entry.js'),
             vendor: ['vue']
         },
         output:{
             filename: '[name].[chunkhash:8].js',
             publicPath:'/public/' 
         },
         module:{
             rules:[
                 {
                     test: /\.styl/,
                     use: ExtractPlugin.extract({
                         fallback: 'vue-style-loader',
                         use: [
                             'css-loader',                       
                             {
                                 loader: 'postcss-loader',
                                 options: {
                                     sourceMap: true,            
                                 }                               
                             },
                             'stylus-loader'
                         ]
                     })
                 },
             ] 
         },
         plugins: defaultPlugin.concat([
             new ExtractPlugin('styles.[contentHash:8].css'),
             new webpack.optimize.CommonsChunkPlugin({
                 name: 'vendor',
                 minChunks: function (module, count) {
                     console.log(module.resource, `引用次数${count}`);
                     //"有正在处理文件" + "这个文件是 .js 后缀" + "这个文件是在 node_modules 中"
                     return (
                         module.resource &&
                         /\.js$/.test(module.resource) &&
                         module.resource.indexOf(path.join(__dirname, './node_modules')) === 0
                     )
                 }
             }),
             new webpack.optimize.CommonsChunkPlugin({
                 name: 'runtime',
                 chunks:['vendor']
             }),
             new webpack.NamedChunksPlugin()
         ])
     })
}

module.exports = config                                 