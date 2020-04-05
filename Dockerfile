FROM node:13.12.0

WORKDIR /src/app/
COPY . /src/app
RUN make build-client-proto