var spawn = require('child_process').spawn;
var dirname = require('path').dirname;
var mkdirp = require('mkdirp');

module.exports = function (filename) {
  mkdirp(dirname(filename));
  spawn('vim', [filename], {stdio: 'inherit'});
};
