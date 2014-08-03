[![Built with Grunt](https://cdn.gruntjs.com/builtwith.png)](http://gruntjs.com/)
[![Build Status](https://travis-ci.org/nwhite89/ng-underscore.svg?branch=master)](https://travis-ci.org/nwhite89/ng-underscore)
[![devDependency Status](https://david-dm.org/nwhite89/ng-underscore/dev-status.svg)](https://david-dm.org/nwhite89/ng-underscore#info=devDependencies)

ng-underscore
=========

This is a wrapper for the utility library [Underscore](http://underscorejs.org) for
Angular JS. One aim for this project is to ensure Underscore doesn't have to be
left on the window, and we use Underscore with Angular, in the normal depenedency
 injection manner.

## Installing

```bower install ng-underscore```

After loading Angular

```<script src="ng-underscore.min.js"></script>```

Add the module as a dependency to your app

```js
var app = angular.module('app', ['ngUnderscore']);
```

Use it within a controller

```js
var YourCtrl = app.controller('yourController', function($scope, underscore) {
    $scope.size = underscore.size({one: 1, two: 2, three: 3});
});
```

## Developing

To help us develop this module, we are using Grunt some tasks that may be
helpful for you to know about are:

### Testing

This command will run JSHint and JSCS testing JS Files (note files within build)
are not tested, it will also run your local build of the module with all of the
Karma tests:

```grunt test``` it can also be run by using ```npm test```

### Build

This command will build the module, run it through ngMin and then create a
minified version of the module, ready for distribution:

```grunt build```

### Dist

This command will build the module initially and then run the test suite.
Testing with JSHint, JSCS and Karma:

```grunt dist```
