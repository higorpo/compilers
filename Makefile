run-antlr:
	docker-compose up --build -d

build-project:
	npm run build

create-compiler:
	docker-compose exec antlr antlr4 -lib grammars -o lib -visitor -Xexact-output-dir grammars/ExprLexer.g4 -Dlanguage=JavaScript

compile:
	node ./build/src/main.js --f $(file)

install:
	npm install