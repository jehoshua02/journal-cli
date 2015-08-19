#!/usr/bin/env node
 
var program = require('commander');
 
program
  .version('0.0.1')
  .command("new <topic>", "Create new journal entry.")
  .parse(process.argv);

