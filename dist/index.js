var zLgzxMKZicAx = (() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
  var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
    get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
  }) : x)(function(x) {
if (x === "react") return Spicetify.React;
if (x === "react-dom") return Spicetify.ReactDOM;
    if (typeof require !== "undefined")
      return require.apply(this, arguments);
    throw new Error('Dynamic require of "' + x + '" is not supported');
  });
  var __commonJS = (cb, mod) => function __require2() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __reExport = (target, module, copyDefault, desc) => {
    if (module && typeof module === "object" || typeof module === "function") {
      for (let key of __getOwnPropNames(module))
        if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
          __defProp(target, key, { get: () => module[key], enumerable: !(desc = __getOwnPropDesc(module, key)) || desc.enumerable });
    }
    return target;
  };
  var __toESM = (module, isNodeMode) => {
    return __reExport(__markAsModule(__defProp(module != null ? __create(__getProtoOf(module)) : {}, "default", !isNodeMode && module && module.__esModule ? { get: () => module.default, enumerable: true } : { value: module, enumerable: true })), module);
  };
  var __toCommonJS = /* @__PURE__ */ ((cache) => {
    return (module, temp) => {
      return cache && cache.get(module) || (temp = __reExport(__markAsModule({}), module, 1), cache && cache.set(module, temp), temp);
    };
  })(typeof WeakMap !== "undefined" ? /* @__PURE__ */ new WeakMap() : 0);

  // node_modules/react-is/cjs/react-is.development.js
  var require_react_is_development = __commonJS({
    "node_modules/react-is/cjs/react-is.development.js"(exports) {
      "use strict";
      if (true) {
        (function() {
          "use strict";
          var hasSymbol = typeof Symbol === "function" && Symbol.for;
          var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for("react.element") : 60103;
          var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for("react.portal") : 60106;
          var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for("react.fragment") : 60107;
          var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for("react.strict_mode") : 60108;
          var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for("react.profiler") : 60114;
          var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for("react.provider") : 60109;
          var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for("react.context") : 60110;
          var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for("react.async_mode") : 60111;
          var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for("react.concurrent_mode") : 60111;
          var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for("react.forward_ref") : 60112;
          var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for("react.suspense") : 60113;
          var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for("react.suspense_list") : 60120;
          var REACT_MEMO_TYPE = hasSymbol ? Symbol.for("react.memo") : 60115;
          var REACT_LAZY_TYPE = hasSymbol ? Symbol.for("react.lazy") : 60116;
          var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for("react.block") : 60121;
          var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for("react.fundamental") : 60117;
          var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for("react.responder") : 60118;
          var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for("react.scope") : 60119;
          function isValidElementType(type) {
            return typeof type === "string" || typeof type === "function" || type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === "object" && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
          }
          function typeOf(object) {
            if (typeof object === "object" && object !== null) {
              var $$typeof = object.$$typeof;
              switch ($$typeof) {
                case REACT_ELEMENT_TYPE:
                  var type = object.type;
                  switch (type) {
                    case REACT_ASYNC_MODE_TYPE:
                    case REACT_CONCURRENT_MODE_TYPE:
                    case REACT_FRAGMENT_TYPE:
                    case REACT_PROFILER_TYPE:
                    case REACT_STRICT_MODE_TYPE:
                    case REACT_SUSPENSE_TYPE:
                      return type;
                    default:
                      var $$typeofType = type && type.$$typeof;
                      switch ($$typeofType) {
                        case REACT_CONTEXT_TYPE:
                        case REACT_FORWARD_REF_TYPE:
                        case REACT_LAZY_TYPE:
                        case REACT_MEMO_TYPE:
                        case REACT_PROVIDER_TYPE:
                          return $$typeofType;
                        default:
                          return $$typeof;
                      }
                  }
                case REACT_PORTAL_TYPE:
                  return $$typeof;
              }
            }
            return void 0;
          }
          var AsyncMode = REACT_ASYNC_MODE_TYPE;
          var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
          var ContextConsumer = REACT_CONTEXT_TYPE;
          var ContextProvider = REACT_PROVIDER_TYPE;
          var Element = REACT_ELEMENT_TYPE;
          var ForwardRef = REACT_FORWARD_REF_TYPE;
          var Fragment = REACT_FRAGMENT_TYPE;
          var Lazy = REACT_LAZY_TYPE;
          var Memo = REACT_MEMO_TYPE;
          var Portal = REACT_PORTAL_TYPE;
          var Profiler = REACT_PROFILER_TYPE;
          var StrictMode = REACT_STRICT_MODE_TYPE;
          var Suspense = REACT_SUSPENSE_TYPE;
          var hasWarnedAboutDeprecatedIsAsyncMode = false;
          function isAsyncMode(object) {
            {
              if (!hasWarnedAboutDeprecatedIsAsyncMode) {
                hasWarnedAboutDeprecatedIsAsyncMode = true;
                console["warn"]("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.");
              }
            }
            return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
          }
          function isConcurrentMode(object) {
            return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
          }
          function isContextConsumer(object) {
            return typeOf(object) === REACT_CONTEXT_TYPE;
          }
          function isContextProvider(object) {
            return typeOf(object) === REACT_PROVIDER_TYPE;
          }
          function isElement(object) {
            return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
          }
          function isForwardRef(object) {
            return typeOf(object) === REACT_FORWARD_REF_TYPE;
          }
          function isFragment(object) {
            return typeOf(object) === REACT_FRAGMENT_TYPE;
          }
          function isLazy(object) {
            return typeOf(object) === REACT_LAZY_TYPE;
          }
          function isMemo(object) {
            return typeOf(object) === REACT_MEMO_TYPE;
          }
          function isPortal(object) {
            return typeOf(object) === REACT_PORTAL_TYPE;
          }
          function isProfiler(object) {
            return typeOf(object) === REACT_PROFILER_TYPE;
          }
          function isStrictMode(object) {
            return typeOf(object) === REACT_STRICT_MODE_TYPE;
          }
          function isSuspense(object) {
            return typeOf(object) === REACT_SUSPENSE_TYPE;
          }
          exports.AsyncMode = AsyncMode;
          exports.ConcurrentMode = ConcurrentMode;
          exports.ContextConsumer = ContextConsumer;
          exports.ContextProvider = ContextProvider;
          exports.Element = Element;
          exports.ForwardRef = ForwardRef;
          exports.Fragment = Fragment;
          exports.Lazy = Lazy;
          exports.Memo = Memo;
          exports.Portal = Portal;
          exports.Profiler = Profiler;
          exports.StrictMode = StrictMode;
          exports.Suspense = Suspense;
          exports.isAsyncMode = isAsyncMode;
          exports.isConcurrentMode = isConcurrentMode;
          exports.isContextConsumer = isContextConsumer;
          exports.isContextProvider = isContextProvider;
          exports.isElement = isElement;
          exports.isForwardRef = isForwardRef;
          exports.isFragment = isFragment;
          exports.isLazy = isLazy;
          exports.isMemo = isMemo;
          exports.isPortal = isPortal;
          exports.isProfiler = isProfiler;
          exports.isStrictMode = isStrictMode;
          exports.isSuspense = isSuspense;
          exports.isValidElementType = isValidElementType;
          exports.typeOf = typeOf;
        })();
      }
    }
  });

  // node_modules/react-is/index.js
  var require_react_is = __commonJS({
    "node_modules/react-is/index.js"(exports, module) {
      "use strict";
      if (false) {
        module.exports = null;
      } else {
        module.exports = require_react_is_development();
      }
    }
  });

  // node_modules/object-assign/index.js
  var require_object_assign = __commonJS({
    "node_modules/object-assign/index.js"(exports, module) {
      "use strict";
      var getOwnPropertySymbols = Object.getOwnPropertySymbols;
      var hasOwnProperty = Object.prototype.hasOwnProperty;
      var propIsEnumerable = Object.prototype.propertyIsEnumerable;
      function toObject(val) {
        if (val === null || val === void 0) {
          throw new TypeError("Object.assign cannot be called with null or undefined");
        }
        return Object(val);
      }
      function shouldUseNative() {
        try {
          if (!Object.assign) {
            return false;
          }
          var test1 = new String("abc");
          test1[5] = "de";
          if (Object.getOwnPropertyNames(test1)[0] === "5") {
            return false;
          }
          var test2 = {};
          for (var i = 0; i < 10; i++) {
            test2["_" + String.fromCharCode(i)] = i;
          }
          var order2 = Object.getOwnPropertyNames(test2).map(function(n) {
            return test2[n];
          });
          if (order2.join("") !== "0123456789") {
            return false;
          }
          var test3 = {};
          "abcdefghijklmnopqrst".split("").forEach(function(letter) {
            test3[letter] = letter;
          });
          if (Object.keys(Object.assign({}, test3)).join("") !== "abcdefghijklmnopqrst") {
            return false;
          }
          return true;
        } catch (err) {
          return false;
        }
      }
      module.exports = shouldUseNative() ? Object.assign : function(target, source) {
        var from;
        var to = toObject(target);
        var symbols;
        for (var s = 1; s < arguments.length; s++) {
          from = Object(arguments[s]);
          for (var key in from) {
            if (hasOwnProperty.call(from, key)) {
              to[key] = from[key];
            }
          }
          if (getOwnPropertySymbols) {
            symbols = getOwnPropertySymbols(from);
            for (var i = 0; i < symbols.length; i++) {
              if (propIsEnumerable.call(from, symbols[i])) {
                to[symbols[i]] = from[symbols[i]];
              }
            }
          }
        }
        return to;
      };
    }
  });

  // node_modules/prop-types/lib/ReactPropTypesSecret.js
  var require_ReactPropTypesSecret = __commonJS({
    "node_modules/prop-types/lib/ReactPropTypesSecret.js"(exports, module) {
      "use strict";
      var ReactPropTypesSecret = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
      module.exports = ReactPropTypesSecret;
    }
  });

  // node_modules/prop-types/checkPropTypes.js
  var require_checkPropTypes = __commonJS({
    "node_modules/prop-types/checkPropTypes.js"(exports, module) {
      "use strict";
      var printWarning = function() {
      };
      if (true) {
        ReactPropTypesSecret = require_ReactPropTypesSecret();
        loggedTypeFailures = {};
        has = Function.call.bind(Object.prototype.hasOwnProperty);
        printWarning = function(text) {
          var message = "Warning: " + text;
          if (typeof console !== "undefined") {
            console.error(message);
          }
          try {
            throw new Error(message);
          } catch (x) {
          }
        };
      }
      var ReactPropTypesSecret;
      var loggedTypeFailures;
      var has;
      function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
        if (true) {
          for (var typeSpecName in typeSpecs) {
            if (has(typeSpecs, typeSpecName)) {
              var error;
              try {
                if (typeof typeSpecs[typeSpecName] !== "function") {
                  var err = Error((componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`.");
                  err.name = "Invariant Violation";
                  throw err;
                }
                error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
              } catch (ex) {
                error = ex;
              }
              if (error && !(error instanceof Error)) {
                printWarning((componentName || "React class") + ": type specification of " + location + " `" + typeSpecName + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof error + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).");
              }
              if (error instanceof Error && !(error.message in loggedTypeFailures)) {
                loggedTypeFailures[error.message] = true;
                var stack = getStack ? getStack() : "";
                printWarning("Failed " + location + " type: " + error.message + (stack != null ? stack : ""));
              }
            }
          }
        }
      }
      checkPropTypes.resetWarningCache = function() {
        if (true) {
          loggedTypeFailures = {};
        }
      };
      module.exports = checkPropTypes;
    }
  });

  // node_modules/prop-types/factoryWithTypeCheckers.js
  var require_factoryWithTypeCheckers = __commonJS({
    "node_modules/prop-types/factoryWithTypeCheckers.js"(exports, module) {
      "use strict";
      var ReactIs = require_react_is();
      var assign = require_object_assign();
      var ReactPropTypesSecret = require_ReactPropTypesSecret();
      var checkPropTypes = require_checkPropTypes();
      var has = Function.call.bind(Object.prototype.hasOwnProperty);
      var printWarning = function() {
      };
      if (true) {
        printWarning = function(text) {
          var message = "Warning: " + text;
          if (typeof console !== "undefined") {
            console.error(message);
          }
          try {
            throw new Error(message);
          } catch (x) {
          }
        };
      }
      function emptyFunctionThatReturnsNull() {
        return null;
      }
      module.exports = function(isValidElement, throwOnDirectAccess) {
        var ITERATOR_SYMBOL = typeof Symbol === "function" && Symbol.iterator;
        var FAUX_ITERATOR_SYMBOL = "@@iterator";
        function getIteratorFn(maybeIterable) {
          var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
          if (typeof iteratorFn === "function") {
            return iteratorFn;
          }
        }
        var ANONYMOUS = "<<anonymous>>";
        var ReactPropTypes = {
          array: createPrimitiveTypeChecker("array"),
          bool: createPrimitiveTypeChecker("boolean"),
          func: createPrimitiveTypeChecker("function"),
          number: createPrimitiveTypeChecker("number"),
          object: createPrimitiveTypeChecker("object"),
          string: createPrimitiveTypeChecker("string"),
          symbol: createPrimitiveTypeChecker("symbol"),
          any: createAnyTypeChecker(),
          arrayOf: createArrayOfTypeChecker,
          element: createElementTypeChecker(),
          elementType: createElementTypeTypeChecker(),
          instanceOf: createInstanceTypeChecker,
          node: createNodeChecker(),
          objectOf: createObjectOfTypeChecker,
          oneOf: createEnumTypeChecker,
          oneOfType: createUnionTypeChecker,
          shape: createShapeTypeChecker,
          exact: createStrictShapeTypeChecker
        };
        function is(x, y) {
          if (x === y) {
            return x !== 0 || 1 / x === 1 / y;
          } else {
            return x !== x && y !== y;
          }
        }
        function PropTypeError(message) {
          this.message = message;
          this.stack = "";
        }
        PropTypeError.prototype = Error.prototype;
        function createChainableTypeChecker(validate) {
          if (true) {
            var manualPropTypeCallCache = {};
            var manualPropTypeWarningCount = 0;
          }
          function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
            componentName = componentName || ANONYMOUS;
            propFullName = propFullName || propName;
            if (secret !== ReactPropTypesSecret) {
              if (throwOnDirectAccess) {
                var err = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");
                err.name = "Invariant Violation";
                throw err;
              } else if (typeof console !== "undefined") {
                var cacheKey = componentName + ":" + propName;
                if (!manualPropTypeCallCache[cacheKey] && manualPropTypeWarningCount < 3) {
                  printWarning("You are manually calling a React.PropTypes validation function for the `" + propFullName + "` prop on `" + componentName + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details.");
                  manualPropTypeCallCache[cacheKey] = true;
                  manualPropTypeWarningCount++;
                }
              }
            }
            if (props[propName] == null) {
              if (isRequired) {
                if (props[propName] === null) {
                  return new PropTypeError("The " + location + " `" + propFullName + "` is marked as required " + ("in `" + componentName + "`, but its value is `null`."));
                }
                return new PropTypeError("The " + location + " `" + propFullName + "` is marked as required in " + ("`" + componentName + "`, but its value is `undefined`."));
              }
              return null;
            } else {
              return validate(props, propName, componentName, location, propFullName);
            }
          }
          var chainedCheckType = checkType.bind(null, false);
          chainedCheckType.isRequired = checkType.bind(null, true);
          return chainedCheckType;
        }
        function createPrimitiveTypeChecker(expectedType) {
          function validate(props, propName, componentName, location, propFullName, secret) {
            var propValue = props[propName];
            var propType = getPropType(propValue);
            if (propType !== expectedType) {
              var preciseType = getPreciseType(propValue);
              return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + preciseType + "` supplied to `" + componentName + "`, expected ") + ("`" + expectedType + "`."));
            }
            return null;
          }
          return createChainableTypeChecker(validate);
        }
        function createAnyTypeChecker() {
          return createChainableTypeChecker(emptyFunctionThatReturnsNull);
        }
        function createArrayOfTypeChecker(typeChecker) {
          function validate(props, propName, componentName, location, propFullName) {
            if (typeof typeChecker !== "function") {
              return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside arrayOf.");
            }
            var propValue = props[propName];
            if (!Array.isArray(propValue)) {
              var propType = getPropType(propValue);
              return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected an array."));
            }
            for (var i = 0; i < propValue.length; i++) {
              var error = typeChecker(propValue, i, componentName, location, propFullName + "[" + i + "]", ReactPropTypesSecret);
              if (error instanceof Error) {
                return error;
              }
            }
            return null;
          }
          return createChainableTypeChecker(validate);
        }
        function createElementTypeChecker() {
          function validate(props, propName, componentName, location, propFullName) {
            var propValue = props[propName];
            if (!isValidElement(propValue)) {
              var propType = getPropType(propValue);
              return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected a single ReactElement."));
            }
            return null;
          }
          return createChainableTypeChecker(validate);
        }
        function createElementTypeTypeChecker() {
          function validate(props, propName, componentName, location, propFullName) {
            var propValue = props[propName];
            if (!ReactIs.isValidElementType(propValue)) {
              var propType = getPropType(propValue);
              return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected a single ReactElement type."));
            }
            return null;
          }
          return createChainableTypeChecker(validate);
        }
        function createInstanceTypeChecker(expectedClass) {
          function validate(props, propName, componentName, location, propFullName) {
            if (!(props[propName] instanceof expectedClass)) {
              var expectedClassName = expectedClass.name || ANONYMOUS;
              var actualClassName = getClassName(props[propName]);
              return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + actualClassName + "` supplied to `" + componentName + "`, expected ") + ("instance of `" + expectedClassName + "`."));
            }
            return null;
          }
          return createChainableTypeChecker(validate);
        }
        function createEnumTypeChecker(expectedValues) {
          if (!Array.isArray(expectedValues)) {
            if (true) {
              if (arguments.length > 1) {
                printWarning("Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).");
              } else {
                printWarning("Invalid argument supplied to oneOf, expected an array.");
              }
            }
            return emptyFunctionThatReturnsNull;
          }
          function validate(props, propName, componentName, location, propFullName) {
            var propValue = props[propName];
            for (var i = 0; i < expectedValues.length; i++) {
              if (is(propValue, expectedValues[i])) {
                return null;
              }
            }
            var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
              var type = getPreciseType(value);
              if (type === "symbol") {
                return String(value);
              }
              return value;
            });
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of value `" + String(propValue) + "` " + ("supplied to `" + componentName + "`, expected one of " + valuesString + "."));
          }
          return createChainableTypeChecker(validate);
        }
        function createObjectOfTypeChecker(typeChecker) {
          function validate(props, propName, componentName, location, propFullName) {
            if (typeof typeChecker !== "function") {
              return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside objectOf.");
            }
            var propValue = props[propName];
            var propType = getPropType(propValue);
            if (propType !== "object") {
              return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected an object."));
            }
            for (var key in propValue) {
              if (has(propValue, key)) {
                var error = typeChecker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
                if (error instanceof Error) {
                  return error;
                }
              }
            }
            return null;
          }
          return createChainableTypeChecker(validate);
        }
        function createUnionTypeChecker(arrayOfTypeCheckers) {
          if (!Array.isArray(arrayOfTypeCheckers)) {
            true ? printWarning("Invalid argument supplied to oneOfType, expected an instance of array.") : void 0;
            return emptyFunctionThatReturnsNull;
          }
          for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
            var checker = arrayOfTypeCheckers[i];
            if (typeof checker !== "function") {
              printWarning("Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + getPostfixForTypeWarning(checker) + " at index " + i + ".");
              return emptyFunctionThatReturnsNull;
            }
          }
          function validate(props, propName, componentName, location, propFullName) {
            for (var i2 = 0; i2 < arrayOfTypeCheckers.length; i2++) {
              var checker2 = arrayOfTypeCheckers[i2];
              if (checker2(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
                return null;
              }
            }
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` supplied to " + ("`" + componentName + "`."));
          }
          return createChainableTypeChecker(validate);
        }
        function createNodeChecker() {
          function validate(props, propName, componentName, location, propFullName) {
            if (!isNode(props[propName])) {
              return new PropTypeError("Invalid " + location + " `" + propFullName + "` supplied to " + ("`" + componentName + "`, expected a ReactNode."));
            }
            return null;
          }
          return createChainableTypeChecker(validate);
        }
        function createShapeTypeChecker(shapeTypes) {
          function validate(props, propName, componentName, location, propFullName) {
            var propValue = props[propName];
            var propType = getPropType(propValue);
            if (propType !== "object") {
              return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` " + ("supplied to `" + componentName + "`, expected `object`."));
            }
            for (var key in shapeTypes) {
              var checker = shapeTypes[key];
              if (!checker) {
                continue;
              }
              var error = checker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
              if (error) {
                return error;
              }
            }
            return null;
          }
          return createChainableTypeChecker(validate);
        }
        function createStrictShapeTypeChecker(shapeTypes) {
          function validate(props, propName, componentName, location, propFullName) {
            var propValue = props[propName];
            var propType = getPropType(propValue);
            if (propType !== "object") {
              return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` " + ("supplied to `" + componentName + "`, expected `object`."));
            }
            var allKeys = assign({}, props[propName], shapeTypes);
            for (var key in allKeys) {
              var checker = shapeTypes[key];
              if (!checker) {
                return new PropTypeError("Invalid " + location + " `" + propFullName + "` key `" + key + "` supplied to `" + componentName + "`.\nBad object: " + JSON.stringify(props[propName], null, "  ") + "\nValid keys: " + JSON.stringify(Object.keys(shapeTypes), null, "  "));
              }
              var error = checker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
              if (error) {
                return error;
              }
            }
            return null;
          }
          return createChainableTypeChecker(validate);
        }
        function isNode(propValue) {
          switch (typeof propValue) {
            case "number":
            case "string":
            case "undefined":
              return true;
            case "boolean":
              return !propValue;
            case "object":
              if (Array.isArray(propValue)) {
                return propValue.every(isNode);
              }
              if (propValue === null || isValidElement(propValue)) {
                return true;
              }
              var iteratorFn = getIteratorFn(propValue);
              if (iteratorFn) {
                var iterator = iteratorFn.call(propValue);
                var step;
                if (iteratorFn !== propValue.entries) {
                  while (!(step = iterator.next()).done) {
                    if (!isNode(step.value)) {
                      return false;
                    }
                  }
                } else {
                  while (!(step = iterator.next()).done) {
                    var entry = step.value;
                    if (entry) {
                      if (!isNode(entry[1])) {
                        return false;
                      }
                    }
                  }
                }
              } else {
                return false;
              }
              return true;
            default:
              return false;
          }
        }
        function isSymbol(propType, propValue) {
          if (propType === "symbol") {
            return true;
          }
          if (!propValue) {
            return false;
          }
          if (propValue["@@toStringTag"] === "Symbol") {
            return true;
          }
          if (typeof Symbol === "function" && propValue instanceof Symbol) {
            return true;
          }
          return false;
        }
        function getPropType(propValue) {
          var propType = typeof propValue;
          if (Array.isArray(propValue)) {
            return "array";
          }
          if (propValue instanceof RegExp) {
            return "object";
          }
          if (isSymbol(propType, propValue)) {
            return "symbol";
          }
          return propType;
        }
        function getPreciseType(propValue) {
          if (typeof propValue === "undefined" || propValue === null) {
            return "" + propValue;
          }
          var propType = getPropType(propValue);
          if (propType === "object") {
            if (propValue instanceof Date) {
              return "date";
            } else if (propValue instanceof RegExp) {
              return "regexp";
            }
          }
          return propType;
        }
        function getPostfixForTypeWarning(value) {
          var type = getPreciseType(value);
          switch (type) {
            case "array":
            case "object":
              return "an " + type;
            case "boolean":
            case "date":
            case "regexp":
              return "a " + type;
            default:
              return type;
          }
        }
        function getClassName(propValue) {
          if (!propValue.constructor || !propValue.constructor.name) {
            return ANONYMOUS;
          }
          return propValue.constructor.name;
        }
        ReactPropTypes.checkPropTypes = checkPropTypes;
        ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
        ReactPropTypes.PropTypes = ReactPropTypes;
        return ReactPropTypes;
      };
    }
  });

  // node_modules/prop-types/index.js
  var require_prop_types = __commonJS({
    "node_modules/prop-types/index.js"(exports, module) {
      if (true) {
        ReactIs = require_react_is();
        throwOnDirectAccess = true;
        module.exports = require_factoryWithTypeCheckers()(ReactIs.isElement, throwOnDirectAccess);
      } else {
        module.exports = null();
      }
      var ReactIs;
      var throwOnDirectAccess;
    }
  });

  // node_modules/fast-deep-equal/index.js
  var require_fast_deep_equal = __commonJS({
    "node_modules/fast-deep-equal/index.js"(exports, module) {
      "use strict";
      module.exports = function equal(a, b) {
        if (a === b)
          return true;
        if (a && b && typeof a == "object" && typeof b == "object") {
          if (a.constructor !== b.constructor)
            return false;
          var length, i, keys;
          if (Array.isArray(a)) {
            length = a.length;
            if (length != b.length)
              return false;
            for (i = length; i-- !== 0; )
              if (!equal(a[i], b[i]))
                return false;
            return true;
          }
          if (a.constructor === RegExp)
            return a.source === b.source && a.flags === b.flags;
          if (a.valueOf !== Object.prototype.valueOf)
            return a.valueOf() === b.valueOf();
          if (a.toString !== Object.prototype.toString)
            return a.toString() === b.toString();
          keys = Object.keys(a);
          length = keys.length;
          if (length !== Object.keys(b).length)
            return false;
          for (i = length; i-- !== 0; )
            if (!Object.prototype.hasOwnProperty.call(b, keys[i]))
              return false;
          for (i = length; i-- !== 0; ) {
            var key = keys[i];
            if (!equal(a[key], b[key]))
              return false;
          }
          return true;
        }
        return a !== a && b !== b;
      };
    }
  });

  // node_modules/sister/src/sister.js
  var require_sister = __commonJS({
    "node_modules/sister/src/sister.js"(exports, module) {
      "use strict";
      var Sister;
      Sister = function() {
        var sister = {}, events = {};
        sister.on = function(name, handler) {
          var listener = { name, handler };
          events[name] = events[name] || [];
          events[name].unshift(listener);
          return listener;
        };
        sister.off = function(listener) {
          var index = events[listener.name].indexOf(listener);
          if (index !== -1) {
            events[listener.name].splice(index, 1);
          }
        };
        sister.trigger = function(name, data) {
          var listeners = events[name], i;
          if (listeners) {
            i = listeners.length;
            while (i--) {
              listeners[i].handler(data);
            }
          }
        };
        return sister;
      };
      module.exports = Sister;
    }
  });

  // node_modules/load-script/index.js
  var require_load_script = __commonJS({
    "node_modules/load-script/index.js"(exports, module) {
      module.exports = function load(src, opts, cb) {
        var head = document.head || document.getElementsByTagName("head")[0];
        var script = document.createElement("script");
        if (typeof opts === "function") {
          cb = opts;
          opts = {};
        }
        opts = opts || {};
        cb = cb || function() {
        };
        script.type = opts.type || "text/javascript";
        script.charset = opts.charset || "utf8";
        script.async = "async" in opts ? !!opts.async : true;
        script.src = src;
        if (opts.attrs) {
          setAttributes(script, opts.attrs);
        }
        if (opts.text) {
          script.text = "" + opts.text;
        }
        var onend = "onload" in script ? stdOnEnd : ieOnEnd;
        onend(script, cb);
        if (!script.onload) {
          stdOnEnd(script, cb);
        }
        head.appendChild(script);
      };
      function setAttributes(script, attrs) {
        for (var attr in attrs) {
          script.setAttribute(attr, attrs[attr]);
        }
      }
      function stdOnEnd(script, cb) {
        script.onload = function() {
          this.onerror = this.onload = null;
          cb(null, script);
        };
        script.onerror = function() {
          this.onerror = this.onload = null;
          cb(new Error("Failed to load " + this.src), script);
        };
      }
      function ieOnEnd(script, cb) {
        script.onreadystatechange = function() {
          if (this.readyState != "complete" && this.readyState != "loaded")
            return;
          this.onreadystatechange = null;
          cb(null, script);
        };
      }
    }
  });

  // node_modules/youtube-player/dist/loadYouTubeIframeApi.js
  var require_loadYouTubeIframeApi = __commonJS({
    "node_modules/youtube-player/dist/loadYouTubeIframeApi.js"(exports, module) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var _loadScript = require_load_script();
      var _loadScript2 = _interopRequireDefault(_loadScript);
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      exports.default = function(emitter) {
        var iframeAPIReady = new Promise(function(resolve) {
          if (window.YT && window.YT.Player && window.YT.Player instanceof Function) {
            resolve(window.YT);
            return;
          } else {
            var protocol = window.location.protocol === "http:" ? "http:" : "https:";
            (0, _loadScript2.default)(protocol + "//www.youtube.com/iframe_api", function(error) {
              if (error) {
                emitter.trigger("error", error);
              }
            });
          }
          var previous = window.onYouTubeIframeAPIReady;
          window.onYouTubeIframeAPIReady = function() {
            if (previous) {
              previous();
            }
            resolve(window.YT);
          };
        });
        return iframeAPIReady;
      };
      module.exports = exports["default"];
    }
  });

  // node_modules/ms/index.js
  var require_ms = __commonJS({
    "node_modules/ms/index.js"(exports, module) {
      var s = 1e3;
      var m = s * 60;
      var h = m * 60;
      var d = h * 24;
      var y = d * 365.25;
      module.exports = function(val, options) {
        options = options || {};
        var type = typeof val;
        if (type === "string" && val.length > 0) {
          return parse(val);
        } else if (type === "number" && isNaN(val) === false) {
          return options.long ? fmtLong(val) : fmtShort(val);
        }
        throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(val));
      };
      function parse(str) {
        str = String(str);
        if (str.length > 100) {
          return;
        }
        var match = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(str);
        if (!match) {
          return;
        }
        var n = parseFloat(match[1]);
        var type = (match[2] || "ms").toLowerCase();
        switch (type) {
          case "years":
          case "year":
          case "yrs":
          case "yr":
          case "y":
            return n * y;
          case "days":
          case "day":
          case "d":
            return n * d;
          case "hours":
          case "hour":
          case "hrs":
          case "hr":
          case "h":
            return n * h;
          case "minutes":
          case "minute":
          case "mins":
          case "min":
          case "m":
            return n * m;
          case "seconds":
          case "second":
          case "secs":
          case "sec":
          case "s":
            return n * s;
          case "milliseconds":
          case "millisecond":
          case "msecs":
          case "msec":
          case "ms":
            return n;
          default:
            return void 0;
        }
      }
      function fmtShort(ms) {
        if (ms >= d) {
          return Math.round(ms / d) + "d";
        }
        if (ms >= h) {
          return Math.round(ms / h) + "h";
        }
        if (ms >= m) {
          return Math.round(ms / m) + "m";
        }
        if (ms >= s) {
          return Math.round(ms / s) + "s";
        }
        return ms + "ms";
      }
      function fmtLong(ms) {
        return plural(ms, d, "day") || plural(ms, h, "hour") || plural(ms, m, "minute") || plural(ms, s, "second") || ms + " ms";
      }
      function plural(ms, n, name) {
        if (ms < n) {
          return;
        }
        if (ms < n * 1.5) {
          return Math.floor(ms / n) + " " + name;
        }
        return Math.ceil(ms / n) + " " + name + "s";
      }
    }
  });

  // node_modules/debug/src/debug.js
  var require_debug = __commonJS({
    "node_modules/debug/src/debug.js"(exports, module) {
      exports = module.exports = createDebug.debug = createDebug["default"] = createDebug;
      exports.coerce = coerce;
      exports.disable = disable;
      exports.enable = enable;
      exports.enabled = enabled;
      exports.humanize = require_ms();
      exports.names = [];
      exports.skips = [];
      exports.formatters = {};
      var prevTime;
      function selectColor(namespace) {
        var hash = 0, i;
        for (i in namespace) {
          hash = (hash << 5) - hash + namespace.charCodeAt(i);
          hash |= 0;
        }
        return exports.colors[Math.abs(hash) % exports.colors.length];
      }
      function createDebug(namespace) {
        function debug() {
          if (!debug.enabled)
            return;
          var self = debug;
          var curr = +new Date();
          var ms = curr - (prevTime || curr);
          self.diff = ms;
          self.prev = prevTime;
          self.curr = curr;
          prevTime = curr;
          var args = new Array(arguments.length);
          for (var i = 0; i < args.length; i++) {
            args[i] = arguments[i];
          }
          args[0] = exports.coerce(args[0]);
          if (typeof args[0] !== "string") {
            args.unshift("%O");
          }
          var index = 0;
          args[0] = args[0].replace(/%([a-zA-Z%])/g, function(match, format) {
            if (match === "%%")
              return match;
            index++;
            var formatter = exports.formatters[format];
            if (typeof formatter === "function") {
              var val = args[index];
              match = formatter.call(self, val);
              args.splice(index, 1);
              index--;
            }
            return match;
          });
          exports.formatArgs.call(self, args);
          var logFn = debug.log || exports.log || console.log.bind(console);
          logFn.apply(self, args);
        }
        debug.namespace = namespace;
        debug.enabled = exports.enabled(namespace);
        debug.useColors = exports.useColors();
        debug.color = selectColor(namespace);
        if (typeof exports.init === "function") {
          exports.init(debug);
        }
        return debug;
      }
      function enable(namespaces) {
        exports.save(namespaces);
        exports.names = [];
        exports.skips = [];
        var split = (typeof namespaces === "string" ? namespaces : "").split(/[\s,]+/);
        var len = split.length;
        for (var i = 0; i < len; i++) {
          if (!split[i])
            continue;
          namespaces = split[i].replace(/\*/g, ".*?");
          if (namespaces[0] === "-") {
            exports.skips.push(new RegExp("^" + namespaces.substr(1) + "$"));
          } else {
            exports.names.push(new RegExp("^" + namespaces + "$"));
          }
        }
      }
      function disable() {
        exports.enable("");
      }
      function enabled(name) {
        var i, len;
        for (i = 0, len = exports.skips.length; i < len; i++) {
          if (exports.skips[i].test(name)) {
            return false;
          }
        }
        for (i = 0, len = exports.names.length; i < len; i++) {
          if (exports.names[i].test(name)) {
            return true;
          }
        }
        return false;
      }
      function coerce(val) {
        if (val instanceof Error)
          return val.stack || val.message;
        return val;
      }
    }
  });

  // node_modules/debug/src/browser.js
  var require_browser = __commonJS({
    "node_modules/debug/src/browser.js"(exports, module) {
      exports = module.exports = require_debug();
      exports.log = log;
      exports.formatArgs = formatArgs;
      exports.save = save;
      exports.load = load;
      exports.useColors = useColors;
      exports.storage = typeof chrome != "undefined" && typeof chrome.storage != "undefined" ? chrome.storage.local : localstorage();
      exports.colors = [
        "lightseagreen",
        "forestgreen",
        "goldenrod",
        "dodgerblue",
        "darkorchid",
        "crimson"
      ];
      function useColors() {
        if (typeof window !== "undefined" && window.process && window.process.type === "renderer") {
          return true;
        }
        return typeof document !== "undefined" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || typeof window !== "undefined" && window.console && (window.console.firebug || window.console.exception && window.console.table) || typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
      }
      exports.formatters.j = function(v) {
        try {
          return JSON.stringify(v);
        } catch (err) {
          return "[UnexpectedJSONParseError]: " + err.message;
        }
      };
      function formatArgs(args) {
        var useColors2 = this.useColors;
        args[0] = (useColors2 ? "%c" : "") + this.namespace + (useColors2 ? " %c" : " ") + args[0] + (useColors2 ? "%c " : " ") + "+" + exports.humanize(this.diff);
        if (!useColors2)
          return;
        var c = "color: " + this.color;
        args.splice(1, 0, c, "color: inherit");
        var index = 0;
        var lastC = 0;
        args[0].replace(/%[a-zA-Z%]/g, function(match) {
          if (match === "%%")
            return;
          index++;
          if (match === "%c") {
            lastC = index;
          }
        });
        args.splice(lastC, 0, c);
      }
      function log() {
        return typeof console === "object" && console.log && Function.prototype.apply.call(console.log, console, arguments);
      }
      function save(namespaces) {
        try {
          if (namespaces == null) {
            exports.storage.removeItem("debug");
          } else {
            exports.storage.debug = namespaces;
          }
        } catch (e) {
        }
      }
      function load() {
        var r;
        try {
          r = exports.storage.debug;
        } catch (e) {
        }
        if (!r && typeof process !== "undefined" && "env" in process) {
          r = process.env.DEBUG;
        }
        return r;
      }
      exports.enable(load());
      function localstorage() {
        try {
          return window.localStorage;
        } catch (e) {
        }
      }
    }
  });

  // node_modules/youtube-player/dist/functionNames.js
  var require_functionNames = __commonJS({
    "node_modules/youtube-player/dist/functionNames.js"(exports, module) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = ["cueVideoById", "loadVideoById", "cueVideoByUrl", "loadVideoByUrl", "playVideo", "pauseVideo", "stopVideo", "getVideoLoadedFraction", "cuePlaylist", "loadPlaylist", "nextVideo", "previousVideo", "playVideoAt", "setShuffle", "setLoop", "getPlaylist", "getPlaylistIndex", "setOption", "mute", "unMute", "isMuted", "setVolume", "getVolume", "seekTo", "getPlayerState", "getPlaybackRate", "setPlaybackRate", "getAvailablePlaybackRates", "getPlaybackQuality", "setPlaybackQuality", "getAvailableQualityLevels", "getCurrentTime", "getDuration", "removeEventListener", "getVideoUrl", "getVideoEmbedCode", "getOptions", "getOption", "addEventListener", "destroy", "setSize", "getIframe"];
      module.exports = exports["default"];
    }
  });

  // node_modules/youtube-player/dist/eventNames.js
  var require_eventNames = __commonJS({
    "node_modules/youtube-player/dist/eventNames.js"(exports, module) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = ["ready", "stateChange", "playbackQualityChange", "playbackRateChange", "error", "apiChange", "volumeChange"];
      module.exports = exports["default"];
    }
  });

  // node_modules/youtube-player/dist/constants/PlayerStates.js
  var require_PlayerStates = __commonJS({
    "node_modules/youtube-player/dist/constants/PlayerStates.js"(exports, module) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = {
        BUFFERING: 3,
        ENDED: 0,
        PAUSED: 2,
        PLAYING: 1,
        UNSTARTED: -1,
        VIDEO_CUED: 5
      };
      module.exports = exports["default"];
    }
  });

  // node_modules/youtube-player/dist/FunctionStateMap.js
  var require_FunctionStateMap = __commonJS({
    "node_modules/youtube-player/dist/FunctionStateMap.js"(exports, module) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var _PlayerStates = require_PlayerStates();
      var _PlayerStates2 = _interopRequireDefault(_PlayerStates);
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      exports.default = {
        pauseVideo: {
          acceptableStates: [_PlayerStates2.default.ENDED, _PlayerStates2.default.PAUSED],
          stateChangeRequired: false
        },
        playVideo: {
          acceptableStates: [_PlayerStates2.default.ENDED, _PlayerStates2.default.PLAYING],
          stateChangeRequired: false
        },
        seekTo: {
          acceptableStates: [_PlayerStates2.default.ENDED, _PlayerStates2.default.PLAYING, _PlayerStates2.default.PAUSED],
          stateChangeRequired: true,
          timeout: 3e3
        }
      };
      module.exports = exports["default"];
    }
  });

  // node_modules/youtube-player/dist/YouTubePlayer.js
  var require_YouTubePlayer = __commonJS({
    "node_modules/youtube-player/dist/YouTubePlayer.js"(exports, module) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var _debug = require_browser();
      var _debug2 = _interopRequireDefault(_debug);
      var _functionNames = require_functionNames();
      var _functionNames2 = _interopRequireDefault(_functionNames);
      var _eventNames = require_eventNames();
      var _eventNames2 = _interopRequireDefault(_eventNames);
      var _FunctionStateMap = require_FunctionStateMap();
      var _FunctionStateMap2 = _interopRequireDefault(_FunctionStateMap);
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      var debug = (0, _debug2.default)("youtube-player");
      var YouTubePlayer = {};
      YouTubePlayer.proxyEvents = function(emitter) {
        var events = {};
        var _loop = function _loop2(eventName2) {
          var onEventName = "on" + eventName2.slice(0, 1).toUpperCase() + eventName2.slice(1);
          events[onEventName] = function(event) {
            debug('event "%s"', onEventName, event);
            emitter.trigger(eventName2, event);
          };
        };
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = void 0;
        try {
          for (var _iterator = _eventNames2.default[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var eventName = _step.value;
            _loop(eventName);
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }
        return events;
      };
      YouTubePlayer.promisifyPlayer = function(playerAPIReady) {
        var strictState = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
        var functions = {};
        var _loop2 = function _loop22(functionName2) {
          if (strictState && _FunctionStateMap2.default[functionName2]) {
            functions[functionName2] = function() {
              for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
              }
              return playerAPIReady.then(function(player) {
                var stateInfo = _FunctionStateMap2.default[functionName2];
                var playerState = player.getPlayerState();
                var value = player[functionName2].apply(player, args);
                if (stateInfo.stateChangeRequired || Array.isArray(stateInfo.acceptableStates) && stateInfo.acceptableStates.indexOf(playerState) === -1) {
                  return new Promise(function(resolve) {
                    var onPlayerStateChange = function onPlayerStateChange2() {
                      var playerStateAfterChange = player.getPlayerState();
                      var timeout = void 0;
                      if (typeof stateInfo.timeout === "number") {
                        timeout = setTimeout(function() {
                          player.removeEventListener("onStateChange", onPlayerStateChange2);
                          resolve();
                        }, stateInfo.timeout);
                      }
                      if (Array.isArray(stateInfo.acceptableStates) && stateInfo.acceptableStates.indexOf(playerStateAfterChange) !== -1) {
                        player.removeEventListener("onStateChange", onPlayerStateChange2);
                        clearTimeout(timeout);
                        resolve();
                      }
                    };
                    player.addEventListener("onStateChange", onPlayerStateChange);
                  }).then(function() {
                    return value;
                  });
                }
                return value;
              });
            };
          } else {
            functions[functionName2] = function() {
              for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                args[_key2] = arguments[_key2];
              }
              return playerAPIReady.then(function(player) {
                return player[functionName2].apply(player, args);
              });
            };
          }
        };
        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = void 0;
        try {
          for (var _iterator2 = _functionNames2.default[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var functionName = _step2.value;
            _loop2(functionName);
          }
        } catch (err) {
          _didIteratorError2 = true;
          _iteratorError2 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion2 && _iterator2.return) {
              _iterator2.return();
            }
          } finally {
            if (_didIteratorError2) {
              throw _iteratorError2;
            }
          }
        }
        return functions;
      };
      exports.default = YouTubePlayer;
      module.exports = exports["default"];
    }
  });

  // node_modules/youtube-player/dist/index.js
  var require_dist = __commonJS({
    "node_modules/youtube-player/dist/index.js"(exports, module) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
        return typeof obj;
      } : function(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
      var _sister = require_sister();
      var _sister2 = _interopRequireDefault(_sister);
      var _loadYouTubeIframeApi = require_loadYouTubeIframeApi();
      var _loadYouTubeIframeApi2 = _interopRequireDefault(_loadYouTubeIframeApi);
      var _YouTubePlayer = require_YouTubePlayer();
      var _YouTubePlayer2 = _interopRequireDefault(_YouTubePlayer);
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      var youtubeIframeAPI = void 0;
      exports.default = function(maybeElementId) {
        var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        var strictState = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
        var emitter = (0, _sister2.default)();
        if (!youtubeIframeAPI) {
          youtubeIframeAPI = (0, _loadYouTubeIframeApi2.default)(emitter);
        }
        if (options.events) {
          throw new Error("Event handlers cannot be overwritten.");
        }
        if (typeof maybeElementId === "string" && !document.getElementById(maybeElementId)) {
          throw new Error('Element "' + maybeElementId + '" does not exist.');
        }
        options.events = _YouTubePlayer2.default.proxyEvents(emitter);
        var playerAPIReady = new Promise(function(resolve) {
          if ((typeof maybeElementId === "undefined" ? "undefined" : _typeof2(maybeElementId)) === "object" && maybeElementId.playVideo instanceof Function) {
            var player = maybeElementId;
            resolve(player);
          } else {
            youtubeIframeAPI.then(function(YT) {
              var player2 = new YT.Player(maybeElementId, options);
              emitter.on("ready", function() {
                resolve(player2);
              });
              return null;
            });
          }
        });
        var playerApi = _YouTubePlayer2.default.promisifyPlayer(playerAPIReady, strictState);
        playerApi.on = emitter.on;
        playerApi.off = emitter.off;
        return playerApi;
      };
      module.exports = exports["default"];
    }
  });

  // creator/custom-app/index.tsx
  var custom_app_exports = {};
  __export(custom_app_exports, {
    default: () => render
  });
  var import_react3 = __toESM(__require("react"));

  // postcss-module:C:\Users\flafy\AppData\Local\Temp\tmp-4308-0U3baSR2EcmV\17ea37a44a00\app.module.css
  var app_module_default = { "container": "app-module__container___thHYozLgzxMKZicAx", "title": "app-module__title___jzQAyzLgzxMKZicAx", "input": "app-module__input___e4A54zLgzxMKZicAx" };

  // src/app.tsx
  var import_react2 = __toESM(__require("react"));

  // node_modules/react-youtube/dist/index.esm.js
  var import_prop_types = __toESM(require_prop_types());
  var import_react = __toESM(__require("react"));
  var import_fast_deep_equal = __toESM(require_fast_deep_equal());
  var import_youtube_player = __toESM(require_dist());
  function _typeof(obj) {
    "@babel/helpers - typeof";
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function _typeof2(obj2) {
        return typeof obj2;
      };
    } else {
      _typeof = function _typeof2(obj2) {
        return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
      };
    }
    return _typeof(obj);
  }
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps)
      _defineProperties(Constructor.prototype, protoProps);
    if (staticProps)
      _defineProperties(Constructor, staticProps);
    return Constructor;
  }
  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
    if (superClass)
      _setPrototypeOf(subClass, superClass);
  }
  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
      o2.__proto__ = p2;
      return o2;
    };
    return _setPrototypeOf(o, p);
  }
  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived), result;
      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;
        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }
      return _possibleConstructorReturn(this, result);
    };
  }
  function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
      return call;
    }
    return _assertThisInitialized(self);
  }
  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
  }
  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct)
      return false;
    if (Reflect.construct.sham)
      return false;
    if (typeof Proxy === "function")
      return true;
    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function() {
      }));
      return true;
    } catch (e) {
      return false;
    }
  }
  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
      return o2.__proto__ || Object.getPrototypeOf(o2);
    };
    return _getPrototypeOf(o);
  }
  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly)
        symbols = symbols.filter(function(sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
      keys.push.apply(keys, symbols);
    }
    return keys;
  }
  function _objectSpread(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};
      if (i % 2) {
        ownKeys(Object(source), true).forEach(function(key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(Object(source)).forEach(function(key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }
    return target;
  }
  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
    } else {
      obj[key] = value;
    }
    return obj;
  }
  function shouldUpdateVideo(prevProps, props) {
    if (prevProps.videoId !== props.videoId) {
      return true;
    }
    var prevVars = prevProps.opts.playerVars || {};
    var vars = props.opts.playerVars || {};
    return prevVars.start !== vars.start || prevVars.end !== vars.end;
  }
  function filterResetOptions(opts) {
    return _objectSpread(_objectSpread({}, opts), {}, {
      height: 0,
      width: 0,
      playerVars: _objectSpread(_objectSpread({}, opts.playerVars), {}, {
        autoplay: 0,
        start: 0,
        end: 0
      })
    });
  }
  function shouldResetPlayer(prevProps, props) {
    return prevProps.videoId !== props.videoId || !(0, import_fast_deep_equal.default)(filterResetOptions(prevProps.opts), filterResetOptions(props.opts));
  }
  function shouldUpdatePlayer(prevProps, props) {
    return prevProps.id !== props.id || prevProps.className !== props.className || prevProps.opts.width !== props.opts.width || prevProps.opts.height !== props.opts.height || prevProps.title !== props.title;
  }
  var YouTube = /* @__PURE__ */ function(_React$Component) {
    _inherits(YouTube2, _React$Component);
    var _super = _createSuper(YouTube2);
    function YouTube2(props) {
      var _this;
      _classCallCheck(this, YouTube2);
      _this = _super.call(this, props);
      _defineProperty(_assertThisInitialized(_this), "onPlayerReady", function(event) {
        return _this.props.onReady(event);
      });
      _defineProperty(_assertThisInitialized(_this), "onPlayerError", function(event) {
        return _this.props.onError(event);
      });
      _defineProperty(_assertThisInitialized(_this), "onPlayerStateChange", function(event) {
        _this.props.onStateChange(event);
        switch (event.data) {
          case YouTube2.PlayerState.ENDED:
            _this.props.onEnd(event);
            break;
          case YouTube2.PlayerState.PLAYING:
            _this.props.onPlay(event);
            break;
          case YouTube2.PlayerState.PAUSED:
            _this.props.onPause(event);
            break;
          default:
        }
      });
      _defineProperty(_assertThisInitialized(_this), "onPlayerPlaybackRateChange", function(event) {
        return _this.props.onPlaybackRateChange(event);
      });
      _defineProperty(_assertThisInitialized(_this), "onPlayerPlaybackQualityChange", function(event) {
        return _this.props.onPlaybackQualityChange(event);
      });
      _defineProperty(_assertThisInitialized(_this), "createPlayer", function() {
        if (typeof document === "undefined")
          return;
        var playerOpts = _objectSpread(_objectSpread({}, _this.props.opts), {}, {
          videoId: _this.props.videoId
        });
        _this.internalPlayer = (0, import_youtube_player.default)(_this.container, playerOpts);
        _this.internalPlayer.on("ready", _this.onPlayerReady);
        _this.internalPlayer.on("error", _this.onPlayerError);
        _this.internalPlayer.on("stateChange", _this.onPlayerStateChange);
        _this.internalPlayer.on("playbackRateChange", _this.onPlayerPlaybackRateChange);
        _this.internalPlayer.on("playbackQualityChange", _this.onPlayerPlaybackQualityChange);
      });
      _defineProperty(_assertThisInitialized(_this), "resetPlayer", function() {
        return _this.internalPlayer.destroy().then(_this.createPlayer);
      });
      _defineProperty(_assertThisInitialized(_this), "updatePlayer", function() {
        _this.internalPlayer.getIframe().then(function(iframe) {
          if (_this.props.id)
            iframe.setAttribute("id", _this.props.id);
          else
            iframe.removeAttribute("id");
          if (_this.props.className)
            iframe.setAttribute("class", _this.props.className);
          else
            iframe.removeAttribute("class");
          if (_this.props.opts && _this.props.opts.width)
            iframe.setAttribute("width", _this.props.opts.width);
          else
            iframe.removeAttribute("width");
          if (_this.props.opts && _this.props.opts.height)
            iframe.setAttribute("height", _this.props.opts.height);
          else
            iframe.removeAttribute("height");
          if (typeof _this.props.title === "string")
            iframe.setAttribute("title", _this.props.title);
          else
            iframe.setAttribute("title", "YouTube video player");
        });
      });
      _defineProperty(_assertThisInitialized(_this), "getInternalPlayer", function() {
        return _this.internalPlayer;
      });
      _defineProperty(_assertThisInitialized(_this), "updateVideo", function() {
        if (typeof _this.props.videoId === "undefined" || _this.props.videoId === null) {
          _this.internalPlayer.stopVideo();
          return;
        }
        var autoplay = false;
        var opts = {
          videoId: _this.props.videoId
        };
        if ("playerVars" in _this.props.opts) {
          autoplay = _this.props.opts.playerVars.autoplay === 1;
          if ("start" in _this.props.opts.playerVars) {
            opts.startSeconds = _this.props.opts.playerVars.start;
          }
          if ("end" in _this.props.opts.playerVars) {
            opts.endSeconds = _this.props.opts.playerVars.end;
          }
        }
        if (autoplay) {
          _this.internalPlayer.loadVideoById(opts);
          return;
        }
        _this.internalPlayer.cueVideoById(opts);
      });
      _defineProperty(_assertThisInitialized(_this), "refContainer", function(container) {
        _this.container = container;
      });
      _this.container = null;
      _this.internalPlayer = null;
      return _this;
    }
    _createClass(YouTube2, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        this.createPlayer();
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate(prevProps) {
        if (shouldUpdatePlayer(prevProps, this.props)) {
          this.updatePlayer();
        }
        if (shouldResetPlayer(prevProps, this.props)) {
          this.resetPlayer();
        }
        if (shouldUpdateVideo(prevProps, this.props)) {
          this.updateVideo();
        }
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        this.internalPlayer.destroy();
      }
    }, {
      key: "render",
      value: function render2() {
        return /* @__PURE__ */ import_react.default.createElement("div", {
          className: this.props.containerClassName
        }, /* @__PURE__ */ import_react.default.createElement("div", {
          id: this.props.id,
          className: this.props.className,
          ref: this.refContainer,
          loading: this.props.loading
        }));
      }
    }]);
    return YouTube2;
  }(import_react.default.Component);
  _defineProperty(YouTube, "PlayerState", {
    UNSTARTED: -1,
    ENDED: 0,
    PLAYING: 1,
    PAUSED: 2,
    BUFFERING: 3,
    CUED: 5
  });
  YouTube.propTypes = {
    videoId: import_prop_types.default.string,
    id: import_prop_types.default.string,
    className: import_prop_types.default.string,
    containerClassName: import_prop_types.default.string,
    title: import_prop_types.default.string,
    loading: import_prop_types.default.oneOf(["lazy", "eager", "auto"]),
    opts: import_prop_types.default.objectOf(import_prop_types.default.any),
    onReady: import_prop_types.default.func,
    onError: import_prop_types.default.func,
    onPlay: import_prop_types.default.func,
    onPause: import_prop_types.default.func,
    onEnd: import_prop_types.default.func,
    onStateChange: import_prop_types.default.func,
    onPlaybackRateChange: import_prop_types.default.func,
    onPlaybackQualityChange: import_prop_types.default.func
  };
  YouTube.defaultProps = {
    videoId: null,
    id: null,
    className: null,
    loading: null,
    opts: {},
    containerClassName: "",
    onReady: function onReady() {
    },
    onError: function onError() {
    },
    onPlay: function onPlay() {
    },
    onPause: function onPause() {
    },
    onEnd: function onEnd() {
    },
    onStateChange: function onStateChange() {
    },
    onPlaybackRateChange: function onPlaybackRateChange() {
    },
    onPlaybackQualityChange: function onPlaybackQualityChange() {
    },
    title: null
  };
  var index_esm_default = YouTube;

  // src/app.tsx
  var App = class extends import_react2.default.Component {
    constructor() {
      super(...arguments);
      this.state = {
        videoId: "dvgZkm1xWPE"
      };
    }
    render() {
      return /* @__PURE__ */ import_react2.default.createElement(import_react2.default.Fragment, null, /* @__PURE__ */ import_react2.default.createElement("div", {
        className: app_module_default.container
      }, /* @__PURE__ */ import_react2.default.createElement("div", {
        className: app_module_default.title
      }, "Youtube"), /* @__PURE__ */ import_react2.default.createElement(index_esm_default, {
        videoId: this.state.videoId
      }), /* @__PURE__ */ import_react2.default.createElement("input", {
        type: "text",
        value: this.state.videoId,
        className: app_module_default.input,
        onInput: (e) => {
          this.setState({
            videoId: e.currentTarget.value
          });
        }
      })));
    }
  };
  var app_default = App;

  // creator/custom-app/index.tsx
  function render() {
    return /* @__PURE__ */ import_react3.default.createElement(app_default, null);
  }
  return __toCommonJS(custom_app_exports);
})();
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
/**
* @link https://github.com/gajus/sister for the canonical source repository
* @license https://github.com/gajus/sister/blob/master/LICENSE BSD 3-Clause
*/
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const render=()=>zLgzxMKZicAx.default();
