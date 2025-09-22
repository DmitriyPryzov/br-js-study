import Element from "../../helpers/element.js";

let vector = -1;

async function getPageTable() {
    const table = new Element({tag: "table", classes: "sort-table"}).get();


    try {
        const tableHTML = await fetch("./js/modules/lesson8/page/table.html");

        table.innerHTML = await tableHTML.text();
    } catch (err) {
        console.log(err);   
    }

    return table;
}


function sortRows(table, index) {

    const tBody = table.querySelector("tbody");
    const rows =  Array.from(tBody.querySelectorAll("tr"));

    const sortRows = rows.sort((row1, row2) => {
    
        const td1 = row1.cells[index].textContent.trim(); 
        const td2 = row2.cells[index].textContent.trim();

        
        
        if (!Number.isNaN(td1) && !Number.isNaN(td2)) {                    
            return td1.localeCompare(td2) * vector;
        }

        return (+td1 - td2) * vector; 

    });
    vector *= -1;

    tBody.innerHTML = "";
    tBody.append(...sortRows);

}


export default async function sortTableInit() {
    const table = await getPageTable();

    const ths = table.querySelectorAll("th");

    ths.forEach((item, index) => {
        item.addEventListener("click", () => {
            
            sortRows(table, index);
            
        });
    });

    return table;
}