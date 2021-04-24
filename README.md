# Prime Multiplication Table

This project includes a simple multiplicative prime table using LitElement with TypeScript.

## Thoughts

Due to the nature of the test, using React, Angular etc for something for it didn't make much sense to me. I decided to use LitElement, a very light weight library (5.8kb gzip) for building web components. I also love the idea of web components which is "write onces run everywhere".

## Clone

Clone the repository

```bash
  git clone https://github.com/charleslukes/dynamic-table.git
```

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

To run the dev server and open the project in a new browser tab:

```bash
npm run serve
```

There is a development HTML file located at `/index.html` that you can view at http://localhost:8000.

## Testing

Tests can be run with the `test` script:

```bash
npm test
```
