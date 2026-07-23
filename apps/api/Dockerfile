FROM node:22-alpine AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

FROM base AS dev
WORKDIR /app
COPY package.json pnpm-workspace.yaml pnpm-lock.yaml* ./
COPY apps/api/package.json ./apps/api/
RUN pnpm install --ignore-scripts
COPY apps/api ./apps/api
EXPOSE 3001
CMD ["pnpm", "--filter", "api", "start:dev"]

FROM base AS build
WORKDIR /app
COPY package.json pnpm-workspace.yaml pnpm-lock.yaml* ./
COPY apps/api/package.json ./apps/api/
RUN pnpm install --ignore-scripts
COPY apps/api ./apps/api
RUN pnpm --filter api build

FROM base AS prod
WORKDIR /app
COPY package.json pnpm-workspace.yaml pnpm-lock.yaml* ./
COPY apps/api/package.json ./apps/api/
RUN pnpm install --prod --ignore-scripts
COPY --from=build /app/apps/api/dist ./apps/api/dist
EXPOSE 3001
CMD ["node", "apps/api/dist/main"]
