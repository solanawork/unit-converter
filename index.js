const renderUnits = document.getElementById("units")
const fetchUserInput = document.getElementById('user-input')
function convertUnits() {

 let userInputValue = fetchUserInput.value
 let meToFe = userInputValue * 3.281
 let liToGa = userInputValue * 0.264
 let kgToP = userInputValue * 2.204
 renderUnits.innerHTML = 
 `${userInputValue} m = ${meToFe.toFixed(3)} feet <br> 
                            ${userInputValue} liters = ${liToGa.toFixed(3)} gallons <br>
                            ${userInputValue} kg = ${kgToP.toFixed(3)} pounds`

}


/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/



