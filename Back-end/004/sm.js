console.log('Welcome to Sets and Maps!');

const array = [];

arraypush(10);
arraypush(10);
arraypush(10);

console.log(array);

const set = new Set();

set.add(10);
set.add(10);
set.add(10);
set.add(7);

set.delete(7);

console.log(set);

console.log(set.has(10), set.size);

//itterate over a set

for (const item of set) {
    console.log(item);
}
set.forEach(item => console.log(item));

//conver set to array;

const setArray = [...set];
console.log(setArray);
//sort array
setArray.sort((a,b) => a - b);
console.log(setArray);
set.clear();

setArray.forEach(item => set.add(item));

console.log(set);

randSet = new Set();

while (randSet.size < 10) {
    randSet.add(rand(0,11));
}
console.log(randSet);

const map = new Map();

map.set =('Petras', 40);
map.set =('Jonas', 39);
map.set =('Antanas', 41);
map.set =('Petras', 42);
map.set([1, 2, 3], 42);
map.set([1, 2, 3], 48);

//map.set(function() return );

set.add();

set.delete(7);


map.forEach((value,key) => console.log(key, value));

console.log(map);

const fancyMap =nem Map();

fancyMap.Map.set(function(a) {return a + 1}, 42);
fancyMap.Map.set(function(a) {return a / 17}, 22);
fancyMap.Map.set(function(a) {return a * 77}, 13);

for (const item of fancyMap) {
    console.log(item[0](item[1]));
}

//const mapArray2 = 
