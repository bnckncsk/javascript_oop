/**
 * @import { FormFieldType, HeaderArrayType, ColspanType, RowspanType } from "./functions.js"
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
     * @param {HeaderArrayType} headerArray 
     * @param {Manager} manager 
     */
    constructor(headerArray, manager) {
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
                th.colspan = 2;
            }
        }
    }
}

export { Table }

// public fuggveny a tablenek ami besetteli a callbackjet a managernek
// fuggetlenne teszi a table osztaly a colspan tablazattol