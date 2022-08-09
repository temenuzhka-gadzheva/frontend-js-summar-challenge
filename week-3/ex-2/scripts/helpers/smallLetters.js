let isBigLetter   = false;
let smallLetters  = {};

const smallLetter = (letter) => {

    if (letter === 'a') {
        letter = '@(';
    } else if (letter === 'b') {
        letter = '!@';
    } else if (letter === 'c') {
        letter = '(';
    } else if (letter === 'd') {
        letter = '@!';
    } else if (letter === 'e') {
        letter = '(-';
    } else if (letter === 'f') {
        letter = '!-';
    } else if (letter === 'g') {
        letter = '&';
    } else if (letter === 'h') {
        letter = '!%';
    } else if (letter === 'i') {
        letter = '!';
    } else if (letter === 'j') {
        letter = '.!';
    } else if (letter === 'k') {
        letter = '!<';
    } else if (letter === 'l') {
        letter = '!!';
    } else if (letter === 'm') {
        letter = '^^';
    } else if (letter === 'n') {
        letter = '%';
    } else if (letter === 'o') {
        letter = '()';
    } else if (letter === 'p') {
        letter = '!^@';
    } else if (letter === 'q') {
        letter = '!.@';
    } else if (letter === 'r') {
        letter = '@<';
    } else if (letter === 's') {
        letter = ')(';
    } else if (letter === 't') {
        letter = '/_';
    } else if (letter === 'u') {
        letter = '^>';
    } else if (letter === 'v') {
        letter = '<!>';
    } else if (letter === 'w') {
        letter = '><';
    } else if (letter === 'x') {
        letter = '<>';
    } else if (letter === 'y') {
        letter = '.=.';
    } else if (letter === 'z') {
        letter = '#$';
    } else {
        isBigLetter = true;
    }

    smallLetters = { letter, isBigLetter };

    return smallLetters;
};
