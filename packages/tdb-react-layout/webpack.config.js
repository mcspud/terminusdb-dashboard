const path = require('path');

module.exports = {
    entry: './src/index.js',
    module: {
        rules: [
            {
                test: /\.js$/,
                use:{
                    loader: "babel-loader",
                },
            },
            {
              test: /\.css$/,
              exclude: /node_modules/,
              use: ['style-loader', 'css-loader'],
            }
            
        ]
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'tdb-react-layout.min.js',
        sourceMapFilename: 'tdb-react-layout.min.js.map',
        libraryTarget: 'umd',
        library: 'TDBReactLayout',
    },
    resolve: {
      extensions: ['.js', '.jsx', '.json', '.css'],
    },
    externals: {
    '@terminusdb-live/react-worker': {
        root: 'ReactWorker',
        commonjs2: '@terminusdb-live/react-worker',
        commonjs: '@terminusdb-live/react-worker',
        amd: 'ReactWorker',
    },
    'react': {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react',
    },
    'react-dom': {
      root: 'ReactDOM',
      commonjs2: 'react-dom',
      commonjs: 'react-dom',
      amd: 'react-dom'
    },
    'prop-types': {
      root: 'PropTypes',
      commonjs2: 'prop-types',
      commonjs: 'prop-types',
      amd: 'prop-types',
    }
  },
}
