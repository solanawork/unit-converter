const renderUnits = document.getElementById("units")
const fetchUserInput = document.getElementById('user-input')
const lengthP = document.getElementById("length-p")
const volumeP = document.getElementById("volume-p")
const massP = document.getElementById("mass-p")
function convertUnits() {

 let userInputValue = fetchUserInput.value
 let meToFe = userInputValue * 3.281
 let liToGa = userInputValue * 0.264
 let kgToP = userInputValue * 2.204
lengthP.innerHTML =` ${userInputValue} m = ${meToFe.toFixed(3)} feet  `
volumeP.innerHTML = ` ${userInputValue} liters = ${liToGa.toFixed(3)} gallons`
massP.innerHTML = `${userInputValue} kg = ${kgToP.toFixed(3)} pounds`

}


/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/



