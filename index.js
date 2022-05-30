const display = document.querySelector('.display')
const controlButton = document.querySelector('.controls').children
const allSymbols =['+','-','x','/','=','.','c']
let firstValue = ''
let secondValue= ''
let symbol = ''
let result = ''

function calculate(){
    firstValue = parseFloat(firstValue)
    secondValue = parseFloat(secondValue)
    if(symbol==='+') result = firstValue+secondValue
    if (symbol==='-') result = firstValue-secondValue
    if (symbol==='x') result = firstValue * secondValue
    if (symbol==='/') result = firstValue/secondValue
    display.innerText= result
    firstValue=result
    secondValue=""
}

for(let button of controlButton) {
    button.addEventListener('click',()=>{
        const {innerText: btnValue} = button
        const btnValueIsSymbol = allSymbols.includes(btnValue)
        if(btnValueIsSymbol && firstValue) {
            secondValue && calculate()
            symbol = btnValue
        }
        else if(!symbol)firstValue +=btnValue
        else if(symbol)secondValue +=btnValue
        if(btnValue === 'c'){
            firstValue=""
            secondValue=""
            symbol=""
            result= ""
            display.innerText=""
        } else{
            if(btnValue!== '=') {
                display.innerText += btnValue
            }
        }
    })
}