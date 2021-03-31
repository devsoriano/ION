FROM node:14

LABEL vendor=Ion \
  com.ion.maintainer="Rafael Soriano Ramírez <rafael.soriano@arteenarte.com>" \
  com.ion.product="Test Ion Frontend" \
  version="1.0" \
  description="Test Ion Frontend"

WORKDIR /usr/src/app
COPY package*.json ./

RUN npm install --no-optional
COPY . .

ARG PUBLIC_API_URL
ENV SNOWPACK_PUBLIC_API_URL=${PUBLIC_API_URL}



EXPOSE 8080
RUN npm run build
CMD npm start
