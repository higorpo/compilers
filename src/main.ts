import antlr4 from 'antlr4';
import Recognizer from 'antlr4/Recognizer.js';

import GrammarLexer from '../lib/ExprLexerLexer.js';
import GrammarParser from '../lib/ExprLexerParser.js';

const tokensTypes: Record<number, string> = {
    0: 'EOF',
    1: 'FUNCTION',
    2: 'INT',
    3: 'FLOAT',
    4: 'STRING',
    5: 'PRINT',
    6: 'READ',
    7: 'RETURN',
    8: 'IF',
    9: 'FOR',
    10: 'ELSE',
    11: 'BREAK',
    12: 'NEW',
    13: 'NULL',
    14: 'IDENT',
    15: 'INT_CONSTANT',
    16: 'FLOAT_CONSTANT',
    17: 'STRING_CONSTANT',
    18: 'WS',
    19: 'COMPARISON_OPERATOR',
    20: 'MATH_OPERATOR',
    21: 'SPECIAL_MATH_OPERATOR',
    22: 'ATTRIBUTION',
    23: 'COMMA',
    24: 'SEMICOMMA',
    25: 'LPAREN',
    26: 'RPAREN',
    27: 'LCURLY',
    28: 'RCURLY',
    29: 'LSQUARE',
    30: 'RSQUARE',
}

console.log('\n\n\n')

const input = ` principal ()
{
int C ;
int D ;
int R ;
C = 4;
D = 5;
R = func1 (C , D );
return ;
}
`;

class ErrorListener extends antlr4.error.ErrorListener {
    errors: string[];

    constructor() {
        super();
        this.errors = [];
        return this;
    }

    getErrors() {
        return this.errors;
    }

    syntaxError(recognizer: Recognizer, offendingSymbol: antlr4.Token, line: number, column: number, msg: string, e: antlr4.error.RecognitionException): void {
        this.errors.push(`
            ${msg}\tLinha ${line}\tColuna ${column} 
        `)
    }
}

const chars = new antlr4.InputStream(input);
const lexer = new GrammarLexer(chars);
const tokens = new antlr4.CommonTokenStream(lexer);
const parser = new GrammarParser(tokens);


const lexerErrorListener = new ErrorListener();
lexer.addErrorListener(lexerErrorListener)

const syntaxErrorListener = new ErrorListener();
parser.addErrorListener(syntaxErrorListener);

const tree = parser.program()

console.log('\nEntrada: ', tree.getText())

console.log('\n')


console.log('\n')

// Tem erros léxicos?
const lexerErrors = lexerErrorListener.getErrors();

if (lexerErrors.length > 0) {
    console.log('Há um erro na análise sintática!')
    console.log('\t', lexerErrors.join(''))
} else {
    console.log('Sucesso! Não há erros na análise léxica!')
    console.log('Lista de tokens lidos: ', tokens.getTokens(0, tree.getSourceInterval().stop, null).map(token => tokensTypes[token.type]).join(' ') + '\n')

}

// Tem erros sintáticos?
const syntaxErrors = syntaxErrorListener.getErrors();

if (syntaxErrors.length > 0) {
    console.log('Há um erro na análise sintática!')
    console.log('\t', syntaxErrors.join(''))
} else {
    console.log('Sucesso! Não há erros na análise sintática!')
}



// console.log('tokens', parser.getTokenStream().getTokens(0, 34, null).map(t => tokensTypes[t.type]).join(' '))
// console.log('tokens', parser.getTokenStream().getTokens(0, 34, null).map(t => t.text).join(' '))



// console.log(chars.toString())
// console.log(tree.toStringTree(parser.ruleNames, parser));