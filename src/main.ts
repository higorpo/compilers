import antlr4 from 'antlr4';
import Recognizer from 'antlr4/Recognizer.js';

import GrammarLexer from '../lib/ExprLexerLexer.js';
import GrammarParser from '../lib/ExprLexerParser.js';
import ExprLexerVisitor from '../lib/ExprLexerVisitor.js';

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

const input = `def func1 ( int A , int B , int C , int D )
{ 
	int SM [ 6 ] ;
	SM [ 0 ] = A + B ;
	print ( SM [ 0 ] ) ;
	SM [ 1 ] = B * C ;
	print ( SM [ 1 ] ) ;
	SM [ 2 ] = B / C ;
	print ( SM [ 2 ] ) ;
	SM [ 3 ] = A * B ;
	print ( SM [ 3 ] ) ;
	SM [ 4 ] = C % D ;
	print ( SM [ 4 ] ) ;
	SM [ 5 ] = A - B ;
	print ( SM [ 5 ] ) ;
	SM [ 6 ] = ( A + B ) - ( C + D ) ;
	print ( SM [ 6 ] ) ;
	print ( SM ) ;
	return ;
}

def func2 ( int A , int B )
{ 
	print ( A ) ;
	print ( B ) ;
	C = A + B ;
	print ( C ) ;
	break ;
	return ;
}

def func3 ( int A , int B, int C )
{
    float N ; 
		A = 10 ; 
		B =  8 ;
		N = 10 / 8 ;
		C = 6 ; 
	float M ;
		M = N * C ;
	print ( A ) ;
	print ( B ) ;
	print ( C ) ;
	print ( N ) ;
	print ( M ) ;
    return ; 
}

def func4 ( int A )
{
    for ( A = 0 ; + 1 ; A = 20 ) {
      A = A - 1 ;
	  } ;
	  print ( A ) ;
    return ;
}

def func5 ( int A , int B , int C , int D )
{ 
	N = A - B ;
	M = C - D ;
	if ( N < M ) { 
	N = 10 ; 
	} 
	else { 
	N = 8 ; 
	} ;
	print ( N ) ;
	print ( M ) ;
	return ;
}

def fun6 ( int A , int B , int C , int D )
{
	N = A * B ;
	M = C * D ;
	if ( N >= M ) {
		N = maior ;
    } 
	else {
		N = menor ;
	} ;
	print ( N ) ;
	print ( M ) ;
	return ;
}

def principal ( )
{
	int X ;
	int Z ;
	int W ;
	int T ;
	int Y ;
	X = 4 ;
	Z = 5 ;
	W = 10 ;
	T = 8 ;
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
        if (e instanceof antlr4.error.NoViableAltException) {
            this.errors.push(`\n\tERRO: Entrada não esperada: ${offendingSymbol.text} | Esperava receber token do tipo ${e.getExpectedTokens().toTokenString(GrammarParser.literalNames as string[], GrammarParser.symbolicNames as string[])}, no entanto recebeu ${tokensTypes[e.offendingToken.type]}. Token anterior é ${tokensTypes[e.startToken.type]} | \tLinha ${line}\tColuna ${column} `)
        } if (e instanceof antlr4.error.LexerNoViableAltException) {
            this.errors.push(`\n\tERRO: Token '${e.input.toString()[e.startIndex]}' não reconhecido na linha ${line} e coluna ${column} `)
        } else {
            this.errors.push(`\n\tERRO: ${msg}\tLinha ${line}\tColuna ${column}`)
        }
    }
}

class ParserListener extends antlr4.tree.ParseTreeListener {
    static parserOrder: string[] = [];
    static visitedTerminals: string[] = [];
    static allVisits: string[] = [];

    enterEveryRule(ctx: antlr4.ParserRuleContext): void {
        ParserListener.parserOrder.push(GrammarParser.ruleNames[ctx.ruleIndex]);
        ParserListener.allVisits.push(GrammarParser.ruleNames[ctx.ruleIndex]);
    }

    visitTerminal(node: antlr4.tree.TerminalNode): void {
        ParserListener.visitedTerminals.push(tokensTypes[node.symbol.type])
        ParserListener.allVisits.push(tokensTypes[node.symbol.type]);
    }
}

class TerminalVisitor extends ExprLexerVisitor {
    static symbolTable: any = [];

    visitTerminal(node: antlr4.tree.TerminalNode): void {
        const symbol = tokensTypes[node.getSymbol().type];
        if (symbol === 'IDENT' || symbol === 'INT_CONSTANT' || symbol === 'FLOAT_CONSTANT' || symbol === 'STRING_CONSTANT') {
            TerminalVisitor.symbolTable[tokensTypes[node.getSymbol().type]] = [...TerminalVisitor.symbolTable[tokensTypes[node.getSymbol().type]] || [], {
                value: node.getSymbol().text,
                line: node.getPayload().line,
                column_start: node.getPayload().start,
                column_stop: node.getPayload().stop
            }]
        }
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
parser.addParseListener(new ParserListener())

const tree = parser.program()

const visitor = new TerminalVisitor()

visitor.visitProgram(tree);

console.log('\nEntrada: ', tree.getText() + '\n')

// Tem erros léxicos?
const lexerErrors = lexerErrorListener.getErrors();

if (lexerErrors.length > 0) {
    console.log('Há um erro na análise léxica!')
    console.log('\t', lexerErrors.join(''))
} else {
    console.log('Sucesso! Não há erros na análise léxica!')
    console.log('\nLista de tokens lidos: ', tokens.getTokens(0, tree.getSourceInterval().stop, null).map(token => tokensTypes[token.type]).join(' ') + '\n')

    console.log('\n')

    // Tem erros sintáticos?
    const syntaxErrors = syntaxErrorListener.getErrors();

    if (syntaxErrors.length > 0) {
        console.log('Há um erro na análise sintática!')
        console.log('\t', syntaxErrors.join(''))
    } else {
        console.log('Sucesso! Não há erros na análise sintática!')

        console.log('\n')

        console.log('Ordem de não-terminais visitados: ', ParserListener.parserOrder)
        console.log('Ordem de terminais visitados: ', ParserListener.visitedTerminals)
        console.log('Ordem de todos os símbolos: ', ParserListener.allVisits)
        console.log('Token não terminal mais à esquerda de a que é esperado: ', ParserListener.parserOrder.reverse()[0])
        console.log('Tabela de símbolos: ', TerminalVisitor.symbolTable)
    }
}
