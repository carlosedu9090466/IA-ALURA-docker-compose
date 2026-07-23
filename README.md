# 🚀 PNPM Monorepo: React (Vite) + NestJS + Docker

Este repositório é um **Monorepo** moderno configurado com **PNPM Workspaces**. Ele integra uma aplicação Frontend em **React (Vite)** e uma API Backend em **NestJS**, totalmente containerizadas com **Docker** e **Docker Compose** para garantir portabilidade e facilidade de execução em qualquer ambiente.

---

## 🏗️ Arquitetura do Projeto

```text
.
├── apps/
│   ├── api/                  # Aplicação Backend (NestJS 11 + TypeScript)
│   │   ├── src/              # Código-fonte (Controllers, Modules, Services)
│   │   ├── Dockerfile        # Build multi-stage para a API
│   │   └── package.json      # Dependências da API (nome: "api")
│   │
│   └── web/                  # Aplicação Frontend (React 19 + Vite + TypeScript)
│       ├── src/              # Componentes e views em React
│       ├── vite.config.ts    # Configuração do Vite (Host 0.0.0.0, Porta 3000)
│       ├── Dockerfile        # Build multi-stage para o Frontend
│       └── package.json      # Dependências do Frontend (nome: "web")
│
├── package.json              # Package.json da raiz com atalhos para os apps
├── pnpm-workspace.yaml       # Configuração dos membros do workspace PNPM
├── docker-compose.yml        # Orquestração dos containers (Web na :3000 e API na :3001)
├── .dockerignore             # Exclusões para otimização do contexto Docker
└── README.md                 # Documentação técnica do projeto
```

---

## 🛠️ Tecnologias Utilizadas

- **Gerenciador de Pacotes & Workspaces**: [PNPM v11](https://pnpm.io/)
- **Frontend**: [React 19](https://react.dev/), [Vite](https://vite.dev/), TypeScript
- **Backend**: [NestJS 11](https://nestjs.com/), TypeScript, Express, RxJS
- **Containerização**: [Docker](https://www.docker.com/), Docker Compose (Imagem base: `node:22-alpine`)

---

## ⚙️ Pré-requisitos

Para executar o projeto localmente ou via container:
- **Docker** e **Docker Compose** instalados (Recomendado); OU
- **Node.js** v22.x ou superior e **npm** / **pnpm**.

---

## 🚀 Como Executar o Projeto

### Opção 1: Via Docker Compose (Recomendado)

Esta opção não exige que você tenha o Node.js ou PNPM instalados na máquina local.

1. **Subir os serviços em ambiente de desenvolvimento**:
   ```bash
   docker compose up --build
   ```
2. **Acessar as aplicações**:
   - 🌐 **Frontend (React)**: [http://localhost:3000](http://localhost:3000)
   - ⚡ **Backend API (NestJS)**: [http://localhost:3001](http://localhost:3001)

3. **Encerrar os containers**:
   ```bash
   docker compose down
   ```

> 💡 **Dica Importante**: Sempre que instalar uma **nova dependência** no workspace ou em qualquer aplicação (`package.json`), você deve rodar o comando `npm run docker:up` (ou `docker compose up --build`) para reconstruir a imagem do container e aplicar os novos pacotes.

---

## 🗺️ Rotas da Aplicação

> 📌 *Nota: Sempre que uma nova rota for criada no projeto, ela deve ser registrada nesta seção.*

### Frontend (`apps/web` - Porta 3000)

| Rota | Descrição | Componente Principal |
| :--- | :--- | :--- |
| `/` | Página de Login | `LoginPage` (`src/pages/LoginPage/LoginPage.tsx`) |

### Backend API (`apps/api` - Porta 3001)

| Endpoint | Verbo | Descrição |
| :--- | :--- | :--- |
| `http://localhost:3001` | GET / POST / ... | Endpoints REST da API NestJS |

---

### Opção 2: Execução Local no Sistema Hospedeiro

Caso prefira rodar diretamente na sua máquina local durante o desenvolvimento:

1. **Instalar todas as dependências do Monorepo**:
   ```bash
   npx pnpm install
   ```

2. **Executar as aplicações**:
   - **Rodar ambos em paralelo**:
     ```bash
     npm run dev
     ```
   - **Rodar apenas o Frontend (React)**:
     ```bash
     npm run dev:web
     ```
   - **Rodar apenas o Backend (NestJS)**:
     ```bash
     npm run dev:api
     ```

3. **Realizar Build de Produção do Monorepo**:
   ```bash
   npm run build
   ```

---

## 📜 Atalhos do `package.json` Raiz

Os scripts configurados na raiz utilizam a flag `--filter` do PNPM. Eles permitem interagir com qualquer aplicação sem a necessidade de mudar de diretório:

| Comando | Descrição |
| :--- | :--- |
| `npm run dev` | Executa `apps/web` e `apps/api` simultaneamente em modo dev. |
| `npm run dev:web` | Inicia o servidor dev do React/Vite na porta `3000`. |
| `npm run dev:api` | Inicia a API NestJS em modo watch na porta `3001`. |
| `npm run build` | Compila o TypeScript e gera os bundles de produção de todos os apps. |
| `npm run build:web` | Gera a build de produção do frontend React (`dist/`). |
| `npm run build:api` | Compila o código da API NestJS (`dist/`). |
| `npm run lint:web` | Executa a verificação de código do frontend. |
| `npm run lint:api` | Executa o ESLint no backend. |
| `npm run docker:up` | Atalho para `docker compose up --build`. |
| `npm run docker:down` | Atalho para `docker compose down`. |

---

## 🔧 Detalhes Técnicos de Implementação

### 1. PNPM Workspaces (`pnpm-workspace.yaml`)
O arquivo de workspace mapeia todos os projetos dentro da pasta `apps/`:
```yaml
packages:
  - 'apps/*'
```
Isso permite o compartilhamento eficiente de dependências e a execução centralizada de comandos.

### 2. Otimização nos Dockerfiles Multi-stage
Cada aplicação possui um `Dockerfile` dedicado utilizando a imagem leve `node:22-alpine`:
- **Estágio `dev`**: Utilizado pelo Docker Compose durante o desenvolvimento, mantendo volumes vinculados para hot-reload.
- **Estágio `prod`**:
  - `apps/web`: Compila o app React e serve os arquivos estáticos via **Nginx Alpine**.
  - `apps/api`: Gera a build compilada em JavaScript e executa com o runtime limpo do Node.js.
- **`--ignore-scripts`**: Aplicado no `pnpm install` dentro dos Dockerfiles para garantir builds previsíveis e imunes a restrições de scripts de terceiros no PNPM v11.

### 3. Integração Frontend & Backend (CORS)
- O NestJS foi configurado com `app.enableCors()` em `apps/api/src/main.ts`.
- O Vite escuta na interface `0.0.0.0` e na porta `3000` via `vite.config.ts`.

---

## 📝 Licença

Este repositório é de uso livre para estudos, desenvolvimento e produção.
