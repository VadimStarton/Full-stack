// ATVAIZDAVIMO LAUKAI
const kmiText = document.getElementById('kmi');
const descText = document.getElementById('desc');
// MYGTUKAI
const calc = document.getElementById("calc");
const reset = document.getElementById("reset");
// INPUT VERTES
const ugis = document.getElementById("Ūgis");
const svoris = document.getElementById("Svoris");

let h = null;
let w = null;

function outputDesc(h, w) {
  let kmi = (w * 10000) / (h * h);
  kmiText.innerText = kmi.toFixed(2);
  if (kmi < 18.5) {
    descText.innerText = "Masės trūkumas";
  } else if (kmi < 25) {
    descText.innerText = "Normalus";
  } else if (kmi < 30) {
    descText.innerText = "Viršsvoris";
  } else {
    descText.innerText = "Nutukimas";
  }
}

calc.addEventListener("click", function onClick() {
  let sv = +svoris.value;
  let ug = +ugis.value;
  if (ug > 0 && ug < 300) h = ug;
  else {
    ugis.value = 0;
    alert("Prasau iveskite normalu ugi.");
  }
  if (sv > 0) w = sv;
  else {
    svoris.value = 0;
    alert("Prasau iveskite normalu svori.");
  }

  if (h != null && w != null) {
    outputDesc(h, w);
  }
});

reset.addEventListener("click", function onClick() {
  ugis.value = "0";
  svoris.value = "0";
  kmiText.innerText = "";
  descText.innerText = "";
  h = null;
  w = null;
});