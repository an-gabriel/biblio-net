# Biblio-net

Um simples `microserviço` para gerencia o cadastro de autores, livros e aluga-los

Esta ferramenta foi desenvolvida com Node

## Dependências
- Node.js LTS
- Inversify
- Mongoose
- Docker

## Instalação para o uso local
Para instalar a ferramenta em sua máquina, basta realizar o clone deste repositório.<br>

Em um diretorio de sua escolha execute o comando de clone do repositório:
```bash
git clone git@github.com:an-gabriel/biblio-net.git
```

Após clonar o projeto, entre no diretório `biblio-net` e execute o arquivo de `npm install`.<br>
Abaixo é possível visualizar o comando de execução do arquivo de setup:

```bash
cd ~/biblio-net && npm install
```

Acesso o endereço abaixo será possivel utilizar a rota de login : 
```bash
    www.localhost:3000/auth/login
```
>__IMPORTANTE__: Está é a unica rota que não é necessario realizar autenticação

Para realizar o login é necessario passar no body da requisição `username` e `password` conforme exemplo abaixo:
```CURL
curl --location 'localhost:3000/auth/login' \
--header 'Content-Type: application/json' \
--data '{ "username": "usuario", "password": "senha123" }'
```
>__IMPORTANTE__: Authenticação disponivel somente para esse body : `{ "username": "usuario", "password": "senha123" }`

## Instalação para o com docker

Para instalar o `service` para utilizar com docker, basta realizar o clone deste repositório.<br>

Em um diretorio de sua escolha execute o comando de clone do repositório:
```bash
git clone git@github.com:an-gabriel/biblio-net.git
```

Após clonar o projeto, entre no diretório `biblio-net` e execute o arquivo de `npm install`.<br>
Abaixo é possível visualizar o comando de execução do arquivo de setup:

```bash
cd ~/biblio-net && npm install
```

Depois de instaladas todas as dependencias, execute o comando para realizar o build da aplicação via docker:

```bash
docker-compose build
```

quando finalizar o processo de build, basta executar o comando abaixo para iniciar o conteiner criado:

```bash
docker-compose up
```
