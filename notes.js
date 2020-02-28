console.log('Starting the notes.js');

const add = (a, b) => {
    return a + b;
}

const fetchNotes = () => {
    try {
        var noteString = fs.readFileSync('notes-data.json');
        return JSON.parse(noteString);
    } catch(e) {
        // do nothing
        return [];
    }
};

const saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

const fs = require('fs');
const _ = require('lodash');
const addNote = (title, body) => {
    var notes = fetchNotes();
    var note = {
        title,
        body
    };
    
    // uniqness of title is tested
    var duplicateNotes = notes.filter((note) => note.title === title );
    if(duplicateNotes.length === 0) {
        notes.push(note);
        saveNotes(notes);
        return note;
    }
   
};

const getAll = () => {
    console.log('Getting all notes');
}

const getNote = (title) => {
    console.log('Getting note', title);
}

const removeNote = (title) => {
    let notes = fetchNotes();
    //let filteredNotes = notes.filter(note => note.title !== title);
    notes.forEach(note => {
        if(note.title === title) {
            _.remove(notes, note);
        }
    });
    saveNotes(notes);
}


module.exports.age = 21;

module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote,
    add
}