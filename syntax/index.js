import { muvelet, muveletLetrehoz } from "./functions.js";
import { Gomb } from "./gomb.js";

const input1 = document.createElement('input');
document.body.appendChild(input1);

const input2 = document.createElement('input');
document.body.appendChild(input2);

const div = document.createElement('div');
document.body.appendChild(div);


// eddigi function syntax
//function muvelet(a, b) {
//    return a + b;
//}

// alternativ arrowfunction syntax
// nincs this, bind, ilyesmi
//const muvelet = (a, b) => {return a + b};

// teszt
const fv = muveletLetrehoz('+');
console.log(fv(1, 2));      // 3

// higher order function (Hof): olyan fuggveny, aminek a parametere vagy visszateresi erteke egy fuggveny


// uj muveletgombok
new Gomb(input1, input2, '+', div);
new Gomb(input1, input2, '-', div);
new Gomb(input1, input2, '*', div);