# stock-search

Front-end for the Stock Search take home assignment

## Running the app

You need an api key for the alphavantage api. First, be sure to run:

```sh
export API_KEY=<YOUR KEY>
```

This will allow the app to fetch form the api.

To run the app, make sure you have installed node and yarn. Then install dependencies and run start:

```sh

yarn
yarn start
```

## Deploying the app

`yarn build` will create a production build of the app into the `build/` directory that can be hosted on a simple static server of choice.

## Architecture and Technologies

Stock Search is a front-end app written in React, TypeScript, Sass with CSS variables using BEM conventions, and Axios for data fetching. Linting is done with ESLint and Prettier.

The main entrypoint and theme files are found in the `src/App*` and `src/index*` files. A global CSS variable theme is loaded in `src/theme.scss`.

The axios singleton config is located in `src/api/axios-client`. You need to export an environment variable `API_KEY` for the app to fetch data correctly.

All non-entry React components are found in `src/components`. Having all components in one big directory with subdirectories for each component has scaled pretty well in my experience.
