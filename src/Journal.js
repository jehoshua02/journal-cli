var dirname = require('path').dirname;
var spawn = require('child_process').spawn;
var moment = require('moment');
var touch = require('touch');
var mkdirp = require('mkdirp');

function Journal(config) {
  this.config = config;
}

Journal.prototype.open = function () {
  var filename = this.config.path + '/' + moment().format('YYYY/MM/DD') + '.md';
  console.log(filename);
  mkdirp.sync(dirname(filename));
  touch.sync(filename);
  var editor = this.config.editor;
  spawn(this.config.editor, [filename], {stdio: 'inherit'});
};

module.exports = Journal;
