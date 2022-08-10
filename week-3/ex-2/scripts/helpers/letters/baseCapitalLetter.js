let isCapitalLetter = true;

const baseCapitalLetter = (symbol) => {
    isCapitalLetter = true
    
    switch (symbol) {
        case 'A':
            symbol = '@(';
            break;
        case 'B':
            symbol = '!@';
            break;
        case 'C':
            symbol = '(';
            break;
        case 'D':
            symbol = '@!';
            break;
        case 'E':
            symbol = '(-';
            break;
        case 'F':
            symbol = '!-';
            break;
        case 'G':
            symbol = '&';
            break;
        case 'H':
            symbol = '!%';
            break;
        case 'I':
            symbol = '!';
            break;
        case 'J':
            symbol = '.!';
            break;
        case 'K':
            symbol = '!<';
            break;
        case 'L':
            symbol = '!!';
            break;
        case 'M':
            symbol = '^^';
            break;
        case 'N':
            symbol = '%';
            break;
        case 'O':
            symbol = '()';
            break;
        case 'P':
            symbol = '!^@';
            break;
        case 'Q':
            symbol = '!.@';
            break;
        case 'R':
            symbol = '@<';
            break;
        case 'S':
            symbol = ')(';
            break;
        case 'T':
            symbol = '/_';
            break;
        case 'U':
            symbol = '^>';
            break;
        case 'V':
            symbol = '<!>';
            break;
        case 'W':
            symbol = '><';
            break;
        case 'X':
            symbol = '<>';
            break;
        case 'Y':
            symbol = '.=.';
            break;
        case 'Z':
            symbol = '#$';
            break;
        default:
            isCapitalLetter = false;
            break;
    }

    return {isCapitalLetter, symbol};
};