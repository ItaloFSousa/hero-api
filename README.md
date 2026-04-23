# Hero API - CRUD com NestJS
API REST simples desenvolvida com NestJS para gerenciamento de heróis.
Este projeto foi desenvolvido com o com foco em aprendizado, acompanhando um tutorial, objetivo de praticar estrutura do NestJS,
rotas, DTOs e operações CRUD.

## 📌 Sobre o projeto
A aplicação permite gerenciar heróis com as seguintes informações:
- Nome real
- Nome de herói
- Time

## ⚙️ Funcionalidades
- ✅ Criar um novo herói
- 📄 Listar todos os heróis
- 🔍 Buscar herói por ID
- ✏️ Atualizar dados de um herói
- ❌ Deletar um herói

## 🛠️ Tecnologias utilizadas
- NestJS
- Node.js
- TypeScript
- MySQL
- Prisma ORM

## 🚀 Como rodar o projeto
```
# Clonar o repositório
git clone https://github.com/ItaloFSousa/hero-api

# Entrar na pasta
cd hero-api

# Instalar dependências
npm install

# Rodar o projeto
npm run start:dev
```
### A API estará rodando em:
```
http://localhost:3000
```

## 📡 Endpoints
| Método | Rota        | Descrição             |
| ------ | ----------- | --------------------- |
| GET    | /heroes     | Lista todos os heróis |
| GET    | /heroes/:id | Busca um herói        |
| POST   | /heroes     | Cria um herói         |
| PATCH  | /heroes/:id | Atualiza um herói     |
| DELETE | /heroes/:id | Remove um herói       |

## 📦 Exemplo de JSON
```
{
	"civilName": "Tony Stark",
	"heroName": "Homem de Ferro",
	"team": "Vingadores"
}
```