# Instala uma imagem com o Java 11 e o Python3 
FROM adoptopenjdk/openjdk11:jre-11.0.16.1_1

RUN echo 'Installing Python'

RUN apt-get update && apt-get install -y python3 python3-pip

RUN echo 'Installing ANTLR4 Tools'

# Instala o ANTLR4
RUN pip3 install antlr4-tools

RUN export PATH="$PATH:/home/developer/.local/bin"

# Executa o ANTLR4 Runtime
RUN antlr4 

RUN echo 'Configurações do ANTLR4 concluídas'

WORKDIR /code

COPY . .