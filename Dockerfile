FROM node:9.6.1
EXPOSE 3000
EXPOSE 4000

RUN npm install --prefix client
RUN npm install --prefix server
RUN ls server -la
RUN node server/bin/www
RUN npm start --prefix client
# CMD ["node" "server/bin/www"]
# # run the application
# CMD ["npm", "start", "--prefix", "./client"]