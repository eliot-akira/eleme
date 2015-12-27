# eleme

An *eleme* is a native or custom element with a few methods for building components, including smart render.

## Use

~~~javascript
require('eleme');
~~~

This prepares the DOM environment and attaches `eleme` to window.

## Example

~~~javascript
var el = eleme({
  name: 'div',
  init: function() {
    this.counter = 0;
    this.on('click', function() {
      this.counter++;
      this.update();
    });
    this.update();
  },
  update: function() {
    this.render('<button>'+this.counter+'</button>');
  }
});

eleme.prepend( el );
~~~

## Constructor

Pass an object to the constructor with these properties:

- *name* - native/custom element tag, or existing element ID

- *init* - optional: function to run on init

## Instance methods

render, emit, on, off, once

## Element methods

query, queryAll, prepend, append

## Based on

[DOM4](https://github.com/WebReflection/dom4), [document.registerElement polyfill](https://github.com/WebReflection/document-register-element), [Incremental DOM](https://github.com/google/incremental-dom), [html-parse-stringify](https://github.com/henrikjoreteg/html-parse-stringify)

Inspired by: [DOMClass](https://github.com/WebReflection/dom-class), [html2IDOM](https://github.com/ericponto/html2IDOM)
