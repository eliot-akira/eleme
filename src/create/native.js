var createNativeElement = function( args ) {

  var el;

  if ( args.name[0] === '#' ) {

    el = document.body.query( args.name );

  } else if ( args.name instanceof HTMLElement ) {

    el = args.name;

  } else {

    el = document.createElement( args.name );
  }

  return el;
};

module.exports = createNativeElement;