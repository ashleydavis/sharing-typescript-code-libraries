# Example Node.js project that shares a TypeScript project

This directory contains an example Node.js project that imports code from a separate TypeScript project.

The `my-project` directory contains a Node.js main project that would like to use shared TypeScript libraries.

The `libs` directory is the place were we'll keep our reusable TypeScript libraries that we would like to use between multiple Node.js projects. This directory contains one TypeScript library imaginatively named `my-library`.


`my-project` depends in the library `libs/my-library` using TypeScript project references.

You could have other TypeScript libraries under `libs` and share them among multiple Node.js projects.

# Running the project

## First build `my-library`

Before running the `main` project you need to build `my-library` as follows.

```bash
cd libs
cd my-library
npm install     # One time dependency installation.
npx tsc         # Run the TypeScript compiler.
cd ..
cd ..           # Return to parent directory.
```

The TypeScript code is compiled to JavaScript code in the `dist` directory.

## Build `my-project`

Now you can build `my-project` that depends on `my-library`:

```bash
cd my-project
npm install     # One time dependency installation.
npx tsc         # Run the TypeScript compiler.
```

The TypeScript code is compiled to JavaScript code in the `dist` directory.

## Run the code

Now you can run the compiled JavaScript code:

```bash
node dist/index.js
```