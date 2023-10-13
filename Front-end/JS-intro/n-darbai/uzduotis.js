const svorisMark = 78; //kg
const svorisJohn = 95; //kg

const ugisMark = 1.69; //m
const ugisJohn = 1.88; //m

// KMI = masė / ūgis ** 2 = masė / (ūgis * ūgis) (masė kg ir aukštis metrais)

const kmiMark = svorisMark / (ugisMark ** 2);
const kmiJohn = svorisJohn / (ugisJohn ** 2);

console.log ('kmiMark', + kmiMark);
console.log('kmiJohn', + kmiJohn);

const kmiPalyginimas = kmiMark > kmiJohn;
console.log('kmiPalyginimas/kmi Marko (27.31) didesnis nei kmi Johno (26,88)', kmiPalyginimas); 

const kmiPalyginimas2 = kmiMark < kmiJohn;
console.log('kmiPalyginimas/kmi Marko (27.31) mazesnis nei kmi Johno (26,88)', kmiPalyginimas2); 



// 2. Uzduotis su fukcija

const markoSvoris = 78; //kg
const johnoSvoris = 95; //kg

const markoUgis = 1.69; //m
const johnoUgis = 1.88; //m

const kmi = function kmi(ugis,svoris) {
return +(svoris/ (ugis * ugis)).toFixed(1);
}
const markoKMI1 = kmi(markoSvoris,markoUgis);
const  johnoKMI1 = kmi(johnoSvoris,johnoUgis);
console.log(typeof kmi(markoSvoris,markoUgis));
console.log(typeof kmi(johnoSvoris,johnoUgis));

if(markoKMI1 > johnoKMI1) {
console.log(`"markHigherKMI' - true`);
}

if(markoKMI1 < johnoKMI1) {
console.log (`"markHigherKMI" - false`);
}




const arr = [1,1,1,1,1,1 ]
const arr2 = [2,2,2,2,2]



function avr(params) {
    let sum = 0
    let avr = 0
    for (let i = 0; i < params.length; i++) {
       sum += params[i];
        avr = sum/params.length
    }
 
    return avr
}
const dolphins = avr(arr)
const koalas = avr(arr2)

console.log(dolphins, koalas);

