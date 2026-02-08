import data from './data.json' with {type:'json'}
import { Manager } from './manager.js';
import { Table } from './table.js';


const manager1 = new Manager()
const table1 = new Table(data.colspanHeaderArray, data.colspanDataArr, manager1)
table1.setManagerCallback();


const manager2 = new Manager();
const table2 = new Table(data.rowspanHeaderArray, data.rowspanTableArray, manager2);
table2.setManagerCallback();