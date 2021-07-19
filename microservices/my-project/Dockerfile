#
# The builder image.
#
FROM node:14-alpine as builder

#
# Set the working directory for the libraries.
#
WORKDIR /usr/src

# Copy library code.
COPY ./libs ./libs

#
# Set the working directory for the microservice.
#
WORKDIR /usr/src/app

# Copy microservice source code.
COPY ./my-project/package*.json ./
COPY ./my-project/tsconfig.json ./      
COPY ./my-project/src ./src             

# Install dependencies
RUN npm install                         

# Build application including libraries.
RUN npm run build

#
# The prod image.
##
FROM node:14-alpine

WORKDIR /usr/src

# Copy compiled library code.
# TODO: This could be specific to the library dist.
# TODO: Some sort of templating would be good here to generate a copy for each library.
COPY --from=builder /usr/src/libs ./libs

WORKDIR /usr/src/app
COPY --from=builder /usr/src/app/dist ./dist
COPY ./my-project/package*.json ./
RUN npm install --only=production
EXPOSE 80
CMD npm start