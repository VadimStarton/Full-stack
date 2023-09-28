/* 
FOR - ciklai

*/

console.clear();

console.log ('START');

// intervalas; [0, 5]
for (let i = 0; i < 5; i++) {
    console.log(i, 'pirmas');
}

console.log('PAUSE');

//intervalas [-2, 7]
for (let i = -2; i < 7; i++) {
    console.log(i, 'antras');
}

console.log('FINISH');

console.clear();

for (let f = 0; f < 7; f++) {
    const sentence = `The number is: ${f+1},`;
    console.log(sentence);
}

console.clear();

//skaiciai intervale nuo 3 iki 8 imtinai yra: 3 4 5 6 7 8 


const start = 0;
const finish = 8;

let numberSeguence = ''; 

for(let i = start; i <= finish; i++) {
        numberSeguence += ' ' + i;
}

const numberLine = `Skaiciai intervale nuo ${start} iki ${finish} imtinai yra:${numberSeguence}.`;
console.log(numberLine);

console.clear

// const numberSeguence2 = '3, 4, 5, 6, 7, 8';

let numberSeguence2 = start; 

for(let i = start + 1; i <= finish; i++) {
        numberSeguence2 += ', ' + i;
}

const numberLine1 = `Skaiciai intervale nuo ${start} iki ${finish} imtinai yra:${numberSeguence2}.`;
console.log(numberLine);

console.clear();

let i = 0;

for ( let i = 0; i <= 10; ) {
       console.log(i);

i += 2;
}
console.log(i, 'uz ciklo');


