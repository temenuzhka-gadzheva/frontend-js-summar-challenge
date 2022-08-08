let input             = prompt("Моля въведете текст за превод на латиница.");

let inputAsCharArray  = input.split("");
let translatedResult  = []; 


console.log("as char array: " + inputAsCharArray);


inputAsCharArray.forEach(letter => {

    switch (letter) {
      case 'a': 
        letter = '@(';
        break;
      case 'b': 
        letter = '!@';
        break;
      case 'c': 
        letter = '(';
        break;
      case 'd': 
        letter = '@!';
        break;
      case 'e': 
        letter = '(-';
        break;
      case 'f': 
        letter = '!-';
        break;
      case 'g': 
        letter = '&';
        break;
      case 'h': 
        letter = '!%';
        break;
      case 'i': 
        letter = '!';
        break;
      case 'j': 
        letter = '.!';
        break;
      case 'k': 
        letter = '!<';
        break;
      case 'l': 
        letter = '!!';
        break;
      case 'm': 
        letter = '^^';
        break;
      case 'n': 
        letter = '%';
        break;
      case 'o': 
        letter = '()';
        break;
      case 'p': 
        letter = '!^@';
        break;
      case 'q': 
        letter = '!.@';
        break;
      case 'r': 
        letter = '@<';
        break;
      case 's': 
        letter = ')(';
        break;
      case 't': 
        letter = '/_';
        break;
      case 'u': 
        letter = '^>';
        break;
      case 'v': 
        letter = '<!>';
        break;
      case 'w': 
        letter = '><';
        break;
      case 'x': 
        letter = '<>';
        break;
      case 'y': 
        letter = '.=.';
        break;
      case 'z': 
        letter = '#$';
        break;
    }
  
    translatedResult.push(letter);
  });

  console.log("Translated: " + translatedResult.join(""));