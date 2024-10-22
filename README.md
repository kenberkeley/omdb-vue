# An [OMDb](https://omdbapi.com) demo powered by [Vue CLI 3.x](https://cli.vuejs.org)

> The README generated by Vue CLI was moved to [README-CLI.md](./README-CLI.md)

## § Online demo

Click [here](https://kenberkeley.github.io/omdb-vue).

## § Features

* Basics: Vue + Vuex + Vue Router + Axios
* UI lib: Bulma + Font Awesome 5, Fully Responsive & Mobile First!
* [Eliminate unused styles](https://bit.ly/2Lp4397) by [PurgeCSS](https://www.purgecss.com)
* [Auto polyfill](https://bit.ly/2NZZZyv) ([browser compatibility list](https://bit.ly/2YabfvT)) powered by [Polyfill.io](https://github.com/Financial-Times/polyfill-service)
* Save query parameters in the URL (inspired by [LinkedIn Jobs](https://linkedin.com/jobs))

## $ Quick Start

```sh
$ git clone https://github.com/kenberkeley/omdb-vue.git
$ cd omdb-vue/

# Install dependencies
$ npm i

# Run!
$ npm run serve
```

Then open http://localhost:8080

## $ Project Structure

> Only `src/` will be elaborated below

```
src/
├── assets/
├── components/
├── constants/ # All global scope keys (e.g. URL query params, storage) should go here to avoid name collisions
├── pages/
│   └── index/
│       ├── comps/ # Used by index page only
│       └── index.vue
├── router/
├── store/
├── utils/
├── App.vue
└── main.js
```

Reference:

* [Folder-by-type or Folder-by-feature (Stack Exchange)](https://softwareengineering.stackexchange.com/a/338610)
* [How to better organize your React applications? (Medium)](https://medium.com/@alexmngn/how-to-better-organize-your-react-applications-2fd3ea1920f1)

## § Deployment

```sh
# Compile for production
$ npm run build
# npm run build -- --report # generate report.html to analyze bundle content

# Publish to Github Pages (https://bit.ly/2YeUyzG)
$ npm run deploy
```

Check out [Deployment (Vue CLI Doc)](https://cli.vuejs.org/guide/deployment.html) for more information.

## § TODO

* Testings (Unit & E2E)
* OMDb API request limit (temporary solution: replace `VUE_APP_OMDB_API_KEY` in [`.env`](./.env) with the [new](https://www.omdbapi.com/apikey.aspx) one)
