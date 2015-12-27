# eleme

An eleme ("eliim") is a native or custom element that can render itself with incremental DOM update. It also includes a few shortcuts for composing elements into components.

## Use

~~~javascript
require('eleme');
~~~

This prepares the DOM environment and attaches `eleme` to window.

### Example

~~~javascript
var el = eleme({
  name: 'my-button',
  init: function() {
    this.counter = 0;
    this.increment();
    this.on('click', this.increment);
  },
  increment: function() {
    this.counter++;
    this.update();
  },
  update: function() {
    this.render('<button>'+this.counter+'</button>');
  }
});

eleme.prepend( el );
~~~

### Constructor

`eleme()` takes an object with the following properties. It returns a new or existing element.

**name**

Name can be any of the following:

- Native element tag: div, a, etc. This creates a new instance of the element.

- Custom element tag: must have `-` in the name. If there is a custom element of the same name in the DOM already, it will be extended. If not, it will return a new instance.

- Existing element ID: `#element` - will extend it.

**init** (optional) - function to run on init

Other methods can be provided, and they will have `this` binding to the element instance.

### Instance methods

The returned element is extended with the following methods.

**render** - perform incremental DOM update with given HTML string

**emit, on, off, once** - event shortcuts

### Element methods

All elements including `document.body` will have these shortcuts:

**query, queryAll, prepend, append**

## Based on

[DOM4](https://github.com/WebReflection/dom4), [document.registerElement polyfill](https://github.com/WebReflection/document-register-element), [Incremental DOM](https://github.com/google/incremental-dom), [html-parse-stringify](https://github.com/henrikjoreteg/html-parse-stringify)

Inspired by: [DOMClass](https://github.com/WebReflection/dom-class), [html2IDOM](https://github.com/ericponto/html2IDOM)
