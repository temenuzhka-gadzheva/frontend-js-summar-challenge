let input = prompt("Моля въведете текст за превод на латиница.");
let inputAsCharArray = input.split("");
let result = translate(inputAsCharArray);

console.log("Translated word: " + result);
