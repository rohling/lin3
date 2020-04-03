import { sum, double } from './calculator.js'


function calculate() {
    let number = document.getElementById("number").value;
    document.getElementById("result").innerHTML = double(number);
}
document.querySelector('#btnCalculate').addEventListener('click', calculate)