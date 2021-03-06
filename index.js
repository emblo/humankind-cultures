//Import objects 
import {cultures} from "./cultureData.js";

//Current year for footer
window.onload = function() {
    const date = new Date().getFullYear();
    document.getElementById("year").innerHTML = date;
}

//Hamburger menu
const hamburger = document.getElementById("hamburger");
const navUL = document.getElementById("nav-ul");

hamburger.addEventListener("click", () => {
    navUL.classList.toggle("show");
});

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
    const mobileArrow = document.createElement("span");
    mobileArrow.setAttribute("class", "fas fa-arrow-right");
    mobileArrow.setAttribute("id", "arrow-right");
    const eraH2Text = document.createTextNode(era[0].Era + " Era");
    myTableDiv.appendChild(eraH2);
    eraH2.setAttribute("id", era[0].Era.replace(/\s/g, "-") + "-table")
    eraH2.appendChild(eraH2Text);
    eraH2.appendChild(mobileArrow);

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
                        "<td>" + "<a href='" + era[i]["Affinity wiki link"] + "' target='blank'>"  + era[i].Affinity + "</a>" + "<span class='fas fa-external-link-alt' id='external-link'></span>" + "</td>" +
                        "<td title='" + era[i]["Legacy trait info"] + "' class='tooltip'>" + era[i]["Legacy trait"] + "</td>" +
                        "<td>" + "<a href='" + era[i]["Emblematic unit wiki link"] + "' target='blank'>" + era[i]["Emblematic unit"] + "</a>" + "<span class='fas fa-external-link-alt' id='external-link'></span>" + "</td>" +
                        "<td>" + "<a href='" + era[i]["Emblematic quarter wiki link"] + "' target='blank'>" + era[i]["Emblematic quarter"] + "<span class='fas fa-external-link-alt' id='external-link'></span>" + "</td>" +
                        "<td title='" + era[i]["Affinity action info"] + "' class='tooltip'>" + era[i]["Affinity action"] + "</td>" +
                        "<td title='" + era[i]["Affinity bonus info"] + "' class='tooltip'>" + era[i]["Affinity bonus"] + "</td>" +
                    "</tr>"

        //Append row to table
        eraTable.innerHTML += row;
    };

    //Append to div
    myTableDiv.appendChild(eraTable);
};
