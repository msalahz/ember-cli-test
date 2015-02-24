# Ember-cli-test

# Build times

## Init
```
Build successful - 4449ms.

Slowest Trees                  | Total
-------------------------------+----------------
Concat: Vendor                 | 3051ms
```

## Incremental
```
Build successful - 1309ms.

Slowest Trees                  | Total
-------------------------------+----------------
Concat: Vendor                 | 279ms
TreeMerger (appAndDependencies) | 159ms
Funnel: App JS Files           | 78ms
TreeMerger (vendor)            | 75ms
```

### with cookie store

## Init
```
Build successful - 4613ms.

Slowest Trees                  | Total
-------------------------------+----------------
Concat: Vendor                 | 3132ms
```

## Incremental
```
Build successful - 1312ms.

Slowest Trees                  | Total
-------------------------------+----------------
Concat: Vendor                 | 178ms
SixToFive                      | 114ms
TreeMerger (vendor)            | 101ms
Funnel: App JS Files           | 84ms
TreeMerger (appAndDependencies) | 80ms
```

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://www.ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone <repository-url>` this repository
* change into the new directory
* `npm install`
* `bower install`

## Running / Development

* `ember server`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](http://www.ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)

