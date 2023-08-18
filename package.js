{
    "title": "Business Casual",
    "name": "startbootstrap-business-casual",
    "version": "7.0.9",
    "scripts": {
        "build": "npm run clean && npm run build:pug && npm run build:scss && npm run build:scripts && npm run build:assets",
        "build:assets": "node scripts/build-assets.js",
        "build:pug": "node scripts/build-pug.js",
        "build:scripts": "node scripts/build-scripts.js",
        "build:scss": "node scripts/build-scss.js",
        "clean": "node scripts/clean.js",
        "start": "npm run build && node scripts/start.js",
        "start:debug": "npm run build && node scripts/start-debug.js"
    },
    "description": "A casual HTML website theme for businesses built with Bootstrap",
    "keywords": [
        "css",
        "sass",
        "html",
        "responsive",
        "theme",
        "template"
    ],
    "homepage": "https://startbootstrap.com/theme/business-casual",
    "bugs": {
        "url": "https://github.com/StartBootstrap/startbootstrap-business-casual/issues",
        "email": "feedback@startbootstrap.com"
    },
    "license": "MIT",
    "author": "Start Bootstrap",
    "contributors": [
        "David Miller (https://davidmiller.io/)"
    ],
    "repository": {
        "type": "git",
        "url": "https://github.com/StartBootstrap/startbootstrap-business-casual.git"
    },
    "dependencies": {
        "bootstrap": "5.2.3"
    },
    "devDependencies": {
        "autoprefixer": "10.4.14",
        "browser-sync": "2.29.1",
        "chokidar": "3.5.3",
        "concurrently": "6.3.0",
        "postcss": "8.4.21",
        "prettier": "2.8.6",
        "pug": "3.0.2",
        "sass": "1.60.0",
        "shelljs": "0.8.5",
        "upath": "2.0.1"
    }
}