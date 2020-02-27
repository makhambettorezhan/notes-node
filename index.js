console.log('Starting the index.js');

const fs = require('fs');
const os = require('os');

const yargs = require('yargs');
const _ = require('lodash');
const notes = require('./notes');

const argv = yargs.argv;
var command = argv._[0];
//var command = process.argv[2];

console.log('Process', process.argv);
console.log('Yargs', argv);

if(command === 'add') {
    notes.addNote(argv.title, argv.body);
} else if(command === 'list') {
    notes.getAll();
} else if(command === 'read') {
    notes.getNote(argv.title);
} else if(command === 'remove') {
    notes.removeNote(argv.title);
} else {
    console.log('Command not found!');
}
