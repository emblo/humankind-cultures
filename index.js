//Import objects 
import {cultures} from "./cultureData.js";

//Current year for footer
window.onload = function() {
    const date = new Date().getFullYear();
    document.getElementById("year").innerHTML = date;
}

//Append tables to this div
let myTableDiv = document.getElementById("tables");

//ANCIENT TABLE
buildAncientTable();

function buildAncientTable() {
    //Only returns objects for the Ancient era
    const ancient = cultures.filter(obj => {
        return obj.Era === "Ancient";
    });
    
    //Create table + headers
    const ancientTable = document.createElement("table"); 
    ancientTable.id = "ancient-table";
    let headers = ["Culture", "Affinity", "Legacy Trait", "Emblematic Unit", "Emblematic Quarter", "Affinity Action", "Affinity Bonus"];
    let headerRow = document.createElement("tr");

    //Create and append H2 for table
    const ancientH2 = document.createElement("h2");
    const ancientH2Text = document.createTextNode("Ancient Era");
    ancientH2.appendChild(ancientH2Text);
    ancientTable.appendChild(ancientH2);

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
                        "<td>" + "<a href='" + "https://www.google.com'" + ">" + ancient[i].Culture + "</a>" + "</td>" +
                        "<td>" + ancient[i].Affinity + "</td>" +
                        "<td>" + ancient[i]["Legacy trait"] + "</td>" +
                        "<td>" + ancient[i]["Emblematic unit"] + "</td>" +
                        "<td>" + ancient[i]["Emblematic quarter"]+ "</td>" +
                        "<td>" + ancient[i]["Affinity action"] + "</td>" +
                        "<td>" + ancient[i]["Affinity bonus"] + "</td>" +
                    "</tr>"

        //Append row to table
        ancientTable.innerHTML += row;
    };

    //Append to div
    myTableDiv.appendChild(ancientTable);
};

//CLASSICAL TABLE
buildClassicalTable();

function buildClassicalTable() {
    //Only returns objects for the Classical era
    const classical = cultures.filter(obj => {
        return obj.Era === "Classical";
    });
    
    //Create table + headers
    const classicalTable = document.createElement("table"); 
    classicalTable.id = "classical-table";
    let headers = ["Culture", "Affinity", "Legacy Trait", "Emblematic Unit", "Emblematic Quarter", "Affinity Action", "Affinity Bonus"];
    let headerRow = document.createElement("tr");

    //Create and append H2 for table
    const classicalH2 = document.createElement("h2");
    const classicalH2Text = document.createTextNode("Classical Era");
    classicalH2.appendChild(classicalH2Text);
    classicalTable.appendChild(classicalH2);

    //Headers for table
    headers.forEach(headerText => {
        let header = document.createElement("th");
        let textNode = document.createTextNode(headerText);
        header.appendChild(textNode);
        headerRow.appendChild(header);
    });

    classicalTable.appendChild(headerRow);

    //Table data
    for (let i = 0; i < classical.length; i++) {
        let row = "<tr>" + 
                        "<td>" + "<a href='" + "https://www.google.com'" + ">" + classical[i].Culture + "</a>" + "</td>" +
                        "<td>" + classical[i].Affinity + "</td>" +
                        "<td>" + classical[i]["Legacy trait"] + "</td>" +
                        "<td>" + classical[i]["Emblematic unit"] + "</td>" +
                        "<td>" + classical[i]["Emblematic quarter"]+ "</td>" +
                        "<td>" + classical[i]["Affinity action"] + "</td>" +
                        "<td>" + classical[i]["Affinity bonus"] + "</td>" +
                    "</tr>"

        //Append row to table
        classicalTable.innerHTML += row;
    };

    //Append to div
    myTableDiv.appendChild(classicalTable);
};

//MEDIEVAL TABLE
buildMedievalTable();

function buildMedievalTable() {
    //Only returns objects for the Medieval era
    const medieval = cultures.filter(obj => {
        return obj.Era === "Medieval";
    });
    
    //Create table + headers
    const medievalTable = document.createElement("table"); 
    medievalTable.id = "medieval-table";
    let headers = ["Culture", "Affinity", "Legacy Trait", "Emblematic Unit", "Emblematic Quarter", "Affinity Action", "Affinity Bonus"];
    let headerRow = document.createElement("tr");

    //Create and append H2 for table
    const medievalH2 = document.createElement("h2");
    const medievalH2Text = document.createTextNode("Medieval Era");
    medievalH2.appendChild(medievalH2Text);
    medievalTable.appendChild(medievalH2);

    //Headers for table
    headers.forEach(headerText => {
        let header = document.createElement("th");
        let textNode = document.createTextNode(headerText);
        header.appendChild(textNode);
        headerRow.appendChild(header);
    });

    medievalTable.appendChild(headerRow);

    //Table data
    for (let i = 0; i < medieval.length; i++) {
        let row = "<tr>" + 
                        "<td>" + "<a href='" + "https://www.google.com'" + ">" + medieval[i].Culture + "</a>" + "</td>" +
                        "<td>" + medieval[i].Affinity + "</td>" +
                        "<td>" + medieval[i]["Legacy trait"] + "</td>" +
                        "<td>" + medieval[i]["Emblematic unit"] + "</td>" +
                        "<td>" + medieval[i]["Emblematic quarter"]+ "</td>" +
                        "<td>" + medieval[i]["Affinity action"] + "</td>" +
                        "<td>" + medieval[i]["Affinity bonus"] + "</td>" +
                    "</tr>"

        //Append row to table
        medievalTable.innerHTML += row;
    };

    //Append to div
    myTableDiv.appendChild(medievalTable);
};

//EARLY MODERN TABLE
buildEarlyModernTable();

function buildEarlyModernTable() {
    //Only returns objects for the Early Modern era
    const earlyModern = cultures.filter(obj => {
        return obj.Era === "Early Modern";
    });
    
    //Create table + headers
    const earlyModernTable = document.createElement("table"); 
    earlyModernTable.id = "early-modern-table";
    let headers = ["Culture", "Affinity", "Legacy Trait", "Emblematic Unit", "Emblematic Quarter", "Affinity Action", "Affinity Bonus"];
    let headerRow = document.createElement("tr");

    //Create and append H2 for table
    const earlyModernH2 = document.createElement("h2");
    const earlyModernH2Text = document.createTextNode("Early Modern Era");
    earlyModernH2.appendChild(earlyModernH2Text);
    earlyModernTable.appendChild(earlyModernH2);

    //Headers for table
    headers.forEach(headerText => {
        let header = document.createElement("th");
        let textNode = document.createTextNode(headerText);
        header.appendChild(textNode);
        headerRow.appendChild(header);
    });

    earlyModernTable.appendChild(headerRow);

    //Table data
    for (let i = 0; i < earlyModern.length; i++) {
        let row = "<tr>" + 
                        "<td>" + "<a href='" + "https://www.google.com'" + ">" + earlyModern[i].Culture + "</a>" + "</td>" +
                        "<td>" + earlyModern[i].Affinity + "</td>" +
                        "<td>" + earlyModern[i]["Legacy trait"] + "</td>" +
                        "<td>" + earlyModern[i]["Emblematic unit"] + "</td>" +
                        "<td>" + earlyModern[i]["Emblematic quarter"]+ "</td>" +
                        "<td>" + earlyModern[i]["Affinity action"] + "</td>" +
                        "<td>" + earlyModern[i]["Affinity bonus"] + "</td>" +
                    "</tr>"

        //Append row to table
        earlyModernTable.innerHTML += row;
    };

    //Append to div
    myTableDiv.appendChild(earlyModernTable);
};