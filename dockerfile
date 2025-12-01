# Build stage
FROM node:lts-alpine AS builder

USER node
WORKDIR /home/node

COPY package*.json ./
RUN npm ci

# Copia tudo, incluindo schema.prisma
COPY --chown=node:node . .

# Gera o Prisma Client
RUN npx prisma generate

# Compila o NestJS
RUN npm run build

# Remove devDependencies
RUN npm prune --omit=dev


# Final run stage
FROM node:lts-alpine

ENV NODE_ENV=production
USER node
WORKDIR /home/node

COPY --from=builder --chown=node:node /home/node/package*.json ./
COPY --from=builder --chown=node:node /home/node/node_modules ./node_modules
COPY --from=builder --chown=node:node /home/node/dist ./dist
COPY --from=builder --chown=node:node /home/node/schema.prisma ./schema.prisma

ENV PORT=3001
EXPOSE 3001

CMD ["node", "dist/main.js"]
