FROM oven/bun:1 AS base
WORKDIR /app

FROM base AS install
WORKDIR /app
COPY package.json bun.lock .
RUN bun install --frozen-lockfile

FROM base AS runner
WORKDIR /app
COPY --from=install /app/node_modules .
COPY . .

CMD ["bun", "start"]

