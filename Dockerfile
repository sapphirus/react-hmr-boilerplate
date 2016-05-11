FROM node:0.12.10

ENV DIR .
WORKDIR ${DIR}
VOLUME ${DIR}

RUN su
RUN npm i -g gulp-cli webpack mocha eslint babel-cli
RUN npm up -g
#RUN npm dedupe -g
RUN exit

RUN npm i
#RUN npm dedupe
#RUN npm ls --depth=0

CMD ["npm", "start"]
