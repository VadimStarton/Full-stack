/*
Object - objektas, dalykas(daiktas)
*/

console.clear();

// vartuotojas: vardas, amzius, ar vedes

// key: value

// Varinatas 1:

const jonasData = ['Jonas', 99, 'true'];
const maryteData = ['Maryte', 88, 'false'];

const jonasName = jonasData[0];
const jonasAge = jonasData[1];
const jonasIsMarried = jonasData[2];

const maryteName = maryteData[0];
const maryteAge = maryteData[1];
const jmaryteIsMarried = maryteData[2];

// Varinatas 2: kompleksinis objektas

console.clear();

const jonas = {
    isMarried: true,
    name: 'Jonas',
    age: 99,
    };

console.log(jonas);
console.log(jonas,['name'], jonas.name);
console.log(jonas,['age'], jonas.age);
console.log(jonas,['isMarried'], jonas.isMarried);

jonas.age++;
console.log(jonas)