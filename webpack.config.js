const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const ImageminWebpWebpackPlugin= require("imagemin-webp-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = (env, argv) => {
  return {
    entry: {
      main: "./src/main.ts", // Arquivo de entrada do seu aplicativo TypeScript
      pricing: "./src/component/pricing.component.ts",
      client: "./src/component/client.component.ts",
      button: "./src/component/button.component.ts",
    },
    output: {
      path: path.resolve(__dirname, "dist"), // Pasta de saída para os arquivos do Webpack
      filename: "[name].bundle.[contenthash].js", // Nome do arquivo de saída
    },
    resolve: {
      extensions: [".ts", ".js"], // Extensões que o Webpack deve resolver
    },
    devServer: {
      port: 8080,
      hot: false,
      liveReload: true,
      watchFiles: ["./src/**"],
      open: ["http://localhost:8080/index.html"],
    },
    module: {
      rules: [
        {
          test: /\.ts$/, // Regra para arquivos .ts
          use: "ts-loader", // Use o ts-loader para transpilar TypeScript para JavaScript
          exclude: /node_modules/,
        },
        {
          test: /\.s[ac]ss$/i,
          use: [
            // Adicione os loaders nesta ordem
            // 'style-loader', // Transfere os estilos para o DOM
            MiniCssExtractPlugin.loader,
            'css-loader', // Converte CSS para módulos CommonJS
            'sass-loader' // Compila Sass para CSS
          ]
        },
      ],
    },
    optimization: {
      minimizer: [
        new CssMinimizerPlugin(), // Plugin para otimizar o CSS
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html', // Arquivo HTML de origem (opcional)
        templateParameters: {
          // Defina suas variáveis aqui
          title: 'Figma Land',
          url: argv.mode === 'production'?'https://figmaland-five.vercel.app/':'',
        },
      }),
      // Plugin para converter arquivos PNG e JPEG para WebP
      new ImageminWebpWebpackPlugin({
        config: [{
          test: /\.(jpe?g|png)/,
          options: {
            quality:  100
          }
        }],
        overrideExtension: true,
        detailedLogs: false,
        silent: false,
        strict: true
      }),
      
      new MiniCssExtractPlugin({
        filename: "styles.bundle.[contenthash].css", // Nome do arquivo CSS gerado
      }),
      new CopyWebpackPlugin({
        patterns: [
          {
            from: "./src/assets",
            to: "assets",
            globOptions: {
              ignore: ["**/fonts/**"], // Ignora a pasta "fonts"
            },
          },
          // Adicione mais arquivos ou diretórios conforme necessário
        ],
      }),
    ],
  }
};
