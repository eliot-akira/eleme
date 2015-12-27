var createCustomElement = function( args ) {

  var el, createEl;

  createEl = document.registerElement( args.name, {
    prototype: Object.create( HTMLElement.prototype )
  });

  el = eleme.query( args.name );
  if ( ! el ) el = new createEl;

  return el;
};

module.exports = createCustomElement;