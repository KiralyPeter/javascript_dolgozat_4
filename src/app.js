/*
* File: app.js
* Author: Király Péter
* Copyright: 2023, Király Péter
* Group: Szoft-1-2-E
* Date: 2023-03-05
* Github: https://github.com/KiralyPeter/javascript_dolgozat_4.git
* Licenc: GNU GPL
*/

const tbody = document.querySelector("#tbody");

var bikeList = [
    {bikeId: 1, bikeName: "Cassis", bikeWheelSize: 28, bikeUsage: "Offorad", bikePrice: 557900},
    {bikeId: 2, bikeName: "Alboin 900", bikeWheelSize: 28, bikeUsage: "Trekking", bikePrice: 519900},
    {bikeId: 3, bikeName: "Asgard", bikeWheelSize: 29, bikeUsage: "Technikás utak", bikePrice: 519900},
    {bikeId: 4, bikeName: "Ruga", bikeWheelSize: 29, bikeUsage: "Hegyi", bikePrice: 372900},
    {bikeId: 5, bikeName: "Repita", bikeWheelSize: 28, bikeUsage: "Városi", bikePrice: 308900},
    {bikeId: 6, bikeName: "Sirmium", bikeWheelSize: 29, bikeUsage: "Hegyi", bikePrice: 264900}
]

function createTable(){
    bikeList.forEach((bike) => {
        // console.log(bike.bikeName);
        let tableRow = document.createElement("tr");        
        let tableDataId = document.createElement("td");
        let tableDataName = document.createElement("td");
        let tableDataSize = document.createElement("td");
        let tableDataUsage = document.createElement("td");
        let tableDataPrice = document.createElement("td");

        tableDataId.textContent = bike.bikeId;
        tableDataName.textContent = bike.bikeName;
        tableDataSize.textContent = bike.bikeWheelSize;
        tableDataUsage.textContent = bike.bikeUsage;
        tableDataPrice.textContent = bike.bikePrice;

        tbody.append(tableRow);
        tableRow.append(tableDataId);
        tableRow.append(tableDataName);
        tableRow.append(tableDataSize);
        tableRow.append(tableDataUsage);
        tableRow.append(tableDataPrice);

    })
}

createTable();