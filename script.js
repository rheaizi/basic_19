"use strict";
let num=20;
function showFirstMessage(text){
    console.log(text);
    console.log(num);
    
}

showFirstMessage("Hello World");
console.log(num);



console.log(calc(4,3));
console.log(calc(4,6));
console.log(calc(10,3));

function calc(a,b){
    return (a+b);
}

function ret(){
    let num=50;
    return num;
}
const anotherNum = ret();
console.log(anotherNum);

const logger = function(){
    console.log("Hello");
}
logger();

const calculator1 = (a,b) => {return a+b;};
const calculator2 = (a,b) => a+b;
