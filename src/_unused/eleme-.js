var Class = require('es-class');
var renderHTML = require('./render');
var renderElement = function( html ) {
  return renderHTML( this, html );
};

var index = 0;
var Eleme;

Eleme = function( description ) {
  if ( description.name )
    return extendCustomElement( description );
  else
    return extendExistingElement( description );
};

// Shortcut
Eleme.query = function( sel ) {
  return document.body.query( sel );
};


var extendCustomElement = function( description ) {

  var
    args = [],
    el = {},
    Element,
    elementName,
    elClass,
    initCallback,
    createdCallback,
    key,
    val,
    nodeName;

  // https://gist.github.com/WebReflection/4327762cb87a8c634a29
  function slice() {
    for (var
      o = +this,
      i = o,
      l = arguments.length,
      n = l - o,
      a = new Array(n < 0 ? 0 : n);
      i < l; i++
    ) a[i - o] = arguments[i];
    return a;
  };

  var createEleme = function createEleme() {
    args = slice.apply(0, arguments);
    return new Element();
  };

  for ( key in description ) {

    if ( ! description.hasOwnProperty( key ) ) continue;

    val = description[key];

    switch (key) {
      case 'name': nodeName = val; break;
      case 'init': initCallback = val; break;
      case 'onCreated': createdCallback = val; break;
      case 'onAttached': el.attachedCallback = val; break;
      case 'onChanged': el.attributeChangedCallback = val; break;
      case 'onDetached': el.detachedCallback = val; break;
      case 'extends': el.extends = val.prototype; break;
      default: el[key] = val;
      break;
    }
  }

  el.extends = el.extends || HTMLElement.prototype;

  el.createdCallback = function () {
    elClass.apply(this, args);
    if (initCallback) initCallback.apply(this, args);
    if (createdCallback) createdCallback.apply(this, args);
  };

  el.render = renderElement;

  elClass = Class( el );
  //copyOwn( elClass, createEleme );

  nodeName = nodeName || ('eleme-' + index++);

  Element = document.registerElement(nodeName, {
    prototype: elClass.prototype
  });

  //createEleme.prototype = Element.prototype;
  /*
  Object.defineProperty(
    Element.prototype, 'constructor', { value: createEleme }
  ); */




  el = createEleme;

  // If it doesn't exist in the document, create new instance

  if ( ! Eleme.query( description.name ) ) {
    el = new el;
  }


  // Extend methods

  el.clone = function( deep ) {
    if (typeof deep === 'undefined') deep = false;
    var newEl = el.cloneNode( deep );
    extendEl( newEl, description );
    return newEl;
  };

  return el;
};



var extendEl = function( el, description ) {

  if ( ! description.render ) {
    description.render = renderElement;
  }

  for ( var key in description ) {
    if ( description.hasOwnProperty(key) && key !== 'el' ) {
      if ( typeof description[key] === 'function' )
        el[key] = description[key].bind(el);
      else el[key] = description[key];
    }
  }

  el.clone = function( deep ) {
    if (typeof deep === 'undefined') deep = false;
    var newEl = el.cloneNode( deep );
    extendEl( newEl, description );
    if ( newEl.init ) newEl.init();
    return newEl;
  };

  return el;
};





var extendExistingElement = function( description ) {

  var el = description.el;

  if ( typeof el === 'undefined' )
    throw new Error('eleme cannot find existing element: el');

  if ( typeof el === 'string' ) {
    el = Eleme.query( el );
  }

  el = extendEl( el, description );

  if ( el.init ) el.init();

  return el;
};


module.exports = Eleme;


/*

window.HTMLElement.prototype.render = function( html ) {
  return renderHTML( this, html );
};
*/
