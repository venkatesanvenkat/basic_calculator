var n1=parseInt(prompt("Enter a first number"));
var n2=parseInt(prompt("Enter a second number"));
var op=prompt("Enter the opertor");
switch(op){
    case '+': document.getElementById("result").textContent=(n1+n2);break;
    case '-': document.getElementById("result").textContent=(n1-n2);break;
    case '*': document.getElementById("result").textContent=(n1*n2);break;
    case '/': document.getElementById("result").textContent=(n1/n2);break;
}