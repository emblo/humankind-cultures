//Import objects 
import {cultures} from "./cultureData.js";

//Current year for footer
window.onload = function() {
    const date = new Date().getFullYear();
    document.getElementById("year").innerHTML = date;
}

//Append tables to this div
let myTableDiv = document.getElementById("tables");

buildAncientTable(cultures);

//Ancient table
function buildAncientTable(data) {
    //Only returns objects for the Ancient era
    const ancient = cultures.filter(obj => {
        return obj.Era === "Ancient";
    });
    
    //Create table + headers
    const ancientTable = document.createElement("table"); 
    ancientTable.id = "ancient-table";
    let headers = ["Culture", "Affinity", "Legacy Trait", "Emblematic Unit", "Emblematic Quarter", "Affinity Action", "Affinity Bonus"];
    let headerRow = document.createElement("tr");

    //Headers for table
    headers.forEach(headerText => {
        let header = document.createElement("th");
        let textNode = document.createTextNode(headerText);
        header.appendChild(textNode);
        headerRow.appendChild(header);
    });

    ancientTable.appendChild(headerRow);

    //Table data
    for (let i = 0; i < ancient.length; i++) {
        let row = "<tr>" + 
                        "<td>" + "<a href='" + "https://www.google.com'" + ">" + data[i].Culture + "</a>" + "</td>" +
                        "<td>" + data[i].Affinity + "</td>" +
                        "<td>" + data[i]["Legacy trait"] + "</td>" +
                        "<td>" + data[i]["Emblematic unit"] + "</td>" +
                        "<td>" + data[i]["Emblematic quarter"]+ "</td>" +
                        "<td>" + data[i]["Affinity action"] + "</td>" +
                        "<td>" + data[i]["Affinity bonus"] + "</td>" +
                    "</tr>"
        ancientTable.innerHTML += row;
    };

    myTableDiv.appendChild(ancientTable);
};


