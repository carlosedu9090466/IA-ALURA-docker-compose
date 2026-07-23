# 🧠 GEMINI.md - Contexto, Comandos e Convenções do Monorepo

Este documento contém o guia técnico de contexto, análise de estrutura, comandos essenciais e convenções do projeto para orientar desenvolvedores e assistentes de Inteligência Artificial.

---

## 📌 Visão Geral do Projeto

Este repositório é um **Monorepo** gerenciado pelo **PNPM Workspaces**, contendo duas aplicações principais organizadas no diretório `apps/`:

1. **`apps/web`**: Frontend desenvolvido em **React 19**, **Vite**, **Tailwind CSS** e **TypeScript**, seguindo a arquitetura **Atomic Design**.
2. **`apps/api`**: Backend desenvolvido em **NestJS 11**, **TypeScript**, **RxJS** e **Express**, estritamente aderente aos **Princípios REST**.

A infraestrutura é totalmente containerizada com **Docker** e **Docker Compose**, utilizando a imagem de runtime **Node.js 22 Alpine**.

---

## 📁 Análise da Estrutura de Diretórios

```text
.
├── apps/
│   ├── api/                      # Backend NestJS (Princípios REST)
│   │   ├── src/                  # Controllers, Modules, Services e DTOs
│   │   ├── test/                 # Testes End-to-End (e2e) com Jest
│   │   ├── Dockerfile            # Dockerfile Multi-stage do Backend
│   │   ├── nest-cli.json         # Configuração da CLI do NestJS
│   │   └── package.json          # Dependências do app "api"
│   │
│   └── web/                      # Frontend React + Vite + Tailwind CSS
│       ├── src/                  # Componentes (Atomic Design), assets e estilos
│       │   ├── components/
│       │   │   ├── atoms/        # Elementos básicos (Button, Input, Icon)
│       │   │   ├── molecules/    # Combinações simples (FormField, SearchBar)
│       │   │   ├── organisms/    # Seções complexas (Header, Sidebar, Form)
│       │   │   └── templates/    # Layouts de página reutilizáveis
│       │   └── pages/            # Páginas da aplicação
│       ├── vite.config.ts        # Configuração do Vite (Host: 0.0.0.0, Porta: 3000)
│       ├── Dockerfile            # Dockerfile Multi-stage do Frontend
│       └── package.json          # Dependências do app "web"
│
├── package.json                  # Scripts raiz e atalhos com npx pnpm --filter
├── pnpm-workspace.yaml           # Declaração dos membros do workspace (packages: ['apps/*'])
├── docker-compose.yml            # Orquestração dos serviços "web" e "api"
├── .dockerignore                 # Exclusões para contextos do Docker
├── .gitignore                    # Exclusões de controle de versão (node_modules, dist, etc.)
├── README.md                     # Documentação geral do repositório
└── GEMINI.md                     # Guia de contexto, convenções e comandos
```

---

## 💻 Comandos Principais

Todos os comandos de execução e build podem ser rodados diretamente da **raiz do projeto**, sem necessidade de navegar para pastas internas.

### 1. Desenvolvimento Local (Sem Docker)

| Ação | Comando npm / npx | Comando PNPM Direto |
| :--- | :--- | :--- |
| **Iniciar Ambos (Web + API)** | `npm run dev` | `npx pnpm --parallel --filter web --filter api dev` |
| **Iniciar Apenas o Frontend** | `npm run dev:web` | `npx pnpm --filter web dev` |
| **Iniciar Apenas a API** | `npm run dev:api` | `npx pnpm --filter api start:dev` |

### 2. Build de Produção

| Ação | Comando npm / npx | Comando PNPM Direto |
| :--- | :--- | :--- |
| **Build de Todo o Workspace** | `npm run build` | `npx pnpm --filter "./apps/*" build` |
| **Build do Frontend (`apps/web`)** | `npm run build:web` | `npx pnpm --filter web build` |
| **Build da API (`apps/api`)** | `npm run build:api` | `npx pnpm --filter api build` |

### 3. Testes e Qualidade de Código

| Ação | Comando | Descrição |
| :--- | :--- | :--- |
| **Testes do Frontend (Web)** | `npx pnpm --filter web test` | Executa os testes de componentes no React |
| **Testes Unitários da API** | `npm run test:api` | Executa o Jest em `apps/api` |
| **Testes e2e da API** | `npx pnpm --filter api test:e2e` | Executa testes ponta a ponta na API |
| **Cobertura de Testes (API)** | `npx pnpm --filter api test:cov` | Gera relatório de cobertura da API |
| **Lint do Frontend** | `npm run lint:web` | Linter do Vite/Oxlint em `apps/web` |
| **Lint da API** | `npm run lint:api` | ESLint em `apps/api` |

### 4. Containerização com Docker

| Ação | Comando | Descrição |
| :--- | :--- | :--- |
| **Subir Aplicação Completa** | `npm run docker:up` | Equivale a `docker compose up --build` |
| **Derrubar Containers** | `npm run docker:down` | Equivale a `docker compose down` |
| **Visualizar Logs** | `npm run docker:logs` | Equivale a `docker compose logs -f` |

---

## 📐 Convenções do Projeto & Boas Práticas

### 1. Monorepo & PNPM Workspaces
- **Novos Projetos/Pacotes**: Aplicações devem ser criadas dentro de `apps/<nome_do_app>`. Bibliotecas compartilhadas devem ser criadas dentro de `packages/<nome_da_lib>`.
- **Filtros PNPM**: Sempre utilize `pnpm --filter <nome_do_pacote> <comando>` para executar ações em um pacote específico.
- **Gerenciamento de Dependências**: Adicione pacotes usando `pnpm --filter <nome_do_pacote> add <pacote>`.

### 2. Frontend (`apps/web`)
- **Arquitetura de Componentes**: Seguir estritamente o **Atomic Design**:
  - `src/components/atoms/`: Botões, inputs, rótulos, ícones e elementos indivisíveis.
  - `src/components/molecules/`: Grupos simples de átomos funcionando juntos (ex: rótulo + input + mensagem de erro).
  - `src/components/organisms/`: Seções complexas de interface (ex: formulário de cadastro, cabeçalho, tabela).
  - `src/components/templates/`: Estruturas de layout sem dados reais vinculados.
  - `src/pages/`: Páginas reais injetando dados nos templates e organismos.
- **Estilização**: Uso exclusivo do **Tailwind CSS** para estilização utilitária e responsiva.
- **Testes Obrigatórios de Componentes**: Todo e qualquer componente criado (`.tsx`) **DEVE possuir obrigatoriamente** seu respectivo arquivo de teste (`*.test.tsx` ou `*.spec.tsx`) cobrindo seu uso e comportamento essencial (ex: renderização correta, manipulação de eventos de clique/digitação e estados principais).
- **Configuração do Servidor**: O Vite deve manter `server: { host: true, port: 3000 }` no `vite.config.ts` para ser acessível nos containers Docker.

### 3. Backend (`apps/api`)
- **Arquitetura & Princípios REST**: Seguir estritamente as boas práticas de **APIs RESTful**:
  - **Mapeamento de URIs**: Substantivos no plural identificando recursos (ex: `/users`, `/products`, `/orders/:id/items`).
  - **Uso Semântico de Verbos HTTP**:
    - `GET`: Recuperação de recursos (idempotente e sem efeitos colaterais).
    - `POST`: Criação de novos recursos.
    - `PUT`: Substituição completa de um recurso existente.
    - `PATCH`: Atualização parcial de um recurso.
    - `DELETE`: Remoção de um recurso.
  - **Códigos de Status HTTP Apropriados**:
    - `200 OK`: Sucesso genérico / Leitura.
    - `201 Created`: Recurso criado com sucesso.
    - `204 No Content`: Remoção ou ação concluída sem corpo de resposta.
    - `400 Bad Request`: Erro de validação/payload inválido.
    - `401 Unauthorized`: Falha de autenticação.
    - `403 Forbidden`: Sem permissão para o recurso.
    - `404 Not Found`: Recurso não localizado.
    - `409 Conflict`: Conflito de estado (ex: e-mail já cadastrado).
    - `500 Internal Server Error`: Erros não esperados do servidor.
  - **Paginação, Filtragem & Ordenação via Query Parameters**:
    - **Paginação Obrigatória em Coleções**: Endpoints de listagem `GET` devem aceitar obrigatoriamente os query params `page` (base 1, padrão: `1`) e `limit` (tamanho da página, padrão: `10` ou `20`). Exemplo: `GET /users?page=1&limit=10`.
    - **Estrutura de Resposta Paginada**: Endpoints de listagem paginada devem retornar uma estrutura envelope padronizada:
      ```json
      {
        "data": [...],
        "meta": {
          "page": 1,
          "limit": 10,
          "totalItems": 100,
          "totalPages": 10
        }
      }
      ```
    - **Filtragem & Ordenação**: Filtros devem ser passados como query params adicionais (ex: `GET /products?status=active&category=electronics`). A ordenação deve usar os parâmetros `sort` e `order` (ex: `GET /users?sort=createdAt&order=DESC` ou `GET /users?sort=-createdAt`).
  - **Statelessness**: A API deve ser totalmente sem estado (stateless), utilizando autenticação via tokens (JWT).
  - **Tratamento Global de Exceções**: Retornar payloads de erro padronizados (ex: `{ statusCode, message, error, timestamp }`).
- **Testes Backend**: Manter testes unitários (`*.spec.ts`) junto aos arquivos de código e testes e2e na pasta `test/`.

### 4. Controle de Versão & Convenções de Commit (Git)
Em **ambos os projetos** (`web` e `api`), as mensagens de commit devem seguir rigorosamente o padrão **Conventional Commits**:

- **Formato**: `<tipo>(<escopo>): <descrição curta no imperativo>`
- **Tipos Permitidos**:
  - `feat`: Nova funcionalidade (ex: `feat(web): adicionar componente Button em atoms`).
  - `fix`: Correção de bug (ex: `fix(api): tratar erro de usuario nao encontrado no findOne`).
  - `docs`: Alterações na documentação (ex: `docs: atualizar GEMINI.md com convencoes REST`).
  - `style`: Formatação, ponto e vírgula, espaços (sem alteração de lógica de código).
  - `refactor`: Refatoração de código sem alterar comportamento externo.
  - `test`: Adição ou correção de testes (ex: `test(web): adicionar testes unitarios para o Input molecule`).
  - `chore`: Atualização de tarefas de build, configs ou dependências (ex: `chore(deps): atualizar tailwindcss`).
  - `ci`: Alterações em pipelines de CI/CD e scripts de integração.
  - `perf`: Mudanças de código focadas em melhoria de desempenho.
- **Escopos Recomendados**: `web`, `api`, `deps`, `docker`, `workspace`.

### 5. Docker & Multi-stage Builds
- **Imagem Base**: `node:22-alpine` para total compatibilidade com o PNPM v11.
- **Flag `--ignore-scripts`**: Obrigatória no `RUN pnpm install --ignore-scripts` nos Dockerfiles para prevenir bloqueios de segurança de lifecycle scripts no PNPM 11.
- **Estágios**:
  - `dev`: Monta volumes locais com hot-reload ativo.
  - `prod`: Servidor Nginx estático para o React e build Node.js otimizado para o NestJS.
- **Hot Reload no Docker (Windows)**: O Vite deve conter `server.watch.usePolling: true` no `vite.config.ts` e o `docker-compose.yml` deve manter a variável `CHOKIDAR_USEPOLLING=true` para garantir que alterações nos arquivos no sistema hospedeiro (Windows) recarreguem instantaneamente o navegador sem precisar reiniciar o container.
- **Instalação de Novas Dependências**: Sempre que uma nova dependência for instalada no workspace ou em qualquer pacote (`package.json`), oriente o usuário ou execute `npm run docker:up` (`docker compose up --build`) para recriar as imagens do Docker.

### 6. Documentação & Mapeamento de Rotas (`README.md`)
- **Novas Rotas**: Toda nova rota criada na aplicação (`web` ou `api`) DEVE obrigatoriamente ser adicionada e documentada na seção `## 🗺️ Rotas da Aplicação` do [README.md](file:///d:/Anota%C3%A7%C3%B5es%20-%20Carlos/CURSO%20IA/README.md).

### 7. Planos de Implementação (`plans/`)
- **Armazenamento de Planos**: Todo plano de implementação gerado no projeto DEVE obrigatoriamente ser salvo no diretório `plans/` localizado na raiz do repositório (ex: `plans/<nome_da_feature>.md`).


