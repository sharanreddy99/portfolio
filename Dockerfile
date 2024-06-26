FROM node:18.13.0-alpine3.16

WORKDIR /app

COPY package* ./
RUN npm install

COPY . ./

EXPOSE 3000

CMD ["npm", "run", "start"]