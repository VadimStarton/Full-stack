const kmiText = document.getElementById('KMI');
const duomenysText = document.getElementById('KMI');
const form = document.querySelector('form');

form.addEventListener('submit', onformSubmit);

function onformSubmit(e) {
    e.preventDefault();
}

const Svoris = parseFloat(form.input2.value);
const Ūgis = parseFloat(form.input1.value);


if (isNaN(Svoris) || isNaN(Ūgis) || Svoris <= 0 || Ūgis <= 0) {
   return ("Prašome įvesti skaičius");
    }

    const ŪgisMetrais = Ūgis/100;
    const KMI = Svoris / Math.pow(ŪgisMetrais, 2);

    KMIText.textContent = KMI.toFixed(2);
