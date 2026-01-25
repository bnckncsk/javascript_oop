/** 
 * @typedef {{author: string, title1: string, concepts1: string, title2?: string,  concepts2?: string}} RowspanRowType  
 * @typedef {{author: string, title: string, concepts: string, concepts2?: string}} ColspanRowType
 * @typedef {{name: string, colSpan?: number}} HeaderType
 * 
 * @callback appendRow
 * @param {HTMLTableSectionElement} tbody
 * @returns {void}
*/

/** @type {HeaderType[]}  */
const rowspanHeaderArr = [{name: "Szerző"}, {name: "Mű"}, {name: "Fogalmak"}] 
/** @type {HeaderType[]}   */
const colspanHeaderArr = [{name: "Szerző"},{name: "Mű"} , {name: "Fogalmak" ,colSpan: 2}] 

/** @type {RowspanRowType[]}  */
const rowspanBodyArr = [
    {
        author: "Appolliniare",
        title1: "A megsebzett galamb és a szökőkút", 
        concepts1: "képvers", 
        title2: "Búcsú",
        concepts2: "avantgárd" 
    },
    {
        author: "Thomas Mann",
        title1: "Mario és a varázsló",
        concepts1: "kisregény" 
    },
    {
        author: "Franz Kafka",
        title1: "A per", 
        concepts1: "képvers", 
        title2: "Az átvlátozás", 
        concepts2: "kisregény" 
    }
]



/** @type {ColspanRowType[]} */
const colspanBodyArr = [ 
    {
        author: "Appolliniare", 
        title: "A megsebzett galamb és a szökőkút",
        concepts: "Képvers",  
        concepts2: "Emlékezés", 
    },
    {
        author: "Appolliniare", 
        title: "Búcsú", 
        concepts: "Avantgárd" 
    },
    {
        author: "Thomas Mann", 
        title: "Mario és a varázsló", 
        concepts: "Kisregény" 
    },
    {
        author: "Franz Kafka",
        title: "A per", 
        concepts: "regény" 
    },
    {
        author: "Franz Kafka", 
        title: "Az átváltozás",
        concepts: "kisregény", 
        concepts2: "groteszk" 
    }
]

// renderColspanBody(makeTableBodyWithHeader(colspanHeaderArr), colspanBodyArr)
// renderRowspanBody(makeTableBodyWithHeader(rowspanHeaderArr), rowspanBodyArr)


/////////////////////////////////////////////////////////////////////////////////////

//ősosztály

class Table{
    /**
    *  @type {HTMLTableSectionElement}
    */
    #tbody;

    /**
     * @param {HeaderType[]} headerArray
     */
    constructor(headerArray) {
        this.#tbody = makeTableBodyWithHeader(headerArray);
    }

    get tbody(){
        return this.#tbody;
    }

    appendRow(callback){
        callback(this.#tbody);
    }
}


// leszármazott osztályok

class ColspanTable extends Table{
    /**
     * @param {HeaderType[]} headerArray
     */
    constructor(headerArray) {
        super(headerArray);
    }


    /**
     * @param {ColspanRowType[]} colSpanRowType 
     */
    render(colSpanRowType) {
        renderColspanBody(this.tbody, colSpanRowType)
    }
}


class RowspanTable extends Table{
    /**
     * @param {HeaderType[]} headerArray
     */
    constructor(headerArray) {
        super(headerArray);
    }

    /**
     * @param {RowspanRowType[]} rowspanRowType 
     */
    render(rowspanRowType) {
        renderRowspanBody(this.tbody, rowspanRowType)
    }
}



//példányosítás

const colspanTable = new ColspanTable(colspanHeaderArr);
colspanTable.render(colspanBodyArr);


const rowspanTable = new RowspanTable(rowspanHeaderArr);
rowspanTable.render(rowspanBodyArr);


/////////////////////////////////////////////////////////////////////////////////////


// Callback függvények implementációja (példa)

// /**
//  * @callback Randomtype
//  * @param {Randomtype}
//  */
// function doSomething(callback){
//     callback(tbody);
// }

// doSomething(function(tablaTorzs){
//     const tr = document.createElement('tr');
//     tablaTorzs.appendChild(tr);
// });


const rowspanButton = buttonCreater('Rowspan elem hozzáadása');
const colspanButton = buttonCreater('Colspan elem hozzáadása');

rowspanButton.addEventListener('click', onClickRowSpanButton.bind(rowspanTable)) // .bind a this értéket állítja át (megszunik a golbalis valtozotol valo fugges)

colspanButton.addEventListener('click', onClickColSpanButton.bind(colspanTable)) // uj callback a colspanos tablazathoz valo hozzafuzeshez


/**
 * gomb letrehozo fuggveny
 * @param {string} text 
 * @returns {HTMLButtonElement}
 */
function buttonCreater(text){
    const button = document.createElement('button');
    button.innerText = text;
    document.body.appendChild(button);
    return button;
}

/**
 * gomb lenyomasakor hozzafuzi az objektumban megadott sort a rowspanos tablazathoz
 * @param {Event} e 
 */
function onClickRowSpanButton(e) {
    e.preventDefault();

    /**
     * @type {RowspanRowType}
     */
    const objektum = {
        author: "Kolto",
        title1: "Cim 1", 
        concepts1: "Concept 1", 
        title2: "Cim 2",
        concepts2: "Concept 2"
    };

    this.appendRow(function(body){      // itt valamiert nem latszik a body parameter tipusa
        const tr = document.createElement('tr');
        body.appendChild(tr);

        const td1 = document.createElement('td');
        tr.appendChild(td1);
        td1.innerText = objektum.author;

        const td2 = document.createElement('td');
        tr.appendChild(td2);
        td2.innerText = objektum.title1;

        const td3 = document.createElement('td');
        tr.appendChild(td3);
        td3.innerText = objektum.concepts1;

        if (objektum.title2 && objektum.concepts2) {
            td1.rowSpan = 2;

            const tr2 = document.createElement('tr');
            body.appendChild(tr2);

            const td4 = document.createElement('td');
            tr2.appendChild(td4);
            td4.innerText = objektum.title2;

            const td5 = document.createElement('td');
            tr2.appendChild(td5);
            td5.innerText = objektum.concepts2;
        }
    })
}

/**
 * gomb lenyomasakor hozzafuzi az objektumban megadott sort a colspanos tablazathoz
 * @param {Event} e 
 */
function onClickColSpanButton(e) {
    e.preventDefault();

    /**
     * @type {ColspanRowType}
     */
    const objektum = {
        author: "Kolto",
        title: "Cim 1",
        concepts: "Concept 1",
        concepts2: "Concept 2"
    };

    this.appendRow(function(body){      // itt sem latszik a tipus
        const tr = document.createElement('tr');
        body.appendChild(tr);

        const td1 = document.createElement('td');
        tr.appendChild(td1);
        td1.innerText = objektum.author;

        const td2 = document.createElement('td');
        tr.appendChild(td2);
        td2.innerText = objektum.title;

        const td3 = document.createElement('td');
        tr.appendChild(td3);
        td3.innerText = objektum.concepts;

        if (objektum.concepts2) {
            const td4 = document.createElement('td');
            tr.appendChild(td4);
            td4.innerText = objektum.concepts2;
        } else {
            td3.colSpan = 2;
        }
    })
}