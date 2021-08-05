# Example of sharing a TypeScript library between a microservice and a frontend

This directory shows an example backend and a frontend that share a TypeScript project.

The microservice under the `backend` directory is essentially the same as in the `microservices-example`.

This example adds a React-based TypeScript frontend under the `frontend` subdirectory.

The library `my-library` under the `libs` subdirectory is shared between the backend and the frontend, again we are using TypeScript project references.

# Project structure

This diagram illustrates the basic structure of this project:

![Project structure](./../images/Backend%20and%20frontend%20example.png)

# Running the application

## Building the Docker image

```bash
cd my-project
docker build ../.. -f ./Dockerfile -t hello-world
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

## Running the frontend in development

```bash
cd frontend
npm start
```

## Building the frontend for production

```bash
cd frontend
npm run build
```

Please checkout `frontend/package.json` and you'll see how we run `tsc --build` to build the shared libraries before invoking Parcel to bundle the frontend. 