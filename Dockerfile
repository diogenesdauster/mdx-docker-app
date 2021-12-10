FROM node

WORKDIR /my-app-generator

RUN npm init --yes 

RUN npm i -g typescript ; \
npm i mendixmodelsdk mendixplatformsdk when @types/when --save ; \
npm i --save-dev @types/node 

COPY script.ts .

RUN tsc --init --target es2018 script.ts 

RUN tsc

ENTRYPOINT node script.js ${MDX_USER} ${MDX_KEY} ${APPNAME} 