let randomNumber;
let arr=["blue","green","red","yellow"];
let seqarray=[];
let level=1;
var delayInMilliseconds = 1000;
let greenct,bluect,redct,yellowct;
let inpArray=[];
let inp;
let curr=0;
let gameovr=new Audio("sounds/wrong.mp3");
let bluesound=new Audio("sounds/blue.mp3");
let greensound=new Audio("sounds/green.mp3");
let redsound=new Audio("sounds/red.mp3");
let yellowsound=new Audio("sounds/yellow.mp3");
let levlstr;
let levelnum=0;
let flag=0;
let flag1=1;

document.addEventListener("keypress",function(){
    if(flag==0){
        flag++;
        flag1=0;
        next();
    }
});

function check(){
    if(seqarray[curr]!=inp){
        gameover();
        gameovr.play();
    }
    else{
        curr++;
    }
    // levelup();
    if(curr==seqarray.length){
        levelnum++;
        win();
        levelup();
        next();
        curr=0;
    }
}
function win(){
    document.body.style.backgroundColor="#90EE90";
    setTimeout(function () {  
        document.body.style.backgroundColor="";
    }, 500);
}
function levelup(){
     levlstr="level "+levelnum;
    document.querySelector("#level-title").innerText=levlstr;
}
function counterGreen(){
    if(flag1==0){
        inp=2;  
        greensound.play();
        check();
    }
}
function counterBlue(){
    if(flag1==0){
    inp=1; 
    bluesound.play();
    check();
    }
}
function counterRed(){
    if(flag1==0){
    inp=3;
    redsound.play();
    check();
    }
}
function counterYellow(){
    if(flag1==0){
    inp=4;
    yellowsound.play();
    check();
    }
}

function gameover(){
    document.body.style.backgroundColor="#DC143C";
    gameovr.play();
    flag1=1;
    setTimeout(function () {  
        alert("gameover " + levlstr);
        window.location.reload();
    }, 1000);
    
}
function border(type){
    document.querySelector(type).style.borderColor="white";
    setTimeout(function () {  
        document.querySelector(type).style.borderColor="";
    }, 500);
}
function next(){
    randomNumber=Math.floor(Math.random()*4)+1;
    if(randomNumber==1){
       border("#blue");
    }
    if(randomNumber==2){
        border("#green");
    }
    if(randomNumber==3){
        border("#red");
    }
    if(randomNumber==4){
        border("#yellow");
    }
    seqarray.push(randomNumber);
     
}