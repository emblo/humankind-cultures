//Import objects 
import {cultures} from "./cultureData.js";

//Current year for footer
window.onload = function() {
    const date = new Date().getFullYear();
    document.getElementById("year").innerHTML = date;
}

//Era variables
const ancient = cultures.filter(obj => { return obj.Era === "Ancient"; });
const classical = cultures.filter(obj => { return obj.Era === "Classical"; });
const medieval = cultures.filter(obj => { return obj.Era === "Medieval"; });
const earlyModern = cultures.filter(obj => { return obj.Era === "Early Modern"; });
const industrial = cultures.filter(obj => { return obj.Era === "Industrial"; });
const contemporary = cultures.filter(obj => { return obj.Era === "Contemporary"; });

//Build tables for each era
buildTable(ancient);
buildTable(classical);
buildTable(medieval);
buildTable(earlyModern);
buildTable(industrial);
buildTable(contemporary);

function buildTable(era) {
    //Append tables to this div
    let myTableDiv = document.getElementById("tables");

    //Create table + headers
    const eraTable = document.createElement("table"); 
    const headers = ["Culture", "Affinity", "Legacy Trait", "Emblematic Unit", "Emblematic Quarter", "Affinity Action", "Affinity Bonus"];
    const headerRow = document.createElement("tr");

    //Create and append H2 for table
    const eraH2 = document.createElement("h2");
    const eraH2Text = document.createTextNode(era[0].Era + " Era");
    eraH2.setAttribute("id", era[0].Era + "-table")
    eraH2.appendChild(eraH2Text);
    myTableDiv.appendChild(eraH2);

    //Headers for table
    headers.forEach(headerText => {
        const header = document.createElement("th");
        const textNode = document.createTextNode(headerText);
        header.appendChild(textNode);
        headerRow.appendChild(header);
    });

    //Append headers to table
    eraTable.appendChild(headerRow);

    //Table data
    for (let i = 0; i < era.length; i++) {
        const row = "<tr>" + 
                        "<td>" + era[i].Culture + "</td>" +
                        "<td>" + "<a href='" + era[i]["Affinity wiki link"] + "' target='blank'>"  + era[i].Affinity + "</a>" +"</td>" +
                        "<td title='" + era[i]["Legacy trait info"] + "'>" + era[i]["Legacy trait"] + "</td>" +
                        "<td>" + "<a href='" + era[i]["Emblematic unit wiki link"] + "' target='blank'>" + era[i]["Emblematic unit"] + "</a>" + "</td>" +
                        "<td>" + "<a href='" + era[i]["Emblematic quarter wiki link"] + "' " + "target='blank'>" + era[i]["Emblematic quarter"]+ "</td>" +
                        "<td title='" + era[i]["Affinity action info"] + "'>" + era[i]["Affinity action"] + "</td>" +
                        "<td title='" + era[i]["Affinity bonus info"] + "'>" + era[i]["Affinity bonus"] + "</td>" +
                    "</tr>"

        //Append row to table
        eraTable.innerHTML += row;
    };

    //Append to div
    myTableDiv.appendChild(eraTable);
};
