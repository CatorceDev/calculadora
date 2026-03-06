const results = document.querySelector(".calculadora-results");

const clear = document.querySelector(".element-c");
const deleteCharacter = document.querySelector(".element-delete");
const divide = document.querySelector(".element-divide");
const multiplicate = document.querySelector(".element-multiplicate");
const rest = document.querySelector(".element-rest");
const sum = document.querySelector(".element-sum");
const equal = document.querySelector(".element-equal");

const numBtn = document.querySelectorAll(".element-number");

let currentInput = "";
let operador = "";
let value1 = null;
let result = null;

//! Funcion para escribir en results




//TODO eventos para escribir y guardar numeros
numBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    currentInput += btn.dataset.num;
    Write();
  });
});

//TODO Evento para borrar un caracter
deleteCharacter.addEventListener("click", () => {
  currentInput = currentInput.slice(0, -1);
  Write();
});

//TODO Evento para limpiar results
clear.addEventListener("click", ()=>{
    value1 = null;
    currentInput = "";
    Write();
})

//TODO Evento para boton suma
sum.addEventListener("click", ()=>{
    if(value1 == null){
        value1 = parseInt(currentInput)
        Write();
    }   else{
        Operar()
    }
    operador = "+"
    currentInput = "";
    
})

//TODO Evento para boton resta
rest.addEventListener("click", ()=>{
    if(value1 == null){
        value1 = parseInt(currentInput)
        Write()
    }   else{
        Operar()
    }
    operador = "-"
    currentInput = ""
})

//TODO Evento para boton multiplicar
multiplicate.addEventListener("click", ()=>{
    if(value1 == null){
        value1 = parseInt(currentInput)
        Write()
    }   else{
        Operar()
    }
    currentInput = ""
    operador = "*"
})

//TODO Evento para boton dividir
divide.addEventListener("click", ()=>{
    if(value1 == null){
        value1 = parseInt(currentInput)
        Write()
    }   else{
        Operar()
    }
    operador = "/"
    currentInput = ""
})

equal.addEventListener("click", ()=>{
    if(value1 == null){
        Write()
    }   else if(value1 != null && currentInput !== ""){
        let memory = parseInt(currentInput)
        Operar()
        currentInput = memory
    }
})

function Operar(){
    switch(operador){
        case "+":
            Sum()
            break;
        case "-":
            Rest()
            break;
        case "*":
            Multiplicate()
            break;
        case "/":
            Divide()
            break;
    }
}

//TODO Funcion para escribir en result
function Write() {
  results.innerHTML = `<p>${currentInput}</p>`;
}


//TODO Funcion para sumar
function Sum(){
    value1 = value1 + parseInt(currentInput)
    currentInput = value1
    Write()
}

//TODO Funcion para restar
function Rest(){
    value1 = value1 - parseInt(currentInput)
    currentInput = value1
    Write()
}

//TODO Funcion para multiplicar
function Multiplicate(){
    value1 = value1 * parseInt(currentInput)
    currentInput = value1
    Write()
}

//TODO Funcion para Dividir
function Divide(){
    value1 = value1 / parseInt(currentInput)
    currentInput = value1
    Write()
}