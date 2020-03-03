## Ideahub

### Getting started

Make sure you have git and Node JS installed.

Run `npm install -g firebase-tools` to install the Firebase command line tools. After it installs, run `firebase login`. You only need to do this once per computer.

- First, rename .firebaserc.example to .firebaserc
- Rename .env.dev.example to .env.dev
- Now back on the Firebase website, click "Add Firebase to your web app" for each new project
- You'll see a block of code with info like "project id" and "API key"—add these values to your .firebaserc and your the respective dev, stage and live .env files

Run `yarn start` and navigate to `http://localhost:3000/`

Child folders each have their own readmes

- [`/functions`](https://github.com/canonical-web-and-design/ideahub/tree/master/functions) - contains all the backend code (not much)
- [`/public`](https://github.com/canonical-web-and-design/ideahub/tree/master/public) - files that will be available as-is on the web server
- [`/scripts`](https://github.com/canonical-web-and-design/ideahub/tree/master/scripts) - convenience scripts for developers
- [`/src`](https://github.com/canonical-web-and-design/ideahub/tree/master/src) - the front-end app
