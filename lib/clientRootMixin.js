function styleInject(css, ref) {
  if (ref === void 0) ref = {};
  var insertAt = ref.insertAt;
  if (!css || typeof document === 'undefined') {
    return;
  }
  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';
  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }
  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css = "@media (max-width: 1000px) {\n  .vuepress-plugin-demo-block__h_code {\n    display: none;\n  }\n  .vuepress-plugin-demo-block__app {\n    margin-left: auto !important;\n    margin-right: auto !important;\n  }\n}\n.vuepress-plugin-demo-block__wrapper {\n  margin-top: 10px;\n  border: 1px solid #ebebeb;\n  border-radius: 4px;\n  transition: all 0.2s;\n}\n.vuepress-plugin-demo-block__wrapper.vuepress-plugin-demo-block__horizontal .vuepress-plugin-demo-block__display {\n  height: 400px;\n  display: flex;\n}\n.vuepress-plugin-demo-block__wrapper.vuepress-plugin-demo-block__horizontal .vuepress-plugin-demo-block__display .vuepress-plugin-demo-block__app {\n  width: 300px;\n  border: 1px solid #ebebeb;\n  box-shadow: 1px 1px 3px #ebebeb;\n  margin-right: 5px;\n  overflow: auto;\n}\n.vuepress-plugin-demo-block__wrapper.vuepress-plugin-demo-block__horizontal .vuepress-plugin-demo-block__display .vuepress-plugin-demo-block__h_code {\n  flex: 1;\n  overflow: auto;\n  height: 100%;\n}\n.vuepress-plugin-demo-block__wrapper.vuepress-plugin-demo-block__horizontal .vuepress-plugin-demo-block__display .vuepress-plugin-demo-block__h_code > pre {\n  overflow: visible;\n}\n.vuepress-plugin-demo-block__wrapper .vuepress-plugin-demo-block__display {\n  max-height: 400px;\n  overflow: auto;\n}\n.vuepress-plugin-demo-block__wrapper div {\n  box-sizing: border-box;\n}\n.vuepress-plugin-demo-block__wrapper:hover {\n  box-shadow: 0 0 11px rgba(33, 33, 33, 0.2);\n}\n.vuepress-plugin-demo-block__wrapper .vuepress-plugin-demo-block__code {\n  overflow: hidden;\n  height: 0;\n  padding: 0 !important;\n  background-color: #282c34;\n  border-radius: 0 !important;\n  transition: height 0.5s;\n}\n.vuepress-plugin-demo-block__wrapper .vuepress-plugin-demo-block__code pre {\n  margin: 0 !important;\n}\n.vuepress-plugin-demo-block__wrapper .vuepress-plugin-demo-block__display {\n  padding: 20px;\n  border-bottom: 1px solid #ebebeb;\n}\n.vuepress-plugin-demo-block__wrapper .vuepress-plugin-demo-block__footer {\n  position: relative;\n  text-align: center;\n}\n.vuepress-plugin-demo-block__wrapper .vuepress-plugin-demo-block__footer.vuepress-plugin-demo-block__show-link .vuepress-plugin-demo-block__jsfiddle,\n.vuepress-plugin-demo-block__wrapper .vuepress-plugin-demo-block__footer.vuepress-plugin-demo-block__show-link .vuepress-plugin-demo-block__codepen {\n  opacity: 1;\n}\n.vuepress-plugin-demo-block__wrapper .vuepress-plugin-demo-block__footer.vuepress-plugin-demo-block__show-link .vuepress-plugin-demo-block__expand::before {\n  border-top: none;\n  border-right: 6px solid transparent;\n  border-bottom: 6px solid #ccc;\n  border-left: 6px solid transparent;\n}\n.vuepress-plugin-demo-block__wrapper .vuepress-plugin-demo-block__footer:hover .vuepress-plugin-demo-block__jsfiddle,\n.vuepress-plugin-demo-block__wrapper .vuepress-plugin-demo-block__footer:hover .vuepress-plugin-demo-block__codepen,\n.vuepress-plugin-demo-block__wrapper .vuepress-plugin-demo-block__footer:hover .vuepress-plugin-demo-block__expand span,\n.vuepress-plugin-demo-block__wrapper .vuepress-plugin-demo-block__footer:hover .vuepress-plugin-demo-block__expand {\n  opacity: 1;\n}\n.vuepress-plugin-demo-block__wrapper .vuepress-plugin-demo-block__footer:hover .vuepress-plugin-demo-block__expand::before {\n  border-top-color: #3eaf7c !important;\n  border-bottom-color: #3eaf7c !important;\n}\n.vuepress-plugin-demo-block__wrapper .vuepress-plugin-demo-block__footer:hover svg {\n  fill: #3eaf7c !important;\n}\n.vuepress-plugin-demo-block__wrapper .vuepress-plugin-demo-block__footer .vuepress-plugin-demo-block__expand-text {\n  transition: all 0.5s;\n  opacity: 0;\n}\n.vuepress-plugin-demo-block__wrapper .vuepress-plugin-demo-block__footer form:nth-last-child(2) {\n  right: 50px;\n}\n.vuepress-plugin-demo-block__wrapper .vuepress-plugin-demo-block__footer form:last-child {\n  right: 10px;\n}\n.vuepress-plugin-demo-block__wrapper .vuepress-plugin-demo-block__footer .vuepress-plugin-demo-block__button {\n  border-color: transparent;\n  background-color: transparent;\n  font-size: 14px;\n  color: #3eaf7c;\n  cursor: pointer;\n  outline: none;\n  margin: 0;\n  width: 46px;\n  position: relative;\n}\n.vuepress-plugin-demo-block__wrapper .vuepress-plugin-demo-block__footer .vuepress-plugin-demo-block__button:hover::before {\n  content: attr(data-tip);\n  white-space: nowrap;\n  position: absolute;\n  top: -30px;\n  left: 50%;\n  color: #eee;\n  line-height: 1;\n  z-index: 1000;\n  border-radius: 4px;\n  padding: 6px;\n  transform: translateX(-50%);\n  background-color: rgba(0, 0, 0, 0.8);\n}\n.vuepress-plugin-demo-block__wrapper .vuepress-plugin-demo-block__footer .vuepress-plugin-demo-block__button:hover::after {\n  content: '' !important;\n  display: block;\n  position: absolute;\n  left: 50%;\n  top: -5px;\n  transform: translateX(-50%);\n  border: 5px solid transparent;\n  border-top-color: rgba(0, 0, 0, 0.8);\n}\n.vuepress-plugin-demo-block__wrapper .vuepress-plugin-demo-block__footer .vuepress-plugin-demo-block__button svg {\n  width: 34px;\n  height: 20px;\n  fill: #ccc;\n}\n.vuepress-plugin-demo-block__wrapper .vuepress-plugin-demo-block__footer .vuepress-plugin-demo-block__jsfiddle,\n.vuepress-plugin-demo-block__wrapper .vuepress-plugin-demo-block__footer .vuepress-plugin-demo-block__codepen {\n  position: absolute;\n  top: 10px;\n  transition: all 0.5s;\n}\n.vuepress-plugin-demo-block__wrapper .vuepress-plugin-demo-block__footer .vuepress-plugin-demo-block__expand {\n  position: relative;\n  width: 100px;\n  height: 40px;\n  margin: 0;\n  color: #3eaf7c;\n  font-size: 14px;\n  background-color: transparent;\n  border-color: transparent;\n  outline: none;\n  transition: all 0.5s;\n  cursor: pointer;\n}\n.vuepress-plugin-demo-block__wrapper .vuepress-plugin-demo-block__footer .vuepress-plugin-demo-block__expand::before {\n  content: \"\";\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 0;\n  height: 0;\n  border-top: 6px solid #ccc;\n  border-right: 6px solid transparent;\n  border-left: 6px solid transparent;\n  transform: translate(-50%, -50%);\n}\n.vuepress-plugin-demo-block__previewer-iframe {\n  border: none;\n  width: 100%;\n  height: 100%;\n}\n";
styleInject(css);

function _regeneratorRuntime() {
  _regeneratorRuntime = function () {
    return exports;
  };
  var exports = {},
    Op = Object.prototype,
    hasOwn = Op.hasOwnProperty,
    defineProperty = Object.defineProperty || function (obj, key, desc) {
      obj[key] = desc.value;
    },
    $Symbol = "function" == typeof Symbol ? Symbol : {},
    iteratorSymbol = $Symbol.iterator || "@@iterator",
    asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator",
    toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
  function define(obj, key, value) {
    return Object.defineProperty(obj, key, {
      value: value,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), obj[key];
  }
  try {
    define({}, "");
  } catch (err) {
    define = function (obj, key, value) {
      return obj[key] = value;
    };
  }
  function wrap(innerFn, outerFn, self, tryLocsList) {
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator,
      generator = Object.create(protoGenerator.prototype),
      context = new Context(tryLocsList || []);
    return defineProperty(generator, "_invoke", {
      value: makeInvokeMethod(innerFn, self, context)
    }), generator;
  }
  function tryCatch(fn, obj, arg) {
    try {
      return {
        type: "normal",
        arg: fn.call(obj, arg)
      };
    } catch (err) {
      return {
        type: "throw",
        arg: err
      };
    }
  }
  exports.wrap = wrap;
  var ContinueSentinel = {};
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}
  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });
  var getProto = Object.getPrototypeOf,
    NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype);
  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function (method) {
      define(prototype, method, function (arg) {
        return this._invoke(method, arg);
      });
    });
  }
  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if ("throw" !== record.type) {
        var result = record.arg,
          value = result.value;
        return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) {
          invoke("next", value, resolve, reject);
        }, function (err) {
          invoke("throw", err, resolve, reject);
        }) : PromiseImpl.resolve(value).then(function (unwrapped) {
          result.value = unwrapped, resolve(result);
        }, function (error) {
          return invoke("throw", error, resolve, reject);
        });
      }
      reject(record.arg);
    }
    var previousPromise;
    defineProperty(this, "_invoke", {
      value: function (method, arg) {
        function callInvokeWithMethodAndArg() {
          return new PromiseImpl(function (resolve, reject) {
            invoke(method, arg, resolve, reject);
          });
        }
        return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
      }
    });
  }
  function makeInvokeMethod(innerFn, self, context) {
    var state = "suspendedStart";
    return function (method, arg) {
      if ("executing" === state) throw new Error("Generator is already running");
      if ("completed" === state) {
        if ("throw" === method) throw arg;
        return doneResult();
      }
      for (context.method = method, context.arg = arg;;) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }
        if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) {
          if ("suspendedStart" === state) throw state = "completed", context.arg;
          context.dispatchException(context.arg);
        } else "return" === context.method && context.abrupt("return", context.arg);
        state = "executing";
        var record = tryCatch(innerFn, self, context);
        if ("normal" === record.type) {
          if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue;
          return {
            value: record.arg,
            done: context.done
          };
        }
        "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg);
      }
    };
  }
  function maybeInvokeDelegate(delegate, context) {
    var methodName = context.method,
      method = delegate.iterator[methodName];
    if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel;
    var record = tryCatch(method, delegate.iterator, context.arg);
    if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel;
    var info = record.arg;
    return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel);
  }
  function pushTryEntry(locs) {
    var entry = {
      tryLoc: locs[0]
    };
    1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry);
  }
  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal", delete record.arg, entry.completion = record;
  }
  function Context(tryLocsList) {
    this.tryEntries = [{
      tryLoc: "root"
    }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0);
  }
  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) return iteratorMethod.call(iterable);
      if ("function" == typeof iterable.next) return iterable;
      if (!isNaN(iterable.length)) {
        var i = -1,
          next = function next() {
            for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next;
            return next.value = undefined, next.done = !0, next;
          };
        return next.next = next;
      }
    }
    return {
      next: doneResult
    };
  }
  function doneResult() {
    return {
      value: undefined,
      done: !0
    };
  }
  return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", {
    value: GeneratorFunctionPrototype,
    configurable: !0
  }), defineProperty(GeneratorFunctionPrototype, "constructor", {
    value: GeneratorFunction,
    configurable: !0
  }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) {
    var ctor = "function" == typeof genFun && genFun.constructor;
    return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name));
  }, exports.mark = function (genFun) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun;
  }, exports.awrap = function (arg) {
    return {
      __await: arg
    };
  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    void 0 === PromiseImpl && (PromiseImpl = Promise);
    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
    return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) {
      return result.done ? result.value : iter.next();
    });
  }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () {
    return this;
  }), define(Gp, "toString", function () {
    return "[object Generator]";
  }), exports.keys = function (val) {
    var object = Object(val),
      keys = [];
    for (var key in object) keys.push(key);
    return keys.reverse(), function next() {
      for (; keys.length;) {
        var key = keys.pop();
        if (key in object) return next.value = key, next.done = !1, next;
      }
      return next.done = !0, next;
    };
  }, exports.values = values, Context.prototype = {
    constructor: Context,
    reset: function (skipTempReset) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined);
    },
    stop: function () {
      this.done = !0;
      var rootRecord = this.tryEntries[0].completion;
      if ("throw" === rootRecord.type) throw rootRecord.arg;
      return this.rval;
    },
    dispatchException: function (exception) {
      if (this.done) throw exception;
      var context = this;
      function handle(loc, caught) {
        return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught;
      }
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i],
          record = entry.completion;
        if ("root" === entry.tryLoc) return handle("end");
        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc"),
            hasFinally = hasOwn.call(entry, "finallyLoc");
          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
          } else {
            if (!hasFinally) throw new Error("try statement without catch or finally");
            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
          }
        }
      }
    },
    abrupt: function (type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }
      finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null);
      var record = finallyEntry ? finallyEntry.completion : {};
      return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record);
    },
    complete: function (record, afterLoc) {
      if ("throw" === record.type) throw record.arg;
      return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel;
    },
    finish: function (finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel;
      }
    },
    catch: function (tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if ("throw" === record.type) {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }
      throw new Error("illegal catch attempt");
    },
    delegateYield: function (iterable, resultName, nextLoc) {
      return this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      }, "next" === this.method && (this.arg = undefined), ContinueSentinel;
    }
  }, exports;
}
function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}
function _asyncToGenerator(fn) {
  return function () {
    var self = this,
      args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }
      _next(undefined);
    });
  };
}

var CLASS_WRAPPER = 'vuepress-plugin-demo-block__wrapper';
var CLASS_DISPLAY = 'vuepress-plugin-demo-block__display';
var CLASS_CODE = 'vuepress-plugin-demo-block__code';
var CLASS_FOOTER = 'vuepress-plugin-demo-block__footer';
var CLASS_HORIZONTAL = 'vuepress-plugin-demo-block__horizontal';
var CLASS_H_CODE = 'vuepress-plugin-demo-block__h_code';
var CLASS_APP = 'vuepress-plugin-demo-block__app';
var CLASS_SHOW_LINK = 'vuepress-plugin-demo-block__show-link';
var CLASS_EXPAND = 'vuepress-plugin-demo-block__expand';
var CLASS_CODEPEN = 'vuepress-plugin-demo-block__codepen';
var CLASS_JSFIDDLE = 'vuepress-plugin-demo-block__jsfiddle';
var CLASS_BUTTON = 'vuepress-plugin-demo-block__button';
var DEFAULT_SETTINGS = {
  jsLib: [],
  cssLib: [],
  jsfiddle: true,
  codepen: true,
  codepenLayout: 'left',
  codepenJsProcessor: 'babel',
  codepenEditors: '101',
  horizontal: false,
  vue: 'https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js',
  react: 'https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js',
  reactDOM: 'https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js'
};
var SETTINGS_KEY = '$VUEPRESS_DEMO_BLOCK';

var _once = {};
var getHtmlTpl = function getHtmlTpl(html) {
  return "<div id=\"app\">\n".concat(html, "\n</div>");
};
var getVueJsTpl = function getVueJsTpl(js) {
  var jsContent = js.replace(/export\s+default\s*?\{\n*/, '').replace(/\n*\}\s*$/, '').trim();
  return "new Vue({\n  el: '#app',\n  ".concat(jsContent, "\n})");
};
var toArray = function toArray(value) {
  return Array.prototype.slice.call(value);
};
var getSettings = function getSettings(key) {
  return window[SETTINGS_KEY] && window[SETTINGS_KEY][key] !== undefined ? window[SETTINGS_KEY][key] : DEFAULT_SETTINGS[key];
};
var h = function h(tag, attrs, children) {
  var node = document.createElement(tag);
  attrs && Object.keys(attrs).forEach(function (key) {
    if (!key.indexOf('data')) {
      var k = key.replace('data', '');
      node.dataset[k] = attrs[key];
    } else {
      node[key] = attrs[key];
    }
  });
  children && children.forEach(function (_ref) {
    var tag = _ref.tag,
      attrs = _ref.attrs,
      children = _ref.children;
    node.appendChild(h(tag, attrs, children));
  });
  return node;
};
var $ = function $(parent, node, returnArray) {
  var result = toArray(parent.querySelectorAll(".".concat(node)));
  return result.length === 1 && !returnArray ? result[0] : result;
};
var getVueScript = function getVueScript(js, html) {
  var scripts = js.split(/export\s+default/);
  var scriptStrOrg = "(function() {".concat(scripts[0], " ; return ").concat(scripts[1], "})()");
  var scriptStr = window.Babel ? window.Babel.transform(scriptStrOrg, {
    presets: ['es2015']
  }).code : scriptStrOrg;
  var scriptObj = [eval][0](scriptStr);
  scriptObj.template = html;
  return scriptObj;
};
var getVanillaScript = function getVanillaScript(js) {
  return window.Babel ? window.Babel.transform(js, {
    presets: ['es2015']
  }).code : js;
};
var getVueDetail = function getVueDetail(code, config) {
  var cssBlock = code.match(/<style>([\s\S]+)<\/style>/);
  var htmlBlock = code.match(/<template>([\s\S]+)<\/template>/);
  var jsBlock = code.match(/<script>([\s\S]+)<\/script>/);
  var result = {
    css: cssBlock && cssBlock[1].replace(/^\n|\n$/g, ''),
    html: htmlBlock && htmlBlock[1].replace(/^\n|\n$/g, ''),
    js: jsBlock && jsBlock[1].replace(/^\n|\n$/g, ''),
    jsLib: config.jsLib || [],
    cssLib: config.cssLib || []
  };
  result.htmlTpl = getHtmlTpl(result.html);
  result.jsTpl = getVueJsTpl(result.js);
  result.script = getVueScript(result.js, result.html);
  var vueResource = getSettings('vue');
  result.jsLib.unshift(vueResource);
  return result;
};
var getVanillaDetail = function getVanillaDetail(code, config) {
  var cssBlock = code.match(/<style>([\s\S]+)<\/style>/);
  var htmlBlock = code.match(/<html>([\s\S]+)<\/html>/);
  var jsBlock = code.match(/<script>([\s\S]+)<\/script>/);
  var result = {
    css: cssBlock && cssBlock[1].replace(/^\n|\n$/g, ''),
    html: htmlBlock && htmlBlock[1].replace(/^\n|\n$/g, ''),
    js: jsBlock && jsBlock[1].replace(/^\n|\n$/g, ''),
    jsLib: config.jsLib || [],
    cssLib: config.cssLib || []
  };
  result.htmlTpl = result.html;
  result.jsTpl = result.js;
  result.script = getVanillaScript(result.js);
  return result;
};
var getReactTpl = function getReactTpl(code) {
  code = code.replace('export default ', '').replace(/App\.__style__(\s*)=(\s*)`([\s\S]*)?`/, '');
  code += 'ReactDOM.render(React.createElement(App), document.getElementById("app"))';
  return code;
};
var getReactDetail = function getReactDetail(code, config) {
  var transform = window.Babel.transform;
  var ins = transform(code, {
    presets: ['es2015', 'react']
  }).code;
  var script = "(function(exports){var module={};module.exports=exports;".concat(ins, ";return module.exports.__esModule?module.exports.default:module.exports;})({})");
  var scriptObj = new Function("return ".concat(script))();
  var result = {
    js: scriptObj,
    css: scriptObj.__style__ || '',
    jsLib: config.jsLib || [],
    cssLib: config.cssLib || [],
    jsTpl: getReactTpl(code),
    htmlTpl: getHtmlTpl('')
  };
  var reactResource = getSettings('react');
  var reactDOMResource = getSettings('reactDOM');
  result.jsLib.unshift(reactResource, reactDOMResource);
  return result;
};
var injectCss = function injectCss(css) {
  if (_once[css]) return;
  injectCssInto(css, document.body);
  _once[css] = true;
};
var injectJs = function injectJs(code) {
  var dom = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document.head;
  var script = h('script', {
    type: 'application/javascript',
    innerText: code
  });
  dom.appendChild(script);
};
var injectCssInto = function injectCssInto(css) {
  var dom = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document.head;
  var style = h('style', {
    innerHTML: css
  });
  dom.appendChild(style);
};
var injectCssList = function injectCssList(cssURLList) {
  var target = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document.head;
  if (!Array.isArray(cssURLList)) {
    return;
  }
  cssURLList.forEach(function (it) {
    if (typeof it === 'string') {
      injectCssURL(it, target);
    } else if (!!it && _typeof(it) === 'object') {
      if (it.src || it.href) {
        injectCssURL(it.src || it.href, target);
      } else if (it.code || it.css) {
        injectCssInto(it.code || it.css, target);
      }
    }
  });
};
function injectCssURL(src, target) {
  var link = h('link', {
    type: 'text/css',
    rel: "stylesheet",
    href: src
  });
  target.appendChild(link);
}
var injectJSList = function injectJSList(jsURLList) {
  var target = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document.head;
  if (!Array.isArray(jsURLList)) {
    return;
  }
  var promises = jsURLList.map(function (it) {
    if (typeof it === 'string') {
      return injectJsURL(it, target);
    } else if (!!it && _typeof(it) === 'object') {
      if (it.src) {
        return injectJsURL(it.src, target);
      }
      if (it.code) {
        return injectJsCode(it.code, target);
      }
    }
  });
  return Promise.all(promises);
};
function injectJsCode(code, target) {
  var script = h('script', {
    type: 'application/javascript'
  });
  script.innerText = code;
  target.appendChild(script);
  return Promise.resolve();
}
function injectJsURL(src, target) {
  var script = h('script', {
    type: "application/javascript",
    src: src
  });
  return new Promise(function (resolve, reject) {
    script.onload = resolve;
    script.onerror = reject;
    target.appendChild(script);
  });
}
var noop = function noop() {
  return undefined;
};

var codepenIcon = "<?xml version=\"1.0\" standalone=\"no\"?><!DOCTYPE svg PUBLIC \"-//W3C//DTD SVG 1.1//EN\" \"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd\"><svg t=\"1547088271207\" class=\"icon\" style=\"\" viewBox=\"0 0 1024 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" p-id=\"1737\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"200\" height=\"200\"><defs><style type=\"text/css\"></style></defs><path d=\"M123.428571 668l344.571429 229.714286v-205.142857L277.142857 565.142857z m-35.428571-82.285714l110.285714-73.714286-110.285714-73.714286v147.428572z m468 312l344.571429-229.714286-153.714286-102.857143-190.857143 127.428572v205.142857z m-44-281.714286l155.428571-104-155.428571-104-155.428571 104zM277.142857 458.857143l190.857143-127.428572V126.285714L123.428571 356z m548.571429 53.142857l110.285714 73.714286V438.285714z m-78.857143-53.142857l153.714286-102.857143-344.571429-229.714286v205.142857z m277.142857-102.857143v312q0 23.428571-19.428571 36.571429l-468 312q-12 7.428571-24.571429 7.428571t-24.571429-7.428571L19.428571 704.571429q-19.428571-13.142857-19.428571-36.571429V356q0-23.428571 19.428571-36.571429L487.428571 7.428571q12-7.428571 24.571429-7.428571t24.571429 7.428571l468 312q19.428571 13.142857 19.428571 36.571429z\" p-id=\"1738\"></path></svg>";

function getCodepenBtn(_ref) {
  var css = _ref.css,
    htmlTpl = _ref.htmlTpl,
    jsTpl = _ref.jsTpl,
    jsLib = _ref.jsLib,
    cssLib = _ref.cssLib;
  var value = JSON.stringify({
    css: css,
    html: htmlTpl,
    js: jsTpl,
    js_external: jsLib.concat(getSettings('jsLib')).join(';'),
    css_external: cssLib.concat(getSettings('cssLib')).join(';'),
    layout: getSettings('codepenLayout'),
    js_pre_processor: getSettings('codepenJsProcessor'),
    editors: getSettings('codepenEditors')
  });
  var form = h('form', {
    className: CLASS_CODEPEN,
    target: '_blank',
    action: 'https://codepen.io/pen/define',
    method: 'post'
  }, [{
    tag: 'input',
    attrs: {
      type: 'hidden',
      name: 'data',
      value: value
    }
  }, {
    tag: 'button',
    attrs: {
      type: 'submit',
      innerHTML: codepenIcon,
      className: CLASS_BUTTON,
      datatip: 'Codepen'
    }
  }]);
  return form;
}

var jsfiddleIcon = "<?xml version=\"1.0\" standalone=\"no\"?><!DOCTYPE svg PUBLIC \"-//W3C//DTD SVG 1.1//EN\" \"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd\"><svg t=\"1547088289967\" class=\"icon\" style=\"\" viewBox=\"0 0 1170 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" p-id=\"1952\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"228.515625\" height=\"200\"><defs><style type=\"text/css\"></style></defs><path d=\"M1028.571429 441.142857q63.428571 26.285714 102.571428 83.142857T1170.285714 650.857143q0 93.714286-67.428571 160.285714T940 877.714286q-2.285714 0-6.571429-0.285715t-6-0.285714H232q-97.142857-5.714286-164.571429-71.714286T0 645.142857q0-62.857143 31.428571-116t84-84q-6.857143-22.285714-6.857142-46.857143 0-65.714286 46.857142-112t113.714286-46.285714q54.285714 0 98.285714 33.142857 42.857143-88 127.142858-141.714286t186.571428-53.714285q94.857143 0 174.857143 46T982.571429 248.571429t46.571428 172q0 3.428571-0.285714 10.285714t-0.285714 10.285714zM267.428571 593.142857q0 69.714286 48 110.285714t118.857143 40.571429q78.285714 0 137.142857-56.571429-9.142857-11.428571-27.142857-32.285714T519.428571 626.285714q-38.285714 37.142857-82.285714 37.142857-31.428571 0-53.428571-19.142857T361.714286 594.285714q0-30.285714 22-49.714285t52.285714-19.428572q25.142857 0 48.285714 12t41.714286 31.428572 37.142857 42.857142 39.428572 46.857143 44 42.857143 55.428571 31.428572 69.428571 12q69.142857 0 116.857143-40.857143T936 594.857143q0-69.142857-48-109.714286t-118.285714-40.571428q-81.714286 0-137.714286 55.428571l53.142857 61.714286q37.714286-36.571429 81.142857-36.571429 29.714286 0 52.571429 18.857143t22.857143 48q0 32.571429-21.142857 52.285714t-53.714286 19.714286q-24.571429 0-47.142857-12t-41.142857-31.428571-37.428572-42.857143-39.714286-46.857143-44.285714-42.857143-55.142857-31.428571T434.285714 444.571429q-69.714286 0-118.285714 40.285714T267.428571 593.142857z\" p-id=\"1953\"></path></svg>";

function getJsfiddleBtn(_ref) {
  var css = _ref.css,
    htmlTpl = _ref.htmlTpl,
    jsTpl = _ref.jsTpl,
    jsLib = _ref.jsLib,
    cssLib = _ref.cssLib;
  var resource = jsLib.concat(cssLib).concat(getSettings('cssLib')).concat(getSettings('jsLib')).join(',');
  var form = h('form', {
    className: CLASS_JSFIDDLE,
    target: '_blank',
    action: 'https://jsfiddle.net/api/post/library/pure/',
    method: 'post'
  }, [{
    tag: 'input',
    attrs: {
      type: 'hidden',
      name: 'css',
      value: css
    }
  }, {
    tag: 'input',
    attrs: {
      type: 'hidden',
      name: 'html',
      value: htmlTpl
    }
  }, {
    tag: 'input',
    attrs: {
      type: 'hidden',
      name: 'js',
      value: jsTpl
    }
  }, {
    tag: 'input',
    attrs: {
      type: 'hidden',
      name: 'panel_js',
      value: 3
    }
  }, {
    tag: 'input',
    attrs: {
      type: 'hidden',
      name: 'wrap',
      value: 1
    }
  }, {
    tag: 'input',
    attrs: {
      type: 'hidden',
      name: 'resources',
      value: resource
    }
  }, {
    tag: 'button',
    attrs: {
      type: 'submit',
      className: CLASS_BUTTON,
      innerHTML: jsfiddleIcon,
      datatip: 'JSFiddle'
    }
  }]);
  return form;
}

function webController() {
  var _this = this;
  var nodes = $(document, CLASS_WRAPPER, true);
  if (!nodes.length) {
    setTimeout(function (_) {
      webController();
    }, 300);
    return;
  }
  nodes.forEach(function (node) {
    if (node.dataset.created === 'true') return;
    node.style.display = 'block';
    var codeNode = $(node, CLASS_CODE);
    var displayNode = $(node, CLASS_DISPLAY);
    var footerNode = $(node, CLASS_FOOTER);
    var appNode = $(displayNode, CLASS_APP);
    var code = decodeURIComponent(node.dataset.code);
    var config = decodeURIComponent(node.dataset.config);
    var type = decodeURIComponent(node.dataset.type);
    config = config ? JSON.parse(config) : {};
    var height = codeNode.querySelector('div').clientHeight;
    var detail = type === 'react' ? getReactDetail(code, config) : type === 'vanilla' ? getVanillaDetail(code, config) : getVueDetail(code, config);
    var expandNode = createExpandNode();
    footerNode.appendChild(expandNode);
    expandNode.addEventListener('click', expandHandler.bind(null, expandNode, height, codeNode, footerNode));
    if (getSettings('jsfiddle')) {
      footerNode.appendChild(getJsfiddleBtn(detail));
    }
    if (getSettings('codepen')) {
      footerNode.appendChild(getCodepenBtn(detail));
    }
    var horizontalConfig = config.horizontal !== undefined ? config.horizontal : getSettings('horizontal');
    if (horizontalConfig) {
      node.classList.add(CLASS_HORIZONTAL);
      var hCodeNode = codeNode.firstChild.cloneNode(true);
      hCodeNode.classList.add(CLASS_H_CODE);
      displayNode.appendChild(hCodeNode);
    }
    var isolated = config.iframe === undefined ? !!getSettings('iframe') : !!config.iframe;
    if (isolated) {
      var iframeOptions = Object.assign({}, getSettings('iframeOptions') || {}, config.iframeOptions || {});
      var _ref = iframeOptions || {},
        _ref$style = _ref.style,
        style = _ref$style === void 0 ? '' : _ref$style,
        _ref$onload = _ref.onload,
        onload = _ref$onload === void 0 ? noop : _ref$onload,
        _ref$injectCss = _ref.injectCss,
        cssURLList = _ref$injectCss === void 0 ? [] : _ref$injectCss,
        _ref$injectScript = _ref.injectScript,
        jsURLList = _ref$injectScript === void 0 ? [] : _ref$injectScript,
        _ref$injectCssText = _ref.injectCssText,
        injectCssText = _ref$injectCssText === void 0 ? '' : _ref$injectCssText,
        _ref$autorun = _ref.autorun,
        autorun = _ref$autorun === void 0 ? true : _ref$autorun,
        runCodeBtn = _ref.runCodeBtn,
        _ref$beforeRun = _ref.beforeRun,
        beforeRun = _ref$beforeRun === void 0 ? {} : _ref$beforeRun;
      var beforeRun_injectCss = beforeRun.injectCss,
        beforeRun_injectJs = beforeRun.injectJs;
      var iframe = document.createElement('iframe');
      iframe.classList.add('vuepress-plugin-demo-block__previewer-iframe');
      if (style) {
        iframe.style.cssText = style;
      }
      var runcode = /*#__PURE__*/function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
          var idom, Comp, app, script;
          return _regeneratorRuntime().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                idom = iframe.contentDocument;
                injectCss("\n            html,body {margin: 0;padding: 0;}\n          ", idom.head);
                injectCssList(cssURLList, idom.head);
                injectCssText && injectCssInto(injectCssText, idom.head);
                _context.next = 6;
                return injectJSList(jsURLList, idom.head);
              case 6:
                detail.css && injectCssInto(detail.css, idom.head);
                if (type === 'react') {
                  ReactDOM.render(React.createElement(detail.js), idom.body);
                } else if (type === 'vue') {
                  Comp = Vue.extend(detail.script);
                  app = new Comp().$mount();
                  idom.body.appendChild(app.$el);
                } else if (type === 'vanilla') {
                  idom.body.innerHTML = detail.html;
                  if (detail.script) {
                    script = idom.createElement('script');
                    script.type = 'text/javascript';
                    script.textContent = detail.script;
                    idom.head.appendChild(script);
                  }
                }
              case 8:
              case "end":
                return _context.stop();
            }
          }, _callee);
        }));
        return function runcode() {
          return _ref2.apply(this, arguments);
        };
      }();
      iframe.onload = function (e) {
        var idom = iframe.contentDocument;
        if (typeof onload === 'function') {
          onload.call(_this, e);
        }
        if (autorun) {
          runcode();
        } else {
          var btn = h('button', Object.assign({
            innerText: 'run'
          }, runCodeBtn || {}));
          btn.classList.add('vuepress-plugin-demo-block__previewer-iframe-run-code-btn');
          idom.body.appendChild(btn);
          injectCssInto("\n              .vuepress-plugin-demo-block__previewer-iframe-run-code-btn {\n                right: 6px;\n                border-radius: 2px;\n                color: #000;\n                outline: none;\n                display: inline-block;\n                *display: block;\n                *zoom: 1;\n                position: fixed;\n                padding: 4px 6px;\n                border: 1px solid #ddd;\n                background-color: #eff3f6;\n                background-image: linear-gradient(-180deg,#fafbfc,#eff3f6 90%);\n              }\n              .vuepress-plugin-demo-block__previewer-iframe-run-code-btn:hover {\n                background-color: #e6ebf1;\n                background-image: linear-gradient(-180deg,#f0f3f6,#e5e9ec 90%);\n              }\n            ", idom.head);
          if (beforeRun_injectCss) {
            injectCssInto(beforeRun_injectCss, idom.head);
          }
          if (beforeRun_injectJs) {
            injectJs(beforeRun_injectJs, idom.head);
          }
          btn.addEventListener('click', function () {
            idom.body.removeChild(btn);
            runcode();
          }, {
            once: true
          });
        }
      };
      appNode.appendChild(iframe);
    } else {
      detail.css && injectCss(detail.css);
      if (type === 'react') {
        ReactDOM.render(React.createElement(detail.js), appNode);
      } else if (type === 'vue') {
        var Comp = Vue.extend(detail.script);
        var app = new Comp().$mount();
        appNode.appendChild(app.$el);
      } else if (type === 'vanilla') {
        appNode.innerHTML = detail.html;
        new Function("return (function(){".concat(detail.script, "})()"))();
      }
    }
    node.dataset.created = 'true';
  });
}
function createExpandNode() {
  return h('button', {
    className: "".concat(CLASS_EXPAND)
  });
}
function expandHandler(expandNode, height, codeNode, footerNode) {
  var isExpand = expandNode.dataset.isExpand !== '1';
  codeNode.style.height = isExpand ? "".concat(height, "px") : 0;
  if (isExpand) {
    footerNode.classList.add(CLASS_SHOW_LINK);
  } else {
    footerNode.classList.remove(CLASS_SHOW_LINK);
  }
  expandNode.dataset.isExpand = isExpand ? '1' : '0';
}

var clientRootMixin = {
  mounted: function mounted() {
    window.$VUEPRESS_DEMO_BLOCK = SETTINGS;
    webController();
  },
  updated: function updated() {
    webController();
  }
};

export default clientRootMixin;
