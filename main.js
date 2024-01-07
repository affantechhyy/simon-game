let gameSeq=[];
let userSeq=[];
let highScore = [];

let btns = ["yellow","red","purple","green"];
let started=false;
let level=0;
let h2=document.querySelector("h2");
document.addEventListener("keypress",function()  {
    if(started==false){
        console.log("game is started");``
        started=true;
        levelUp();
        
    }

});
function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function() {
        btn.classList.remove("flash");
    },150);

}

function userFlash(btn) {
    btn.classList.add("userflash");
    setTimeout(function() {
        btn.classList.remove("userflash");
    },150);
}
function levelUp(){
    userSeq = [] //hrbar user ko strt s value dalni hogi uske liye seq empty krrhe h 
    level++;
    h2.innerText=`Level ${level}`;

    let randIdx = Math.floor(Math.random()*3);
    // console.log(randIdx);
    let randColor = btns[randIdx];
    gameSeq.push(randColor);
    // console.log(gameSeq);
    // console.log(randColor);
    let randBtn = document.querySelector(`.${randColor}`);
    // console.log(randBtn);
    gameFlash(randBtn);
}

function checkAns(idx) {
    // console.log("curr level: ",level);
    // let idx = level-1;
    if (userSeq[idx]===gameSeq[idx]) {
        // ther will be a two case 1. y ki wo bich k clr ho seq m aisa hoga to hm neext clr k btn dabane k wait krnge then usko chck krnge 2.agr wo last hoga indx to levelup krdenge jaise 1 h to 2 etc
        if (userSeq.length == gameSeq.length) {
            setTimeout(levelUp,500);
        }
    }
    else{
        h2.innerHTML = `Game over!! <br><b>Your score is:${level-1}<b><br>Press any key to restart`;
        let currScore = level-1;
        highScore.push(currScore);
        // if (currScore>highScore) {
        //    
        // }
        // else {
            
        // }
        h=document.querySelector("h3");
        h.innerText=`HIGHEST SCORE: ${Math.max(...highScore)}`;
            
        
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";

        },150);
        reset();
    }
}
function btnPress() {
    // console.log(this);
    let btn = this; 
    userFlash(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    // console.log(userSeq);
    checkAns(userSeq.length-1);
}
 
let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
    btn.addEventListener("click",btnPress);
}

function reset() {
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}