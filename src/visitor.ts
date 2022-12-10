import antlr4 from 'antlr4';

import ExprLexerVisitor from '../lib/ExprLexerVisitor.js';
import { tokensTypes } from './tokens.js';


export class TerminalVisitor extends ExprLexerVisitor {
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