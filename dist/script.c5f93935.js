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
})({"../scripts/script.js":[function(require,module,exports) {
//active
$('.menu__listBtn').click(function () {
  if ($(this).hasClass('menu__listBtn_active')) {
    $('.menu__listBtn').removeClass('menu__listBtn_active');
  } else {
    $('.menu__listBtn').removeClass('menu__listBtn_active');
    $(this).addClass('menu__listBtn_active');
  }
});
function siguiente() {
  console.log("navega");
  if (document.getElementById("origin_next")) {
    document.getElementById("origin_next").addEventListener("click", btn_conoce, false);
  }
  if (document.getElementById("conoce_next")) {
    document.getElementById("conoce_next").addEventListener("click", btn_conoce2, false);
  }
  if (document.getElementById("conoce2_next")) {
    document.getElementById("conoce2_next").addEventListener("click", btn_ruta, false);
  }
  if (document.getElementById("ruta_next")) {
    window.location.href = 'ruta.html';
  }
}
function anterior() {
  console.log("navega");
  if (document.getElementById("origin_prev")) {
    document.getElementById("origin_prev").addEventListener("click", btn_origen, false);
  }
  if (document.getElementById("conoce_prev")) {
    document.getElementById("conoce_prev").addEventListener("click", btn_origen, false);
  }
  if (document.getElementById("conoce2_prev")) {
    document.getElementById("conoce2_prev").addEventListener("click", btn_conoce, false);
  }
  if (document.getElementById("ruta_prev")) {
    document.getElementById("ruta_prev").addEventListener("click", btn_conoce2, false);
  }
}
document.getElementById("btn_origen").addEventListener("click", btn_origen, false);
document.getElementById("btn_conoce").addEventListener("click", btn_conoce, false);
document.getElementById("btn_ruta").addEventListener("click", btn_ruta, false);

// Cambio de Botones
function btn_origen() {
  if (document.getElementById("origin_next")) {
    document.getElementById("origin_next").id = 'conoce_next';
  }
  if (document.getElementById("conoce_next")) {
    document.getElementById("conoce_next").id = 'conoce_next';
  }
  if (document.getElementById("conoce_prev")) {
    document.getElementById("conoce_prev").id = 'origin_prev';
    if (document.getElementById("conoce_next")) {
      document.getElementById("conoce_next").id = 'origin_next';
    }
  }
  $("#my_audio_conoce").trigger('pause');
  //$("#play_conoce").html('Reproducir Audio');
  $("#my_audio_ruta").trigger('pause');
  //$("#play_ruta").html('Reproducir Audio');
  $(".origen").removeClass("--invisible");
  $(".ruta").addClass("--invisible");
  $(".conoce").addClass("--invisible");
  $(".background").removeClass("--invisible");
  $(".--type002").addClass("--invisible");
  $(".dialog").removeClass("--invisible");
  $("#girl__img").removeClass("principal");
  var highestTimeoutId = setTimeout(";");
  for (var i = 0; i < highestTimeoutId; i++) {
    clearTimeout(i);
  }
}
function btn_conoce() {
  if (document.getElementById("origin_next")) {
    document.getElementById("origin_next").id = 'conoce_next';
  }
  if (document.getElementById("conoce2_next")) {
    document.getElementById("conoce2_next").id = 'conoce_next';
  }
  if (document.getElementById("origin_prev")) {
    document.getElementById("origin_prev").id = 'conoce_prev';
  }
  if (document.getElementById("conoce2_prev")) {
    document.getElementById("conoce2_prev").id = 'conoce_prev';
  }
  $("#my_audio").trigger('pause');
  //$("#play_origen").html('Reproducir Audio');
  $("#my_audio_ruta").trigger('pause');
  //$("#play_ruta").html('Reproducir Audio');
  $(".origen").addClass("--invisible");
  $(".ruta").addClass("--invisible");
  $(".conoce").removeClass("--invisible");
  $(".background").removeClass("--invisible");
  $(".--type002").addClass("--invisible");
  $(".dialog").removeClass("--invisible");
  $("#person2").removeClass("--invisible");
  $("#girl__img").removeClass("--invisible");
  var highestTimeoutId = setTimeout(";");
  for (var i = 0; i < highestTimeoutId; i++) {
    clearTimeout(i);
  }
}
function btn_conoce2() {
  if (document.getElementById("conoce_next")) {
    document.getElementById("conoce_next").id = 'conoce2_next';
  }
  if (document.getElementById("ruta_next")) {
    document.getElementById("ruta_next").id = 'conoce2_next';
  }
  if (document.getElementById("ruta_prev")) {
    document.getElementById("ruta_prev").id = 'conoce2_prev';
  }
  if (document.getElementById("conoce_prev")) {
    document.getElementById("conoce_prev").id = 'conoce2_prev';
  }
  $(".background").addClass("--invisible");
  $(".--type002").removeClass("--invisible");
  $(".dialog").addClass("--invisible");
  $("#person2").addClass("--invisible");
  $("#girl__img").addClass("--invisible");
}
function btn_ruta() {
  if (document.getElementById("conoce2_next")) {
    document.getElementById("conoce2_next").id = 'ruta_next';
  }
  if (document.getElementById("conoce2_prev")) {
    document.getElementById("conoce2_prev").id = 'ruta_prev';
  }
  $("#my_audio").trigger('pause');
  //$("#play_origen").html('Reproducir Audio');
  $("#my_audio_conoce").trigger('pause');
  //$("#play_conoce").html('Reproducir Audio');  
  $(".origen").addClass("--invisible");
  $(".conoce").addClass("--invisible");
  $(".ruta").removeClass("--invisible");
  $(".background").removeClass("--invisible");
  $(".--type002").addClass("--invisible");
  $(".dialog").removeClass("--invisible");
  $("#person3").removeClass("--invisible");
  $("#girl__img").removeClass("principal");
  var highestTimeoutId = setTimeout(";");
  for (var i = 0; i < highestTimeoutId; i++) {
    clearTimeout(i);
  }
}

//Audios y textos
$(function () {
  var is_playing;
  $("#play_origen").click(function (e) {
    var original = '¡Bienvenido a la Metodología de intervención basada en modelos de desarrollo comunitario para proyectos viales! Antes de iniciar, déjame contarte cómo nace esta iniciativa…';
    var text1 = 'Durante el año 2022, la Agencia Nacional de Seguridad Vial se propuso construir una Metodología de intervención comunitaria para fortalecer comportamientos viales.';
    var text1_1 = 'Para dar alcance a este objetivo, indagó acciones adelantadas por 36 concesiones en el país para garantizar la participación comunitaria y la gestión social en el marco de la implementación de proyectos viales, identificando, entre otros, lecciones aprendidas y buenas prácticas.';
    var text1_2 = 'A partir de los hallazgos de esta exploración, surge la presente propuesta metodológica, estructurada en 8 fases, cuyo propósito central es proporcionar herramientas de co-construcción orientadas a promover la generación de una cultura vial';
    var text1_3 = 'basada en el respeto por la vida, a partir de la intervención participativa, integradora y pertinente, tanto de las concesiones, como de los actores sociales y comunitarios. ¡Sin más preámbulo, comencemos este recorrido!';
    //$("#play_origen").html('Reproduciendo...');

    if (e.target.tagName !== "AUDIO") {
      if (is_playing) {
        $('#change').html(original);
        $('#my_audio')[0].load();
        $('#my_audio')[0].play();
        setTimeout(function () {
          $('#change').html(text1);
        }, 12000);
        setTimeout(function () {
          $('#change').html(text1_1);
        }, 21000);
        setTimeout(function () {
          $('#change').html(text1_2);
        }, 37000);
        setTimeout(function () {
          $('#change').html(text1_3);
        }, 51000);
        $('#change').html(original);
        is_playing = true;
      } else {
        $('#change').html(original);
        $('#my_audio')[0].load();
        $('#my_audio')[0].play();
        is_playing = true;
        setTimeout(function () {
          $('#change').html(text1);
        }, 11000);
        setTimeout(function () {
          $('#change').html(text1_1);
        }, 21000);
        setTimeout(function () {
          $('#change').html(text1_2);
        }, 37000);
        setTimeout(function () {
          $('#change').html(text1_3);
        }, 51000);
        $('#change').html(original);
      }
    } else {
      e.stopPropagtion();
    }
  });
  $("#my_audio").on("ended", function () {
    //$("#play_origen").html('Reproducir Audio');
  });
  $("#play_conoce").click(function (e) {
    var original2 = '¡Hola! Mi nombre es Manuel. Soy conductor de una ruta escolar que transita por esta zona. Aprovechando este encuentro, quiero contarte sobre la metodología que hemos venido implementando con otros actores viales, multisectoriales y comunitarios, para garantizar el cuidado de la vida en la vía.';
    var text2 = 'Esta metodología tiene como propósito promover una cultura vial, a partir de la intervención no sólo de las concesiones, sino también de los actores sociales y comunitarios ¡Sí! Aquí todos aportamos.';
    var text2_2 = 'Partimos de identificar problemáticas y factores de riesgo que pueden afectar a las comunidades cuando se implementa un proyecto vial, pero también, de reconocer las capacidades que tienen todos sus integrantes para aportar un granito de arena que ayude a su prevención o solución. Todos participamos y tomamos decisiones pensando, no en nuestro bienestar individual, sino en el colectivo.';
    var text2_3 = 'Precisamente, porque reconocemos las capacidades de los miembros de la comunidad, generamos procesos de participación colectiva donde todos son bienvenidos, sin ningún tipo de discriminación o exclusión en razón de edad, sexo, género, condición social, pertenencia étnica, discapacidad, entre otros.';
    var text2_4 = 'Pero de eso sabe más Juanita, una de las estudiantes de once que también participa en el proyecto. Ahí viene cruzando la cebra para tomar el autobús ';
    var text2_5 = '¡Buenas tardes, Juanita! Estamos conversando un poco sobre el proyecto de seguridad vial. ¿Quieres acomodar las cosas en tu lugar y contarnos un poco al respecto?';
    var text2_6 = 'Claro que sí Don Manuel! Lo que a mí más me ha gustado de la metodología, es que todos participamos reconociendo nuestras diferencias. De hecho, tenía como tarea para hoy, construir algunos carteles para compartir ';
    var text2_7 = 'con mis compañeros los factores diferenciales que contenga nuestra metodología. ¡Acompáñame a verlos! No olvides dar clic sobre cada uno, para descubrir en qué consisten…';
    //$("#play_conoce").html('Reproduciendo...');

    if (e.target.tagName !== "AUDIO") {
      if (is_playing) {
        $('#my_audio_conoce')[0].load();
        $('#my_audio_conoce')[0].play();
        $('#change2').html(original2);
        setTimeout(function () {
          $('#change2').html(text2);
        }, 19000);
        setTimeout(function () {
          $('#change2').html(text2_2);
        }, 31000);
        setTimeout(function () {
          $('#change2').html(text2_3);
        }, 52000);
        setTimeout(function () {
          $('#change2').html(text2_4);
        }, 71000);
        setTimeout(function () {
          $('#change2').html(text2_5);
          $("#girl__img").addClass("principal");
        }, 80000);
        setTimeout(function () {
          $('#change2').html(text2_6);
        }, 90000);
        setTimeout(function () {
          $('#change2').html(text2_7);
        }, 102000);
        $('#change2').html(original2);
      } else {
        $('#my_audio_conoce')[0].load();
        $('#my_audio_conoce')[0].play();
        is_playing = true;
        $('#change2').html(original2);
        setTimeout(function () {
          $('#change2').html(text2);
        }, 19000);
        setTimeout(function () {
          $('#change2').html(text2_2);
        }, 32000);
        setTimeout(function () {
          $('#change2').html(text2_3);
        }, 53000);
        setTimeout(function () {
          $('#change2').html(text2_4);
        }, 71000);
        setTimeout(function () {
          $('#change2').html(text2_5);
          $("#girl__img").addClass("principal");
        }, 80000);
        setTimeout(function () {
          $('#change2').html(text2_6);
        }, 90000);
        setTimeout(function () {
          $('#change2').html(text2_7);
        }, 102000);
        $('#change2').html(original2);
      }
    } else {
      e.stopPropagtion();
    }
  });
  $("#my_audio_conoce").on("ended", function () {
    //$("#play_conoce").html('Reproducir Audio');
    $(".background").addClass("--invisible");
    $(".--type002").removeClass("--invisible");
    $(".dialog").addClass("--invisible");
    $("#person2").addClass("--invisible");
    $("#girl__img").addClass("--invisible");
  });

  //Dialogos Boton Ruta
  $("#play_ruta").click(function (e) {
    var original3 = '¡Hola! Mi nombre es Javier. Soy docente. Al igual que Don Manuel y Juanita, he apoyado la construcción e implementación de la metodología para fortalecer una cultura vial. ';
    var text3 = 'Esta se encuentra estructurada en 8 fases que te presentaré a continuación. No olvides dar clic sobre cada una para descubrir cuál es su objetivo… ¡Comencemos! ';
    //$("#play_ruta").html('Reproduciendo...');

    if (e.target.tagName !== "AUDIO") {
      if (is_playing) {
        $('#my_audio_ruta')[0].load();
        $('#my_audio_ruta')[0].play();
        $('#change3').html(original3);
        setTimeout(function () {
          $('#change3').html(text3);
        }, 13000);
        $('#change3').html(original3);
      } else {
        $('#my_audio_ruta')[0].load();
        $('#my_audio_ruta')[0].play();
        is_playing = true;
        $('#change3').html(original3);
        setTimeout(function () {
          $('#change3').html(text3);
        }, 12000);
      }
    } else {
      e.stopPropagtion();
    }
  });
  $("#my_audio_ruta").on("ended", function () {
    //$("#play_ruta").html('Reproducir Audio');
    window.location.href = 'ruta.html';
  });
});
},{}],"../../../../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "51070" + '/');
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
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }
    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
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
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
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
},{}]},{},["../../../../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","../scripts/script.js"], null)
//# sourceMappingURL=/script.c5f93935.js.map