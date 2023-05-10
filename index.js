const renderUnits = document.getElementById("units")

function convertUnits() {

let userInput = document.getElementById('user-input').value
 let meToFe = userInput * 3.281
 let liToGa = userInput * 0.264
 let kgToP = userInput * 2.204
 renderUnits.innerHTML = `${meToFe} ${liToGa} ${kgToP}`


}


/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/



