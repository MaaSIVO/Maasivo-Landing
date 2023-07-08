/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')

module.exports = {
  webpack: {
    alias: {
      '@components': path.resolve(__dirname, 'src/components'),
      '@styles': path.resolve(__dirname, 'src/styles'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@routes': path.resolve(__dirname, 'src/routes'),
      // 'MaaSIVO-UI': path.resolve(__dirname, 'node_modules/MaaSIVO-UI/dist/src'),
    },
  },
}
