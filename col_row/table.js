/**
 * @import { FormFieldType, HeaderArrayType, ColspanType, RowspanType } from "./functions.js"
 * 
 * @callback TableCallback
 * @param {HTMLTableSectionElement} tbody
 * @param {ColspanType | RowspanType} elem
 * @returns {void}
 */

import { Manager } from "./manager.js";

class Table{
    /**
     * @type {HTMLTableSectionElement}
     */
    #tbody;
    /**
     * @type {Manager}
     */
    #manager;

    /**
     * @param {HeaderType[]} headerArray 
     * @param {Manager} manager 
     */
    constructor(headerArray, manager) {
        this.#manager = manager;


        const table = document.createElement('table');
        document.body.appendChild(table);

        const thead = document.createElement('thead');
        table.appendChild(thead);

        const tbody = document.createElement('tbody');
        table.appendChild(tbody);
        this.#tbody = tbody;

        const tr = document.createElement('tr');
        thead.appendChild(tr);

        for (const cell of headerArray) {
            const th = document.createElement('th');
            tr.appendChild(th);
            th.innerText = cell.name;

            if (cell.colspan == 2) {
                th.colSpan = 2;
            }
        }
    }

    /**
     * 
     * @param {TableCallback} tableCallback 
     */
    setAppendRow(tableCallback) {
        this.#manager.addCallback = (element) => {
            tableCallback(this.#tbody, element)
        }
    }
}

export { Table }