const addbtn = document.getElementById('plus');
const input = document.getElementById('number');
const result = document.getElementById('current-result');
let currentResult = 0;
function ShowResult(currentResult){
    result.textContent = currentResult;
}
function addition(){
    currentResult = currentResult + input.value;
    ShowResult(currentResult);
}
addbtn.addEventListener('click',addition);