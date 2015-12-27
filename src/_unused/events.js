// Source: https://github.com/WebReflection/micro-env

var emit = function (t, a) {
  var e = document.createEvent('Event');
  e.initEvent(t, 1, 1);
  e.detail = a;
  this.dispatchEvent(e);
};

var on = function () {
  this.addEventListener.apply(this, arguments);
  return this;
};

var off = function () {
  this.removeEventListener.apply(this, arguments);
  return this;
};

var once = function (t, h, c) {
  var f = function(){
    this.off(t, f, !!c);
    h.apply(this, arguments);
  };
  return this.on(t, f, !!c);
};

(function(p){
  p.on = on;
  p.off = off;
  p.emit = emit;
}(HTMLElement.prototype));
