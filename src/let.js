for(let i = 0; i<=6 ;i++){
    for(let b=0;b<i ; b++){
        console.log("*");
    }
}
for(let a = 6; a>=1;a--){
    for(let c = 0; c<a ; c++){
        console.log("*");
    }
}
const resolt = document.getElementById("resolt");
const num = document.getElementById("num");
const bt = document.getElementById("bt-play");

function showingresolt(){
    let userChois = +num.value;
    let computerChois = Math.random()*300;
    if(userChois> computerChois){
resolt.textContent = "you Won"
    }
    else if(computerChois>userChois){
resolt.textContent = "Computer Won"
    }
    else{
resolt.textContent = "You have choisen equal number"
    }
}
bt.addEventListener("click",showingresolt);