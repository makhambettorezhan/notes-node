console.log('Starting the app.js');

const fs = require('fs');
const os = require('os');

const _ = require('lodash');
const notes = require('./notes');

console.log(`Result ${notes.add(7, 2)}`);
console.log(_.isString(123 + ''));

var arr = _.uniq([1, 2, 1, 3, 3, 2, 1, 'Max', 'Alex', 'Max']);
console.log(arr);

var user = os.userInfo();

fs.appendFile('info.txt', `Hello ${user.username}. You are ${notes.age} y.o.`, (err) => {
    if(err) {
        console.log(err);
    }
});
