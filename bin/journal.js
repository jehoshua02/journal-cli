#!/usr/bin/env node

require('commander')
  .version('0.0.1')
  .command("open", "Create and/or open today's journal entry.", {isDefault: true})
  .parse(process.argv);
