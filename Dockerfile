FROM oven/bun:latest
WORKDIR /app

COPY package.json ./
COPY bun.lockb ./
COPY j.js ./
RUN bun install
CMD [ "bun","run","start" ]
