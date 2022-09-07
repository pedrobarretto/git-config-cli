#! /usr/bin/env node
const yargs = require('yargs');
const conf = require('conf');

const store = new conf();

const usage = "\nUsage: create <profile_name> --email <email> --name <username>";
yargs
  .usage(usage)
  .option("l", {
    alias: "list",
    describe: "List all profiles created.",
    type: "boolean",
    demandOption: false
  })
  .help(true)
  .argv;

console.log(yargs.argv._);
const commands = yargs.argv._;

if (commands[0] == 'create') {
  console.log('Creating new profile: ', commands[1]);
  console.log('Email: ', yargs.argv.email);
  console.log('Username: ', yargs.argv.name);

  store.set(`${commands[1]}`, commands[1]);
  store.set(`${commands[1]}.email`, yargs.argv.email);
  store.set(`${commands[1]}.name`, yargs.argv.name);
}

