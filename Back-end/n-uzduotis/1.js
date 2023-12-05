class Kibiras1 {
    constructor() {
         this.akmenuKiekis = 0;
    }
    prideti1Akmeni() {
        this.akmenuKiekis++;
    }
    pridetiDaugAkmenu(kiekis) {
        this.akmenuKiekis += kiekis;
    }
    kiekPririnktaAkmenu() {
        console.log(this.akmenuKiekis);
    }
    deleteAkmenu() {
        console.log('dabartinis kiekis', this.akmenuKiekis);
        this.akmenuKiekis = 0;
        console.log('ispilamas', this.akmenuKiekis);
    }
}


x1 = new Kibiras1();
x2 = new Kibiras1();
 
x1.pridetiDaugAkmenu(1);
x2.pridetiDaugAkmenu(5);
x1.kiekPririnktaAkmenu();
x2.kiekPririnktaAkmenu();
x1.deleteAkmenu();
x2.deleteAkmenu();

console.clear();


class Troleibusas {
    constructor() {
    this.keleiviai = 0;
    this.vaziuoja = true; }
    ilipa (vnt) { 
    this.keleiviai += vnt; }
    islipa (vnt) { 
    this.keleiviai -= vnt; }
    stovi () {
        if (this.keleiviai == 0) {
            this.vaziuoja = false;
        }   else {this.vaziuoja = true;
        }  
    }
}

const troleibusas = new Troleibusas ();
troleibusas.ilipa(10);
console.log(troleibusas);
troleibusas.islipa(5);
troleibusas.islipa(5);
troleibusas.stovi();
console.log(troleibusas);


class Stikline {
    constructor(turis) {
         this.turis = turis;
         this.kiekis = 0;

    }
    ipilti(kiekis) {
        this.kiekis = Math.min(this.turis, this.kiekis + kiekis);
    }
    
    ispilti() {
        const kiekis = this.kiekis;
        this.kiekis = 0;
        return kiekis;
    }
        
    stiklinejeYra() {
            console.log(this.kiekis);
    }
}


const s100 = new Stikline (100);
const s150 = new Stikline (150);
const s200 = new Stikline (200);

//s100.ipilti(s200.ipilti(s150.ispilti(500).ispilti()).ipilti());

s100.ipilti (300).stiklinejeYra();

 
class Grybas {
    constructor() {
        this.svori = this.rand(5, 45);
        this.valgomas = this.rand(5, 45);
        this.sukirmijes = this.rand(0, 1);
    }

    rand(min, max) {
        min = math.ceil(min);
        max = math.ceil(max);
        return Math.floot(math.random() * (max - min + 1) + min);
    }

    prideti(grybas) {
        if (!grybas.sukirmijes && grybas.valgomas) {
                this.prikrauta += grybas.svoris;
        }
        return thisdydis >= this.prikrauta;
    }
    
}

const krepsys = new Krepsys;


class TV {
    static chanels = ['LRT', 'TV3', 'LNK', 'Polonia', 'Discovery', 'Animal Planet'];

    static listChanels () {
        console.log()
        this.brand = brand;
        this.owner = owner;
    }

    changeChanel(number) {}
}