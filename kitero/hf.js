// Konstuktoros functionos megoldas (Evoeszkozos pelda)

function Cutlery(agakSzama) {   // Evoeszkoz ososztaly
    this.agakSzama = agakSzama;
    this.usedNum = 0;   // szamolja hanyszor hasznaltak az adott evoeszkozt
}

Cutlery.prototype.useCutlery = function(){
    console.log("Evoeszkoz hasznalata...");
    this.usedNum++;
}

function Villa(agakSzama){
    Cutlery.call(this, agakSzama); // Keszitunk egy Villa peldanyt az Evoeszkoz osztalyba
}

Object.setPrototypeOf(Villa.prototype, Cutlery.prototype);  // prototype lancolas az ososztalyhoz

function Kes(handleType) {
    Cutlery.call(this, 0);          // Keszitunk egy Kes peldanyt az Evoeszkoz osztalyba, 
    this.handleType = handleType;   // de mivel a kesnek nincsenek agai igy kap helyette egy handleType tulajdonsagot
}

Object.setPrototypeOf(Kes.prototype, Cutlery.prototype);

function Glass(material) {
    this.material = material;   // A poharnak egy uj class jar, mert nem egy evoeszkoz
}

const knife1 = new Kes("fem");
const knife2 = new Kes("fa");
const fork1 = new Villa(4);
const glass1 = new Glass("uveg");

console.log(knife1);
console.log(knife2);
console.log(fork1);
console.log(glass1);

knife1.useCutlery();
fork1.useCutlery();

console.log(knife1);
console.log(knife2);
console.log(fork1);
console.log(glass1);


//////////////////////////////////////////////////////


// Classos megoldas (Tanyeros pelda)

class Plate{                // Tanyer ososztaly, aminek van egy szin tulajdonsaga illetve egy hasznalat counterje
    constructor(szin) {
        this.szin = szin;
        this.usedNum = 0;
    }

    usePlate() {
        console.log("Tanyer hasznalata...");
        this.usedNum++;
    }
}

class SmallPlate extends Plate{  // Kistanyer osztaly, ami a Tanyer osztalytol szarmazik es megorokli a szin tulajdonsagot
    constructor(szin){
        super(szin);
        this.meret = "kis";
    }
}

class BigPlate extends Plate{   // Nagytanyer osztaly, ami a Tanyer osztalytol szarmazik es megorokli a szin tulajdonsagot
    constructor(szin){
        super(szin);
        this.meret = "nagy";
    }
}

class Pohar{                   // Kulonallo Pohar osztaly
    constructor(material){
        this.material = material;
    }
}


const plate1 = new SmallPlate("kek");
const plate2 = new SmallPlate("zold");
const plate3 = new BigPlate("sarga");
const pohar1 = new Pohar("muanyag");

console.log(plate1);
console.log(plate2);
console.log(plate3);
console.log(pohar1);

plate1.usePlate();
plate3.usePlate();

console.log(plate1);
console.log(plate2);
console.log(plate3);
console.log(pohar1);