import antlr4 from 'antlr4';
import Recognizer from 'antlr4/Recognizer.js';

import GrammarLexer from '../lib/ExprLexerLexer.js';
import GrammarParser from '../lib/ExprLexerParser.js';
import ExprLexerVisitor from '../lib/ExprLexerVisitor.js';
import { ErrorListener, ParserListener } from './listeners.js';
import { filterLeafs, parseStringTree } from './parsers.js';
import { tokensTypes } from './tokens.js';
import { TerminalVisitor } from './visitor.js';

console.log('\n\n\n')

const input = `def minhaFunc() { return; }`;

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

console.log('\nÁrvore de derivação em string: ', tree.toStringTree(parser.ruleNames, parser))

console.log('\nÁrvore de derivação em JSON: ', JSON.stringify(parseStringTree(tree.toStringTree(parser.ruleNames, parser))))

console.log('\nTodos os nós folhas da árvore de derivação: ', JSON.stringify(filterLeafs(parseStringTree(tree.toStringTree(parser.ruleNames, parser)).children!)))