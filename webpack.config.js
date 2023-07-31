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
    pricing: './src/component/pricing.component.ts',
    client: './src/component/client.component.ts',
    button: './src/component/button.component.ts'
  },
  output: {
    path: path.resolve(__dirname, 'dist'), // Pasta de saída para os arquivos do Webpack
    filename: '[name].bundle.js', // Nome do arquivo de saída
  },
  resolve: {
    extensions: ['.ts', '.js'], // Extensões que o Webpack deve resolver
  },
  devServer: {
    port: 8080,
    hot: false,
    liveReload: true,
    watchFiles: ['./src/**'],
    open: ['http://localhost:8080/index.html']
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
