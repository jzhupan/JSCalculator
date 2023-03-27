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

let numberBtns = document.querySelectorAll(".number-button");
let operationBtns = document.querySelectorAll(".operation-button");
let equalBtn = document.getElementById("=");
let resetBtn = document.getElementById("reset");

// console.log(numberBtns)
// console.log(operationBtns)
//console.log(equalBtn)
// console.log(resetBtn)

//This is my display box
let calcualtorDisplay = []
// Solve 10-5+5*10/5

//this function shows what I want to display
function showTextOnDisplay(entity){
  //had to make the parameter a string so it won't display the numbers with comas
  entity = entity.join("")
  document.getElementById("calc-display").innerHTML = entity;

}
//showTextOnDisplay('10+10')

equalBtn.addEventListener("click", equalBtnClick);
  function equalBtnClick() {
    let equalBtn = document.getElementById("=").innerText;
    //console.log(`you clicked ${equalBtn}`)

    return equalBtn;
  }

  //resets the display
  resetBtn.addEventListener("click", resetBtnClick);
  function resetBtnClick() {
    let resetBtn = document.getElementById("reset").innerText;
    calcualtorDisplay = []
    showTextOnDisplay(calcualtorDisplay)
    return resetBtn;
  }

  numberBtns.forEach((numBtn) => {
    numBtn.addEventListener("click", () => {
      numberClicked(numBtn.textContent);
    });
  });
  function numberClicked(num) {
    calcualtorDisplay.push(num)
    showTextOnDisplay(calcualtorDisplay)
    //console.log(`You clicked ${num}`);
  }

  operationBtns.forEach((opBtn) => {
    opBtn.addEventListener("click", () => {
      operationClicked(opBtn.textContent);
    });
  });
  function operationClicked(op) {
    calcualtorDisplay.push(op)
    
    showTextOnDisplay(calcualtorDisplay)
    //console.log(`You clicked ${op}`);
  }


let takeCareOfTheMultiplicaionSign

//find the order of operations, that can be done by:
//finding index of whatever operations are in the display
//find the boundary of each operation
//find a way for the computer to know where is the sign and the 'numbers' boundary
//have a function that takes care of the signs in order
//need to take into consideration multiplication and divition first then adding and substracting
// have the equal button work - solving the equation displayed