import packages from './package.json'

export default {
  extraBabelPlugins: [['import', {
    libraryName: 'react'
  }]],
  env: {
    development: {
      plugins: [['react-transform', {
        transforms: [{
          transform: 'react-transform-hmr',
          imports: ['react'],
          locals: ['module']
        }, {
          transform: 'react-transform-catch-errors',
          imports: ['react', 'redbox-react']
        }]
      }]]
    }
  },
  externals: [{
    'react': 'React',
    'react-dom': 'ReactDOM'
  }],
  autoprefixer: {
    browsers: [
      'last 3 versions', 'not ie < 8', '> 5%', 'iOS >= 8', 'Android >= 4'
    ]
  },
  entry: `${packages.main}`,
  outputPath: `../dist/${packages.version}`
}
