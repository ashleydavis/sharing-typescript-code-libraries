# Examples of sharing TypeScript code libraries

This repo contains examples of sharing TypeScript code between projects.

If you like this project, please star this repo and [support my work](https://www.codecapers.com.au/about#support-my-work)

You can watch the video here: https://www.youtube.com/watch?v=y76n6Ow83YQ

Of course you can share a TypeScript code library by publishing it (publicly or privately) to the npm registry and installing it using the `npm` command.

Likewise you can publish (publicly or privately) a TypeScript code library on GitHub and then install directly from there.

Often though we'll want to share TypeScript code between just a couple of projects or between backend and frontend, but we might not want to have to publish the library to a place where it can be installed by `npm` (because it seems like overkill to do that when working with a mono- or multi- repo).

Luckily we can share TypeScript code more directly using [TypeScript project references](https://www.typescriptlang.org/docs/handbook/project-references.html).

This repo contains some examples of doing that.

[The nodejs-example subdirectory](./nodejs-example) shows the most basic example of sharing a TypeScript code library into TypeScript Node.js application using TypeScript project references. This is as simple as it gets.

[The microservices-example subdirectory](./microservices-example) shows how to share a TypeScript code library into a Docker image. This is useful when we have an application composed of multiple TypeScript microservices and we'd like to share code libraries between them.

The microservices example uses [ts-project-bundle](https://github.com/ashleydavis/ts-project-bundle) to bundle the TypeScript project and its libraries ready to be included in the Docker image.

[The microservices-and-front-example subdirectory](./microservices-and-frontend-example) shows how to share a TypeSript code library between a Docker image and a React frontend.

Stay tuned -- a live stream or blog post about this will be announce soon!

[Follow the developer for updates](https://twitter.com/codecapers).
