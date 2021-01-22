# Styled Asset App Demo
This project is part of a two part series. In [part one](https://youtu.be/Q2dnMcCj4cQ), we explore
the developer experience around fleshing out an idea and using the Contentful [App Framework](https://www.contentful.com/developers/docs/extensibility/app-framework/), [Forma-36](https://f36.contentful.com/), and the [open source field editors](https://contentful-field-editors.netlify.app/) to build
a rich text editor with extra features.

The code in this repo is the product of [part two](https://youtu.be/y45hepSuP_8) in
our series, where we build out an app that matches rich text assets to modifiable fields.
We recommend you follow along with the live streams in order to fully understand the context
when running this app locally.

## How to run this project
This project was bootstrapped using the [Create Contentful App](https://github.com/contentful/create-contentful-app) which utilizes Create React App under the hood.
If you are familiar with running a Node process, you can follow the steps outlined below.

If you are new to the Contentful [App Framework](https://www.contentful.com/developers/docs/extensibility/app-framework/), we recommend learning how to build and run an app by following
our detailed [tutorial](https://www.contentful.com/developers/docs/extensibility/app-framework/tutorial/).

![Rich Text Styled Asset](/richtext-style-asset.png)
## Available Scripts

In the project directory, you can run:

#### `npm start`

Creates or updates your app definition in contentful, and runs the app in development mode.
Open your app to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

#### `npm run build`

Builds the app for production to the `build` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

## Libraries to use

To make your app look and feel like Contentful use the following libraries:

- [Forma 36](https://f36.contentful.com/) – Contentful's design system
- [Contentful Field Editors](https://www.contentful.com/developers/docs/extensibility/field-editors/) – Contentful's field editor React components

## Learn More

[Read more](https://www.contentful.com/developers/docs/extensibility/app-framework/create-contentful-app/) and check out the video on how to use the CLI.

Create Contentful App uses [Create React App](https://create-react-app.dev/). You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started) and how to further customize your app.
