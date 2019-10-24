# Webpack Compiler Indications

We are looking to create a frontEnd compiler system based on webpack and respecting an already determinated structure found on our CMS. 

For this project we would like to respect the folder structure as they are on the BitBucked repository.
[GitHub - maubayuelo/webpackcompiler](https://github.com/maubayuelo/webpackcompiler)

We wish to have 3 commands working on our terminal.

1. `npm run build`

Compile the Scss files and JS files on one single file for the css and one single file for the JS.	
* main.js
* style.css

*This one is already working and is up to you to preserve it or do it on your way removing the exisings webpack or json files that already exists on the repository*


2. `npm run dev`
- Compile and inject the CSS and the JS on index.html
- Reload website using a local URL


3. `npm run start`
- Does the same operation than `npm run build` but also Reload website using a local URL and loading the compiled files (main.js, style.css)


The location for uncompiled files are:

`/web/assets/scss/index.scss`

`/web/assets/js/scripts`

The location for compiled files is:

`/web/assets/css/style.css`

`/web/assets/js/main.js`

The location for index.html is

`/app/Resources/views/index.html`

Let me know if this explanation is clear enough to allow you begin with this task.


![folders](https://snipboard.io/aPH5uQ.jpg)
