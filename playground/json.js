/*
var obj = {
    name: 'Makhambet'
}

var stringObj = JSON.stringify(obj);
console.log(typeof stringObj);
console.log(stringObj);

var personInfo = '{"name": "Makhambet", "age": 21}';
var person = JSON.parse(personInfo);

console.log(typeof person);
console.log(person);

*/

const fs = require('fs');

var originalNote = {
    title: 'Some title',
    body: 'Some body'
};

var originalNoteString = JSON.stringify(originalNote);

fs.writeFileSync('notes.json', originalNoteString);

var noteString = fs.readFileSync('notes.json');
var note = JSON.parse(noteString);

console.log(note);