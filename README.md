# Front-end project starter – Gulp, Stylus, Pug

## Go to your workspace, clone the project, rename and go to

```
cd Workspace
git clone https://github.com/bastosh/fronty.git
mv fronty myProject && cd $_
```

## Set your own git repository to start a fresh new project
```
rm -rf .git
git init
```

## Run and build something nice
```
npm i && gulp
```
A \_build folder is created with all your project files and Browsersync is running. You can work and see the changes.

## Go to production
```
gulp dist
```
Once you're good to go, run this command to build the production folder, with minified CSS and JS, each concatenated in a single file.

## Install dependencies

Use a package manager to install your dependencies:
```
npm install bootstrap@4.0.0-alpha.6
npm install jquery
```

Add the references to the config.js:
```
//gulp/config.js

JS_DEPS: [
  'node_modules/jquery/dist/jquery.js',
],

CSS_DEPS: [
  'node_modules/bootstrap/dist/css/bootstrap-reboot.css',
],
```

The gulpfile.js 'build' task will copy your dependencies to \_build/css/vendors and/or \_build/js/vendors. All you need to do then is to configure the base.pug file to link to your vendors :
```
//src/pug/base.pug

block stylesheets
  // build:css css/app.css
  link(rel='stylesheet' href='css/vendors/bootstrap-reboot.css')
  link(rel='stylesheet' href='css/main.css')
  // endbuild

block scripts
  // build:js js/app.js
  script(src='js/vendors/jquery.js')
  script(src='js/main.js')
  // endbuild
```
