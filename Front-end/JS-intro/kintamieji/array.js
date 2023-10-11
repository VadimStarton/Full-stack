/* 
ARRAY - sarasas / masyvas/ kolekcija / listas / matrica / arejas
*/

console.clear();

const tuscias = [];
console.log(tuscias, tuscias.lenght);

//          index: 0 1 2 3 4 5 6
const pazymiai = [10, 2, 8, 4, 6, 9, 7, 5];
console.log(pazymiai, 'sudaro', pazymiai.length, 'skaiciai');

const studentai = ['Jonas', 'Maryte', 'Petras', 'Ona'];
console.log(studentai)

const pirmasPazymys = pazymiai [0];
console.log(pirmasPazymys);

const antrasPazymys = pazymiai [1];
console.log(antrasPazymys);

const treciasPazymys = pazymiai [2];
console.log(treciasPazymys);

const pazymioPozicija = pazymiai.length - 1;
const paskutinisPazymys = pazymiai [pazymioPozicija]
console.log(paskutinisPazymys);

// Masyvas pazymiu.
// Suskaiciuoji pazymiu vidurki ir isvesti kaip sakini:
// "Studento pazymiu vidurkis yra 7."

const marks = [10, 2, 8, 4, 6];
// variantas 1: const marksSum = marks[0] + marks[1] + marks[2] + marks [3] + marks[4] + marks[5];

//let marksSum = 0;
//marksSum = marksSum + marks[0]; // 0 + 10
//marksSum = marksSum + marks[1]; // 10 + 2
//marksSum = marksSum + marks[2]; // 12 + 8
//marksSum = marksSum + marks[3]; // 20 + 4
//marksSum = marksSum + marks[4]; // 24 + 6

let marksSum = 0;
marksSum += marks[0]; // 0 + 10
marksSum += marks[1]; // 10 + 2
marksSum += marks[2]; // 12 + 8
marksSum += marks[3]; // 20 + 4
marksSum += marks[4]; // 24 + 6

const marksAverage = marksSum / marks.length;
const studentMarks = `Studento pazymiu vidurkis yra ${marksAverage},`;
console.log (studentMarks);

// const a = 7;
// const b = 5;
// const c = 3;

// Masyvas vietovardziu.
// Suformuojat sakini:
// "Mano aplankytos vietos: Vieta1, Vieta2, Vieta3."

//const placesStr = `Vieta1, Vieta2, Vieta3`
//const placesStr = `${places[0]}, ${places[1]}, ${places[2]},`

const places = ['Vilnius', 'Kaunas', 'Klaipeda'];

let placesStr = '';
placesStr += placesStr + places[0];
placesStr += ', ';
placesStr += placesStr + places[1];
placesStr += ', ';
placesStr += placesStr + places[2];

const placesSentence = `Mano aplankytos vietos: $ {placesStr}`
console.log(placesSentence);


console.clear();
const colors = ['geltona','zalia', 'raudona'];

console.log(colors);
console.log(colors[1]);

colors[1] = 777;
console.log (colors);

colors[1] = 'žalia';
console.log (colors);


let name = 'Chuck';
console.log(name[0]);
console.log(name[1]);
console.log(name[2]);
console.log(name[3]);
console.log(name[4]);

name[0] = 'H';
console.log(name);

name = 'Hhuck';
console.log(name);


let a = 5;
let x = 7;

// x = x+ ++a // 13
// x x++ + a; // 12

// x = (x++) + a; // 12; x = 8
x = x+ (++a);  // 13; x = 8

console.log(x);



const miestai = " Mano aplankytos vietos yra: 1) Vilnius, 2) Marijampole, 3) Kaunas, 4) Siauliai, 5) Klaipeda.";
console.log(miestai)


const miestai1 = " Mano aplankytos vietos yra: 1) Vilnius, 2) Marijampole, 3) Kaunas, 4) Siauliai, 5) Klaipeda.";
console.log(miestai1, 'sudaro', miestai1.length, 'miestai');


const pazymiai1 = [10, 5, 3, 8, 7, 9, 7];
const pazymiu = 
console.log(pazymiai1, 'sudaro', pazymiai1.length, 'skaiciai');




const pirPazymys = pazymiai [10];
console.log(pirPazymys);

const antPazymys = pazymiai [5];
console.log(antPazymys);

const trePazymys = pazymiai [6];
console.log(trePazymys);

const ketPazymys = pazymiai [8];
console.log(ketPazymys);

const piaPazymys = pazymiai [7];
console.log(piaPazymys);

const sesPazymys = pazymiai [9];
console.log(sesPazymys);

const sepPazymys = pazymiai [7];
console.log(sepPazymys);

const pazymioPozic = pazymiai.length - 1;
const paskutPazymys = pazymiai [7]
console.log(paskutPazymys);

console.log(12)


