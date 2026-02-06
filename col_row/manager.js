/**
 * @import { FormFieldType, HeaderArrayType, ColspanType, RowspanType } from "./functions.js"
 * @callback addCallback
 * @param {ColspanType | RowspanType} element
 * @returns {void}
 */

class Manager{
    /**
     * @type {ColspanType[] | RowspanType[]}
     */
    #dataArray;

    /**
     * @type {addCallback}
     */
    #addCallback;

    constructor() {
        this.#dataArray = [];
    }

    /**
     * @param {ColspanType | RowspanType} param 
     */
    addElement(param) {
        this.#dataArray.push(param);
        if (this.#addCallback) {
            this.#addCallback(param);
        }
    }

    set addCallback(value){
        this.#addCallback = value;
    }
}

export { Manager }