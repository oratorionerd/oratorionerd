FROM node:13

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY ./package.json .
COPY ./package-lock.json .
# Bundle app source
COPY ./youtube_latest_video_service/index.js .

# If you are building your code for production
RUN npm ci --only=production
#RUN npm install

CMD [ "node", "index.js" ]