console.log('Hello from array castle!')

let colors = [
    'pink',
    'orange',
    'yellow',
    'pink',
    'blue',
    'indigo',
    'pink'
];

/*harcode, moji kod:
colors[0] = 'black';
colors[3] = 'black';
colors[6] = 'black';
console.log(colors); */

//-> pravilnoe reshenie/kod:
const colors1 = [...colors];
const colors2 = [...colors];

colors1.forEach((color, index) => {
    if (color == 'pink') {
        colors1[index] = 'black';
    }
});

console.log(colors1);


let colors21 = [
    'pink',
    'orange',
    'yellow',
    'pink',
    'blue',
    'indigo',
    'pink'
];


colors21[0] = 'skyblue';
colors21[3] = 'skyblue';
colors21[6] = 'skyblue';
console.log(colors2);

console.clear


const colors30 = ['pink',
'orange',
'yellow',
'pink',
'blue',
'indigo',
'pink'];

//array.splice(startIndex, deleteCount, item1, item2, ...)
//const copy = fairy.slice();
//copy.splice(copy.findIndex(entry => entry === 'Репка'), 1, 'Кот в сапогах');
colors30.splice( 'pink' === 'black',);

console.log(colors30);


colors2.forEach((color, index) => {
    if (color == 'pink') {
        colors2[index] = 'skyblue';
    }
});

console.log(colors2);

const colors3 = colors.map(color => color == 'pink' ? 'black' : color);
const colors4 = colors.map(color => color == 'pink' ? 'skyblue' : color);

console.log(colors3);
console.log(colors4);

const colors22 = [
    { name: 'pink' },
    { name: 'orange' },
    { name: 'yellow' },
    { name: 'pink' },
    { name: 'blue' },
    { name: 'indigo' },
    { name: 'pink' }
];

const colors33 = colors22.map(color => color.name == 'pink' ? {name: 'black'} : color);

console.log(colors33);

const colors44 = [
    {name: 'pink', age: 12},
    {name: 'orange', age: 13},
    {name: 'yellow', age: 14},
    {name: 'pink', age: 15, tractor: 'John Deere'},
    {name: 'blue', age: 16},
    {name: 'indigo', age: 17},
    {name: 'pink', age: 18}
];


const colors55 = colors44.map(color => color.name == 'pink' ? {...color, name: 'black'} : {...color});


colors44[0].age = 100;
colors44[1].age = 100;



console.log(colors44);
console.log(colors55);

const colors66 = colors44.map(color => ({...color, name: 'black'})  );

console.log(colors66);

const cats = [
    {name: 'Tomas', age: 12},
    {name: 'Pukis', age: 13},
    {name: 'Juodis', age: 14},
    {name: 'Margis', age: 15, tractor: 'John Deere'},
    {name: 'Ryzas', age: 16},
    {name: 'Pukis', age: 17},
    {name: 'Pukis', age: 18}
];

const noPukis = cats.filter(cat => cat.name != 'Pukis');

console.log(noPukis);

const cats2 = [
    {name: 'Tomas', age: 12},
    {name: 'Juodis', age: 13},
    {name: 'Juodis', age: 14},
    {name: 'Margis', age: 15, tractor: 'John Deere'},
    {name: 'Ryzas', age: 16},
    {name: 'Pukis', age: 17},
    {name: 'Juodis', age: 18}
];

const noJuodisAgePlusOne = cats2
    .filter(cat => cat.name != 'Juodis')
    .map(cat => ({...cat, age: cat.age + 1}));

console.log(noJuodisAgePlusOne);

let counter = 0;
const what = 3;
// const j = cats2.find(cat => {
//     if (cat.name == 'Juodis') {
//         counter++;
//     }
//     return counter == what;
// });

// one liner
const j = cats2.find(cat => cat.name == 'Juodis' && ++counter == what)?.age;

console.log(j);

let A;

console.log(A?.what.abc);