const capitalLetter = (letter, isEvenPosition) => {

    if (letter === 'A') {
        letter = '@(';
    }
    if (letter === 'B') {
        letter = '!@';
    }
    if (letter === 'C') {
        letter = '(';
    }
    if (letter === 'D') {
        letter = '@!';
    }
    if (letter === 'E') {
        letter = '(-';
    }
    if (letter === 'F') {
        letter = '!-';
    }
    if (letter === 'G') {
        letter = '&';
    }
    if (letter === 'H') {
        letter = '!%';
    }
    if (letter === 'I') {
        letter = '!';
    }
    if (letter === 'J') {
        letter = '.!';
    }
    if (letter === 'K') {
        letter = '!<';
    }
    if (letter === 'L') {
        letter = '!!';
    }
    if (letter === 'M') {
        letter = '^^';
    }
    if (letter === 'N') {
        letter = '%';
    }
    if (letter === 'O') {
        letter = '()';
    }
    if (letter === 'P') {
        letter = '!^@';
    }
    if (letter === 'Q') {
        letter = '!.@';
    }
    if (letter === 'R') {
        letter = '@<';
    }
    if (letter === 'S') {
        letter = ')(';
    }
    if (letter === 'T') {
        letter = '/_';
    }
    if (letter === 'U') {
        letter = '^>';
    }
    if (letter === 'V') {
        letter = '<!>';
    }
    if (letter === 'W') {
        letter = '><';
    }
    if (letter === 'X') {
        letter = '<>';
    }
    if (letter === 'Y') {
        letter = '.=.';
    }
    if (letter === 'Z') {
        letter = '#$';
    }

    if(isEvenPosition) {
        return `[${letter}]`;
    }else {
        return `{${letter}}`;
    }
};