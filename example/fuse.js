const {
  FuseBox,
  SVGPlugin,
  CSSPlugin,
  BabelPlugin,
  WebIndexPlugin,
} = require('fuse-box')

let fuse = new FuseBox({
  debug: true,
  log: true,
  cache: false,
  homeDir: 'src',
  sourcemaps: true,
  output: 'dist2/$name.js',
  modulesFolder: 'modules',
  plugins: [
    SVGPlugin(),
    CSSPlugin(),
    BabelPlugin({limit2project: false}), // same true or false, captures it
    WebIndexPlugin(),
  ],
})

fuse.dev()
/* prettier-ignore*/
fuse.bundle('app')
    .instructions('> index.js')

fuse.run()
