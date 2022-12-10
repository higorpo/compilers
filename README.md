# Trabalho de Introdução e Compiladores

### Como instalar o compilador

> Atenção: É necessário ter o Node.js instalado no computador antes de executar os passos abaixo. Para instalar o Node.js basta seguir os [passos de instalação no site oficial da ferramenta](https://nodejs.dev/).

1. Instale as dependências do projeto através do comando `make install`
2. Execute o comando `make build-project` para buildar o projeto.

### Como executar um dos arquivos de demonstração?

Temos três programas de exemplo escritos para execução do compilador. Eles ficam localizados dentro da pasta `./codes` do projeto. Para executar um dos 3 programas, basta escolher um arquivo dentre as 3 opções a seguir:

1. file1.lcc
2. file2.lcc
3. file3.lcc

Após escolher um, copie o nome do arquivo e execute o seguinte comando: `make compile file=<<nome-do-arquivo>>`, exemplo `make compile file=file1.lcc`.
