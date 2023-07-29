const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  plugins: [
    // Outros plugins que você possa ter
    new CopyWebpackPlugin({
      patterns: [
        { from: './src/index.html', to: 'index.html' },
        { from: './src/css', to: 'css' },
        { from: './src/assets', to: 'assets' },
        // Adicione mais arquivos ou diretórios conforme necessário
      ],
    }),
  ],
  entry: {
    main: './src/main.ts', // Arquivo de entrada do seu aplicativo TypeScript
    pricing: './src/component/pricing.component.ts'
  },
  output: {
    path: path.resolve(__dirname, 'dist'), // Pasta de saída para os arquivos do Webpack
    filename: '[name].bundle.js', // Nome do arquivo de saída
  },
  resolve: {
    extensions: ['.ts', '.js'], // Extensões que o Webpack deve resolver
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'subdist'), // Define a pasta "subdist" como o diretório estático
    },
    compress: true,
    port: 3000, // Define a porta do servidor
  },
  module: {
    rules: [
      {
        test: /\.ts$/, // Regra para arquivos .ts
        use: 'ts-loader', // Use o ts-loader para transpilar TypeScript para JavaScript
        exclude: /node_modules/,
      },
    ],
  },
};
