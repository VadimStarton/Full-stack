/*
String

Iniciavimas kabutemis; "", '', ``
*/

console.clear ();

const txt1 = "tekstas 1";
console.log (txt1);

const txt2 = "tekstas 2";
console.log (txt2);

//Vienguba kabute (')
const kabute1 = 'Vienguba kabute (') .';
console.log (kabute1);

//Dviguba kabute (")
const kabute2 = 'Dviguba kabute (").';
console.log (kabute2);

//Vienguba kabute (')  ir dviguba (") kabutes.
const kabute121 = 'Vienguba (') ir Dviguba (").';
console.log (kabute121);

/Vienguba kabute (')  ir dviguba (\") kabutes + slash.
const kabute122 = 'Vienguba (') ir Dviguba (\").';
console.log (kabute122);

const kabute123 = 'Vienguba (') ir Dviguba (\").';
console.log (kabute123);


const back = '\\\\';
console.log (back);


// \n = new line (nuseleidzia zemyn)
// \r = return (grizta i eilutes pradzia)

const formatuotas tekstas = "Labas\nrytas, \n\rLietuva!";
console.log (formatuotas tekstas);

/* \n
Labas
    rytas
            Lietuva
*/

/* \r 
Labas\rrytas\rLietuva

*/

const lrl = "Labas\npm
rytas,\
Lietuva!"
console.log(lrl);

const backtick = `Labas 
rytas,
Lietuva`;
console.log(backtick)

console.clear();

const vardas ='Chuck'
console.log(vardas, '=', vardas.lenght, 'simboliai' );

const pavarde = 'Norris'

const fullname = vardas + pavarde;
console.log(fullname)


