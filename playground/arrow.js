var user = {
    name: 'Makhambet', 
    
    sayHi: () => {
        console.log(`Hi. I'm ${this.name}`);
    },

    sayHiAlt() {
        console.log(arguments);
        console.log(`Hi. I'm ${this.name}`);
    }
};

user.sayHi();
user.sayHiAlt(2, 3, 4);