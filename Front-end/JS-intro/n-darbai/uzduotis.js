//const input = '2434991360391481833090202335417787973714229345881008566666165719305423980840542492304439106955894112166467281414073065392427908254404888833190307541410665627'; 




const nums = [2434991360391481833090202335417787973714229345881008566666165719305423980840542492304439106955894112166467281414073065392427908254404888833190307541410665627];

const res = nums.reduce((acc, i) => {
  if (acc.hasOwnProperty(i)) {
    acc[i] += 1;
  } else {
    acc[i] = 1;
  }
  return acc;
},{})

console.clear();
console.log('------');
const input = '2434991360391481833090202335417787973714229345881008566666165719305423980840542492304439106955894112166467281414073065392427908254404888833190307541410665627';

let skaitmenuPasikartojimai = {};

for (let i = 0; i < input.length; i++) {
    const skaitmenuPora = input.substring(i - 1, i + 1)
    // console.log(skaitmenuPora);
    if (skaitmenuPasikartojimai[skaitmenuPora]) {
        skaitmenuPasikartojimai[skaitmenuPora]++;
    } else {
        skaitmenuPasikartojimai[skaitmenuPora] = 1;
    }
}
// console.log(skaitmenuPasikartojimai)

let daugiausiaiPasikartojimu = 0;
let daugiausiaiPasikartojanciosPoros = [];

for (const pora in skaitmenuPasikartojimai) {
    if (skaitmenuPasikartojimai[pora] > daugiausiaiPasikartojimu) {
        daugiausiaiPasikartojimu = skaitmenuPasikartojimai[pora];
        daugiausiaiPasikartojanciosPoros = [pora];
    } else if (skaitmenuPasikartojimai[pora] === daugiausiaiPasikartojimu) {
        daugiausiaiPasikartojanciosPoros.push(pora);
    }
}

console.log(`sie skaiciai: ${daugiausiaiPasikartojanciosPoros} kartojasi: ${daugiausiaiPasikartojimu} kartus`);