//whiteboarding
    //writing out the steps of what you want to accomplish
    //setting up an order and plan of attack
    //not writing code! just writting in plain english

    //what do you need for a calculator?
    //use numbers and perform math operations
    //user input, operators, results

//pseudocoding
    //addEventListeners for all buttons
    //attach # values to numbers
    //and operators to + - * /
    //inpur operations and numbers - the state of the calculator


//rubber ducking
    //vocalize your plans and yur problems/bugs
    //to help you catch any erros


let numberBtns = document.querySelectorAll('.number-button')
let operationBtns = document.querySelectorAll('.operation-button')
let equalBtn = document.getElementsById('=')
let resetBtn = document.getElementsByClassName('reset-button')



// console.log(numberBtns)
// console.log(operationBtns)
//console.log(equalBtn)
// console.log(resetBtn)

function equalClicked(eqlBtn){
    console.log(`You clicked ${eqlBtn}`)
}
equalBtn.addEventListener('click', equalClicked())



numberBtns.forEach(numBtn => {
    numBtn.addEventListener('click', () => {
        numberClicked(numBtn.textContent)
    })
})
function numberClicked(num){
    console.log(`You clicked ${num}`)
}


operationBtns.forEach(opBtn => {
    opBtn.addEventListener('click', () => {
        operationClicked(opBtn.textContent)
    })
})
function operationClicked(op){
    console.log(`You clicked ${op}`)
}

