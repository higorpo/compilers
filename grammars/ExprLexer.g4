grammar ExprLexer;

FUNCTION: 'def';
INT: 'int';
FLOAT: 'float';
STRING: 'string';
PRINT: 'print';
READ: 'read';
RETURN: 'return';
IF: 'if';
FOR: 'for';
ELSE: 'else';
BREAK: 'break';
NEW: 'new';
NULL: 'null';

fragment LETTER: [A-Za-z];
fragment DIGIT: [0-9];
fragment CHARACTER: LETTER | DIGIT | [ \t\r\n]+;

IDENT: LETTER (LETTER | DIGIT)*;

INT_CONSTANT: DIGIT+;
FLOAT_CONSTANT: DIGIT+ .DIGIT+;
STRING_CONSTANT: '"' .*? '"';
WS: [ \t\n\r\f]+ -> skip;

COMPARISON_OPERATOR: '<' | '>' | '<=' | '>=' | '==' | '!=';
MATH_OPERATOR: '+' | '-';
SPECIAL_MATH_OPERATOR: '*' | '/' | '%';

ATTRIBUTION: '=';

COMMA: ',';
SEMICOMMA: ';';
LPAREN: '(';
RPAREN: ')';
LCURLY: '{';
RCURLY: '}';
LSQUARE: '[';
RSQUARE: ']';

program: statement | funclist | EOF;
funclist: funcdef funclist | funcdef;
funcdef:
	FUNCTION IDENT LPAREN paramlist RPAREN LCURLY statelist RCURLY;
paramlist:
	INT IDENT COMMA paramlist
	| FLOAT IDENT COMMA paramlist
	| STRING IDENT COMMA paramlist
	| a;
a: INT IDENT | FLOAT IDENT | STRING IDENT |;
statement:
	vardecl SEMICOMMA
	| atribstat SEMICOMMA
	| printstat SEMICOMMA
	| readstat SEMICOMMA
	| returnnstat SEMICOMMA
	| ifstat
	| forstat
	| LCURLY statelist RCURLY
	| BREAK SEMICOMMA
	| SEMICOMMA;
vardecl: INT IDENT b | FLOAT IDENT b | STRING IDENT b;
b: LSQUARE INT_CONSTANT RSQUARE b |;
atribstat:
	lvalue ATTRIBUTION expression
	| lvalue ATTRIBUTION allocexpression
	| lvalue ATTRIBUTION funccall;
funccall: IDENT LPAREN paramlistcall RPAREN;
paramlistcall: IDENT COMMA paramlistcall | IDENT |;
printstat: PRINT expression;
readstat: READ lvalue;
returnnstat: RETURN;
ifstat: IF LPAREN expression RPAREN statement c;
c: ELSE statement |;
forstat:
	FOR LPAREN atribstat SEMICOMMA expression SEMICOMMA atribstat RPAREN statement;
statelist: statement d;
d: statelist |;
allocexpression: NEW INT f | NEW FLOAT f | NEW STRING f;
f: numexpression f | numexpression;
expression: numexpression g;
g: COMPARISON_OPERATOR h | h;
h: numexpression |;
numexpression: term j;
j: MATH_OPERATOR term j |;
term: unaryexpr k;
k: SPECIAL_MATH_OPERATOR unaryexpr k |;
unaryexpr: MATH_OPERATOR factor | factor;
factor:
	INT_CONSTANT
	| FLOAT_CONSTANT
	| STRING_CONSTANT
	| NULL
	| lvalue
	| LPAREN numexpression RPAREN;
lvalue: IDENT l;
l: LSQUARE numexpression RSQUARE l |;
