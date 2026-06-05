# Étape 1 : build
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

# Étape 2 : image finale légère
FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production

# Utilisateur non-root pour la sécurité
RUN addgroup -S nodejs && adduser -S nodeuser -G nodejs

COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/index.js ./

USER nodeuser
EXPOSE 3000

HEALTHCHECK --interval=30s --timeout=3s \
  CMD wget -qO- http://localhost:3000/health || exit 1

CMD ["node", "index.js"]
