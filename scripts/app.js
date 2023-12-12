
function sayHello(name, lastName){
    console.log("hello" + "name" + lastName);
let color = "blue";
}

function sum(num1, num2){
    const result = num1 + num2;
    console.log(result);
    return result;

}
function init()
{
    console.log("hello world");
    let anything = "tyrell";
    sayHello(anything, "Patton");
    const result = sum(2,2);
    console.log(result);
}


function printNumbers(){
// Print numbers from 1 to 20 not 7 or 13
for (let i = 1; i <= 20; i++) 
{
    if (i!=7 && i!=13)
        {
    console.log(i);
        }
}
}
window.onload = init;//we are forcing the computer to wait