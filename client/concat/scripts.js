"use strict";
var $__0;
var __moduleName = "scripts";
var iterable = ($__0 = {}, Object.defineProperty($__0, Symbol.iterator, {
  value: function() {
    return $traceurRuntime.generatorWrap(function($ctx) {
      while (true)
        switch ($ctx.state) {
          case 0:
            $ctx.state = 2;
            return 1;
          case 2:
            $ctx.maybeThrow();
            $ctx.state = 4;
            break;
          case 4:
            $ctx.state = 6;
            return 2;
          case 6:
            $ctx.maybeThrow();
            $ctx.state = 8;
            break;
          case 8:
            $ctx.state = 10;
            return 3;
          case 10:
            $ctx.maybeThrow();
            $ctx.state = -2;
            break;
          default:
            return $ctx.end();
        }
    }, this);
  },
  configurable: true,
  enumerable: true,
  writable: true
}), $__0);
for (var $__1 = iterable[$traceurRuntime.toProperty(Symbol.iterator)](),
    $__2; !($__2 = $__1.next()).done; ) {
  try {
    throw undefined;
  } catch (x) {
    x = $__2.value;
    {
      console.log(x);
    }
  }
}
var a = ["We're up all night 'til the sun", "We're up all night to get some", "We're up all night for good fun", "We're up all night to get lucky"];
var a2 = a.map(function(s) {
  return s.length;
});
var a3 = a.map((function(s) {
  return s.length;
}));
console.log(a3);
function fibonacci() {
  var $__5,
      prev,
      curr;
  return $traceurRuntime.generatorWrap(function($ctx) {
    while (true)
      switch ($ctx.state) {
        case 0:
          $__5 = [0, 1], prev = $__5[0], curr = $__5[1];
          $ctx.state = 9;
          break;
        case 9:
          ($__5 = [curr, prev + curr], prev = $__5[0], curr = $__5[1], $__5);
          $ctx.state = 6;
          break;
        case 6:
          $ctx.state = 2;
          return curr;
        case 2:
          $ctx.maybeThrow();
          $ctx.state = 9;
          break;
        default:
          return $ctx.end();
      }
  }, this);
}
for (var $__3 = fibonacci()[$traceurRuntime.toProperty(Symbol.iterator)](),
    $__4; !($__4 = $__3.next()).done; ) {
  word = $__4.value;
  {
    if (n > 1000)
      break;
    console.log(n);
  }
}
