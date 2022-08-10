let isSmallLetter = true;

const smallLetter = (symbol) => {
    switch (symbol) {
        case 'a':
            symbol = '@(';
            break;
        case 'b':
            symbol = '!@';
            break;
        case 'c':
            symbol = '(';
            break;
        case 'd':
            symbol = '@!';
            break;
        case 'e':
            symbol = '(-';
            break;
        case 'f':
            symbol = '!-';
            break;
        case 'g':
            symbol = '&';
            break;
        case 'h':
            symbol = '!%';
            break;
        case 'i':
            symbol = '!';
            break;
        case 'j':
            symbol = '.!';
            break;
        case 'k':
            symbol = '!<';
            break;
        case 'l':
            symbol = '!!';
            break;
        case 'm':
            symbol = '^^';
            break;
        case 'n':
            symbol = '%';
            break;
        case 'o':
            symbol = '()';
            break;
        case 'p':
            symbol = '!^@';
            break;
        case 'q':
            symbol = '!.@';
            break;
        case 'r':
            symbol = '@<';
            break;
        case 's':
            symbol = ')(';
            break;
        case 't':
            symbol = '/_';
            break;
        case 'u':
            symbol = '^>';
            break;
        case 'v':
            symbol = '<!>';
            break;
        case 'w':
            symbol = '><';
            break;
        case 'x':
            symbol = '<>';
            break;
        case 'y':
            symbol = '.=.';
            break;
        case 'z':
            symbol = '#$';
            break;
        default:
            isSmallLetter = false;
            break;
    }

    return { symbol, isSmallLetter };
};

