
//active
$('.menu__listBtn').click(function(){
    if($(this).hasClass('menu__listBtn_active')){
        $('.menu__listBtn').removeClass('menu__listBtn_active')
    } else {
        $('.menu__listBtn').removeClass('menu__listBtn_active')
        $(this).addClass('menu__listBtn_active')
    }
});


document.getElementById ("btn_origen").addEventListener ("click", btn_origen, false);
document.getElementById ("btn_conoce").addEventListener ("click", btn_conoce, false);
document.getElementById ("btn_ruta").addEventListener ("click", btn_ruta, false);

// Cambio de Botones
function btn_origen(){
  $("#my_audio_conoce").trigger('pause');
  $("#play_conoce").html('Reproducir Audio');
  $("#my_audio_ruta").trigger('pause');
  $("#play_ruta").html('Reproducir Audio');
  $(".origen").removeClass("--invisible");
  $(".ruta").addClass("--invisible");
  $(".conoce").addClass("--invisible"); 
  $(".background").removeClass("--invisible");
  $(".--type002").addClass("--invisible");
  $(".dialog").removeClass("--invisible");
  var highestTimeoutId = setTimeout(";");
  for (var i = 0 ; i < highestTimeoutId ; i++) {
      clearTimeout(i); 
  }
  }
function btn_conoce(){
  $("#my_audio").trigger('pause');
  $("#play_origen").html('Reproducir Audio');
  $("#my_audio_ruta").trigger('pause');
  $("#play_ruta").html('Reproducir Audio');
  $(".origen").addClass("--invisible");
  $(".ruta").addClass("--invisible");
  $(".conoce").removeClass("--invisible"); 
  $(".background").removeClass("--invisible");
  $(".--type002").addClass("--invisible");
  $(".dialog").removeClass("--invisible");
  $("#person2").removeClass("--invisible"); 
  var highestTimeoutId = setTimeout(";");
  for (var i = 0 ; i < highestTimeoutId ; i++) {
      clearTimeout(i); 
  } 
}
function btn_ruta(){
  $("#my_audio").trigger('pause');
  $("#play_origen").html('Reproducir Audio');
  $("#my_audio_conoce").trigger('pause');
  $("#play_conoce").html('Reproducir Audio');  
  $(".origen").addClass("--invisible");
  $(".conoce").addClass("--invisible"); 
  $(".ruta").removeClass("--invisible");
  $(".background").removeClass("--invisible");
  $(".--type002").addClass("--invisible");  
  $(".dialog").removeClass("--invisible");
  $("#person3").removeClass("--invisible");  
  var highestTimeoutId = setTimeout(";");
  for (var i = 0 ; i < highestTimeoutId ; i++) {
      clearTimeout(i); 
  }
}
//Audios y textos
$(function() {
  var is_playing;
  
  $("#play_origen").click(function(e) {
    var original = '¡Bienvenido a la Metodología de intervención basada en modelos de desarrollo comunitario para proyectos viales! Antes de iniciar, déjame contarte cómo nace esta iniciativa…';
    var text1 = 'Durante el año 2022, la Agencia Nacional de Seguridad Vial se propuso construir una Metodología de intervención comunitaria para fortalecer comportamientos viales.';
    var text1_1 = 'Para dar alcance a este objetivo, indagó acciones adelantadas por 36 concesiónes en el país para garantizar la participación comunitaria y la gestión social en el marco de la implementación de proyectos viales, identificando, entre otros, lecciones aprendidas y buenas prácticas.';
    var text1_2 = 'A partir de los hallazgos de esta exploración, surge la presente propuesta metodológica, estructurada en 8 fases, cuyo propósito central es proporcionar herramientas de co-construcción orientadas a promover la generación de una cultura vial';
    var text1_3 = 'Basada en el respeto por la vida, a partir de la intervención participativa, integradora y pertinente, tanto de las concesiones, como de los actores sociales y comunitarios. ¡Sin más preámbulo, comencemos este recorrido!';
    $("#play_origen").html('Reproduciendo...');

    if(e.target.tagName !== "AUDIO") {
    if (is_playing) {
      $('#change').html(original);
      $('#my_audio')[0].load();
      $('#my_audio')[0].play();
 
       setTimeout(function(){
           $('#change').html(text1);
       }, 12000);
       setTimeout(function(){
           $('#change').html(text1_1);
       }, 21000);
       setTimeout(function(){
           $('#change').html(text1_2);
       }, 37000);
       setTimeout(function(){
        $('#change').html(text1_3);
    }, 51000);
       $('#change').html(original);
             is_playing = true;

    } else {
      $('#change').html(original);
      $('#my_audio')[0].load();
      $('#my_audio')[0].play();
      is_playing = true;
      setTimeout(function(){
        $('#change').html(text1);
    }, 11000);
    setTimeout(function(){
        $('#change').html(text1_1);
    }, 21000);
    setTimeout(function(){
        $('#change').html(text1_2);
    }, 37000);
    setTimeout(function(){
     $('#change').html(text1_3);
    }, 51000);
    $('#change').html(original);      
    }
    } else {
      e.stopPropagtion()
    }
  });
  $("#my_audio").on("ended", function() {
    $("#play_origen").html('Reproducir Audio');
});

    $("#play_conoce").click(function(e) {
    var original2 = '¡Hola! Mi nombre es Manuel. Soy conductor de una ruta escolar que transita por esta zona. Aprovechando este encuentro, quiero contarte sobre la metodología que hemos venido implementando con otros actores viales, multisectoriales y comunitarios, para garantizar el cuidado de la vida en la vía';    
    var text2 = 'Esta metodología tiene como propósito promover la cultura vial, a partir de la participación, la integración y el empoderamiento de actores sociales, tanto comunitarios como, institucionales. ¡Sí! Aquí todos aportamos, por eso, hoy estamos acá las y los integrantes del Comité Comunitario y Multisectorial, te acompañaremos a conocer cada fase de la metodología';
    var text2_2 = 'Partimos de identificar factores de riesgo y problemáticas que pueden afectar a las comunidades cuando se implementa un proyecto vial, pero también, de reconocer las capacidades que tienen todos sus integrantes para aportar en su prevención, reducción de impacto o solución. Todas las personas participamos y tomamos decisiones pensando, no sólo en nuestro bienestar individual, sino principalmente, en el colectivo.';
    var text2_3 = 'Precisamente, porque reconocemos las capacidades de los miembros de la comunidad, generamos procesos colectivos de participación en los que todas las personas son bienvenidas, sin ningún tipo de discriminación o exclusión en razón de edad, sexo, género, condición social, pertenencia étnica, discapacidad, entre otros. Pero de eso...';
    var text2_4 = 'sabe más Juanita, una de las estudiantes de once que también participa en el proyecto. Ahí viene cruzando la cebra para tomar el autobús… (Sonido de freno de carro)';
    var text2_5 = '¡Buenas tardes, Juanita! Estamos conversando un poco sobre el proyecto de seguridad vial en el que participas con tu comunidad. ¿Quieres acomodar las cosas en tu lugar y contarnos un poco al respecto?';
    var text2_6 = '¡Claro que sí Don Manuel! Lo que a mí más me ha gustado de la metodología, es que todos participamos reconociendo nuestras diferencias. De hecho, tenía como tarea para hoy, construir algunos carteles para compartir ...';
    var text2_7 = 'con mis compañeros cómo, con esta metodología nos hemos comprometido a promover la integración de todas las personas. ¡Acompáñame a verlos! No olvides dar clic sobre cada uno, para descubrir en qué consisten…';
    $("#play_conoce").html('Reproduciendo...');


    if(e.target.tagName !== "AUDIO") {
    if (is_playing) {
      $('#my_audio_conoce')[0].load();
      $('#my_audio_conoce')[0].play();
      $('#change2').html(original2);       
       setTimeout(function(){
           $('#change2').html(text2);
       }, 19000);
       setTimeout(function(){
           $('#change2').html(text2_2);
       }, 32000);
       setTimeout(function(){
          $('#change2').html(text2_3);
        }, 53000);
        setTimeout(function(){
          $('#change2').html(text2_4);
        }, 72000);
        setTimeout(function(){
          $('#change2').html(text2_5);
        }, 80000);   
        setTimeout(function(){
          $('#change2').html(text2_6);
        }, 90000);   
        setTimeout(function(){
          $('#change2').html(text2_7);
        }, 102000);                    
        $('#change2').html(original2);
    } else {
      $('#my_audio_conoce')[0].load();
      $('#my_audio_conoce')[0].play();
      is_playing = true;

      $('#change2').html(original2);       
       setTimeout(function(){
           $('#change2').html(text2);
       }, 19000);
       setTimeout(function(){
           $('#change2').html(text2_2);
        }, 32000);
       setTimeout(function(){
        $('#change2').html(text2_3);
        }, 53000);
        setTimeout(function(){
          $('#change2').html(text2_4);
        }, 73000);
        setTimeout(function(){
          $('#change2').html(text2_5);
        }, 80000);   
        setTimeout(function(){
          $('#change2').html(text2_6);
        }, 90000);   
        setTimeout(function(){
            $('#change2').html(text2_7);
        }, 102000);                    
        $('#change2').html(original2);
    }
    } else {
      e.stopPropagtion()
    }


  });
$("#my_audio_conoce").on("ended", function() {
    $("#play_conoce").html('Reproducir Audio');
    $(".background").addClass("--invisible");
    $(".--type002").removeClass("--invisible");
    $(".dialog").addClass("--invisible");
    $("#person2").addClass("--invisible");
});

//Dialogos Boton Ruta
    $("#play_ruta").click(function(e) {

    var original3 = '¡Hola! Mi nombre es Javier. Soy docente. Al igual que Don Manuel y Juanita, he apoyado la conformación e implementación de los Comités Comunitarios y Multisectoriales para fortalecer una cultura vial';
    var text3 = 'Esta metodología se encuentra estructurada en 8 fases que te presentaré a continuación. No olvides dar clic sobre cada una para descubrir cuál es su objetivo… ¡Comencemos!';
    $("#play_ruta").html('Reproduciendo...');

    if(e.target.tagName !== "AUDIO") {
    if (is_playing) {
      $('#my_audio_ruta')[0].load();
      $('#my_audio_ruta')[0].play();
      
      $('#change3').html(original3);       
       setTimeout(function(){
           $('#change3').html(text3);
       }, 13000);
       $('#change3').html(original3);
    } else {
      $('#my_audio_ruta')[0].load();
      $('#my_audio_ruta')[0].play();
      is_playing = true;
       $('#change3').html(original3);
       setTimeout(function(){
           $('#change3').html(text3);
       }, 12000);
    }
    } else {
      e.stopPropagtion()
    }


  });
$("#my_audio_ruta").on("ended", function() {
    $("#play_ruta").html('Reproducir Audio');
    window.location.href = 'fases.html'
});


})


//Juegos de Arrastre
document.addEventListener('DOMContentLoaded', (event) => {
const draggableListItems = document.querySelectorAll('.draggable-list li');
const endMessage = document.getElementById('endMessage');

// current phrase being dragged
let selectedId;

// target phrase
let dropTargetId;

// counter for correct phrases
let matchingCounter = 0;

addEventListeners();

function dragStart() {
  selectedId = this.id;
}

function dragEnter() {
  this.classList.add('over');
}

function dragLeave() {
  this.classList.remove('over');
}

function dragOver(ev) {
  ev.preventDefault();
}

function dragDrop() {
  dropTargetId = this.id;

  if (checkForMatch(selectedId, dropTargetId)) {
    document.getElementById(selectedId).style.display = 'none';
    document.getElementById(dropTargetId).style.display = 'none';
    matchingCounter++;
  } else if (checkForMatch2(selectedId, dropTargetId)) {
    document.getElementById(selectedId).style.display = 'none';
    document.getElementById(dropTargetId).style.display = 'none';
    matchingCounter++;
  }

  if (matchingCounter === 4) {
    endMessage.style.display = 'block';
  }

  this.classList.remove('over');
}

function checkForMatch(selected, dropTarget) {
  switch (selected) {
    case 'e1':
      return dropTarget === 's1' ? true : false;

    case 'e2':
      return dropTarget === 's2' ? true : false;

    case 'e3':
      return dropTarget === 's3' ? true : false;

    case 'e4':
      return dropTarget === 's4' ? true : false;

    default:
      return false;
  }
}

function checkForMatch2(selected, dropTarget) {
  switch (selected) {
    case 's1':
      return dropTarget === 'e1' ? true : false;

    case 's2':
      return dropTarget === 'e2' ? true : false;

    case 's3':
      return dropTarget === 'e3' ? true : false;

    case 's4':
      return dropTarget === 'e4' ? true : false;

    default:
      return false;
  }
}

function playAgain() {
  matchingCounter = 0;
  endMessage.style.display = 'none';
  draggableListItems.forEach(item => {
    document.getElementById(item.id).style.display = 'block';
  })
}

function addEventListeners() {
  draggableListItems.forEach (item => {
    item.addEventListener('dragstart', dragStart);
    item.addEventListener('dragenter', dragEnter);
    item.addEventListener('drop', dragDrop);
    item.addEventListener('dragover', dragOver);
    item.addEventListener('dragleave', dragLeave);
  })
}
});