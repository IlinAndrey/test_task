const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    plugins: [new HtmlWebpackPlugin()],
    module: {
        rules: [
            {
              test: /\.s[ac]ss$/i,
              use: [
                "style-loader",
                "css-loader",
                "sass-loader",
              ],
            },
            {
                test: /\.svg$/,
                loader: 'file-loader',
                options: {
                  name: '[name].[ext]',
                  outputPath: 'images/',
                  publicPath: 'images/'
                }
              }
          ],
    },
    plugins: [
        new HtmlWebpackPlugin({
          template: './src/index.html',
        }),
      ],
    
      devServer: {
        static: {
          directory: path.join(__dirname, 'dist'), 
        },
        open: true,
        port: 3000, 
      },
    
      mode: 'development', 
}