//Node Runtime runs on the computer
//Common.js Backend JS API work with server side
//require()
//ES Modules import browser
//export export default

const { src, dest } = require('gulp');

const static = () => {
  return src('src/static/data/*.*').pipe(dest('dist/data'));
};

exports.default = static;
