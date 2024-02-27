FROM node:20.11.1-alpine

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install

COPY . .

RUN npm run build

CMD ["npm", "start"]