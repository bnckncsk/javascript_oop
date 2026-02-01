import { muvelet, muveletLetrehoz } from "./functions.js";

class Gomb{
    constructor(input1, input2, muveletString, eredmenyDiv) {
        this.input1 = input1;
        this.input2 = input2;
        this.muveletString = muveletString;
        this.eredmenyDiv = eredmenyDiv;

        this.gomb = document.createElement('button');
        this.gomb.innerText = this.muveletString;
        document.body.appendChild(this.gomb);

        this.gomb.addEventListener('click', this.calculate(input1, input2, eredmenyDiv)); // meghivjuk a kiszervezett eventlistenert, ami kiszamolja nekunk amit kell
    }

    // kiszervezett event listener fuggveny
    calculate(input1, input2, eredmenyDiv) {
        return () => {
            const in1Val = Number(this.input1.value);
            const in2Val = Number(this.input2.value);

            const callback = muveletLetrehoz(this.muveletString);
            const {result} = muvelet(in1Val, in2Val, callback);

            const p = document.createElement('p');
            p.innerText = result;
            this.eredmenyDiv.appendChild(p);
        }
    }
}

export {Gomb}