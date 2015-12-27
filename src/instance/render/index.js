var renderHTML = require('./html');

var renderSelf = function( html ) {
  return renderHTML( this, html );
};

module.exports = renderSelf;