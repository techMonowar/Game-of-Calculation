// alert("Connected Successfully")

var signs = new Array();
signs[0]=" + ";
signs[1]=" - ";
signs[2]=" * ";
signs[3]=" / ";
let sign = Math.floor(Math.random()*3)+0;

let el1 = Math.floor(Math.random()*9)+1;
let el2 = Math.floor(Math.random()*10)+1;
let el3 = Math.floor(Math.random()*100)+1;
// let el4 = Math.floor(Math.random()*1000)+1;

let eq = el1+signs[sign]+el2+signs[sign]+el3;

document.getElementById("equation").innerHTML = eq;

const form = document.querySelector('form#form');
const input = document.querySelector('input#input');

form?.addEventListener("submit",(e)=>{
    e.preventDefault()
    if(parseInt(input.value)===eval(eq))
    {
        document.getElementById("ans").innerHTML = "Correct";
        return
    }
    document.getElementById("ans").innerHTML = "InCorrect";
})

