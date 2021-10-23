//Import objects 
import {cultures} from "./cultureData.js";

//Current year for footer
window.onload = function() {
    const date = new Date().getFullYear();
    document.getElementById("year").innerHTML = date;
}

//Append tables to this div
let myTableDiv = document.getElementById("tables");

//Era variables
const ancient = cultures.filter(obj => { return obj.Era === "Ancient"; });
const classical = cultures.filter(obj => { return obj.Era === "Classical"; });
const medieval = cultures.filter(obj => { return obj.Era === "Medieval"; });
const earlyModern = cultures.filter(obj => { return obj.Era === "Early Modern"; });
const industrial = cultures.filter(obj => { return obj.Era === "Industrial"; });
const contemporary = cultures.filter(obj => { return obj.Era === "Contemporary"; });

buildTable(ancient);
buildTable(classical);
buildTable(medieval);
buildTable(earlyModern);
buildTable(industrial);
buildTable(contemporary);

function buildTable(era) {
    //Create table + headers
    const eraTable = document.createElement("table"); 
    const headers = ["Culture", "Affinity", "Legacy Trait", "Emblematic Unit", "Emblematic Quarter", "Affinity Action", "Affinity Bonus"];
    const headerRow = document.createElement("tr");

    //Create and append H2 for table
    const eraH2 = document.createElement("h2");
    const eraH2Text = document.createTextNode(era[0].Era + " Era");
    eraH2.appendChild(eraH2Text);
    eraTable.appendChild(eraH2);

    //Headers for table
    headers.forEach(headerText => {
        const header = document.createElement("th");
        const textNode = document.createTextNode(headerText);
        header.appendChild(textNode);
        headerRow.appendChild(header);
    });

    eraTable.appendChild(headerRow);

    //Table data
    for (let i = 0; i < era.length; i++) {
        const row = "<tr>" + 
                        "<td>" + "<a href='" + "https://www.google.com'" + ">" + era[i].Culture + "</a>" + "</td>" +
                        "<td>" + era[i].Affinity + "</td>" +
                        "<td>" + era[i]["Legacy trait"] + "</td>" +
                        "<td>" + era[i]["Emblematic unit"] + "</td>" +
                        "<td>" + era[i]["Emblematic quarter"]+ "</td>" +
                        "<td>" + era[i]["Affinity action"] + "</td>" +
                        "<td>" + era[i]["Affinity bonus"] + "</td>" +
                    "</tr>"

        //Append row to table
        eraTable.innerHTML += row;
    };

    //Append to div
    myTableDiv.appendChild(eraTable);
};
