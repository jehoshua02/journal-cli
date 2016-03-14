#!/usr/bin/env node

var path = require('path');
var jsonfile = require('jsonfile');
var homedir = require('homedir');
var Journal = require('../src/journal');

var configPath = path.resolve(homedir(), 'journal.json');

try {
  var config = jsonfile.readFileSync(configPath);
} catch (err) {
  if (err.code !== 'ENOENT') {
    throw err;
  } else {
    console.log('no config found (' + configPath + ')');
    console.log('using defaults');
  }
}

config = config || {
  path: path.resolve(__dirname, '../entries'),
  editor: 'subl'
};

(new Journal(config)).open();
