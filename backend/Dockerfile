FROM node:24

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY prisma ./prisma/
COPY prisma.config.ts ./
RUN npx prisma generate

COPY docker-entrypoint.sh ./
RUN chmod +x docker-entrypoint.sh

COPY . .

EXPOSE 5000

ENTRYPOINT ["sh", "docker-entrypoint.sh"]