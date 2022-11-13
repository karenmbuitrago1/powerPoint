
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
  $("#girl__img").removeClass("principal");
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
  $("#girl__img").removeClass("principal");
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
    var text1_1 = 'Para dar alcance a este objetivo, indagó acciones adelantadas por 36 concesiones en el país para garantizar la participación comunitaria y la gestión social en el marco de la implementación de proyectos viales, identificando, entre otros, lecciones aprendidas y buenas prácticas.';
    var text1_2 = 'A partir de los hallazgos de esta exploración, surge la presente propuesta metodológica, estructurada en 8 fases, cuyo propósito central es proporcionar herramientas de co-construcción orientadas a promover la generación de una cultura vial';
    var text1_3 = 'basada en el respeto por la vida, a partir de la intervención participativa, integradora y pertinente, tanto de las concesiones, como de los actores sociales y comunitarios. ¡Sin más preámbulo, comencemos este recorrido!';
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
    var original2 = '¡Hola! Mi nombre es Manuel. Soy conductor de una ruta escolar que transita por esta zona. Aprovechando este encuentro, quiero contarte sobre la metodología que hemos venido implementando con otros actores viales, multisectoriales y comunitarios, para garantizar el cuidado de la vida en la vía.';    
    var text2 = 'Esta metodología tiene como propósito promover una cultura vial, a partir de la intervención no sólo de las concesiones, sino también de los actores sociales y comunitarios ¡Sí! Aquí todos aportamos.';
    var text2_2 = 'Partimos de identificar problemáticas y factores de riesgo que pueden afectar a las comunidades cuando se implementa un proyecto vial, pero también, de reconocer las capacidades que tienen todos sus integrantes para aportar un granito de arena que ayude a su prevención o solución. Todos participamos y tomamos decisiones pensando, no en nuestro bienestar individual, sino en el colectivo.';
    var text2_3 = 'Precisamente, porque reconocemos las capacidades de los miembros de la comunidad, generamos procesos de participación colectiva donde todos son bienvenidos, sin ningún tipo de discriminación o exclusión en razón de edad, sexo, género, condición social, pertenencia étnica, discapacidad, entre otros.';
    var text2_4 = 'Pero de eso sabe más Juanita, una de las estudiantes de once que también participa en el proyecto. Ahí viene cruzando la cebra para tomar el autobús ';
    var text2_5 = '¡Buenas tardes, Juanita! Estamos conversando un poco sobre el proyecto de seguridad vial. ¿Quieres acomodar las cosas en tu lugar y contarnos un poco al respecto?';
    var text2_6 = 'Claro que sí Don Manuel! Lo que a mí más me ha gustado de la metodología, es que todos participamos reconociendo nuestras diferencias. De hecho, tenía como tarea para hoy, construir algunos carteles para compartir ';
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
       }, 31000);
       setTimeout(function(){
          $('#change2').html(text2_3);
        }, 52000);
        setTimeout(function(){
          $('#change2').html(text2_4);
        }, 71000);
        setTimeout(function(){
          $('#change2').html(text2_5);
          $("#girl__img").addClass("principal");
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
        }, 71000);
        setTimeout(function(){
          $('#change2').html(text2_5);
          $("#girl__img").addClass("principal");          
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
    $("#girl__img").addClass("--invisible");
});

//Dialogos Boton Ruta
    $("#play_ruta").click(function(e) {

    var original3 = '¡Hola! Mi nombre es Javier. Soy docente. Al igual que Don Manuel y Juanita, he apoyado la construcción e implementación de la metodología para fortalecer una cultura vial. ';
    var text3 = 'a se encuentra estructurada en 8 fases que te presentaré a continuación. No olvides dar clic sobre cada una para descubrir cuál es su objetivo… ¡Comencemos! ';
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
    window.location.href = 'ruta.html'
});


})
