




window.addEventListener('load', (event) => {


const meterToFeet = 3.281
const literToGallon = 0.264
const kilogramToPound = 2.204
const lengthEl = document.getElementById("length-el")
const volumeEl = document.getElementById("volume-el")
const massEl = document.getElementById("mass-el")
const convertBtn = document.getElementById("btn")
let userNumber = document.getElementById("input-box")


convertBtn.addEventListener("click", function() {
    baseValue = userNumber.value
    lengthEl.innerHTML = `${baseValue} meters = ${(baseValue * meterToFeet).toFixed(2)} feet | ${baseValue} feet = ${(baseValue / meterToFeet).toFixed(2)} meters`
    
    volumeEl.innerHTML = `${baseValue} liters = ${(baseValue * literToGallon).toFixed(2)} gallons | ${baseValue} gallons = ${(baseValue / literToGallon).toFixed(2)} liters`
    
    massEl.innerHTML = `${baseValue} kilos = ${(baseValue * kilogramToPound).toFixed(2)} pounds | ${baseValue} pounds = ${(baseValue / kilogramToPound).toFixed(2)} kilos`
})

});


