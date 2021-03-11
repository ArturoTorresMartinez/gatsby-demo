# Gatsby Demo

This is a quick Gatsby demo using the Github API to display data from the repo itself and more.

## Installation

First you'll need [npm](https://docs.npmjs.com/about-npm-versions) and the [Gatsby CLI](https://www.gatsbyjs.com/get-started/) to run the project.

```bash
npm install npm@latest -g
npm install -g gatsby-cli
```

Then, clone the [repo](https://github.com/ArturoTorresMartinez/gatsby-demo/tree/develop) and once opened locally switch to the DEVELOP branch

Create two new files at root level of the directory

```
.env.development
.env.production
```

Inside add these two variables:

```
GITHUB_API_KEY=YOUR_API_KEY
GITHUB_LOGIN=YOUR_GITHUB_LOGIN
```

Replace `YOUR_API_KEY` with your Github personal token.
Replace `YOUR_GITHUB_LOGIN` with your Github username that you use for login.

Run the command:

```bash
yarn
```

Finally, for development run the command:

```bash
gatsby develop
```

And open in your browser `localhost:8000` or the selected port at the time of compilation.

For production run:

```bash
gatsby build
gatsby serve
```

And open in your browser `localhost:9000` or the selected port at the time of compilation.

## All done!

An example site should be available at [Netlify](https://nifty-elion-949ad3.netlify.app/) for comparison

## Credit

All credit goes to overdosing on caffeine.
