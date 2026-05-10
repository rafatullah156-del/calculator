let display   = document.getElementById("display");
let clear  = document.getElementById("btC");
let  allclear  = document.getElementById("btAC");
let  percent  = document.getElementById("bt%");
let  divide = document.getElementById("divide");
let seven = document.getElementById("bt7");
let eight = document.getElementById("bt8");
let nine = document.getElementById("bt9");
let multiply = document.getElementById("multiply");
let four = document.getElementById("bt4");
let five = document.getElementById("bt5");
let six = document.getElementById("bt6");
let minus = document.getElementById("sub");
let one = document.getElementById("bt1");
let two = document.getElementById("bt2");
let three = document.getElementById("bt3");
let plus = document.getElementById("add");
let zero = document.getElementById("bt0");
let dot = document.getElementById("dot");
let equals = document.getElementById("eq");
let del = document.getElementById("del");

clear.addEventListener("click", function(){
    display.innerText = "";
})
allclear.addEventListener("click", function(){
    display.innerText = "";
})
percent.addEventListener("click", function(){
    display.innerText += "%";
})
divide.addEventListener("click", function(){
    display.innerText += "/";
})
seven.addEventListener("click", function(){
    display.innerText += "7";
})
eight.addEventListener("click", function(){
    display.innerText += "8";
})
nine.addEventListener("click", function(){
    display.innerText += "9";
})
multiply.addEventListener("click", function(){
    display.innerText += "*";
})
four.addEventListener("click", function(){
    display.innerText += "4";
})
five.addEventListener("click", function(){
    display.innerText += "5";
})
six.addEventListener("click", function(){
    display.innerText += "6";
})
minus.addEventListener("click", function(){
    display.innerText += "-";
})
one.addEventListener("click", function(){
    display.innerText += "1";
})
two.addEventListener("click", function(){
    display.innerText += "2";
})
three.addEventListener("click", function(){
    display.innerText += "3";
})
plus.addEventListener("click", function(){
    display.innerText += "+";
})
zero.addEventListener("click", function(){
    display.innerText += "0";
})
dot.addEventListener("click", function(){
    display.innerText += ".";
})
equals.addEventListener("click", function(){
    display.innerText = eval(display.innerText)
})
del.addEventListener("click", function(){
    display.innerText = display.innerText.slice(0,-1);
})
document.addEventListener("keydown", function(event){

    let allowed = "0123456789+-*/.%";

    if(allowed.includes(event.key)){
        display.innerText += event.key;
    }

    if(event.key === "Enter"){
        display.innerText = eval(display.innerText);
    }

    if(event.key === "Backspace"){
        display.innerText = display.innerText.slice(0, -1);
    }

});