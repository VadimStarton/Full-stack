const kmiText = document.getElementById('kmi');
const descText = document.getElementById('desc');
const form = document.querySelector('form');


function onformbtn(e) {
    e.preventDefault();

    const Ūgis = parseFloat(form.input1.value);
    const Svoris = parseFloat(form.input2.value);

    if (isNaN(Svoris) || isNaN(Ūgis) || Svoris <= 0 || Ūgis <= 0) {
    alert ("Prašome įvesti skaičius"); return;
    }

    const ŪgisMetrais = Ūgis/100;
    const kmi = Svoris / Math.pow(ŪgisMetrais, 2);
    const  desc = interpretkmi(kmi);

    kmiText.textContent = output.toFixed(2);
    descText.innerHTML = 'Jus <strong>${desc}</strong>';
};

function outputDesc(kmi) {
    if (kmi < 18.5) {
        return 'Masės trūkumas';        
    } else if (kmi < 25){
        return 'Normalus';        
    } else if (kmi < 30){
        return 'Viršsvoris';
    } else {
        return 'Nutukimas';
    }
};
