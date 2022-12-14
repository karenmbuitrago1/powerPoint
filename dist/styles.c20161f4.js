// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../styles/global.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');
module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./..\\fonts\\Futura_Heavy_font.ttf":[["Futura_Heavy_font.d4dfe0e7.ttf","../fonts/Futura_Heavy_font.ttf"],"../fonts/Futura_Heavy_font.ttf"],"./..\\fonts\\Futura_Bold_font.ttf":[["Futura_Bold_font.a62f843a.ttf","../fonts/Futura_Bold_font.ttf"],"../fonts/Futura_Bold_font.ttf"],"./..\\fonts\\Futura_Extra_Black_font.ttf":[["Futura_Extra_Black_font.2e5f4a13.ttf","../fonts/Futura_Extra_Black_font.ttf"],"../fonts/Futura_Extra_Black_font.ttf"],"./..\\fonts\\futura_medium.ttf":[["futura_medium.e953120c.ttf","../fonts/futura_medium.ttf"],"../fonts/futura_medium.ttf"],"_css_loader":"../../../../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"../styles/bootstrap.min.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');
module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../../../../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"../styles/intro.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');
module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./..\\images\\recurso_2.png":[["recurso_2.9a482cb9.png","../images/recurso_2.png"],"../images/recurso_2.png"],"_css_loader":"../../../../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"../styles/intro-card.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');
module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./..\\images\\recurso_29.png":[["recurso_29.21c67454.png","../images/recurso_29.png"],"../images/recurso_29.png"],"_css_loader":"../../../../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"../styles/intro-route.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');
module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./..\\images\\recurso_31.png":[["recurso_31.b1a2787e.png","../images/recurso_31.png"],"../images/recurso_31.png"],"./..\\images\\recurso_110.png":[["recurso_110.07af3dcd.png","../images/recurso_110.png"],"../images/recurso_110.png"],"./..\\images\\recurso_119.png":[["recurso_119.1b3fca67.png","../images/recurso_119.png"],"../images/recurso_119.png"],"./..\\images\\recurso_111.png":[["recurso_111.594de14d.png","../images/recurso_111.png"],"../images/recurso_111.png"],"./..\\images\\recurso_120.png":[["recurso_120.deac15de.png","../images/recurso_120.png"],"../images/recurso_120.png"],"./..\\images\\recurso_112.png":[["recurso_112.9ef979f2.png","../images/recurso_112.png"],"../images/recurso_112.png"],"./..\\images\\recurso_121.png":[["recurso_121.cf7b5542.png","../images/recurso_121.png"],"../images/recurso_121.png"],"./..\\images\\recurso_113.png":[["recurso_113.c1072f70.png","../images/recurso_113.png"],"../images/recurso_113.png"],"./..\\images\\recurso_122.png":[["recurso_122.441cd817.png","../images/recurso_122.png"],"../images/recurso_122.png"],"./..\\images\\recurso_114.png":[["recurso_114.2c368ad2.png","../images/recurso_114.png"],"../images/recurso_114.png"],"./..\\images\\recurso_123.png":[["recurso_123.ee3c0476.png","../images/recurso_123.png"],"../images/recurso_123.png"],"./..\\images\\recurso_115.png":[["recurso_115.8cf363c9.png","../images/recurso_115.png"],"../images/recurso_115.png"],"./..\\images\\recurso_124.png":[["recurso_124.5c0e9488.png","../images/recurso_124.png"],"../images/recurso_124.png"],"./..\\images\\recurso_116.png":[["recurso_116.3025dda5.png","../images/recurso_116.png"],"../images/recurso_116.png"],"./..\\images\\recurso_125.png":[["recurso_125.b215a643.png","../images/recurso_125.png"],"../images/recurso_125.png"],"./..\\images\\recurso_117.png":[["recurso_117.ad68cea8.png","../images/recurso_117.png"],"../images/recurso_117.png"],"./..\\images\\recurso_126.png":[["recurso_126.b3bfce22.png","../images/recurso_126.png"],"../images/recurso_126.png"],"_css_loader":"../../../../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"../styles/fase-herramientas.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');
module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./..\\images\\recurso_59.png":[["recurso_59.df87a0ed.png","../images/recurso_59.png"],"../images/recurso_59.png"],"./..\\images\\recurso_60.png":[["recurso_60.3808ff9c.png","../images/recurso_60.png"],"../images/recurso_60.png"],"_css_loader":"../../../../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"../styles/fase-post.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');
module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./..\\images\\recurso_39.jpg":[["recurso_39.c2c5009d.jpg","../images/recurso_39.jpg"],"../images/recurso_39.jpg"],"./..\\images\\recurso90.png":[["recurso90.058d747a.png","../images/recurso90.png"],"../images/recurso90.png"],"./..\\images\\recurso_15.png":[["recurso_15.d0444efe.png","../images/recurso_15.png"],"../images/recurso_15.png"],"./..\\images\\recurso_31.png":[["recurso_31.b1a2787e.png","../images/recurso_31.png"],"../images/recurso_31.png"],"./..\\images\\recurso_67.png":[["recurso_67.41d0ebe7.png","../images/recurso_67.png"],"../images/recurso_67.png"],"./..\\images\\recurso_122_122.png":[["recurso_122_122.3cf2d426.png","../images/recurso_122_122.png"],"../images/recurso_122_122.png"],"./..\\images\\recurso_160.png":[["recurso_160.cbb770e0.png","../images/recurso_160.png"],"../images/recurso_160.png"],"./..\\images\\recurso_198.png":[["recurso_198.b0c4e2ea.png","../images/recurso_198.png"],"../images/recurso_198.png"],"./..\\images\\recurso_238.png":[["recurso_238.f2b052e9.png","../images/recurso_238.png"],"../images/recurso_238.png"],"_css_loader":"../../../../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"../styles/fase1.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');
module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./..\\images\\recurso_38.png":[["recurso_38.bcce04d1.png","../images/recurso_38.png"],"../images/recurso_38.png"],"./..\\images\\recurso_31.png":[["recurso_31.b1a2787e.png","../images/recurso_31.png"],"../images/recurso_31.png"],"./..\\images\\recurso57.jpg":[["recurso57.0ad092c1.jpg","../images/recurso57.jpg"],"../images/recurso57.jpg"],"./..\\images\\recurso_tip.jpg":[["recurso_tip.f7d213c5.jpg","../images/recurso_tip.jpg"],"../images/recurso_tip.jpg"],"_css_loader":"../../../../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"../styles/fase1-drag.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');
module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../../../../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"../styles/fase1-tips.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');
module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./..\\images\\recurso_62.png":[["recurso_62.2955d4f9.png","../images/recurso_62.png"],"../images/recurso_62.png"],"./..\\images\\recurso_24.png":[["recurso_24.2429bc12.png","../images/recurso_24.png"],"../images/recurso_24.png"],"./..\\images\\recurso_63.png":[["recurso_63.c7cf548f.png","../images/recurso_63.png"],"../images/recurso_63.png"],"./..\\images\\recurso_25.png":[["recurso_25.d6e177be.png","../images/recurso_25.png"],"../images/recurso_25.png"],"./..\\images\\recurso_41_41.png":[["recurso_41_41.c1a4a2d9.png","../images/recurso_41_41.png"],"../images/recurso_41_41.png"],"./..\\images\\recurso_26.png":[["recurso_26.3d9f7e3e.png","../images/recurso_26.png"],"../images/recurso_26.png"],"_css_loader":"../../../../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"../styles/fase2.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');
module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./..\\images\\recurso_73.png":[["recurso_73.0ad2bcce.png","../images/recurso_73.png"],"../images/recurso_73.png"],"./..\\images\\recurso90.png":[["recurso90.058d747a.png","../images/recurso90.png"],"../images/recurso90.png"],"./..\\images\\recurso95.png":[["recurso95.8b88286d.png","../images/recurso95.png"],"../images/recurso95.png"],"./..\\images\\recurso97.png":[["recurso97.fba8b7e3.png","../images/recurso97.png"],"../images/recurso97.png"],"_css_loader":"../../../../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"../styles/fase3.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');
module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./..\\images\\recurso_7.png":[["recurso_7.5b9994e7.png","../images/recurso_7.png"],"../images/recurso_7.png"],"./..\\images\\recurso_16.png":[["recurso_16.94b2fa25.png","../images/recurso_16.png"],"../images/recurso_16.png"],"./..\\images\\recurso_15.png":[["recurso_15.d0444efe.png","../images/recurso_15.png"],"../images/recurso_15.png"],"./..\\images\\recurso_27_27.png":[["recurso_27_27.cee0f44b.png","../images/recurso_27_27.png"],"../images/recurso_27_27.png"],"./..\\images\\recurso_128_1.png":[["recurso_128_1.40bcd563.png","../images/recurso_128_1.png"],"../images/recurso_128_1.png"],"_css_loader":"../../../../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"../styles/fase3-paso.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');
module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../../../../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"../styles/fase4.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');
module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./..\\images\\recurso_59_59.png":[["recurso_59_59.278e8718.png","../images/recurso_59_59.png"],"../images/recurso_59_59.png"],"./..\\images\\recurso_73_73.png":[["recurso_73_73.2e9b00d5.png","../images/recurso_73_73.png"],"../images/recurso_73_73.png"],"./..\\images\\recurso_67.png":[["recurso_67.41d0ebe7.png","../images/recurso_67.png"],"../images/recurso_67.png"],"./..\\images\\recurso57.jpg":[["recurso57.0ad092c1.jpg","../images/recurso57.jpg"],"../images/recurso57.jpg"],"./..\\images\\recurso_95.png":[["recurso_95.b88ea7ad.png","../images/recurso_95.png"],"../images/recurso_95.png"],"_css_loader":"../../../../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"../styles/fase4-memoria.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');
module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../../../../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"../styles/fase5.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');
module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./..\\images\\recurso_144.png":[["recurso_144.59b73b90.png","../images/recurso_144.png"],"../images/recurso_144.png"],"./..\\images\\recurso_122_122.png":[["recurso_122_122.3cf2d426.png","../images/recurso_122_122.png"],"../images/recurso_122_122.png"],"./..\\images\\recurso_128.png":[["recurso_128.c274f720.png","../images/recurso_128.png"],"../images/recurso_128.png"],"./..\\images\\recurso_138.png":[["recurso_138.58ab77cf.png","../images/recurso_138.png"],"../images/recurso_138.png"],"_css_loader":"../../../../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"../styles/fase6.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');
module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./..\\images\\recurso_73.png":[["recurso_73.0ad2bcce.png","../images/recurso_73.png"],"../images/recurso_73.png"],"./..\\images\\recurso_165.png":[["recurso_165.573ecbb9.png","../images/recurso_165.png"],"../images/recurso_165.png"],"./..\\images\\recurso_160.png":[["recurso_160.cbb770e0.png","../images/recurso_160.png"],"../images/recurso_160.png"],"./..\\images\\recurso_174.png":[["recurso_174.cb3d77e2.png","../images/recurso_174.png"],"../images/recurso_174.png"],"_css_loader":"../../../../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"../styles/fase6-paso.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');
module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../../../../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"../styles/fase7.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');
module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./..\\images\\recurso_190.png":[["recurso_190.19353560.png","../images/recurso_190.png"],"../images/recurso_190.png"],"./..\\images\\recurso_208.png":[["recurso_208.133bafe9.png","../images/recurso_208.png"],"../images/recurso_208.png"],"./..\\images\\recurso_216.png":[["recurso_216.f865a5d7.png","../images/recurso_216.png"],"../images/recurso_216.png"],"./..\\images\\recurso_198.png":[["recurso_198.b0c4e2ea.png","../images/recurso_198.png"],"../images/recurso_198.png"],"_css_loader":"../../../../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"../styles/fase7-paso.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');
module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./..\\images\\recurso_201.png":[["recurso_201.3a2be584.png","../images/recurso_201.png"],"../images/recurso_201.png"],"./..\\images\\recurso_204.png":[["recurso_204.dfe94b50.png","../images/recurso_204.png"],"../images/recurso_204.png"],"./..\\images\\recurso_202.png":[["recurso_202.66565b89.png","../images/recurso_202.png"],"../images/recurso_202.png"],"./..\\images\\recurso_205.png":[["recurso_205.73af3311.png","../images/recurso_205.png"],"../images/recurso_205.png"],"_css_loader":"../../../../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"../styles/fase8.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');
module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./..\\images\\recurso_229.png":[["recurso_229.01d25726.png","../images/recurso_229.png"],"../images/recurso_229.png"],"./..\\images\\recurso_244.png":[["recurso_244.dafeb43b.png","../images/recurso_244.png"],"../images/recurso_244.png"],"./..\\images\\recurso_144.png":[["recurso_144.59b73b90.png","../images/recurso_144.png"],"../images/recurso_144.png"],"./..\\images\\recurso_238.png":[["recurso_238.f2b052e9.png","../images/recurso_238.png"],"../images/recurso_238.png"],"_css_loader":"../../../../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"../styles/fase8-tips.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');
module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../../../../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"../styles/nav-container.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');
module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./..\\images\\bg_main_slide.jpg":[["bg_main_slide.98b6aa61.jpg","../images/bg_main_slide.jpg"],"../images/bg_main_slide.jpg"],"_css_loader":"../../../../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"../styles/index.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');
module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"../styles/global.css":"../styles/global.css","../styles/bootstrap.min.css":"../styles/bootstrap.min.css","../styles/intro.css":"../styles/intro.css","../styles/intro-card.css":"../styles/intro-card.css","../styles/intro-route.css":"../styles/intro-route.css","../styles/fase-herramientas.css":"../styles/fase-herramientas.css","../styles/fase-post.css":"../styles/fase-post.css","../styles/fase1.css":"../styles/fase1.css","../styles/fase1-drag.css":"../styles/fase1-drag.css","../styles/fase1-tips.css":"../styles/fase1-tips.css","../styles/fase2.css":"../styles/fase2.css","../styles/fase3.css":"../styles/fase3.css","../styles/fase3-paso.css":"../styles/fase3-paso.css","../styles/fase4.css":"../styles/fase4.css","../styles/fase4-memoria.css":"../styles/fase4-memoria.css","../styles/fase5.css":"../styles/fase5.css","../styles/fase6.css":"../styles/fase6.css","../styles/fase6-paso.css":"../styles/fase6-paso.css","../styles/fase7.css":"../styles/fase7.css","../styles/fase7-paso.css":"../styles/fase7-paso.css","../styles/fase8.css":"../styles/fase8.css","../styles/fase8-tips.css":"../styles/fase8-tips.css","../styles/nav-container.css":"../styles/nav-container.css","_css_loader":"../../../../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"../../../../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}
module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "54426" + '/');
  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);
    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);
          if (didAccept) {
            handled = true;
          }
        }
      });

      // Enable HMR for CSS by default.
      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });
      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }
    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }
    if (data.type === 'error-resolved') {
      console.log('[parcel] ??? Error resolved');
      removeErrorOverlay();
    }
    if (data.type === 'error') {
      console.error('[parcel] ????  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}
function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">????</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}
function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}
function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }
}
},{}],"../../../../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;
function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }
  return bundleURL;
}
function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);
    if (matches) {
      return getBaseURL(matches[0]);
    }
  }
  return '/';
}
function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)?\/[^/]+(?:\?.*)?$/, '$1') + '/';
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"../../../../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/bundle-loader.js":[function(require,module,exports) {
var getBundleURL = require('./bundle-url').getBundleURL;
function loadBundlesLazy(bundles) {
  if (!Array.isArray(bundles)) {
    bundles = [bundles];
  }
  var id = bundles[bundles.length - 1];
  try {
    return Promise.resolve(require(id));
  } catch (err) {
    if (err.code === 'MODULE_NOT_FOUND') {
      return new LazyPromise(function (resolve, reject) {
        loadBundles(bundles.slice(0, -1)).then(function () {
          return require(id);
        }).then(resolve, reject);
      });
    }
    throw err;
  }
}
function loadBundles(bundles) {
  return Promise.all(bundles.map(loadBundle));
}
var bundleLoaders = {};
function registerBundleLoader(type, loader) {
  bundleLoaders[type] = loader;
}
module.exports = exports = loadBundlesLazy;
exports.load = loadBundles;
exports.register = registerBundleLoader;
var bundles = {};
function loadBundle(bundle) {
  var id;
  if (Array.isArray(bundle)) {
    id = bundle[1];
    bundle = bundle[0];
  }
  if (bundles[bundle]) {
    return bundles[bundle];
  }
  var type = (bundle.substring(bundle.lastIndexOf('.') + 1, bundle.length) || bundle).toLowerCase();
  var bundleLoader = bundleLoaders[type];
  if (bundleLoader) {
    return bundles[bundle] = bundleLoader(getBundleURL() + bundle).then(function (resolved) {
      if (resolved) {
        module.bundle.register(id, resolved);
      }
      return resolved;
    }).catch(function (e) {
      delete bundles[bundle];
      throw e;
    });
  }
}
function LazyPromise(executor) {
  this.executor = executor;
  this.promise = null;
}
LazyPromise.prototype.then = function (onSuccess, onError) {
  if (this.promise === null) this.promise = new Promise(this.executor);
  return this.promise.then(onSuccess, onError);
};
LazyPromise.prototype.catch = function (onError) {
  if (this.promise === null) this.promise = new Promise(this.executor);
  return this.promise.catch(onError);
};
},{"./bundle-url":"../../../../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"../../../../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/loaders/browser/js-loader.js":[function(require,module,exports) {
module.exports = function loadJSBundle(bundle) {
  return new Promise(function (resolve, reject) {
    var script = document.createElement('script');
    script.async = true;
    script.type = 'text/javascript';
    script.charset = 'utf-8';
    script.src = bundle;
    script.onerror = function (e) {
      script.onerror = script.onload = null;
      reject(e);
    };
    script.onload = function () {
      script.onerror = script.onload = null;
      resolve();
    };
    document.getElementsByTagName('head')[0].appendChild(script);
  });
};
},{}],0:[function(require,module,exports) {
var b=require("../../../../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/bundle-loader.js");b.register("js",require("../../../../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/loaders/browser/js-loader.js"));b.load([]);
},{}]},{},["../../../../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js",0], null)
//# sourceMappingURL=/styles.c20161f4.js.map