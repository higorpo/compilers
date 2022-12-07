// Generated from java-escape by ANTLR 4.11.1
// jshint ignore: start
import antlr4 from 'antlr4';
import ExprLexerListener from './ExprLexerListener.js';
import ExprLexerVisitor from './ExprLexerVisitor.js';

const serializedATN = [4, 1, 30, 292, 2, 0, 7, 0, 2, 1, 7, 1, 2, 2, 7, 2, 2, 3, 7, 3, 2, 4, 7,
    4, 2, 5, 7, 5, 2, 6, 7, 6, 2, 7, 7, 7, 2, 8, 7, 8, 2, 9, 7, 9, 2, 10, 7, 10, 2, 11, 7, 11, 2, 12, 7, 12,
    2, 13, 7, 13, 2, 14, 7, 14, 2, 15, 7, 15, 2, 16, 7, 16, 2, 17, 7, 17, 2, 18, 7, 18, 2, 19, 7, 19, 2,
    20, 7, 20, 2, 21, 7, 21, 2, 22, 7, 22, 2, 23, 7, 23, 2, 24, 7, 24, 2, 25, 7, 25, 2, 26, 7, 26, 2, 27,
    7, 27, 2, 28, 7, 28, 2, 29, 7, 29, 2, 30, 7, 30, 2, 31, 7, 31, 1, 0, 1, 0, 1, 0, 3, 0, 68, 8, 0, 1, 1,
    1, 1, 1, 1, 1, 1, 3, 1, 74, 8, 1, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 3, 1, 3, 1, 3, 1,
    3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 3, 3, 98, 8, 3, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4,
    1, 4, 3, 4, 107, 8, 4, 1, 5, 1, 5, 1, 5, 1, 5, 1, 5, 1, 5, 1, 5, 1, 5, 1, 5, 1, 5, 1, 5, 1, 5, 1, 5, 1, 5,
    1, 5, 1, 5, 1, 5, 1, 5, 1, 5, 1, 5, 1, 5, 1, 5, 1, 5, 1, 5, 3, 5, 133, 8, 5, 1, 6, 1, 6, 1, 6, 1, 6, 1, 6,
    1, 6, 1, 6, 1, 6, 1, 6, 3, 6, 144, 8, 6, 1, 7, 1, 7, 1, 7, 1, 7, 1, 7, 3, 7, 151, 8, 7, 1, 8, 1, 8, 1, 8,
    1, 8, 1, 8, 1, 8, 1, 8, 1, 8, 1, 8, 1, 8, 1, 8, 1, 8, 3, 8, 165, 8, 8, 1, 9, 1, 9, 1, 9, 1, 9, 1, 9, 1, 10,
    1, 10, 1, 10, 1, 10, 1, 10, 3, 10, 177, 8, 10, 1, 11, 1, 11, 1, 11, 1, 12, 1, 12, 1, 12, 1, 13, 1, 13,
    1, 14, 1, 14, 1, 14, 1, 14, 1, 14, 1, 14, 1, 14, 1, 15, 1, 15, 1, 15, 3, 15, 197, 8, 15, 1, 16, 1, 16,
    1, 16, 1, 16, 1, 16, 1, 16, 1, 16, 1, 16, 1, 16, 1, 16, 1, 17, 1, 17, 1, 17, 1, 18, 1, 18, 3, 18, 214,
    8, 18, 1, 19, 1, 19, 1, 19, 1, 19, 1, 19, 1, 19, 1, 19, 1, 19, 1, 19, 3, 19, 225, 8, 19, 1, 20, 1, 20,
    1, 20, 1, 20, 3, 20, 231, 8, 20, 1, 21, 1, 21, 1, 21, 1, 22, 1, 22, 1, 22, 3, 22, 239, 8, 22, 1, 23,
    1, 23, 3, 23, 243, 8, 23, 1, 24, 1, 24, 1, 24, 1, 25, 1, 25, 1, 25, 1, 25, 1, 25, 3, 25, 253, 8, 25,
    1, 26, 1, 26, 1, 26, 1, 27, 1, 27, 1, 27, 1, 27, 1, 27, 3, 27, 263, 8, 27, 1, 28, 1, 28, 1, 28, 3, 28,
    268, 8, 28, 1, 29, 1, 29, 1, 29, 1, 29, 1, 29, 1, 29, 1, 29, 1, 29, 1, 29, 3, 29, 279, 8, 29, 1, 30,
    1, 30, 1, 30, 1, 31, 1, 31, 1, 31, 1, 31, 1, 31, 1, 31, 3, 31, 290, 8, 31, 1, 31, 0, 0, 32, 0, 2, 4,
    6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46, 48, 50, 52, 54,
    56, 58, 60, 62, 0, 0, 300, 0, 67, 1, 0, 0, 0, 2, 73, 1, 0, 0, 0, 4, 75, 1, 0, 0, 0, 6, 97, 1, 0, 0, 0,
    8, 106, 1, 0, 0, 0, 10, 132, 1, 0, 0, 0, 12, 143, 1, 0, 0, 0, 14, 150, 1, 0, 0, 0, 16, 164, 1, 0, 0,
    0, 18, 166, 1, 0, 0, 0, 20, 176, 1, 0, 0, 0, 22, 178, 1, 0, 0, 0, 24, 181, 1, 0, 0, 0, 26, 184, 1, 0,
    0, 0, 28, 186, 1, 0, 0, 0, 30, 196, 1, 0, 0, 0, 32, 198, 1, 0, 0, 0, 34, 208, 1, 0, 0, 0, 36, 213, 1,
    0, 0, 0, 38, 224, 1, 0, 0, 0, 40, 230, 1, 0, 0, 0, 42, 232, 1, 0, 0, 0, 44, 238, 1, 0, 0, 0, 46, 242,
    1, 0, 0, 0, 48, 244, 1, 0, 0, 0, 50, 252, 1, 0, 0, 0, 52, 254, 1, 0, 0, 0, 54, 262, 1, 0, 0, 0, 56, 267,
    1, 0, 0, 0, 58, 278, 1, 0, 0, 0, 60, 280, 1, 0, 0, 0, 62, 289, 1, 0, 0, 0, 64, 68, 3, 10, 5, 0, 65, 68,
    3, 2, 1, 0, 66, 68, 5, 0, 0, 1, 67, 64, 1, 0, 0, 0, 67, 65, 1, 0, 0, 0, 67, 66, 1, 0, 0, 0, 68, 1, 1, 0,
    0, 0, 69, 70, 3, 4, 2, 0, 70, 71, 3, 2, 1, 0, 71, 74, 1, 0, 0, 0, 72, 74, 3, 4, 2, 0, 73, 69, 1, 0, 0,
    0, 73, 72, 1, 0, 0, 0, 74, 3, 1, 0, 0, 0, 75, 76, 5, 1, 0, 0, 76, 77, 5, 14, 0, 0, 77, 78, 5, 25, 0, 0,
    78, 79, 3, 6, 3, 0, 79, 80, 5, 26, 0, 0, 80, 81, 5, 27, 0, 0, 81, 82, 3, 34, 17, 0, 82, 83, 5, 28, 0,
    0, 83, 5, 1, 0, 0, 0, 84, 85, 5, 2, 0, 0, 85, 86, 5, 14, 0, 0, 86, 87, 5, 23, 0, 0, 87, 98, 3, 6, 3, 0,
    88, 89, 5, 3, 0, 0, 89, 90, 5, 14, 0, 0, 90, 91, 5, 23, 0, 0, 91, 98, 3, 6, 3, 0, 92, 93, 5, 4, 0, 0,
    93, 94, 5, 14, 0, 0, 94, 95, 5, 23, 0, 0, 95, 98, 3, 6, 3, 0, 96, 98, 3, 8, 4, 0, 97, 84, 1, 0, 0, 0,
    97, 88, 1, 0, 0, 0, 97, 92, 1, 0, 0, 0, 97, 96, 1, 0, 0, 0, 98, 7, 1, 0, 0, 0, 99, 100, 5, 2, 0, 0, 100,
    107, 5, 14, 0, 0, 101, 102, 5, 3, 0, 0, 102, 107, 5, 14, 0, 0, 103, 104, 5, 4, 0, 0, 104, 107, 5,
    14, 0, 0, 105, 107, 1, 0, 0, 0, 106, 99, 1, 0, 0, 0, 106, 101, 1, 0, 0, 0, 106, 103, 1, 0, 0, 0, 106,
    105, 1, 0, 0, 0, 107, 9, 1, 0, 0, 0, 108, 109, 3, 12, 6, 0, 109, 110, 5, 24, 0, 0, 110, 133, 1, 0,
    0, 0, 111, 112, 3, 16, 8, 0, 112, 113, 5, 24, 0, 0, 113, 133, 1, 0, 0, 0, 114, 115, 3, 22, 11, 0,
    115, 116, 5, 24, 0, 0, 116, 133, 1, 0, 0, 0, 117, 118, 3, 24, 12, 0, 118, 119, 5, 24, 0, 0, 119,
    133, 1, 0, 0, 0, 120, 121, 3, 26, 13, 0, 121, 122, 5, 24, 0, 0, 122, 133, 1, 0, 0, 0, 123, 133, 3,
    28, 14, 0, 124, 133, 3, 32, 16, 0, 125, 126, 5, 27, 0, 0, 126, 127, 3, 34, 17, 0, 127, 128, 5, 28,
    0, 0, 128, 133, 1, 0, 0, 0, 129, 130, 5, 11, 0, 0, 130, 133, 5, 24, 0, 0, 131, 133, 5, 24, 0, 0, 132,
    108, 1, 0, 0, 0, 132, 111, 1, 0, 0, 0, 132, 114, 1, 0, 0, 0, 132, 117, 1, 0, 0, 0, 132, 120, 1, 0,
    0, 0, 132, 123, 1, 0, 0, 0, 132, 124, 1, 0, 0, 0, 132, 125, 1, 0, 0, 0, 132, 129, 1, 0, 0, 0, 132,
    131, 1, 0, 0, 0, 133, 11, 1, 0, 0, 0, 134, 135, 5, 2, 0, 0, 135, 136, 5, 14, 0, 0, 136, 144, 3, 14,
    7, 0, 137, 138, 5, 3, 0, 0, 138, 139, 5, 14, 0, 0, 139, 144, 3, 14, 7, 0, 140, 141, 5, 4, 0, 0, 141,
    142, 5, 14, 0, 0, 142, 144, 3, 14, 7, 0, 143, 134, 1, 0, 0, 0, 143, 137, 1, 0, 0, 0, 143, 140, 1,
    0, 0, 0, 144, 13, 1, 0, 0, 0, 145, 146, 5, 29, 0, 0, 146, 147, 5, 15, 0, 0, 147, 148, 5, 30, 0, 0,
    148, 151, 3, 14, 7, 0, 149, 151, 1, 0, 0, 0, 150, 145, 1, 0, 0, 0, 150, 149, 1, 0, 0, 0, 151, 15,
    1, 0, 0, 0, 152, 153, 3, 60, 30, 0, 153, 154, 5, 22, 0, 0, 154, 155, 3, 42, 21, 0, 155, 165, 1, 0,
    0, 0, 156, 157, 3, 60, 30, 0, 157, 158, 5, 22, 0, 0, 158, 159, 3, 38, 19, 0, 159, 165, 1, 0, 0, 0,
    160, 161, 3, 60, 30, 0, 161, 162, 5, 22, 0, 0, 162, 163, 3, 18, 9, 0, 163, 165, 1, 0, 0, 0, 164,
    152, 1, 0, 0, 0, 164, 156, 1, 0, 0, 0, 164, 160, 1, 0, 0, 0, 165, 17, 1, 0, 0, 0, 166, 167, 5, 14,
    0, 0, 167, 168, 5, 25, 0, 0, 168, 169, 3, 20, 10, 0, 169, 170, 5, 26, 0, 0, 170, 19, 1, 0, 0, 0, 171,
    172, 5, 14, 0, 0, 172, 173, 5, 23, 0, 0, 173, 177, 3, 20, 10, 0, 174, 177, 5, 14, 0, 0, 175, 177,
    1, 0, 0, 0, 176, 171, 1, 0, 0, 0, 176, 174, 1, 0, 0, 0, 176, 175, 1, 0, 0, 0, 177, 21, 1, 0, 0, 0, 178,
    179, 5, 5, 0, 0, 179, 180, 3, 42, 21, 0, 180, 23, 1, 0, 0, 0, 181, 182, 5, 6, 0, 0, 182, 183, 3, 60,
    30, 0, 183, 25, 1, 0, 0, 0, 184, 185, 5, 7, 0, 0, 185, 27, 1, 0, 0, 0, 186, 187, 5, 8, 0, 0, 187, 188,
    5, 25, 0, 0, 188, 189, 3, 42, 21, 0, 189, 190, 5, 26, 0, 0, 190, 191, 3, 10, 5, 0, 191, 192, 3, 30,
    15, 0, 192, 29, 1, 0, 0, 0, 193, 194, 5, 10, 0, 0, 194, 197, 3, 10, 5, 0, 195, 197, 1, 0, 0, 0, 196,
    193, 1, 0, 0, 0, 196, 195, 1, 0, 0, 0, 197, 31, 1, 0, 0, 0, 198, 199, 5, 9, 0, 0, 199, 200, 5, 25,
    0, 0, 200, 201, 3, 16, 8, 0, 201, 202, 5, 24, 0, 0, 202, 203, 3, 42, 21, 0, 203, 204, 5, 24, 0, 0,
    204, 205, 3, 16, 8, 0, 205, 206, 5, 26, 0, 0, 206, 207, 3, 10, 5, 0, 207, 33, 1, 0, 0, 0, 208, 209,
    3, 10, 5, 0, 209, 210, 3, 36, 18, 0, 210, 35, 1, 0, 0, 0, 211, 214, 3, 34, 17, 0, 212, 214, 1, 0,
    0, 0, 213, 211, 1, 0, 0, 0, 213, 212, 1, 0, 0, 0, 214, 37, 1, 0, 0, 0, 215, 216, 5, 12, 0, 0, 216,
    217, 5, 2, 0, 0, 217, 225, 3, 40, 20, 0, 218, 219, 5, 12, 0, 0, 219, 220, 5, 3, 0, 0, 220, 225, 3,
    40, 20, 0, 221, 222, 5, 12, 0, 0, 222, 223, 5, 4, 0, 0, 223, 225, 3, 40, 20, 0, 224, 215, 1, 0, 0,
    0, 224, 218, 1, 0, 0, 0, 224, 221, 1, 0, 0, 0, 225, 39, 1, 0, 0, 0, 226, 227, 3, 48, 24, 0, 227, 228,
    3, 40, 20, 0, 228, 231, 1, 0, 0, 0, 229, 231, 3, 48, 24, 0, 230, 226, 1, 0, 0, 0, 230, 229, 1, 0,
    0, 0, 231, 41, 1, 0, 0, 0, 232, 233, 3, 48, 24, 0, 233, 234, 3, 44, 22, 0, 234, 43, 1, 0, 0, 0, 235,
    236, 5, 19, 0, 0, 236, 239, 3, 46, 23, 0, 237, 239, 3, 46, 23, 0, 238, 235, 1, 0, 0, 0, 238, 237,
    1, 0, 0, 0, 239, 45, 1, 0, 0, 0, 240, 243, 3, 48, 24, 0, 241, 243, 1, 0, 0, 0, 242, 240, 1, 0, 0, 0,
    242, 241, 1, 0, 0, 0, 243, 47, 1, 0, 0, 0, 244, 245, 3, 52, 26, 0, 245, 246, 3, 50, 25, 0, 246, 49,
    1, 0, 0, 0, 247, 248, 5, 20, 0, 0, 248, 249, 3, 52, 26, 0, 249, 250, 3, 50, 25, 0, 250, 253, 1, 0,
    0, 0, 251, 253, 1, 0, 0, 0, 252, 247, 1, 0, 0, 0, 252, 251, 1, 0, 0, 0, 253, 51, 1, 0, 0, 0, 254, 255,
    3, 56, 28, 0, 255, 256, 3, 54, 27, 0, 256, 53, 1, 0, 0, 0, 257, 258, 5, 21, 0, 0, 258, 259, 3, 56,
    28, 0, 259, 260, 3, 54, 27, 0, 260, 263, 1, 0, 0, 0, 261, 263, 1, 0, 0, 0, 262, 257, 1, 0, 0, 0, 262,
    261, 1, 0, 0, 0, 263, 55, 1, 0, 0, 0, 264, 265, 5, 20, 0, 0, 265, 268, 3, 58, 29, 0, 266, 268, 3,
    58, 29, 0, 267, 264, 1, 0, 0, 0, 267, 266, 1, 0, 0, 0, 268, 57, 1, 0, 0, 0, 269, 279, 5, 15, 0, 0,
    270, 279, 5, 16, 0, 0, 271, 279, 5, 17, 0, 0, 272, 279, 5, 13, 0, 0, 273, 279, 3, 60, 30, 0, 274,
    275, 5, 25, 0, 0, 275, 276, 3, 48, 24, 0, 276, 277, 5, 26, 0, 0, 277, 279, 1, 0, 0, 0, 278, 269,
    1, 0, 0, 0, 278, 270, 1, 0, 0, 0, 278, 271, 1, 0, 0, 0, 278, 272, 1, 0, 0, 0, 278, 273, 1, 0, 0, 0,
    278, 274, 1, 0, 0, 0, 279, 59, 1, 0, 0, 0, 280, 281, 5, 14, 0, 0, 281, 282, 3, 62, 31, 0, 282, 61,
    1, 0, 0, 0, 283, 284, 5, 29, 0, 0, 284, 285, 3, 48, 24, 0, 285, 286, 5, 30, 0, 0, 286, 287, 3, 62,
    31, 0, 287, 290, 1, 0, 0, 0, 288, 290, 1, 0, 0, 0, 289, 283, 1, 0, 0, 0, 289, 288, 1, 0, 0, 0, 290,
    63, 1, 0, 0, 0, 20, 67, 73, 97, 106, 132, 143, 150, 164, 176, 196, 213, 224, 230, 238, 242, 252,
    262, 267, 278, 289];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map((ds, index) => new antlr4.dfa.DFA(ds, index));

const sharedContextCache = new antlr4.PredictionContextCache();

export default class ExprLexerParser extends antlr4.Parser {

    static grammarFileName = "java-escape";
    static literalNames = [null, "'def'", "'int'", "'float'", "'string'",
        "'print'", "'read'", "'return'", "'if'", "'for'",
        "'else'", "'break'", "'new'", "'null'", null,
        null, null, null, null, null, null, null, "'='",
        "','", "';'", "'('", "')'", "'{'", "'}'", "'['",
        "']'"];
    static symbolicNames = [null, "FUNCTION", "INT", "FLOAT", "STRING",
        "PRINT", "READ", "RETURN", "IF", "FOR", "ELSE",
        "BREAK", "NEW", "NULL", "IDENT", "INT_CONSTANT",
        "FLOAT_CONSTANT", "STRING_CONSTANT", "WS",
        "COMPARISON_OPERATOR", "MATH_OPERATOR", "SPECIAL_MATH_OPERATOR",
        "ATTRIBUTION", "COMMA", "SEMICOMMA", "LPAREN",
        "RPAREN", "LCURLY", "RCURLY", "LSQUARE", "RSQUARE"];
    static ruleNames = ["program", "funclist", "funcdef", "paramlist",
        "a", "statement", "vardecl", "b", "atribstat",
        "funccall", "paramlistcall", "printstat", "readstat",
        "returnnstat", "ifstat", "c", "forstat", "statelist",
        "d", "allocexpression", "f", "expression", "g",
        "h", "numexpression", "j", "term", "k", "unaryexpr",
        "factor", "lvalue", "l"];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = ExprLexerParser.ruleNames;
        this.literalNames = ExprLexerParser.literalNames;
        this.symbolicNames = ExprLexerParser.symbolicNames;
    }

    get atn() {
        return atn;
    }



    program() {
        let localctx = new ProgramContext(this, this._ctx, this.state);
        this.enterRule(localctx, 0, ExprLexerParser.RULE_program);
        try {
            this.state = 67;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                case 8:
                case 9:
                case 11:
                case 14:
                case 24:
                case 27:
                    this.enterOuterAlt(localctx, 1);
                    this.state = 64;
                    this.statement();
                    break;
                case 1:
                    this.enterOuterAlt(localctx, 2);
                    this.state = 65;
                    this.funclist();
                    break;
                case -1:
                    this.enterOuterAlt(localctx, 3);
                    this.state = 66;
                    this.match(ExprLexerParser.EOF);
                    break;
                default:
                    throw new antlr4.error.NoViableAltException(this);
            }
        } catch (re) {
            if (re instanceof antlr4.error.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }



    funclist() {
        let localctx = new FunclistContext(this, this._ctx, this.state);
        this.enterRule(localctx, 2, ExprLexerParser.RULE_funclist);
        try {
            this.state = 73;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input, 1, this._ctx);
            switch (la_) {
                case 1:
                    this.enterOuterAlt(localctx, 1);
                    this.state = 69;
                    this.funcdef();
                    this.state = 70;
                    this.funclist();
                    break;

                case 2:
                    this.enterOuterAlt(localctx, 2);
                    this.state = 72;
                    this.funcdef();
                    break;

            }
        } catch (re) {
            if (re instanceof antlr4.error.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }



    funcdef() {
        let localctx = new FuncdefContext(this, this._ctx, this.state);
        this.enterRule(localctx, 4, ExprLexerParser.RULE_funcdef);
        try {
            this.enterOuterAlt(localctx, 1);
            this.state = 75;
            this.match(ExprLexerParser.FUNCTION);
            this.state = 76;
            this.match(ExprLexerParser.IDENT);
            this.state = 77;
            this.match(ExprLexerParser.LPAREN);
            this.state = 78;
            this.paramlist();
            this.state = 79;
            this.match(ExprLexerParser.RPAREN);
            this.state = 80;
            this.match(ExprLexerParser.LCURLY);
            this.state = 81;
            this.statelist();
            this.state = 82;
            this.match(ExprLexerParser.RCURLY);
        } catch (re) {
            if (re instanceof antlr4.error.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }



    paramlist() {
        let localctx = new ParamlistContext(this, this._ctx, this.state);
        this.enterRule(localctx, 6, ExprLexerParser.RULE_paramlist);
        try {
            this.state = 97;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input, 2, this._ctx);
            switch (la_) {
                case 1:
                    this.enterOuterAlt(localctx, 1);
                    this.state = 84;
                    this.match(ExprLexerParser.INT);
                    this.state = 85;
                    this.match(ExprLexerParser.IDENT);
                    this.state = 86;
                    this.match(ExprLexerParser.COMMA);
                    this.state = 87;
                    this.paramlist();
                    break;

                case 2:
                    this.enterOuterAlt(localctx, 2);
                    this.state = 88;
                    this.match(ExprLexerParser.FLOAT);
                    this.state = 89;
                    this.match(ExprLexerParser.IDENT);
                    this.state = 90;
                    this.match(ExprLexerParser.COMMA);
                    this.state = 91;
                    this.paramlist();
                    break;

                case 3:
                    this.enterOuterAlt(localctx, 3);
                    this.state = 92;
                    this.match(ExprLexerParser.STRING);
                    this.state = 93;
                    this.match(ExprLexerParser.IDENT);
                    this.state = 94;
                    this.match(ExprLexerParser.COMMA);
                    this.state = 95;
                    this.paramlist();
                    break;

                case 4:
                    this.enterOuterAlt(localctx, 4);
                    this.state = 96;
                    this.a();
                    break;

            }
        } catch (re) {
            if (re instanceof antlr4.error.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }



    a() {
        let localctx = new AContext(this, this._ctx, this.state);
        this.enterRule(localctx, 8, ExprLexerParser.RULE_a);
        try {
            this.state = 106;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case 2:
                    this.enterOuterAlt(localctx, 1);
                    this.state = 99;
                    this.match(ExprLexerParser.INT);
                    this.state = 100;
                    this.match(ExprLexerParser.IDENT);
                    break;
                case 3:
                    this.enterOuterAlt(localctx, 2);
                    this.state = 101;
                    this.match(ExprLexerParser.FLOAT);
                    this.state = 102;
                    this.match(ExprLexerParser.IDENT);
                    break;
                case 4:
                    this.enterOuterAlt(localctx, 3);
                    this.state = 103;
                    this.match(ExprLexerParser.STRING);
                    this.state = 104;
                    this.match(ExprLexerParser.IDENT);
                    break;
                case 26:
                    this.enterOuterAlt(localctx, 4);

                    break;
                default:
                    throw new antlr4.error.NoViableAltException(this);
            }
        } catch (re) {
            if (re instanceof antlr4.error.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }



    statement() {
        let localctx = new StatementContext(this, this._ctx, this.state);
        this.enterRule(localctx, 10, ExprLexerParser.RULE_statement);
        try {
            this.state = 132;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case 2:
                case 3:
                case 4:
                    this.enterOuterAlt(localctx, 1);
                    this.state = 108;
                    this.vardecl();
                    this.state = 109;
                    this.match(ExprLexerParser.SEMICOMMA);
                    break;
                case 14:
                    this.enterOuterAlt(localctx, 2);
                    this.state = 111;
                    this.atribstat();
                    this.state = 112;
                    this.match(ExprLexerParser.SEMICOMMA);
                    break;
                case 5:
                    this.enterOuterAlt(localctx, 3);
                    this.state = 114;
                    this.printstat();
                    this.state = 115;
                    this.match(ExprLexerParser.SEMICOMMA);
                    break;
                case 6:
                    this.enterOuterAlt(localctx, 4);
                    this.state = 117;
                    this.readstat();
                    this.state = 118;
                    this.match(ExprLexerParser.SEMICOMMA);
                    break;
                case 7:
                    this.enterOuterAlt(localctx, 5);
                    this.state = 120;
                    this.returnnstat();
                    this.state = 121;
                    this.match(ExprLexerParser.SEMICOMMA);
                    break;
                case 8:
                    this.enterOuterAlt(localctx, 6);
                    this.state = 123;
                    this.ifstat();
                    break;
                case 9:
                    this.enterOuterAlt(localctx, 7);
                    this.state = 124;
                    this.forstat();
                    break;
                case 27:
                    this.enterOuterAlt(localctx, 8);
                    this.state = 125;
                    this.match(ExprLexerParser.LCURLY);
                    this.state = 126;
                    this.statelist();
                    this.state = 127;
                    this.match(ExprLexerParser.RCURLY);
                    break;
                case 11:
                    this.enterOuterAlt(localctx, 9);
                    this.state = 129;
                    this.match(ExprLexerParser.BREAK);
                    this.state = 130;
                    this.match(ExprLexerParser.SEMICOMMA);
                    break;
                case 24:
                    this.enterOuterAlt(localctx, 10);
                    this.state = 131;
                    this.match(ExprLexerParser.SEMICOMMA);
                    break;
                default:
                    throw new antlr4.error.NoViableAltException(this);
            }
        } catch (re) {
            if (re instanceof antlr4.error.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }



    vardecl() {
        let localctx = new VardeclContext(this, this._ctx, this.state);
        this.enterRule(localctx, 12, ExprLexerParser.RULE_vardecl);
        try {
            this.state = 143;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case 2:
                    this.enterOuterAlt(localctx, 1);
                    this.state = 134;
                    this.match(ExprLexerParser.INT);
                    this.state = 135;
                    this.match(ExprLexerParser.IDENT);
                    this.state = 136;
                    this.b();
                    break;
                case 3:
                    this.enterOuterAlt(localctx, 2);
                    this.state = 137;
                    this.match(ExprLexerParser.FLOAT);
                    this.state = 138;
                    this.match(ExprLexerParser.IDENT);
                    this.state = 139;
                    this.b();
                    break;
                case 4:
                    this.enterOuterAlt(localctx, 3);
                    this.state = 140;
                    this.match(ExprLexerParser.STRING);
                    this.state = 141;
                    this.match(ExprLexerParser.IDENT);
                    this.state = 142;
                    this.b();
                    break;
                default:
                    throw new antlr4.error.NoViableAltException(this);
            }
        } catch (re) {
            if (re instanceof antlr4.error.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }



    b() {
        let localctx = new BContext(this, this._ctx, this.state);
        this.enterRule(localctx, 14, ExprLexerParser.RULE_b);
        try {
            this.state = 150;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case 29:
                    this.enterOuterAlt(localctx, 1);
                    this.state = 145;
                    this.match(ExprLexerParser.LSQUARE);
                    this.state = 146;
                    this.match(ExprLexerParser.INT_CONSTANT);
                    this.state = 147;
                    this.match(ExprLexerParser.RSQUARE);
                    this.state = 148;
                    this.b();
                    break;
                case 24:
                    this.enterOuterAlt(localctx, 2);

                    break;
                default:
                    throw new antlr4.error.NoViableAltException(this);
            }
        } catch (re) {
            if (re instanceof antlr4.error.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }



    atribstat() {
        let localctx = new AtribstatContext(this, this._ctx, this.state);
        this.enterRule(localctx, 16, ExprLexerParser.RULE_atribstat);
        try {
            this.state = 164;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input, 7, this._ctx);
            switch (la_) {
                case 1:
                    this.enterOuterAlt(localctx, 1);
                    this.state = 152;
                    this.lvalue();
                    this.state = 153;
                    this.match(ExprLexerParser.ATTRIBUTION);
                    this.state = 154;
                    this.expression();
                    break;

                case 2:
                    this.enterOuterAlt(localctx, 2);
                    this.state = 156;
                    this.lvalue();
                    this.state = 157;
                    this.match(ExprLexerParser.ATTRIBUTION);
                    this.state = 158;
                    this.allocexpression();
                    break;

                case 3:
                    this.enterOuterAlt(localctx, 3);
                    this.state = 160;
                    this.lvalue();
                    this.state = 161;
                    this.match(ExprLexerParser.ATTRIBUTION);
                    this.state = 162;
                    this.funccall();
                    break;

            }
        } catch (re) {
            if (re instanceof antlr4.error.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }



    funccall() {
        let localctx = new FunccallContext(this, this._ctx, this.state);
        this.enterRule(localctx, 18, ExprLexerParser.RULE_funccall);
        try {
            this.enterOuterAlt(localctx, 1);
            this.state = 166;
            this.match(ExprLexerParser.IDENT);
            this.state = 167;
            this.match(ExprLexerParser.LPAREN);
            this.state = 168;
            this.paramlistcall();
            this.state = 169;
            this.match(ExprLexerParser.RPAREN);
        } catch (re) {
            if (re instanceof antlr4.error.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }



    paramlistcall() {
        let localctx = new ParamlistcallContext(this, this._ctx, this.state);
        this.enterRule(localctx, 20, ExprLexerParser.RULE_paramlistcall);
        try {
            this.state = 176;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input, 8, this._ctx);
            switch (la_) {
                case 1:
                    this.enterOuterAlt(localctx, 1);
                    this.state = 171;
                    this.match(ExprLexerParser.IDENT);
                    this.state = 172;
                    this.match(ExprLexerParser.COMMA);
                    this.state = 173;
                    this.paramlistcall();
                    break;

                case 2:
                    this.enterOuterAlt(localctx, 2);
                    this.state = 174;
                    this.match(ExprLexerParser.IDENT);
                    break;

                case 3:
                    this.enterOuterAlt(localctx, 3);

                    break;

            }
        } catch (re) {
            if (re instanceof antlr4.error.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }



    printstat() {
        let localctx = new PrintstatContext(this, this._ctx, this.state);
        this.enterRule(localctx, 22, ExprLexerParser.RULE_printstat);
        try {
            this.enterOuterAlt(localctx, 1);
            this.state = 178;
            this.match(ExprLexerParser.PRINT);
            this.state = 179;
            this.expression();
        } catch (re) {
            if (re instanceof antlr4.error.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }



    readstat() {
        let localctx = new ReadstatContext(this, this._ctx, this.state);
        this.enterRule(localctx, 24, ExprLexerParser.RULE_readstat);
        try {
            this.enterOuterAlt(localctx, 1);
            this.state = 181;
            this.match(ExprLexerParser.READ);
            this.state = 182;
            this.lvalue();
        } catch (re) {
            if (re instanceof antlr4.error.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }



    returnnstat() {
        let localctx = new ReturnnstatContext(this, this._ctx, this.state);
        this.enterRule(localctx, 26, ExprLexerParser.RULE_returnnstat);
        try {
            this.enterOuterAlt(localctx, 1);
            this.state = 184;
            this.match(ExprLexerParser.RETURN);
        } catch (re) {
            if (re instanceof antlr4.error.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }



    ifstat() {
        let localctx = new IfstatContext(this, this._ctx, this.state);
        this.enterRule(localctx, 28, ExprLexerParser.RULE_ifstat);
        try {
            this.enterOuterAlt(localctx, 1);
            this.state = 186;
            this.match(ExprLexerParser.IF);
            this.state = 187;
            this.match(ExprLexerParser.LPAREN);
            this.state = 188;
            this.expression();
            this.state = 189;
            this.match(ExprLexerParser.RPAREN);
            this.state = 190;
            this.statement();
            this.state = 191;
            this.c();
        } catch (re) {
            if (re instanceof antlr4.error.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }



    c() {
        let localctx = new CContext(this, this._ctx, this.state);
        this.enterRule(localctx, 30, ExprLexerParser.RULE_c);
        try {
            this.state = 196;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input, 9, this._ctx);
            switch (la_) {
                case 1:
                    this.enterOuterAlt(localctx, 1);
                    this.state = 193;
                    this.match(ExprLexerParser.ELSE);
                    this.state = 194;
                    this.statement();
                    break;

                case 2:
                    this.enterOuterAlt(localctx, 2);

                    break;

            }
        } catch (re) {
            if (re instanceof antlr4.error.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }



    forstat() {
        let localctx = new ForstatContext(this, this._ctx, this.state);
        this.enterRule(localctx, 32, ExprLexerParser.RULE_forstat);
        try {
            this.enterOuterAlt(localctx, 1);
            this.state = 198;
            this.match(ExprLexerParser.FOR);
            this.state = 199;
            this.match(ExprLexerParser.LPAREN);
            this.state = 200;
            this.atribstat();
            this.state = 201;
            this.match(ExprLexerParser.SEMICOMMA);
            this.state = 202;
            this.expression();
            this.state = 203;
            this.match(ExprLexerParser.SEMICOMMA);
            this.state = 204;
            this.atribstat();
            this.state = 205;
            this.match(ExprLexerParser.RPAREN);
            this.state = 206;
            this.statement();
        } catch (re) {
            if (re instanceof antlr4.error.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }



    statelist() {
        let localctx = new StatelistContext(this, this._ctx, this.state);
        this.enterRule(localctx, 34, ExprLexerParser.RULE_statelist);
        try {
            this.enterOuterAlt(localctx, 1);
            this.state = 208;
            this.statement();
            this.state = 209;
            this.d();
        } catch (re) {
            if (re instanceof antlr4.error.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }



    d() {
        let localctx = new DContext(this, this._ctx, this.state);
        this.enterRule(localctx, 36, ExprLexerParser.RULE_d);
        try {
            this.state = 213;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                case 8:
                case 9:
                case 11:
                case 14:
                case 24:
                case 27:
                    this.enterOuterAlt(localctx, 1);
                    this.state = 211;
                    this.statelist();
                    break;
                case 28:
                    this.enterOuterAlt(localctx, 2);

                    break;
                default:
                    throw new antlr4.error.NoViableAltException(this);
            }
        } catch (re) {
            if (re instanceof antlr4.error.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }



    allocexpression() {
        let localctx = new AllocexpressionContext(this, this._ctx, this.state);
        this.enterRule(localctx, 38, ExprLexerParser.RULE_allocexpression);
        try {
            this.state = 224;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input, 11, this._ctx);
            switch (la_) {
                case 1:
                    this.enterOuterAlt(localctx, 1);
                    this.state = 215;
                    this.match(ExprLexerParser.NEW);
                    this.state = 216;
                    this.match(ExprLexerParser.INT);
                    this.state = 217;
                    this.f();
                    break;

                case 2:
                    this.enterOuterAlt(localctx, 2);
                    this.state = 218;
                    this.match(ExprLexerParser.NEW);
                    this.state = 219;
                    this.match(ExprLexerParser.FLOAT);
                    this.state = 220;
                    this.f();
                    break;

                case 3:
                    this.enterOuterAlt(localctx, 3);
                    this.state = 221;
                    this.match(ExprLexerParser.NEW);
                    this.state = 222;
                    this.match(ExprLexerParser.STRING);
                    this.state = 223;
                    this.f();
                    break;

            }
        } catch (re) {
            if (re instanceof antlr4.error.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }



    f() {
        let localctx = new FContext(this, this._ctx, this.state);
        this.enterRule(localctx, 40, ExprLexerParser.RULE_f);
        try {
            this.state = 230;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input, 12, this._ctx);
            switch (la_) {
                case 1:
                    this.enterOuterAlt(localctx, 1);
                    this.state = 226;
                    this.numexpression();
                    this.state = 227;
                    this.f();
                    break;

                case 2:
                    this.enterOuterAlt(localctx, 2);
                    this.state = 229;
                    this.numexpression();
                    break;

            }
        } catch (re) {
            if (re instanceof antlr4.error.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }



    expression() {
        let localctx = new ExpressionContext(this, this._ctx, this.state);
        this.enterRule(localctx, 42, ExprLexerParser.RULE_expression);
        try {
            this.enterOuterAlt(localctx, 1);
            this.state = 232;
            this.numexpression();
            this.state = 233;
            this.g();
        } catch (re) {
            if (re instanceof antlr4.error.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }



    g() {
        let localctx = new GContext(this, this._ctx, this.state);
        this.enterRule(localctx, 44, ExprLexerParser.RULE_g);
        try {
            this.state = 238;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case 19:
                    this.enterOuterAlt(localctx, 1);
                    this.state = 235;
                    this.match(ExprLexerParser.COMPARISON_OPERATOR);
                    this.state = 236;
                    this.h();
                    break;
                case 13:
                case 14:
                case 15:
                case 16:
                case 17:
                case 20:
                case 24:
                case 25:
                case 26:
                    this.enterOuterAlt(localctx, 2);
                    this.state = 237;
                    this.h();
                    break;
                default:
                    throw new antlr4.error.NoViableAltException(this);
            }
        } catch (re) {
            if (re instanceof antlr4.error.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }



    h() {
        let localctx = new HContext(this, this._ctx, this.state);
        this.enterRule(localctx, 46, ExprLexerParser.RULE_h);
        try {
            this.state = 242;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case 13:
                case 14:
                case 15:
                case 16:
                case 17:
                case 20:
                case 25:
                    this.enterOuterAlt(localctx, 1);
                    this.state = 240;
                    this.numexpression();
                    break;
                case 24:
                case 26:
                    this.enterOuterAlt(localctx, 2);

                    break;
                default:
                    throw new antlr4.error.NoViableAltException(this);
            }
        } catch (re) {
            if (re instanceof antlr4.error.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }



    numexpression() {
        let localctx = new NumexpressionContext(this, this._ctx, this.state);
        this.enterRule(localctx, 48, ExprLexerParser.RULE_numexpression);
        try {
            this.enterOuterAlt(localctx, 1);
            this.state = 244;
            this.term();
            this.state = 245;
            this.j();
        } catch (re) {
            if (re instanceof antlr4.error.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }



    j() {
        let localctx = new JContext(this, this._ctx, this.state);
        this.enterRule(localctx, 50, ExprLexerParser.RULE_j);
        try {
            this.state = 252;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input, 15, this._ctx);
            switch (la_) {
                case 1:
                    this.enterOuterAlt(localctx, 1);
                    this.state = 247;
                    this.match(ExprLexerParser.MATH_OPERATOR);
                    this.state = 248;
                    this.term();
                    this.state = 249;
                    this.j();
                    break;

                case 2:
                    this.enterOuterAlt(localctx, 2);

                    break;

            }
        } catch (re) {
            if (re instanceof antlr4.error.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }



    term() {
        let localctx = new TermContext(this, this._ctx, this.state);
        this.enterRule(localctx, 52, ExprLexerParser.RULE_term);
        try {
            this.enterOuterAlt(localctx, 1);
            this.state = 254;
            this.unaryexpr();
            this.state = 255;
            this.k();
        } catch (re) {
            if (re instanceof antlr4.error.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }



    k() {
        let localctx = new KContext(this, this._ctx, this.state);
        this.enterRule(localctx, 54, ExprLexerParser.RULE_k);
        try {
            this.state = 262;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case 21:
                    this.enterOuterAlt(localctx, 1);
                    this.state = 257;
                    this.match(ExprLexerParser.SPECIAL_MATH_OPERATOR);
                    this.state = 258;
                    this.unaryexpr();
                    this.state = 259;
                    this.k();
                    break;
                case 13:
                case 14:
                case 15:
                case 16:
                case 17:
                case 19:
                case 20:
                case 24:
                case 25:
                case 26:
                case 30:
                    this.enterOuterAlt(localctx, 2);

                    break;
                default:
                    throw new antlr4.error.NoViableAltException(this);
            }
        } catch (re) {
            if (re instanceof antlr4.error.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }



    unaryexpr() {
        let localctx = new UnaryexprContext(this, this._ctx, this.state);
        this.enterRule(localctx, 56, ExprLexerParser.RULE_unaryexpr);
        try {
            this.state = 267;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case 20:
                    this.enterOuterAlt(localctx, 1);
                    this.state = 264;
                    this.match(ExprLexerParser.MATH_OPERATOR);
                    this.state = 265;
                    this.factor();
                    break;
                case 13:
                case 14:
                case 15:
                case 16:
                case 17:
                case 25:
                    this.enterOuterAlt(localctx, 2);
                    this.state = 266;
                    this.factor();
                    break;
                default:
                    throw new antlr4.error.NoViableAltException(this);
            }
        } catch (re) {
            if (re instanceof antlr4.error.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }



    factor() {
        let localctx = new FactorContext(this, this._ctx, this.state);
        this.enterRule(localctx, 58, ExprLexerParser.RULE_factor);
        try {
            this.state = 278;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case 15:
                    this.enterOuterAlt(localctx, 1);
                    this.state = 269;
                    this.match(ExprLexerParser.INT_CONSTANT);
                    break;
                case 16:
                    this.enterOuterAlt(localctx, 2);
                    this.state = 270;
                    this.match(ExprLexerParser.FLOAT_CONSTANT);
                    break;
                case 17:
                    this.enterOuterAlt(localctx, 3);
                    this.state = 271;
                    this.match(ExprLexerParser.STRING_CONSTANT);
                    break;
                case 13:
                    this.enterOuterAlt(localctx, 4);
                    this.state = 272;
                    this.match(ExprLexerParser.NULL);
                    break;
                case 14:
                    this.enterOuterAlt(localctx, 5);
                    this.state = 273;
                    this.lvalue();
                    break;
                case 25:
                    this.enterOuterAlt(localctx, 6);
                    this.state = 274;
                    this.match(ExprLexerParser.LPAREN);
                    this.state = 275;
                    this.numexpression();
                    this.state = 276;
                    this.match(ExprLexerParser.RPAREN);
                    break;
                default:
                    throw new antlr4.error.NoViableAltException(this);
            }
        } catch (re) {
            if (re instanceof antlr4.error.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }



    lvalue() {
        let localctx = new LvalueContext(this, this._ctx, this.state);
        this.enterRule(localctx, 60, ExprLexerParser.RULE_lvalue);
        try {
            this.enterOuterAlt(localctx, 1);
            this.state = 280;
            this.match(ExprLexerParser.IDENT);
            this.state = 281;
            this.l();
        } catch (re) {
            if (re instanceof antlr4.error.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }



    l() {
        let localctx = new LContext(this, this._ctx, this.state);
        this.enterRule(localctx, 62, ExprLexerParser.RULE_l);
        try {
            this.state = 289;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case 29:
                    this.enterOuterAlt(localctx, 1);
                    this.state = 283;
                    this.match(ExprLexerParser.LSQUARE);
                    this.state = 284;
                    this.numexpression();
                    this.state = 285;
                    this.match(ExprLexerParser.RSQUARE);
                    this.state = 286;
                    this.l();
                    break;
                case 13:
                case 14:
                case 15:
                case 16:
                case 17:
                case 19:
                case 20:
                case 21:
                case 22:
                case 24:
                case 25:
                case 26:
                case 30:
                    this.enterOuterAlt(localctx, 2);

                    break;
                default:
                    throw new antlr4.error.NoViableAltException(this);
            }
        } catch (re) {
            if (re instanceof antlr4.error.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }


}

ExprLexerParser.EOF = antlr4.Token.EOF;
ExprLexerParser.FUNCTION = 1;
ExprLexerParser.INT = 2;
ExprLexerParser.FLOAT = 3;
ExprLexerParser.STRING = 4;
ExprLexerParser.PRINT = 5;
ExprLexerParser.READ = 6;
ExprLexerParser.RETURN = 7;
ExprLexerParser.IF = 8;
ExprLexerParser.FOR = 9;
ExprLexerParser.ELSE = 10;
ExprLexerParser.BREAK = 11;
ExprLexerParser.NEW = 12;
ExprLexerParser.NULL = 13;
ExprLexerParser.IDENT = 14;
ExprLexerParser.INT_CONSTANT = 15;
ExprLexerParser.FLOAT_CONSTANT = 16;
ExprLexerParser.STRING_CONSTANT = 17;
ExprLexerParser.WS = 18;
ExprLexerParser.COMPARISON_OPERATOR = 19;
ExprLexerParser.MATH_OPERATOR = 20;
ExprLexerParser.SPECIAL_MATH_OPERATOR = 21;
ExprLexerParser.ATTRIBUTION = 22;
ExprLexerParser.COMMA = 23;
ExprLexerParser.SEMICOMMA = 24;
ExprLexerParser.LPAREN = 25;
ExprLexerParser.RPAREN = 26;
ExprLexerParser.LCURLY = 27;
ExprLexerParser.RCURLY = 28;
ExprLexerParser.LSQUARE = 29;
ExprLexerParser.RSQUARE = 30;

ExprLexerParser.RULE_program = 0;
ExprLexerParser.RULE_funclist = 1;
ExprLexerParser.RULE_funcdef = 2;
ExprLexerParser.RULE_paramlist = 3;
ExprLexerParser.RULE_a = 4;
ExprLexerParser.RULE_statement = 5;
ExprLexerParser.RULE_vardecl = 6;
ExprLexerParser.RULE_b = 7;
ExprLexerParser.RULE_atribstat = 8;
ExprLexerParser.RULE_funccall = 9;
ExprLexerParser.RULE_paramlistcall = 10;
ExprLexerParser.RULE_printstat = 11;
ExprLexerParser.RULE_readstat = 12;
ExprLexerParser.RULE_returnnstat = 13;
ExprLexerParser.RULE_ifstat = 14;
ExprLexerParser.RULE_c = 15;
ExprLexerParser.RULE_forstat = 16;
ExprLexerParser.RULE_statelist = 17;
ExprLexerParser.RULE_d = 18;
ExprLexerParser.RULE_allocexpression = 19;
ExprLexerParser.RULE_f = 20;
ExprLexerParser.RULE_expression = 21;
ExprLexerParser.RULE_g = 22;
ExprLexerParser.RULE_h = 23;
ExprLexerParser.RULE_numexpression = 24;
ExprLexerParser.RULE_j = 25;
ExprLexerParser.RULE_term = 26;
ExprLexerParser.RULE_k = 27;
ExprLexerParser.RULE_unaryexpr = 28;
ExprLexerParser.RULE_factor = 29;
ExprLexerParser.RULE_lvalue = 30;
ExprLexerParser.RULE_l = 31;

class ProgramContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if (parent === undefined) {
            parent = null;
        }
        if (invokingState === undefined || invokingState === null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ExprLexerParser.RULE_program;
    }

    statement() {
        return this.getTypedRuleContext(StatementContext, 0);
    };

    funclist() {
        return this.getTypedRuleContext(FunclistContext, 0);
    };

    EOF() {
        return this.getToken(ExprLexerParser.EOF, 0);
    };

    enterRule(listener) {
        if (listener instanceof ExprLexerListener) {
            listener.enterProgram(this);
        }
    }

    exitRule(listener) {
        if (listener instanceof ExprLexerListener) {
            listener.exitProgram(this);
        }
    }

    accept(visitor) {
        if (visitor instanceof ExprLexerVisitor) {
            return visitor.visitProgram(this);
        } else {
            return visitor.visitChildren(this);
        }
    }


}



class FunclistContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if (parent === undefined) {
            parent = null;
        }
        if (invokingState === undefined || invokingState === null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ExprLexerParser.RULE_funclist;
    }

    funcdef() {
        return this.getTypedRuleContext(FuncdefContext, 0);
    };

    funclist() {
        return this.getTypedRuleContext(FunclistContext, 0);
    };

    enterRule(listener) {
        if (listener instanceof ExprLexerListener) {
            listener.enterFunclist(this);
        }
    }

    exitRule(listener) {
        if (listener instanceof ExprLexerListener) {
            listener.exitFunclist(this);
        }
    }

    accept(visitor) {
        if (visitor instanceof ExprLexerVisitor) {
            return visitor.visitFunclist(this);
        } else {
            return visitor.visitChildren(this);
        }
    }


}



class FuncdefContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if (parent === undefined) {
            parent = null;
        }
        if (invokingState === undefined || invokingState === null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ExprLexerParser.RULE_funcdef;
    }

    FUNCTION() {
        return this.getToken(ExprLexerParser.FUNCTION, 0);
    };

    IDENT() {
        return this.getToken(ExprLexerParser.IDENT, 0);
    };

    LPAREN() {
        return this.getToken(ExprLexerParser.LPAREN, 0);
    };

    paramlist() {
        return this.getTypedRuleContext(ParamlistContext, 0);
    };

    RPAREN() {
        return this.getToken(ExprLexerParser.RPAREN, 0);
    };

    LCURLY() {
        return this.getToken(ExprLexerParser.LCURLY, 0);
    };

    statelist() {
        return this.getTypedRuleContext(StatelistContext, 0);
    };

    RCURLY() {
        return this.getToken(ExprLexerParser.RCURLY, 0);
    };

    enterRule(listener) {
        if (listener instanceof ExprLexerListener) {
            listener.enterFuncdef(this);
        }
    }

    exitRule(listener) {
        if (listener instanceof ExprLexerListener) {
            listener.exitFuncdef(this);
        }
    }

    accept(visitor) {
        if (visitor instanceof ExprLexerVisitor) {
            return visitor.visitFuncdef(this);
        } else {
            return visitor.visitChildren(this);
        }
    }


}



class ParamlistContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if (parent === undefined) {
            parent = null;
        }
        if (invokingState === undefined || invokingState === null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ExprLexerParser.RULE_paramlist;
    }

    INT() {
        return this.getToken(ExprLexerParser.INT, 0);
    };

    IDENT() {
        return this.getToken(ExprLexerParser.IDENT, 0);
    };

    COMMA() {
        return this.getToken(ExprLexerParser.COMMA, 0);
    };

    paramlist() {
        return this.getTypedRuleContext(ParamlistContext, 0);
    };

    FLOAT() {
        return this.getToken(ExprLexerParser.FLOAT, 0);
    };

    STRING() {
        return this.getToken(ExprLexerParser.STRING, 0);
    };

    a() {
        return this.getTypedRuleContext(AContext, 0);
    };

    enterRule(listener) {
        if (listener instanceof ExprLexerListener) {
            listener.enterParamlist(this);
        }
    }

    exitRule(listener) {
        if (listener instanceof ExprLexerListener) {
            listener.exitParamlist(this);
        }
    }

    accept(visitor) {
        if (visitor instanceof ExprLexerVisitor) {
            return visitor.visitParamlist(this);
        } else {
            return visitor.visitChildren(this);
        }
    }


}



class AContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if (parent === undefined) {
            parent = null;
        }
        if (invokingState === undefined || invokingState === null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ExprLexerParser.RULE_a;
    }

    INT() {
        return this.getToken(ExprLexerParser.INT, 0);
    };

    IDENT() {
        return this.getToken(ExprLexerParser.IDENT, 0);
    };

    FLOAT() {
        return this.getToken(ExprLexerParser.FLOAT, 0);
    };

    STRING() {
        return this.getToken(ExprLexerParser.STRING, 0);
    };

    enterRule(listener) {
        if (listener instanceof ExprLexerListener) {
            listener.enterA(this);
        }
    }

    exitRule(listener) {
        if (listener instanceof ExprLexerListener) {
            listener.exitA(this);
        }
    }

    accept(visitor) {
        if (visitor instanceof ExprLexerVisitor) {
            return visitor.visitA(this);
        } else {
            return visitor.visitChildren(this);
        }
    }


}



class StatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if (parent === undefined) {
            parent = null;
        }
        if (invokingState === undefined || invokingState === null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ExprLexerParser.RULE_statement;
    }

    vardecl() {
        return this.getTypedRuleContext(VardeclContext, 0);
    };

    SEMICOMMA() {
        return this.getToken(ExprLexerParser.SEMICOMMA, 0);
    };

    atribstat() {
        return this.getTypedRuleContext(AtribstatContext, 0);
    };

    printstat() {
        return this.getTypedRuleContext(PrintstatContext, 0);
    };

    readstat() {
        return this.getTypedRuleContext(ReadstatContext, 0);
    };

    returnnstat() {
        return this.getTypedRuleContext(ReturnnstatContext, 0);
    };

    ifstat() {
        return this.getTypedRuleContext(IfstatContext, 0);
    };

    forstat() {
        return this.getTypedRuleContext(ForstatContext, 0);
    };

    LCURLY() {
        return this.getToken(ExprLexerParser.LCURLY, 0);
    };

    statelist() {
        return this.getTypedRuleContext(StatelistContext, 0);
    };

    RCURLY() {
        return this.getToken(ExprLexerParser.RCURLY, 0);
    };

    BREAK() {
        return this.getToken(ExprLexerParser.BREAK, 0);
    };

    enterRule(listener) {
        if (listener instanceof ExprLexerListener) {
            listener.enterStatement(this);
        }
    }

    exitRule(listener) {
        if (listener instanceof ExprLexerListener) {
            listener.exitStatement(this);
        }
    }

    accept(visitor) {
        if (visitor instanceof ExprLexerVisitor) {
            return visitor.visitStatement(this);
        } else {
            return visitor.visitChildren(this);
        }
    }


}



class VardeclContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if (parent === undefined) {
            parent = null;
        }
        if (invokingState === undefined || invokingState === null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ExprLexerParser.RULE_vardecl;
    }

    INT() {
        return this.getToken(ExprLexerParser.INT, 0);
    };

    IDENT() {
        return this.getToken(ExprLexerParser.IDENT, 0);
    };

    b() {
        return this.getTypedRuleContext(BContext, 0);
    };

    FLOAT() {
        return this.getToken(ExprLexerParser.FLOAT, 0);
    };

    STRING() {
        return this.getToken(ExprLexerParser.STRING, 0);
    };

    enterRule(listener) {
        if (listener instanceof ExprLexerListener) {
            listener.enterVardecl(this);
        }
    }

    exitRule(listener) {
        if (listener instanceof ExprLexerListener) {
            listener.exitVardecl(this);
        }
    }

    accept(visitor) {
        if (visitor instanceof ExprLexerVisitor) {
            return visitor.visitVardecl(this);
        } else {
            return visitor.visitChildren(this);
        }
    }


}



class BContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if (parent === undefined) {
            parent = null;
        }
        if (invokingState === undefined || invokingState === null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ExprLexerParser.RULE_b;
    }

    LSQUARE() {
        return this.getToken(ExprLexerParser.LSQUARE, 0);
    };

    INT_CONSTANT() {
        return this.getToken(ExprLexerParser.INT_CONSTANT, 0);
    };

    RSQUARE() {
        return this.getToken(ExprLexerParser.RSQUARE, 0);
    };

    b() {
        return this.getTypedRuleContext(BContext, 0);
    };

    enterRule(listener) {
        if (listener instanceof ExprLexerListener) {
            listener.enterB(this);
        }
    }

    exitRule(listener) {
        if (listener instanceof ExprLexerListener) {
            listener.exitB(this);
        }
    }

    accept(visitor) {
        if (visitor instanceof ExprLexerVisitor) {
            return visitor.visitB(this);
        } else {
            return visitor.visitChildren(this);
        }
    }


}



class AtribstatContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if (parent === undefined) {
            parent = null;
        }
        if (invokingState === undefined || invokingState === null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ExprLexerParser.RULE_atribstat;
    }

    lvalue() {
        return this.getTypedRuleContext(LvalueContext, 0);
    };

    ATTRIBUTION() {
        return this.getToken(ExprLexerParser.ATTRIBUTION, 0);
    };

    expression() {
        return this.getTypedRuleContext(ExpressionContext, 0);
    };

    allocexpression() {
        return this.getTypedRuleContext(AllocexpressionContext, 0);
    };

    funccall() {
        return this.getTypedRuleContext(FunccallContext, 0);
    };

    enterRule(listener) {
        if (listener instanceof ExprLexerListener) {
            listener.enterAtribstat(this);
        }
    }

    exitRule(listener) {
        if (listener instanceof ExprLexerListener) {
            listener.exitAtribstat(this);
        }
    }

    accept(visitor) {
        if (visitor instanceof ExprLexerVisitor) {
            return visitor.visitAtribstat(this);
        } else {
            return visitor.visitChildren(this);
        }
    }


}



class FunccallContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if (parent === undefined) {
            parent = null;
        }
        if (invokingState === undefined || invokingState === null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ExprLexerParser.RULE_funccall;
    }

    IDENT() {
        return this.getToken(ExprLexerParser.IDENT, 0);
    };

    LPAREN() {
        return this.getToken(ExprLexerParser.LPAREN, 0);
    };

    paramlistcall() {
        return this.getTypedRuleContext(ParamlistcallContext, 0);
    };

    RPAREN() {
        return this.getToken(ExprLexerParser.RPAREN, 0);
    };

    enterRule(listener) {
        if (listener instanceof ExprLexerListener) {
            listener.enterFunccall(this);
        }
    }

    exitRule(listener) {
        if (listener instanceof ExprLexerListener) {
            listener.exitFunccall(this);
        }
    }

    accept(visitor) {
        if (visitor instanceof ExprLexerVisitor) {
            return visitor.visitFunccall(this);
        } else {
            return visitor.visitChildren(this);
        }
    }


}



class ParamlistcallContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if (parent === undefined) {
            parent = null;
        }
        if (invokingState === undefined || invokingState === null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ExprLexerParser.RULE_paramlistcall;
    }

    IDENT() {
        return this.getToken(ExprLexerParser.IDENT, 0);
    };

    COMMA() {
        return this.getToken(ExprLexerParser.COMMA, 0);
    };

    paramlistcall() {
        return this.getTypedRuleContext(ParamlistcallContext, 0);
    };

    enterRule(listener) {
        if (listener instanceof ExprLexerListener) {
            listener.enterParamlistcall(this);
        }
    }

    exitRule(listener) {
        if (listener instanceof ExprLexerListener) {
            listener.exitParamlistcall(this);
        }
    }

    accept(visitor) {
        if (visitor instanceof ExprLexerVisitor) {
            return visitor.visitParamlistcall(this);
        } else {
            return visitor.visitChildren(this);
        }
    }


}



class PrintstatContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if (parent === undefined) {
            parent = null;
        }
        if (invokingState === undefined || invokingState === null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ExprLexerParser.RULE_printstat;
    }

    PRINT() {
        return this.getToken(ExprLexerParser.PRINT, 0);
    };

    expression() {
        return this.getTypedRuleContext(ExpressionContext, 0);
    };

    enterRule(listener) {
        if (listener instanceof ExprLexerListener) {
            listener.enterPrintstat(this);
        }
    }

    exitRule(listener) {
        if (listener instanceof ExprLexerListener) {
            listener.exitPrintstat(this);
        }
    }

    accept(visitor) {
        if (visitor instanceof ExprLexerVisitor) {
            return visitor.visitPrintstat(this);
        } else {
            return visitor.visitChildren(this);
        }
    }


}



class ReadstatContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if (parent === undefined) {
            parent = null;
        }
        if (invokingState === undefined || invokingState === null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ExprLexerParser.RULE_readstat;
    }

    READ() {
        return this.getToken(ExprLexerParser.READ, 0);
    };

    lvalue() {
        return this.getTypedRuleContext(LvalueContext, 0);
    };

    enterRule(listener) {
        if (listener instanceof ExprLexerListener) {
            listener.enterReadstat(this);
        }
    }

    exitRule(listener) {
        if (listener instanceof ExprLexerListener) {
            listener.exitReadstat(this);
        }
    }

    accept(visitor) {
        if (visitor instanceof ExprLexerVisitor) {
            return visitor.visitReadstat(this);
        } else {
            return visitor.visitChildren(this);
        }
    }


}



class ReturnnstatContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if (parent === undefined) {
            parent = null;
        }
        if (invokingState === undefined || invokingState === null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ExprLexerParser.RULE_returnnstat;
    }

    RETURN() {
        return this.getToken(ExprLexerParser.RETURN, 0);
    };

    enterRule(listener) {
        if (listener instanceof ExprLexerListener) {
            listener.enterReturnnstat(this);
        }
    }

    exitRule(listener) {
        if (listener instanceof ExprLexerListener) {
            listener.exitReturnnstat(this);
        }
    }

    accept(visitor) {
        if (visitor instanceof ExprLexerVisitor) {
            return visitor.visitReturnnstat(this);
        } else {
            return visitor.visitChildren(this);
        }
    }


}



class IfstatContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if (parent === undefined) {
            parent = null;
        }
        if (invokingState === undefined || invokingState === null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ExprLexerParser.RULE_ifstat;
    }

    IF() {
        return this.getToken(ExprLexerParser.IF, 0);
    };

    LPAREN() {
        return this.getToken(ExprLexerParser.LPAREN, 0);
    };

    expression() {
        return this.getTypedRuleContext(ExpressionContext, 0);
    };

    RPAREN() {
        return this.getToken(ExprLexerParser.RPAREN, 0);
    };

    statement() {
        return this.getTypedRuleContext(StatementContext, 0);
    };

    c() {
        return this.getTypedRuleContext(CContext, 0);
    };

    enterRule(listener) {
        if (listener instanceof ExprLexerListener) {
            listener.enterIfstat(this);
        }
    }

    exitRule(listener) {
        if (listener instanceof ExprLexerListener) {
            listener.exitIfstat(this);
        }
    }

    accept(visitor) {
        if (visitor instanceof ExprLexerVisitor) {
            return visitor.visitIfstat(this);
        } else {
            return visitor.visitChildren(this);
        }
    }


}



class CContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if (parent === undefined) {
            parent = null;
        }
        if (invokingState === undefined || invokingState === null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ExprLexerParser.RULE_c;
    }

    ELSE() {
        return this.getToken(ExprLexerParser.ELSE, 0);
    };

    statement() {
        return this.getTypedRuleContext(StatementContext, 0);
    };

    enterRule(listener) {
        if (listener instanceof ExprLexerListener) {
            listener.enterC(this);
        }
    }

    exitRule(listener) {
        if (listener instanceof ExprLexerListener) {
            listener.exitC(this);
        }
    }

    accept(visitor) {
        if (visitor instanceof ExprLexerVisitor) {
            return visitor.visitC(this);
        } else {
            return visitor.visitChildren(this);
        }
    }


}



class ForstatContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if (parent === undefined) {
            parent = null;
        }
        if (invokingState === undefined || invokingState === null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ExprLexerParser.RULE_forstat;
    }

    FOR() {
        return this.getToken(ExprLexerParser.FOR, 0);
    };

    LPAREN() {
        return this.getToken(ExprLexerParser.LPAREN, 0);
    };

    atribstat = function (i) {
        if (i === undefined) {
            i = null;
        }
        if (i === null) {
            return this.getTypedRuleContexts(AtribstatContext);
        } else {
            return this.getTypedRuleContext(AtribstatContext, i);
        }
    };

    SEMICOMMA = function (i) {
        if (i === undefined) {
            i = null;
        }
        if (i === null) {
            return this.getTokens(ExprLexerParser.SEMICOMMA);
        } else {
            return this.getToken(ExprLexerParser.SEMICOMMA, i);
        }
    };


    expression() {
        return this.getTypedRuleContext(ExpressionContext, 0);
    };

    RPAREN() {
        return this.getToken(ExprLexerParser.RPAREN, 0);
    };

    statement() {
        return this.getTypedRuleContext(StatementContext, 0);
    };

    enterRule(listener) {
        if (listener instanceof ExprLexerListener) {
            listener.enterForstat(this);
        }
    }

    exitRule(listener) {
        if (listener instanceof ExprLexerListener) {
            listener.exitForstat(this);
        }
    }

    accept(visitor) {
        if (visitor instanceof ExprLexerVisitor) {
            return visitor.visitForstat(this);
        } else {
            return visitor.visitChildren(this);
        }
    }


}



class StatelistContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if (parent === undefined) {
            parent = null;
        }
        if (invokingState === undefined || invokingState === null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ExprLexerParser.RULE_statelist;
    }

    statement() {
        return this.getTypedRuleContext(StatementContext, 0);
    };

    d() {
        return this.getTypedRuleContext(DContext, 0);
    };

    enterRule(listener) {
        if (listener instanceof ExprLexerListener) {
            listener.enterStatelist(this);
        }
    }

    exitRule(listener) {
        if (listener instanceof ExprLexerListener) {
            listener.exitStatelist(this);
        }
    }

    accept(visitor) {
        if (visitor instanceof ExprLexerVisitor) {
            return visitor.visitStatelist(this);
        } else {
            return visitor.visitChildren(this);
        }
    }


}



class DContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if (parent === undefined) {
            parent = null;
        }
        if (invokingState === undefined || invokingState === null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ExprLexerParser.RULE_d;
    }

    statelist() {
        return this.getTypedRuleContext(StatelistContext, 0);
    };

    enterRule(listener) {
        if (listener instanceof ExprLexerListener) {
            listener.enterD(this);
        }
    }

    exitRule(listener) {
        if (listener instanceof ExprLexerListener) {
            listener.exitD(this);
        }
    }

    accept(visitor) {
        if (visitor instanceof ExprLexerVisitor) {
            return visitor.visitD(this);
        } else {
            return visitor.visitChildren(this);
        }
    }


}



class AllocexpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if (parent === undefined) {
            parent = null;
        }
        if (invokingState === undefined || invokingState === null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ExprLexerParser.RULE_allocexpression;
    }

    NEW() {
        return this.getToken(ExprLexerParser.NEW, 0);
    };

    INT() {
        return this.getToken(ExprLexerParser.INT, 0);
    };

    f() {
        return this.getTypedRuleContext(FContext, 0);
    };

    FLOAT() {
        return this.getToken(ExprLexerParser.FLOAT, 0);
    };

    STRING() {
        return this.getToken(ExprLexerParser.STRING, 0);
    };

    enterRule(listener) {
        if (listener instanceof ExprLexerListener) {
            listener.enterAllocexpression(this);
        }
    }

    exitRule(listener) {
        if (listener instanceof ExprLexerListener) {
            listener.exitAllocexpression(this);
        }
    }

    accept(visitor) {
        if (visitor instanceof ExprLexerVisitor) {
            return visitor.visitAllocexpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }


}



class FContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if (parent === undefined) {
            parent = null;
        }
        if (invokingState === undefined || invokingState === null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ExprLexerParser.RULE_f;
    }

    numexpression() {
        return this.getTypedRuleContext(NumexpressionContext, 0);
    };

    f() {
        return this.getTypedRuleContext(FContext, 0);
    };

    enterRule(listener) {
        if (listener instanceof ExprLexerListener) {
            listener.enterF(this);
        }
    }

    exitRule(listener) {
        if (listener instanceof ExprLexerListener) {
            listener.exitF(this);
        }
    }

    accept(visitor) {
        if (visitor instanceof ExprLexerVisitor) {
            return visitor.visitF(this);
        } else {
            return visitor.visitChildren(this);
        }
    }


}



class ExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if (parent === undefined) {
            parent = null;
        }
        if (invokingState === undefined || invokingState === null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ExprLexerParser.RULE_expression;
    }

    numexpression() {
        return this.getTypedRuleContext(NumexpressionContext, 0);
    };

    g() {
        return this.getTypedRuleContext(GContext, 0);
    };

    enterRule(listener) {
        if (listener instanceof ExprLexerListener) {
            listener.enterExpression(this);
        }
    }

    exitRule(listener) {
        if (listener instanceof ExprLexerListener) {
            listener.exitExpression(this);
        }
    }

    accept(visitor) {
        if (visitor instanceof ExprLexerVisitor) {
            return visitor.visitExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }


}



class GContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if (parent === undefined) {
            parent = null;
        }
        if (invokingState === undefined || invokingState === null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ExprLexerParser.RULE_g;
    }

    COMPARISON_OPERATOR() {
        return this.getToken(ExprLexerParser.COMPARISON_OPERATOR, 0);
    };

    h() {
        return this.getTypedRuleContext(HContext, 0);
    };

    enterRule(listener) {
        if (listener instanceof ExprLexerListener) {
            listener.enterG(this);
        }
    }

    exitRule(listener) {
        if (listener instanceof ExprLexerListener) {
            listener.exitG(this);
        }
    }

    accept(visitor) {
        if (visitor instanceof ExprLexerVisitor) {
            return visitor.visitG(this);
        } else {
            return visitor.visitChildren(this);
        }
    }


}



class HContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if (parent === undefined) {
            parent = null;
        }
        if (invokingState === undefined || invokingState === null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ExprLexerParser.RULE_h;
    }

    numexpression() {
        return this.getTypedRuleContext(NumexpressionContext, 0);
    };

    enterRule(listener) {
        if (listener instanceof ExprLexerListener) {
            listener.enterH(this);
        }
    }

    exitRule(listener) {
        if (listener instanceof ExprLexerListener) {
            listener.exitH(this);
        }
    }

    accept(visitor) {
        if (visitor instanceof ExprLexerVisitor) {
            return visitor.visitH(this);
        } else {
            return visitor.visitChildren(this);
        }
    }


}



class NumexpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if (parent === undefined) {
            parent = null;
        }
        if (invokingState === undefined || invokingState === null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ExprLexerParser.RULE_numexpression;
    }

    term() {
        return this.getTypedRuleContext(TermContext, 0);
    };

    j() {
        return this.getTypedRuleContext(JContext, 0);
    };

    enterRule(listener) {
        if (listener instanceof ExprLexerListener) {
            listener.enterNumexpression(this);
        }
    }

    exitRule(listener) {
        if (listener instanceof ExprLexerListener) {
            listener.exitNumexpression(this);
        }
    }

    accept(visitor) {
        if (visitor instanceof ExprLexerVisitor) {
            return visitor.visitNumexpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }


}



class JContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if (parent === undefined) {
            parent = null;
        }
        if (invokingState === undefined || invokingState === null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ExprLexerParser.RULE_j;
    }

    MATH_OPERATOR() {
        return this.getToken(ExprLexerParser.MATH_OPERATOR, 0);
    };

    term() {
        return this.getTypedRuleContext(TermContext, 0);
    };

    j() {
        return this.getTypedRuleContext(JContext, 0);
    };

    enterRule(listener) {
        if (listener instanceof ExprLexerListener) {
            listener.enterJ(this);
        }
    }

    exitRule(listener) {
        if (listener instanceof ExprLexerListener) {
            listener.exitJ(this);
        }
    }

    accept(visitor) {
        if (visitor instanceof ExprLexerVisitor) {
            return visitor.visitJ(this);
        } else {
            return visitor.visitChildren(this);
        }
    }


}



class TermContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if (parent === undefined) {
            parent = null;
        }
        if (invokingState === undefined || invokingState === null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ExprLexerParser.RULE_term;
    }

    unaryexpr() {
        return this.getTypedRuleContext(UnaryexprContext, 0);
    };

    k() {
        return this.getTypedRuleContext(KContext, 0);
    };

    enterRule(listener) {
        if (listener instanceof ExprLexerListener) {
            listener.enterTerm(this);
        }
    }

    exitRule(listener) {
        if (listener instanceof ExprLexerListener) {
            listener.exitTerm(this);
        }
    }

    accept(visitor) {
        if (visitor instanceof ExprLexerVisitor) {
            return visitor.visitTerm(this);
        } else {
            return visitor.visitChildren(this);
        }
    }


}



class KContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if (parent === undefined) {
            parent = null;
        }
        if (invokingState === undefined || invokingState === null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ExprLexerParser.RULE_k;
    }

    SPECIAL_MATH_OPERATOR() {
        return this.getToken(ExprLexerParser.SPECIAL_MATH_OPERATOR, 0);
    };

    unaryexpr() {
        return this.getTypedRuleContext(UnaryexprContext, 0);
    };

    k() {
        return this.getTypedRuleContext(KContext, 0);
    };

    enterRule(listener) {
        if (listener instanceof ExprLexerListener) {
            listener.enterK(this);
        }
    }

    exitRule(listener) {
        if (listener instanceof ExprLexerListener) {
            listener.exitK(this);
        }
    }

    accept(visitor) {
        if (visitor instanceof ExprLexerVisitor) {
            return visitor.visitK(this);
        } else {
            return visitor.visitChildren(this);
        }
    }


}



class UnaryexprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if (parent === undefined) {
            parent = null;
        }
        if (invokingState === undefined || invokingState === null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ExprLexerParser.RULE_unaryexpr;
    }

    MATH_OPERATOR() {
        return this.getToken(ExprLexerParser.MATH_OPERATOR, 0);
    };

    factor() {
        return this.getTypedRuleContext(FactorContext, 0);
    };

    enterRule(listener) {
        if (listener instanceof ExprLexerListener) {
            listener.enterUnaryexpr(this);
        }
    }

    exitRule(listener) {
        if (listener instanceof ExprLexerListener) {
            listener.exitUnaryexpr(this);
        }
    }

    accept(visitor) {
        if (visitor instanceof ExprLexerVisitor) {
            return visitor.visitUnaryexpr(this);
        } else {
            return visitor.visitChildren(this);
        }
    }


}



class FactorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if (parent === undefined) {
            parent = null;
        }
        if (invokingState === undefined || invokingState === null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ExprLexerParser.RULE_factor;
    }

    INT_CONSTANT() {
        return this.getToken(ExprLexerParser.INT_CONSTANT, 0);
    };

    FLOAT_CONSTANT() {
        return this.getToken(ExprLexerParser.FLOAT_CONSTANT, 0);
    };

    STRING_CONSTANT() {
        return this.getToken(ExprLexerParser.STRING_CONSTANT, 0);
    };

    NULL() {
        return this.getToken(ExprLexerParser.NULL, 0);
    };

    lvalue() {
        return this.getTypedRuleContext(LvalueContext, 0);
    };

    LPAREN() {
        return this.getToken(ExprLexerParser.LPAREN, 0);
    };

    numexpression() {
        return this.getTypedRuleContext(NumexpressionContext, 0);
    };

    RPAREN() {
        return this.getToken(ExprLexerParser.RPAREN, 0);
    };

    enterRule(listener) {
        if (listener instanceof ExprLexerListener) {
            listener.enterFactor(this);
        }
    }

    exitRule(listener) {
        if (listener instanceof ExprLexerListener) {
            listener.exitFactor(this);
        }
    }

    accept(visitor) {
        if (visitor instanceof ExprLexerVisitor) {
            return visitor.visitFactor(this);
        } else {
            return visitor.visitChildren(this);
        }
    }


}



class LvalueContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if (parent === undefined) {
            parent = null;
        }
        if (invokingState === undefined || invokingState === null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ExprLexerParser.RULE_lvalue;
    }

    IDENT() {
        return this.getToken(ExprLexerParser.IDENT, 0);
    };

    l() {
        return this.getTypedRuleContext(LContext, 0);
    };

    enterRule(listener) {
        if (listener instanceof ExprLexerListener) {
            listener.enterLvalue(this);
        }
    }

    exitRule(listener) {
        if (listener instanceof ExprLexerListener) {
            listener.exitLvalue(this);
        }
    }

    accept(visitor) {
        if (visitor instanceof ExprLexerVisitor) {
            return visitor.visitLvalue(this);
        } else {
            return visitor.visitChildren(this);
        }
    }


}



class LContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if (parent === undefined) {
            parent = null;
        }
        if (invokingState === undefined || invokingState === null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ExprLexerParser.RULE_l;
    }

    LSQUARE() {
        return this.getToken(ExprLexerParser.LSQUARE, 0);
    };

    numexpression() {
        return this.getTypedRuleContext(NumexpressionContext, 0);
    };

    RSQUARE() {
        return this.getToken(ExprLexerParser.RSQUARE, 0);
    };

    l() {
        return this.getTypedRuleContext(LContext, 0);
    };

    enterRule(listener) {
        if (listener instanceof ExprLexerListener) {
            listener.enterL(this);
        }
    }

    exitRule(listener) {
        if (listener instanceof ExprLexerListener) {
            listener.exitL(this);
        }
    }

    accept(visitor) {
        if (visitor instanceof ExprLexerVisitor) {
            return visitor.visitL(this);
        } else {
            return visitor.visitChildren(this);
        }
    }


}




ExprLexerParser.ProgramContext = ProgramContext;
ExprLexerParser.FunclistContext = FunclistContext;
ExprLexerParser.FuncdefContext = FuncdefContext;
ExprLexerParser.ParamlistContext = ParamlistContext;
ExprLexerParser.AContext = AContext;
ExprLexerParser.StatementContext = StatementContext;
ExprLexerParser.VardeclContext = VardeclContext;
ExprLexerParser.BContext = BContext;
ExprLexerParser.AtribstatContext = AtribstatContext;
ExprLexerParser.FunccallContext = FunccallContext;
ExprLexerParser.ParamlistcallContext = ParamlistcallContext;
ExprLexerParser.PrintstatContext = PrintstatContext;
ExprLexerParser.ReadstatContext = ReadstatContext;
ExprLexerParser.ReturnnstatContext = ReturnnstatContext;
ExprLexerParser.IfstatContext = IfstatContext;
ExprLexerParser.CContext = CContext;
ExprLexerParser.ForstatContext = ForstatContext;
ExprLexerParser.StatelistContext = StatelistContext;
ExprLexerParser.DContext = DContext;
ExprLexerParser.AllocexpressionContext = AllocexpressionContext;
ExprLexerParser.FContext = FContext;
ExprLexerParser.ExpressionContext = ExpressionContext;
ExprLexerParser.GContext = GContext;
ExprLexerParser.HContext = HContext;
ExprLexerParser.NumexpressionContext = NumexpressionContext;
ExprLexerParser.JContext = JContext;
ExprLexerParser.TermContext = TermContext;
ExprLexerParser.KContext = KContext;
ExprLexerParser.UnaryexprContext = UnaryexprContext;
ExprLexerParser.FactorContext = FactorContext;
ExprLexerParser.LvalueContext = LvalueContext;
ExprLexerParser.LContext = LContext; 
