import data from './data.json' with {type:'json'}
import { Manager } from './manager.js';
import { Table } from './table.js';


const manager1 = new Manager()
const table1 = new Table(data.colspanHeaderArray, manager1)

manager1.addCallback = (element) => {console.log(element)}

for (const row of data.colspanDataArr) {
    manager1.addElement(row);
}

