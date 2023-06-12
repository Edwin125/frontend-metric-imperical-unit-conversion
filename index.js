/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/


const inputBoxEl = document.getElementById("input-box")
const btnEl = document.getElementById("input-btn")
const infoBoxEl = document.getElementById("info-box")

btnEl.addEventListener("click", ()=>{
    let inputValue = inputBoxEl.value
    localStorage.setItem("inputValue", JSON.stringify(inputValue))
    console.log(inputValue)
    render(inputValue)
})

let localInputValue = JSON.parse(localStorage.getItem("inputValue"))
if (localInputValue){
    inputBoxEl.value = localInputValue
}

function render(inputValue){

    let convertedValue = 0
    let inverseConvertedValue = 0
    let renderString = "" 
    const headers = ["Length (Meter/Feet)", "Volume (Liters/Gallons)", "Mass (Kilograms/Pounds)"]
    const ratios = [3.281, 0.264, 2.204]

    // a tag function for create template literals 
    // note: template literals can't get values from variables dynamically 
    function getDesc(inputValue, value, inverserValue, idx){
        if (idx === 0){
            const desc = `${inputValue} meters = ${value} feet | ${inputValue} feet =${inverserValue} meters`
            return desc
        } else if (idx === 1){
            const desc = `${inputValue} liters = ${value} gallons | ${inputValue} gallons = ${inverserValue} liters`
            return desc
        } else if (idx ===2){
            const desc = `${inputValue} kilos = ${value} pounds | ${inputValue} pounds = ${inverserValue} kilos`
            return desc
        }
    }

    // generate HTML elements with one for loop
    for (let i = 0; i < 3; i++){
        convertedValue = (inputValue * ratios[i]).toFixed(2)
        inverseConvertedValue = (inputValue / ratios[i]).toFixed(2)
        
        renderString += `
            <div class="info">
                <p id="info-header">${headers[i]}</p>
                <p id="info-convert">${getDesc(inputValue, convertedValue, inverseConvertedValue, i)}</p>
            </div>`
    }
    infoBoxEl.innerHTML = renderString
}

