import { ViewElement } from "./viewelement.js";

class FormController extends ViewElement{

    constructor(id) {
        super(id);
        this.div.innerText = 'form';

    }
}

export { FormController }