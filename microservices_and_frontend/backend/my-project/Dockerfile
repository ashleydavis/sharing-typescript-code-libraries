#
# The builder image.
#
FROM node:14-alpine as builder

#
# Set the working directory for the entire project.
#
WORKDIR /usr/src

#
# Copy microservices and library code.
# In a bigger project this copies more than is needed, but at least it's simple.
#
COPY ./ ./

# 
# Set the working directory for the particular microservice.
#
WORKDIR /usr/src/backend/my-project

# Install dependencies
RUN npm install                         

# Build application including libraries.
RUN npm run build

#
# Set the working directory to the bundle directory.
#
WORKDIR /usr/src/backend/my-project/build

#
# Recursively install dependencies for the microservice and all the libraries.
#
RUN npm install -g recursive-install
RUN npm-recursive-install --production

#
# The prod image.
#
FROM node:14-alpine

WORKDIR /usr/src/app

# Copy the bundle from the builder image.
COPY --from=builder /usr/src/backend/my-project/build ./

WORKDIR /usr/src/app/backend/my-project
    
EXPOSE 80
CMD npm start