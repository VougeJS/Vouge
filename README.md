<p align="center">
  <a href="https://github.com/VougeJS/Vouge">
    <img src="docs/assets/vouge_120px.png" height="120" width="422" alt="Vouge Logo">
  </a>
</p>

## Introduction

Vouge is Web UI Library, focus on the newest CSS trends, based on Vue.

// TODO

### Browser Support

// TODO

## Documentation

Documentation will be placed in [*/docs*](./docs) folder. Later, we will provide web-based documentation.

// TODO


## Installation

You can download bundled Vouge from the [***releases***](https://github.com/VougeJS/Vouge/releases) page. We have provided a few  
solutions which you can choose. Simple **Vouge + Vue** in one package, **Vouge alone** *(you have to install Vue by yourself)*, and from **command-line**:

``` bash
# npm
npm install vougejs/vouge
```

``` bash
# yarn
yarn add vougejs/vouge
```

## Usage

You have few options, you can use simple bundled version of Vouge.

### Vouge + Vue bundled

For including vouge with vue, you have to put *script* at the bottom of the body section of your `index.html`
```html
  <script src="path/to/vouge.vue.js"></script>
```

### Bundled Vouge without Vue
For including vouge without vue, you have to put *script* right after `vue.js` script at the bottom of the body section of your `index.html`
```html
  <script src="path/to/vue.js"></script>
  <script src="path/to/vouge.js"></script>
```

### Vouge with usage of webpack
```javascript
import Vue from 'vue'
import Vouge from 'vouge'

Vue.use(Vouge)
```

---

For including styles, you have to put styles into head section of your `index.html`
```html
<link href="path/to/vouge.min.css" rel="stylesheet">
```

## Community Support

Communicate and ask questions on the [Vouge Discord Community](https://discord.gg/qbqxa8t).

## Contributing

// TODO

### Contributing Guide

#### JetBrains users
If you are using JetBrains products, you can (and should) after cloning of repository,
set `webpack configuration file`, to `build/webpack.config.dev.js` in project settings.
It will give you better auto-completion experience, and more specifically JetBrains will now resolve `@`, as a valid path to `/src` folder.
Useful while playing in SandPit.

// TODO


### License

Vouge is under [MIT licensed](./LICENSE).
