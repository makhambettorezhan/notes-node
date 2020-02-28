console.log('Starting the index.js');

const fs = require('fs');
const os = require('os');

const yargs = require('yargs');
const _ = require('lodash');
const notes = require('./notes');

const argv = yargs.argv;
var command = argv._[0];
//var command = process.argv[2];

//console.log('Process', process.argv); // to compare how process.argv and yargs.argv would look like
console.log('Yargs', argv);

if(command === 'add') {
    let note = notes.addNote(argv.title, argv.body);
    if(note) {
        console.log('Note created');
        console.log('\tTitle: ', note.title);
        console.log('\tBody: ', note.body);
    } else {
        console.log('Note title taken');
    }
} else if(command === 'list') {
    notes.getAll();
} else if(command === 'read') {
    notes.getNote(argv.title);
} else if(command === 'remove') {
    notes.removeNote(argv.title);
} else {
    console.log('Command not found!');
}
