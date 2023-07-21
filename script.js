// Boton Dia - Noche
function nigthDayMode(){
    let keyButtons = document.querySelectorAll(".boton")
    for (let i = 0; i < keyButtons.length; i++){
      let button = keyButtons[i];
      button.classList.toggle("boton-nigth")
    }
    let keyButtons2 = document.querySelectorAll(".boton2")
    for (let i = 0; i < keyButtons2.length; i++){
      let button = keyButtons2[i];
      button.classList.toggle("boton-nigth")
    }
  document.querySelector(".container").classList.toggle("container-nigth");
  document.querySelector(".exterior").classList.toggle("exterior-nigth");
  document.querySelector(".calculadora").classList.toggle("calculadora-nigth");
  document.querySelector(".pantalla").classList.toggle("pantalla-nigth");
  document.querySelector(".icon").classList.toggle("icon2");
  document.querySelector(".menu-body").classList.toggle("menu-body-nigth");
  document.querySelector(".menu-details").classList.toggle("menu-details-nigth");
  document.querySelector(".historyBody").classList.toggle("historyBodyNigth");
  document.querySelector(".scienceBody").classList.toggle("historyBodyNigth");

  }
  let nigthDayButton = document.querySelectorAll("#botonNigth");
  nigthDayButton[0].addEventListener("click", nigthDayMode);
  nigthDayButton[1].addEventListener("click", nigthDayMode);

  // INICIO DE PROGRAMA DE CALCULADORA

  //SELECTORES

const display = document.querySelector(".pantalla"); // pantalla

const clearButton = document.querySelector("[data-clear]"); //Boton C

const plusMinus = document.querySelector("[data-change]"); //Boton ±

const percent = document.querySelector("[data-percent]"); //Boton %

const operator = document.querySelectorAll("[data-operator]"); //Boton operadores

const numbers = document.querySelectorAll("[data-number]"); // Boton numeros y punto

const equal= document.querySelector("[data-equal]") //Boton =

const cuerpoHistorial = document.querySelector(".historyBody") //Historial

const historyList = document.querySelector(".historyList") //Lista historial

const exchanger = document.querySelector(".currencyBody") //Exchanger

const calcBody = document.querySelector(".calculadora") //Cuerpo calculadora

  //FUNCIONES
function createNewLi(){
  let item = document.createElement("li");
  item.classList.add('historyItem');
  historyList.appendChild(item);
}
function sendOperatorToDisplay(value) {
let math = display.value;
let buttonPressed = false;
for (let i = 0; i < math.length; i++){
  if (math[0] === '-'){
    i++
  }
  if (math[i] == "+" || math[i] == "-" || math[i] == "*" || math[i] == "/") {
    buttonPressed = false;
    break;
  } else {
    buttonPressed = true;
  }
}
while (buttonPressed === true){
  buttonPressed = false;
  display.value += value;
  let lastIndex = document.querySelector(".historyItem:last-child");
  lastIndex.textContent += value;
}
}
function sendToDisplay(value) {
  display.value += value;
  let lastIndex = document.querySelector(".historyItem:last-child");
  lastIndex.textContent += value;
}
function clearDisplay(){
  display.value = "";
  let lastIndex = document.querySelector(".historyItem:last-child");
  lastIndex.textContent = "CLEARED";
  createNewLi()
}

function changeSign() {
  if (display.value.charAt(0) === "-"){
    display.value = display.value.replace("-", "");
    let lastIndex = document.querySelector(".historyItem:last-child");
    lastIndex.textContent = lastIndex.textContent.replace("-", "+");
  } else
    display.value = "-" + display.value;
    let lastIndex = document.querySelector(".historyItem:last-child");
    lastIndex.textContent = "-" + lastIndex.textContent;
}
function operate(){
  let math = display.value;
  let result = 0;
  let i = 0
  if (math[0] === '-'){
    i++
  }
  for (i; i < math.length; i++){
    if(math[i] === '+'){
      let expression = math.split(math[i])
      result = +(expression[0]) + +(expression[1])
    } else if (math[i] === '-') {
      let expression = math.split(math[i])
      if(expression.length > 2) {
        result = +(expression[0]) - +(expression[1]) - +(expression[2])
        } else {
          result = +(expression[0]) - +(expression[1])
        }
    } else if (math[i] === '*'){
      let expression = math.split(math[i])
      result = +(expression[0]) * +(expression[1])
    } else if (math[i] === '/') {
      let expression = math.split(math[i])
      result = +(expression[0]) / +(expression[1])
    } else if (math[i] === "^"){
      let expression = math.split(math[i])
      let potence = +(expression[1])
      let previus = +(expression[0])
      result = +(expression[0])
      for (let j = 0; j <= potence; j++){
        result = result * previus;
      }
    }
    display.value = result
  }
  let lastIndex = document.querySelector(".historyItem:last-child");
  lastIndex.textContent += "=" + result;
  createNewLi()
}
function calcPercent() {
  let math = display.value;
  let result = 0;
  let result2= 0;
  let i = 0
  if (math[0] === '-'){
    i++
  }
  for (i; i < math.length; i++){
    if (math[i] === '/') {
      let expression = math.split(math[i])
      result = +(expression[0]) % +(expression[1])
      result2 = +(expression[0]) / +(expression[1])
  }}
  display.value = result
  let lastIndex = document.querySelector(".historyItem:last-child");
  lastIndex.textContent += "= Quotient: " + result2 + " Remainder: " + result;
  createNewLi()
}
function degreesToRadian(degrees){
  let pi = Math.PI;
  return degrees * (pi / 180);
}
//EVENTOS Y LISTENERS
clearButton.addEventListener("click", function(){
  clearDisplay()
})

for (let i = 0; i < operator.length; i++){
  let opBtn = operator[i];
    opBtn.addEventListener("click", function() {
       sendOperatorToDisplay(opBtn.getAttribute("data-operator"))
})
}

for (let i = 0; i < numbers.length; i++){
  let opBtn = numbers[i];
    opBtn.addEventListener("click", function() {
       sendToDisplay(opBtn.getAttribute("data-number"))
})
}

plusMinus.addEventListener("click", function() {
  changeSign();
})

equal.addEventListener("click",function(){
 operate()
})

percent.addEventListener("click", function(){
 calcPercent()
})

/*Historial*/
function showHistory(){
 document.querySelector(".historyBody").classList.toggle("hidden");
}

const historial = document.querySelector(".history");

historial.addEventListener("click", function() {
  showHistory()
})
/*Cientifica*/
function showScience(){
  document.querySelector(".scienceBody").classList.toggle("hidden");
}

const science = document.querySelector(".science");

science.addEventListener("click", function() {
  showScience()
})

// BOTONES CIENTIFICA

//BOTON SIN
function calSin(){
  let num = display.value;
  let sin = Math.sin(num).toFixed(8);
  display.value = sin;

  let lastIndex = document.querySelector(".historyItem:last-child");
  lastIndex.textContent = "The sin of " + num + " is " + sin;
  createNewLi()
}

const sinBtn = document.querySelector('[data-sin]');
sinBtn.addEventListener('click', function() {
  calSin()
})

//BOTON COS
function calCos(){
  let num = display.value;
  let angle = degreesToRadian(num);
  let cos = Math.cos(angle).toFixed(8);
  display.value = cos;

  let lastIndex = document.querySelector(".historyItem:last-child");
  lastIndex.textContent = "The cos of " + num + " is " + cos;
  createNewLi()
}
const cosBtn = document.querySelector('[data-cos]');
cosBtn.addEventListener('click', function() {
  calCos()
})

//BOTON TAN
function calcTan(){
let num = display.value;
let angle = degreesToRadian(num);
let tan = Math.tan(angle).toFixed(8);
display.value = tan;

let lastIndex = document.querySelector(".historyItem:last-child");
  lastIndex.textContent = "The tan of " + num + " is " + tan;
  createNewLi()
}
const tanBtn = document.querySelector('[data-tan]');
tanBtn.addEventListener('click', function() {
  calcTan()
})

//BOTON EXP
function calcExp(){
  let num = display.value;
  let exp = Math.exp(num).toFixed(8);
  display.value = exp;

  let lastIndex = document.querySelector(".historyItem:last-child");
    lastIndex.textContent = "The EXP of " + num + " is " + exp;
    createNewLi()
}
const expBtn = document.querySelector('[data-EXP]');
expBtn.addEventListener('click', function(){
  calcExp()
})

//BOTON Ln
function calcLn(){
  let num = display.value;
  let ln = Math.log(num).toFixed(8);
  display.value = ln;

  let lastIndex = document.querySelector(".historyItem:last-child");
    lastIndex.textContent = "The log of " + num + " is " + ln;
    createNewLi()
}
const lnBtn = document.querySelector('[data-ln]');
lnBtn.addEventListener('click', function(){
  calcLn()
})

//BOTON LOG
const logBtn = document.querySelector('[data-log]');
logBtn.addEventListener('click', function(){
  calcLn()
})

//BOTON ROOT
function calcRoot(){
  let num = display.value;
  let root = Math.sqrt(num)
  display.value = root;

  let lastIndex = document.querySelector(".historyItem:last-child");
    lastIndex.textContent = "The root of " + num + " is " + root;
    createNewLi()
}
const rootBtn = document.querySelector('[data-root]');
rootBtn.addEventListener('click', function(){
  calcRoot()
})
//BOTON ^
const squareBtn = document.querySelector('[data-square]');
squareBtn.addEventListener('click', () => {
  display.value += "^";
  let lastIndex = document.querySelector(".historyItem:last-child");
  lastIndex.textContent += "^";
})

// CAMBIO DE MONEDA
let rate1 = document.querySelector(".ratio1");
let rate2 = document.querySelector(".ratio2");
let resultBtn = document.querySelector(".conversion");
let selects = document.querySelectorAll(".currencyOpcion select");
let sel1 = selects[0];
let sel2 = selects[1];
let inputs = document.querySelectorAll(".currencyInput input");
let inpt1 = inputs[0];
let inpt2 = inputs[1];

let rates = {};

let requestURL = "https://api.exchangerate.host/latest";

fetchRates();

async function fetchRates(){
  let res = await fetch(requestURL);
  res = await res.json();
  rates = res.rates;
  populateOptions()
}

function populateOptions(){
  let val = "";
  Object.keys(rates).forEach(code =>{
    let str = `<option value="${code}">${code}</option>`;
    val += str;
  });
  selects.forEach((s) => (s.innerHTML = val));
}

function convert(val, fromCurr, toCurr){
  let v = (val/rates[fromCurr]) * rates[toCurr];
  let v1 = v.toFixed(3);
  return v1 == 0.0 ? v.toFixed(5) : v1;
}

function displayRate(){
  let v1 = sel1.value;
  let v2 = sel2.value;

  let val = convert(1, v1, v2);

  rate1.innerHTML = `1 ${v1} equals`;
  rate2.innerHTML = `${val} ${v2}`;

}

resultBtn.addEventListener("click", () =>{
  let fromCurr = sel1.value;
  let fromVal = parseFloat(inpt1.value);
  let toCurr = sel2.value;

  if(isNaN(fromVal)){
    alert("Enter a number");
  } else {
    let cVal = convert(fromVal, fromCurr, toCurr);
    inpt2.value = cVal;
  }
});

selects.forEach(s => s.addEventListener("change", displayRate));

document.querySelector(".change").addEventListener("click", () => {
  exchanger.classList.toggle("hidden");
  calcBody.classList.toggle("hidden");
})
