const BrotliPlugin = require('brotli-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const { override, addWebpackPlugin, addBundleVisualizer } = require('customize-cra');

module.exports = override(
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
