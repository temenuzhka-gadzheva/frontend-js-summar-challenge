let input = prompt("Моля въведете текст за превод на латиница.");
let inputArray = input.split("");
let translatedInput = translate(inputArray);


alert(`Превод: ${translatedInput}`);

