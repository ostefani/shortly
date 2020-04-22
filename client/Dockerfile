FROM node:10.20 as builder

COPY package.json package.json
RUN npm install

# Add your source files
COPY . .

CMD ["npm","run","dev"]
