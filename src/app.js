
const add =document.getElementById("plus");
const minus=document.getElementById("minus");
const divide=document.getElementById("divide");
const module=document.getElementById("module");
const tiems=document.getElementById("tiems");
const number=document.getElementById("number");
const Result=document.getElementById("Result");

let DefaultResult = 0;
function addtion(){
    DefaultResult = DefaultResult+ parseInt(number.value);
    showResult(DefaultResult);
}
function showResult(DefaultResult) {
    Result.textContent =DefaultResult;
}
add.addEventListener('click',addtion);
let Default = 1;
function addt(){
    Default = Default* parseInt(number.value);
    showResult(Default);
}
function showResult(Default) {
    Result.textContent =Default;
}
module.addEventListener('click',addt);
let num = 5;
if(num ==5){
alert("hi dear welcom to class")
}
let isadmin =true;
if(isadmin){
    console.log("hi dear teacher")
}
else{
    console.log("how are you")
}
const a = 9;
if (a==8){
    console.log("hi deer")
}
else if(a=== "9"){
    console.log("naz sharifi")
}
else if(a !==9){
        console.log("hellow")
    }
else if (true){
    console.log("horayy")
}
else{
    console.log("good by")
}