# Build stage
FROM node:lts-alpine AS builder

WORKDIR /home/node

COPY package*.json ./
RUN npm ci

# Copia tudo
COPY . .

# Gera Prisma Client
RUN npx prisma generate

# Compila Nest
RUN npm run build

# Remove devDependencies
RUN npm prune --omit=dev


# Final stage
FROM node:lts-alpine

ENV NODE_ENV=production
WORKDIR /home/node

COPY --from=builder /home/node/package*.json ./
COPY --from=builder /home/node/node_modules ./node_modules
COPY --from=builder /home/node/dist ./dist
COPY --from=builder /home/node/schema.prisma ./schema.prisma

# REGERA PRISMA CLIENT NA IMAGEM FINAL
RUN npx prisma generate

EXPOSE 3000

CMD ["node", "dist/main.js"]
