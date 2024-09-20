
// define an object using {}
const user = {
    name: 'Matt',  // 'name' here is a property
    age: 33,
    phone: '777-777-7777',
    address: '555 coding dr',
    info: {
        location: 'Atlanta area',
        hobbies: ['pickleball', 'fishing']
    },
    printAge: function() {                      // printAge is a 'method'
        console.log(this.age);
    },
    haveBirthday: function() {                  // haveBirthday is also a 'method'
        this.age++;
        console.log('Happy Birthday');
    },
    addHobby: function(hobby) {
        // Need to reference an argument that is passed to addHobby (string of a hobby)
        this.info.hobbies.push(hobby);
        // Push the argument (hobby) to the info.hobbies array
    },
    printHobbies: function() {
        // console.log the hobbies array
        console.log(this.info.hobbies);
        // BONUS - loop over the hobbies array and console.log each hobby
        for (let index = 0; index < this.info.hobbies.length; index++) {
            console.log(this.info.hobbies[index]);
        }

        for (let hobby of this.info.hobbies) {
            console.log(hobby);
        }
    }
};

// user.haveBirthday();

// user.printAge();

user.addHobby('surfing');

user.printHobbies();

// for (let index = 0; index < user.info.hobbies.length; index++) {
//     console.log(user.info.hobbies[index]);
// }


// if (!user.height) {  // notice the use of the ! (not) in front of user.height - this conditional statement will only execute is the height has not been provided
//     console.log('You have not provided your height')
// }

// console.log(user.age);

// console.log(user.info.hobbies[1]);


function test(hobby, age) {
    console.log(hobby + age);
}

test('tennis', 10);