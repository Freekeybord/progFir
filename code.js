const addResoult = document.getElementById('resoult');
const input1 = document.getElementById('input1');
const input2 =document.getElementById('input2');
const submitBtn = document.getElementById('conform');
const plusBtn = document.getElementById('plus');
const minusBtn = document.getElementById('minus');
const multiplyBtn = document.getElementById('multiply');
const divideBtn = document.getElementById('divide');


plusBtn.onclick = function (){
  action = "+"
}
minusBtn.onclick = function (){
  action = "-"
}
multiplyBtn.onclick = function (){
  action = "*"
}
divideBtn.onclick = function (){
  action = "/"
}


function printResoult(resoult){
  if (resoult < 0){
    addResoult.style.color = "red"
  } else {
    addResoult.style.color = "green"
  }
  addResoult.textContent = resoult
}

function actionForColculationProceses (inp1 , inp2 , actions) {
  const nam1 = Number(inp1.value)
  const nam2 = Number(inp2.value)

  if(actions == '+') {
     return nam1 + nam2
  }else if (actions == '-') {
    nam1 - nam2
  }else if (actions == '*') {
    nam1 * nam2
  }else if (actions == '/') {
    nam1 / nam2
  }
}


submitBtn.onclick = function () {
  const sum = actionForColculationProceses(input1 , input2 , actions);
  printResoult(resoult)
}
    


