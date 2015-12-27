# eleme

An *eleme* is a native or custom element with a few shortcuts for building components, including smart render (incremental DOM update).

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

## Based on

[DOM4](https://github.com/WebReflection/dom4)

[document.registerElement polyfill](https://github.com/WebReflection/document-register-element)

[Incremental DOM](https://github.com/google/incremental-dom)

[html-parse-stringify](https://github.com/henrikjoreteg/html-parse-stringify)

**Inspired by**

[DOMClass](https://github.com/WebReflection/dom-class)

[html2IDOM](https://github.com/ericponto/html2IDOM)
