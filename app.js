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

// YOU WANT TO MAKE "isThereOperation" to true
// THIS VARIABLE WILL ONLY BE INSIDE OPERATION SIGN FUNCTIONS,
// BECAUSE WE WANT TO KEEP PUSHING THE NUMBERS INTO THE DISPLAY IF ITS FALSE,
// IF ITS TRUE THAT MEANS AN OPERATION SIGN IS INSIDE THE ARRAY
// ONCE IT'S TRUE IT WILL PREVENT USER TO CLICK OTHER OPERATIONS - HAVING MULTIPLE 
//  OPERATION SIGNS IS GREAT BUT I WANTED TO HAVE SOMETHING WORKING FIRST
let isThereOperation = false;

// console.log(numberBtns)
// console.log(operationBtns)
//console.log(equalBtn)
// console.log(resetBtn)

resetBtn.addEventListener("click", resetBtnClick);
equalBtn.addEventListener("click", equalBtnClick);

//THIS IS MY CALCULATOR DISPLAY BOX
let calculatorDisplay = [];
//console.log(calculatorDisplay);


//USED .FOREACH FOR EVERY NUMBER CLICKED, AND PLACED THE DISPLAY FUNCTION INSIDE TO DISPLAY
numberBtns.forEach((numBtn) => {
  numBtn.addEventListener("click", () => {
    numberClicked(numBtn.textContent);
  });
});

operationBtns.forEach((opBtn) => {
  opBtn.addEventListener("click", () => {
    operationClicked(opBtn.textContent);
  });
});


//THIS FUNCTION SHOWS WHAT I WANT TO DISPLAY
function showTextOnDisplay(entity,replace = false) {
  //had to make the parameter a string so it won't display the numbers with comas
  if(replace === false){
    entity = entity.join("");
    document.getElementById("calc-display").innerHTML = entity;
  } else {
    document.getElementById("calc-display").innerHTML = entity;
  }
}
//showTextOnDisplay('10+10')


//THIS FUNCTION RESETS MY DISPLAY BOX
function resetBtnClick() {
  let resetBtn = document.getElementById("reset").innerText;
  // calculatorDisplay = [];
  // showTextOnDisplay(calculatorDisplay);
  // return resetBtn;

  //Operation signs were not working (this is not a bug this is a feature) 
  //so I'm helping the user to refresh the page 👀
  window.location.reload()
}


//THIS FUNCTION PUSHES ALL THE NUMBERS CLICKED TO THE DISPLAY
function numberClicked(num) {
  calculatorDisplay.push(num);
  showTextOnDisplay(calculatorDisplay);
  //console.log(`You clicked ${num}`);
}


//THIS FUNCTION PUSHES OPERATION SIGNS TO THE DISPLAY
function operationClicked(op) {
  // calculatorDisplay.push(op)
  // showTextOnDisplay(calculatorDisplay);
  //console.log(`You clicked ${op}`);
  if(isThereOperation === false){
    calculatorDisplay.push(op)
    isThereOperation = true
  
    showTextOnDisplay(calculatorDisplay);
  } 
}

function equalBtnClick() {
  let equalBtn = document.getElementById("=").innerText;
  //console.log(`you clicked ${equalBtn}`)
  if(calculatorDisplay.includes('+')){
    addOperation()
  } 
  if(calculatorDisplay.includes('-')){
    minusOperation()
  } 
  if(calculatorDisplay.includes('*')){
    multiplyOperation()
  }
  if(calculatorDisplay.includes('/')){
    DivisionOperation()
  }
}

function addOperation() {
  //since calculatorDisplay was returning the numbers as a string array, I used .join to remove the commas and then
  //used .split to divide the array between the numbers and the operation sign 
  addEquation = calculatorDisplay.join('').split('+')
  // by declaring this variable, this variable becomes the "input number" in the calculator 
  let firstNumber = parseFloat(addEquation[0])
  let secondNumber = parseFloat(addEquation[1])

  let sum = firstNumber + secondNumber

  showTextOnDisplay(sum, replace = true)
  
  //console.log(sum)

}

function minusOperation() {
  minusEquation = calculatorDisplay.join('').split('-')
   
  let firstNumber = parseFloat(minusEquation[0])
  let secondNumber = parseFloat(minusEquation[1])

  let subtraction = firstNumber - secondNumber

  showTextOnDisplay(subtraction, replace = true)
  
  //console.log(firstNumber, secondNumber)
  //console.log(subtraction)

}

function multiplyOperation() {
  mutiplyEquation = calculatorDisplay.join('').split('*')
   
  let firstNumber = parseFloat(multiplyEquation[0])
  let secondNumber = parseFloat(multiplyEquation[1])

  let multiply = firstNumber * secondNumber

  showTextOnDisplay(multiply, replace = true)
  
  //console.log(multiply)

}

function DivisionOperation() {
  divisionEquation = calculatorDisplay.join('').split('/')
   
  let firstNumber = parseFloat(divisionEquation[0])
  let secondNumber = parseFloat(divisionEquation[1])

  let division = firstNumber / secondNumber

  showTextOnDisplay(division, replace = true)
  
  //console.log(division)

}