# Build stage
FROM node:lts-alpine AS builder

WORKDIR /home/node

COPY package*.json ./
RUN npm ci

# Copia todo o projeto, incluindo schema.prisma
COPY . .

# Gera o Prisma Client (faz parte das DEPENDENCIES)
RUN npx prisma generate

# Compila o NestJS
RUN npm run build

# Remove somente devDependencies
RUN npm prune --omit=dev


# Final stage
FROM node:lts-alpine

ENV NODE_ENV=production
WORKDIR /home/node

COPY --from=builder /home/node/package*.json ./
COPY --from=builder /home/node/node_modules ./node_modules
COPY --from=builder /home/node/dist ./dist
COPY --from=builder /home/node/schema.prisma ./schema.prisma

ENV PORT=3001
EXPOSE 3001

CMD ["node", "dist/main.js"]
