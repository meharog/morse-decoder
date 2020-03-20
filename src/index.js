const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let decExpr = '';
    for (let i = 0; i < expr.length; i += 10) {
        let subExpr = expr.substr(i,10);
        if (subExpr === '**********') {
            decExpr = decExpr + ' ';
        } else {
            let morseWord = '';
            for (let k = 0; k < subExpr.length; k += 2) {
                let letterExpr = subExpr.substr(k,2);
                switch (letterExpr) {
                    case '10': morseWord = morseWord + '.';
                    break;
                    case '11': morseWord = morseWord + '-';
                    break;
                };
            };
            decExpr = decExpr + MORSE_TABLE[morseWord];
        };
    };
    return decExpr
};

module.exports = {
    decode
}