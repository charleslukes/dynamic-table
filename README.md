# Prime Multiplication Table

This project includes a simple multiplicative prime table using LitElement with TypeScript.

## Thoughts

This looks like a straight forward test without much complexity, using React, Angular etc for something as simple as this didn't make much sense to me. I decided to use LitElement, a very light weight library (5.8kb gzip) for building web components. I also love the idea of web components which is "write onces run everywhere".

## Setup

Install dependencies:

```bash
npm i
```

**NB:**
Ensure you must have node installed.

## Build

This sample uses the TypeScript compiler to produce JavaScript that runs in modern browsers.

To build the JavaScript version of your component:

```bash
npm run build
```

To watch files and rebuild when the files are modified, run the following command in a separate shell:

```bash
npm run build:watch
```

## Dev Server

This project uses open-wc's [es-dev-server](https://github.com/open-wc/open-wc/tree/master/packages/es-dev-server) for previewing the project without additional build steps. ES dev server handles resolving Node-style "bare" import specifiers, which aren't supported in browsers. It also automatically transpiles JavaScript and adds polyfills to support older browsers.

To run the dev server and open the project in a new browser tab:

```bash
npm run serve
```

There is a development HTML file located at `/dev/index.html` that you can view at http://localhost:8000/dev/index.html.

## Testing

This project uses Karma, Chai, Mocha, and the open-wc test helpers for testing. See the [open-wc testing documentation](https://open-wc.org/testing/testing.html) for more information.

Tests can be run with the `test` script:

```bash
npm test
```
