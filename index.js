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
 let FeToMe = userInputValue / 3.281
 let GatoLi = userInputValue / 0.264
 let PtoKg = userInputValue / 2.204
lengthP.innerHTML =` ${userInputValue} m = ${meToFe.toFixed(3)} feet | ${userInputValue} feet = ${FeToMe.toFixed(3)} m`
volumeP.innerHTML = ` ${userInputValue} liters = ${liToGa.toFixed(3)} gallons | ${userInputValue} gallons = ${GatoLi.toFixed(3)} liters`
massP.innerHTML = `${userInputValue} kg = ${kgToP.toFixed(3)} pounds | ${userInputValue} pounds = ${PtoKg.toFixed(3)} kg`

}


/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/



