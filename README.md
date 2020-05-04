# Shortly

URI shortener app, created using JavaScript stack.

[User Stories](#user-stories) | [Tools Used](#tools-used-aka-tech-stack) | [Install & Build](#install-and-build) | [Demo](#demo)

The application does not use authorization, tracking users by sessions. Redirects are cached in Redis. Sessions and other data are removed within 24 hours after creation.

## User Stories

### Minimum Viable Product

- [+] As a user I can see home page with a form
- [+] As a user I can create a shorten URIs
- [+] As a user I can shoose a subpart for the URI
- [+] As a user I can see an error if the subpart has already taken
- [+] As a user I can visit "My links" page to see a list of shorten URIs
- [+] As a user I will be redirected to the original URI after clicking the shorten URI

## Tools Used aka Tech Stack

### Back End

- [Node.js](https://nodejs.org/en/) 12+
- [Express](https://expressjs.com/) web framework
- [MongoDB](https://www.mongodb.com/) NoSQL database
- [Redis](https://redis.io/) in-memory data structure store

### Front End

- [React](https://facebook.github.io/react/) library
- [Next.js](https://nextjs.org/) the React framework
- [Styled jsx](https://github.com/zeit/styled-jsx) CSS-in-JS

### Tools

- [Docker](https://www.docker.com/)
- [Webpack](https://webpack.js.org/) module bundler
- [ESLint](http://eslint.org/) linter with [Airbnb's config]
- [Babel.js](https://babeljs.io/) compiler
- [Storybook](https://storybook.js.org/) a user interface development environment and playground for UI components

## Install and Build

#### Install dependencies

``` bash
npm install
```

#### Create a `.env` file

You can find a `.env.example` file in the root directories for the client and the server as a starting point. You can copy the content of this file to `.env` and add your own values.

``` bash
touch .env
```

#### Start Storybook

```bash
cd client
npm run storybook
```

#### Start React app with hot reload and API dev server

Using docker:


``` bash
docker-compose up
```

Open [http://localhost:3000](http://localhost:3000) to view app in the browser.
The API will be available at [http://localhost:3001](http://localhost:3001).

You can also use npm scripts to start the project. You can find them in package.json files

#### Build for production

It builds production bundle, uglifies JS, minifies CSS.

``` bash
docker-compose -f docker-compose.yaml -f docker-compose.prod.yaml up
```

You can also use npm scripts without Docker

## Demo

The demo is temporarily deployed on Digital Ocean using their paid plan thus it may happen that you do not find a working application at the link.

[Shortly](http://138.197.68.236:3000/)

## Git Branches

The `master` branch is the main branch where the source code always reflects the current production release.
