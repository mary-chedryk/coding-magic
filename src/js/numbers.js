// import { findMax } from "./js/three_numbers.js";

// document.querySelectorAll(".num11, .num22, .num33").forEach(input => {
//     input.addEventListener("input", findMax);
// });

// export function findMax() {
//     let num1 = parseFloat(document.querySelector(".num11").value);
//     let num2 = parseFloat(document.querySelector(".num22").value);
//     let num3 = parseFloat(document.querySelector(".num33").value);
//     let resultElement = document.querySelector(".result-one");

//     if (!isNaN(num1) && !isNaN(num2) && !isNaN(num3)) {
//         let maxNumber = Math.max(num1, num2, num3);
//         resultElement.innerText = "Найбільше число, яке ви ввели - " + maxNumber;
//     } else {
//         resultElement.innerText = "Найбільше число, яке ви ввели - ${maxNumber}";
//     }
// }

// function findMax() {
//     let a = document.getElementById("number1").value;
//     let b = document.getElementById("number2").value;
//     let c = document.getElementById("number3").value;

//     a = Number(a);
//     b = Number(b);
//     c = Number(c);

//     if (isNaN(a) || isNaN(b) || isNaN(c)) {
//         document.getElementById("numbers-result").textContent = "Будь ласка, введіть числа.";
//         return;
//     }

//     let maxNumber = Math.max(a, b, c);
//     document.getElementById("numbers-result").textContent = maxNumber;
// }