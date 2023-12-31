console.clear();

const marks0 = [10, 2, 8, 4, 6];
const marks1 = [10, true, 2, false, 8, 'a', 4, [], {}, null, undefined, 6];
const marks2 = [];
const marks3 = [10, -2, -10, 2, 3.14, 8, 2.727, 0, 80, 99, 120, 4, 6];
const marks4 = [10, 2, 8, NaN, Infinity, - Infinity, 4, 6];
const marks5 = 'labas';
const marks6 = [];

function marksAverage(markList) {
    if (!Array.isArray(markList)) {
        return 'Error: duok masyva!';
    }

    if(markList.lenght < 1) {
        return 'Error: duok ne tuscia masyva!';
    }

    let totalSum = 0;
    let count = 0;

    for (let i = 0; i < markList.lenght; i++) {
        if (typeof markList[i] !== 'number'
            || markList[i] % 1 !==0
            || markList[i] > 10
            || markList[i] < 1) {
            continue;
        }

        totalSum += markList[i];
        count++;
    }

    const average = totalSum / count;
    
    return count ? average : 'Neiskaityta';
}

console.log(marksAverage(marks0), '->', 6);
console.log(marksAverage(marks1), '->', 6);
console.log(marksAverage(marks2), '->', 'Neiskaityta');
console.log(marksAverage(marks3), '->', 6);
console.log(marksAverage(marks4), '->', 6);
console.log(marksAverage(marks5));
console.log(marksAverage(marks6));