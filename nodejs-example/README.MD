# Example Node.js project that shares a TypeScript project

This directory contains an example Node.js project that imports code from a separate TypeScript project.

The `my-project` directory contains a Node.js main project that we would like to use shared TypeScript libraries.

The `libs` directory is the place were we'll keep our reusable TypeScript libraries that we would like to use between multiple Node.js projects. This directory contains one TypeScript library imaginatively named `my-library`.


`my-project` depends on `libs/my-library` using TypeScript project references.

You could have other TypeScript libraries under `libs` and share them among multiple Node.js projects.

# Running the application

## First build the main project

```bash
cd my-project
npm install         # One time dependency installation.
npx tsc --build     # Run the TypeScript compiler.
```

The TypeScript code is compiled to JavaScript code in the `dist` directory for `my-project` and `my-library`.

Note the use of the `--build` argument, this causes all referenced projects to build along with the main project.

## Now run the code

Now you can run the compiled JavaScript code:

```bash
node dist/index.js
```