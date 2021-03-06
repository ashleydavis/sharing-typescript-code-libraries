# Example Node.js microservice that shares a TypeScript project

This directory contains an example Node.js microservice that imports code from a separate TypeScript project.

This is the same as the code in `..\nodejs`, except in this example we add a Dockerfile that is used to build a Docker image that contains the code for the TypeScript application and the TypeScript library that it depends on. 

The `my-project` directory contains a Node.js microservice.

The `libs` directory is the place were we'll keep our reusable TypeScript libraries that we would like to use between multiple Node.js microservices. This directory contains one TypeScript library imaginatively named `my-library`.

`my-project` depends on `libs/my-library` using TypeScript project references.

You could have other TypeScript libraries under `libs` and share them among multiple Node.js microservices.

Please read through the file at `./my-project/Dockerfile`, it is well commented and shows the use of (`ts-project-bundle`)[https://github.com/ashleydavis/ts-project-bundle] to bundle the TypeScript project and its libraries. 
# Project structure

This diagram illustrates the basic structure of this project:

![Project structure](./../images/Microservices%20example.png)

# Running the application

## Building the Docker image

```bash
cd my-project
docker build .. -f ./Dockerfile -t hello-world
```

The Dockerfile `my-project/Dockerfile` has multiple build stages that compile the TypeScript code for the `my-project` microservices and the `my-library` TypeScript library.

Note that we are building the Dockerfile against the parent directory (`..`) and specifying the filename of the Dockerfile directly using the `-f` argument. We have to make the Docker build context the parent directory so that the code under the `libs` directory can be included in the Docker build process.

## Exploring the contents of the Docker image

To check out how the application is structured in the built image, open a shell to it then have a look around:

```bash
docker run --rm -it hello-world sh
```

## Runing the Docker image

```bash
docker run hello-world
```
