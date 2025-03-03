
const add =document.getElementById("plus");
const minus=document.getElementById("minus");
const divide=document.getElementById("divide");
const module=document.getElementById("module");
const tiems=document.getElementById("tiems");
const number=document.getElementById("number");
const result=document.getElementById("result");

let DefaultResult= 0;
function addtion(){
    DefaultResult = DefaultResult+parseInt(number.value);
    showResult(DefaultResult);
}
function showResult(DefaultResult) {
    result.textContent =DefaultResult;
}
add.addEventListener('click',addtion)