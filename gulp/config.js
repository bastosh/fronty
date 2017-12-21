module.exports = {

  // Javascript
  JS_FILES: [
  'js/*.js',
  ],

  // Example – Install jQuery via npm if needed
  JS_DEPS: [
    //'node_modules/jquery/dist/jquery.js',
  ],

  // CSS
  CSS_COMPATIBILITY: [
    'last 2 versions',
    'ie >= 9',
    'Android >= 2.3',
    'ios >= 7',
  ],

  // Example – Install Bootstrap via npm if needed
  CSS_DEPS: [
    //'node_modules/bootstrap/dist/css/bootstrap-reboot.css',
  ],

  DIST_FILES: [
    'src/favicon.ico',
    'src/icon.png',
    'src/tile.png',
    'src/tile-wide.png',
    'src/404.html',
    'src/browserconfig.xml',
    'src/humans.txt',
    'src/robots.txt',
  ],

  IMG: [
    'src/img/*.*',
  ],

};
