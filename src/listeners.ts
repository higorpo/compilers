import antlr4 from 'antlr4';
import Recognizer from 'antlr4/Recognizer.js';

import GrammarParser from '../lib/ExprLexerParser.js';
import { tokensTypes } from './tokens.js';


export class ErrorListener extends antlr4.error.ErrorListener {
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

export class ParserListener extends antlr4.tree.ParseTreeListener {
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
