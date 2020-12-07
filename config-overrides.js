const BrotliPlugin = require('brotli-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');
const { override, addWebpackPlugin, addBundleVisualizer } = require('customize-cra');

module.exports = override(
  addWebpackPlugin(
    new ImageMinimizerPlugin({
      minimizerOptions: {
        plugins: [
          ['gifsicle', { interlaced: true, optimizationLevel: 3 }],
          ['jpegtran', { progressive: true, arithmetic: false }],
          ['optipng', { optimizationLevel: 7, interlaced: true }],
          ['svgo', { plugins: [{ removeTitle: true }] }],
        ],
      },
    }),
  ),
  addWebpackPlugin(new BrotliPlugin()),
  addWebpackPlugin(new CompressionPlugin()),
  addBundleVisualizer({
    analyzerMode: 'static',
    reportFilename: 'build-report.html',
    reportTitle: 'Build Bundle Report',
    generateStatsFile: true,
    statsFilename: 'buildReport.json',
    openAnalyzer: false,
  }),
);
