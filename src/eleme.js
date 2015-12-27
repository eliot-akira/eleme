var createNativeElement = require('./create/native');
var createCustomElement = require('./create/custom');
var createCloneMethod = require('./instance/clone');
var initInstance = require('./instance/init');
var render = require('./instance/render');
var addShortcuts = require('./shortcuts');

var eleme = function( args ) {

  var el;

  if ( typeof args.name === 'undefined' )
    throw new Error('eleme needs a name');

  if ( args.name[0] === '#' || args.name.indexOf('-') < 0 ) {
    el = createNativeElement( args );
  } else {
    el = createCustomElement( args );
  }

  args.render = render;
  args.clone = createCloneMethod( args );

  return initInstance( el, args );
};

addShortcuts( eleme );

module.exports = eleme;