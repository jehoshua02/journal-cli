#!/usr/bin/env node

var program = require('commander');
var editor = require('./util/editor');

program
  .usage('<topic>')
  .parse(process.argv);

var topic = program.args[0];
if (topic === undefined) {
  program.missingArgument('topic');
}

var date = new Date().toISOString().replace(/T.*$/, '');
var filename = "./entries/" + date + "/" + topic + ".md";

editor(filename);
