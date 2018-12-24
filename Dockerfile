FROM node:9.6.1
EXPOSE 3000
EXPOSE 4000
COPY client ./client
COPY server ./server
RUN npm install --prefix client
RUN npm install --prefix server
RUN npm run build --prefix client
COPY client/build ./server/public
CMD ["node", "server/bin/www"]
# CMD ["node" "server/bin/www"]
# # run the application
