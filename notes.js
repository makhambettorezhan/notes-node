const fs = require('fs');
const _ = require('lodash');

const fetchNotes = () => {
    try {
        var noteString = fs.readFileSync('notes-data.json');
        return JSON.parse(noteString);
    } catch(e) {
        return [];
    }
};

const saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};


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
    return fetchNotes();
}

const getNote = (title) => {
    let notes = fetchNotes();
    let filteredNote = notes.filter(note => note.title === title);
    return filteredNote[0];
}

const removeNote = (title) => {
    let notes = fetchNotes();
    let filteredNotes = notes.filter(note => note.title !== title);
    /*
    let isRemoved = false;
    notes.forEach(note => {
        if(note.title === title) {
            _.remove(notes, note);          // my implementation
            isRemoved = true;
        }
    });
    */
    saveNotes(filteredNotes);
    return notes.length !== filteredNotes.length;
    //return isRemoved;
}

const logNote = (note) => {
    console.log('---');
    console.log('Title: ', note.title);
    console.log('Body: ', note.body);
}
module.exports.age = 21;

module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote,
    logNote
}