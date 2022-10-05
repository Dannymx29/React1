const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    resolve:{
        extensions: ['.js', '.jsx'],
        alias: {
            '@assets': path.resolve(__dirname, 'src/assets/'),
            '@icons': path.resolve(__dirname, 'src/assets/icons/'),
            '@logos': path.resolve(__dirname, 'src/assets/logos/'),
            '@components': path.resolve(__dirname, 'src/components/'),
            '@containers': path.resolve(__dirname, 'src/containers/'),
            '@hooks': path.resolve(__dirname, 'src/hooks/'),
            '@pages': path.resolve(__dirname, 'src/pages/'),            
            '@routes': path.resolve(__dirname, 'src/routes/'),
            '@style': path.resolve(__dirname, 'src/style/'),            
        },
    },
    mode: 'development',
    module:{
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_module/,
                use:{
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.html$/,
                use:[
                    {   loader: 'html-loader'   }
                ]
            },
            {
                test: /\.(css|scss)$/,
                use:[
                    "style-loader",
                    "css-loader",
                    "sass-loader",
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                type: 'asset'
            },
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: 'index.html'
        }),
        new MiniCssExtractPlugin({
            filename:'[name].css'
        }),
    ],
    devServer: {
        static: {
            directory: path.join(__dirname, 'public'),
            },
          compress: true,
          port: 3005,
          open: true,
          historyApiFallback: true,
      }
}