# Examples of sharing TypeScript code libraries

This repo contains examples of sharing TypeScript code between projects.

Of course you can share a TypeScript code library by publishing it (publicly or privately) to the npm registry and installing it using the `npm` command.

Likewise you can publish (publicly or privately) a TypeScript code library on GitHub and then install directly from there.

Often though we'll want to share TypeScript code between just a couple of projects or between backend and frontend, but we might not want to have to publish the library to a place where it can be installed by `npm`.

Luckily we can share TypeScript code more directly using [TypeScript project references](https://www.typescriptlang.org/docs/handbook/project-references.html).

This repos contains some examples of doing that.

The `nodejs` subdirectory shows how to share a TypeScript code library into TypeScript Node.js application. This is as simple as it gets.

The `microservices` subdirectory shows how to share a TypeScript code library into a Docker image. This is useful when we a project composed of multiple TypeScript microservices and we'd like to share code libraries between them.

Stay tuned. A an example is coming soon to show how to share code between a TypeScript microservice and a TypeScript frontend!

