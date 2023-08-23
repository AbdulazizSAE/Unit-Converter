/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const convertBtn = document.getElementById("convert-btn")
let inputNum= document.getElementById("input-num")
let x = document.getElementById("length2MF")
let y = document.getElementById("volume2LG")
let z = document.getElementById("mass2KP")

const meter2feet = 3.281
const liter2gallon = 0.264
const kilo2pound = 2.204

convertBtn.addEventListener("click", function(){
    let baseValue = inputNum.value
    x.textContent = `${baseValue} meters = ${baseValue * meter2feet.toFixed(3)} feet
                    |
                     ${baseValue} feet = ${(baseValue / meter2feet).toFixed(3)} meters
                    ` 

    y.textContent = `${baseValue} liters = ${(baseValue * liter2gallon).toFixed(3)} gallons
                    |
                    ${baseValue} gallons = ${(baseValue / liter2gallon).toFixed(3)} liters
                    `

    z.textContent = `${baseValue} kilos = ${(baseValue * kilo2pound).toFixed(3)} pounds
                    |
                    ${baseValue} pounds = ${(baseValue / kilo2pound).toFixed(3)} kilos
                    `
})

