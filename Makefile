run-antlr:
	docker-compose up --build -d

build-project:
	yarn tsc

create-compiler:
	docker-compose exec antlr antlr4 -lib grammars -o lib -visitor -Xexact-output-dir grammars/ExprLexer.g4 -Dlanguage=JavaScript

exec:
	node ./build/src/main.js