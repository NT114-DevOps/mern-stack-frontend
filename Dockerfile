FROM node:21-alpine

WORKDIR /app

COPY . .

RUN npm install

RUN npx tailwindcss init

EXPOSE 3000

CMD ["npm", "start"]