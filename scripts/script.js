
//active
$('.menu__listBtn').click(function(){
    if($(this).hasClass('menu__listBtn_active')){
        $('.menu__listBtn').removeClass('menu__listBtn_active')
    } else {
        $('.menu__listBtn').removeClass('menu__listBtn_active')
        $(this).addClass('menu__listBtn_active')
    }
});

function siguiente(){
  console.log("navega");
  if (document.getElementById("origin_next")) {
  document.getElementById ("origin_next").addEventListener ("click", btn_conoce, false);}
  if (document.getElementById("conoce_next")) {
  document.getElementById ("conoce_next").addEventListener ("click", btn_conoce2, false);}
  if (document.getElementById("conoce2_next")) {
    document.getElementById ("conoce2_next").addEventListener ("click", btn_ruta, false);}
  if (document.getElementById("ruta_next")) {
    window.location.href = 'ruta.html'
  }
}

function anterior(){
  console.log("navega");
  if (document.getElementById("origin_prev")) {
    document.getElementById ("origin_prev").addEventListener ("click", btn_origen, false);}
  if (document.getElementById("conoce_prev")) {
  document.getElementById ("conoce_prev").addEventListener ("click", btn_origen, false);}
  if (document.getElementById("conoce2_prev")) {
    document.getElementById ("conoce2_prev").addEventListener ("click", btn_conoce, false);}
  if (document.getElementById("ruta_prev")) {
    document.getElementById ("ruta_prev").addEventListener ("click", btn_conoce2, false);}
  
}


document.getElementById ("btn_origen").addEventListener ("click", btn_origen, false);
document.getElementById ("btn_conoce").addEventListener ("click", btn_conoce, false);
document.getElementById ("btn_ruta").addEventListener ("click", btn_ruta, false);

// Cambio de Botones
function btn_origen(){
  if (document.getElementById("origin_next")) {
  document.getElementById("origin_next").id = 'conoce_next';}
  if (document.getElementById("conoce_next")) {
    document.getElementById("conoce_next").id = 'conoce_next';}
  if (document.getElementById("conoce_prev")) {
    document.getElementById("conoce_prev").id = 'origin_prev';
    if (document.getElementById("conoce_next")) {
      document.getElementById("conoce_next").id = 'origin_next';}
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
  for (var i = 0 ; i < highestTimeoutId ; i++) {
      clearTimeout(i); 
  }
  }
function btn_conoce(){
  if (document.getElementById("origin_next")) {
    document.getElementById("origin_next").id = 'conoce_next';}
    if (document.getElementById("conoce2_next")) {
      document.getElementById("conoce2_next").id = 'conoce_next';}
    if (document.getElementById("origin_prev")) {
      document.getElementById("origin_prev").id = 'conoce_prev';}
      if (document.getElementById("conoce2_prev")) {
        document.getElementById("conoce2_prev").id = 'conoce_prev';}
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
  for (var i = 0 ; i < highestTimeoutId ; i++) {
      clearTimeout(i); 
  } 
}
function btn_conoce2(){
  if (document.getElementById("conoce_next")) {
    document.getElementById("conoce_next").id = 'conoce2_next';}
    if (document.getElementById("ruta_next")) {
      document.getElementById("ruta_next").id = 'conoce2_next';}
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
function btn_ruta(){
  if (document.getElementById("conoce2_next")) {
    document.getElementById("conoce2_next").id = 'ruta_next';}
    if (document.getElementById("conoce2_prev")) {
      document.getElementById("conoce2_prev").id = 'ruta_prev';}
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
  for (var i = 0 ; i < highestTimeoutId ; i++) {
      clearTimeout(i); 
  }
}

//Audios y textos
$(function() {
  var is_playing;
  
  $("#play_origen").click(function(e) {
    var original = '??Bienvenido a la Metodolog??a de intervenci??n basada en modelos de desarrollo comunitario para proyectos viales! Antes de iniciar, d??jame contarte c??mo nace esta iniciativa???';
    var text1 = 'Durante el a??o 2022, la Agencia Nacional de Seguridad Vial se propuso construir una Metodolog??a de intervenci??n comunitaria para fortalecer comportamientos viales.';
    var text1_1 = 'Para dar alcance a este objetivo, indag?? acciones adelantadas por 36 concesiones en el pa??s para garantizar la participaci??n comunitaria y la gesti??n social en el marco de la implementaci??n de proyectos viales, identificando, entre otros, lecciones aprendidas y buenas pr??cticas.';
    var text1_2 = 'A partir de los hallazgos de esta exploraci??n, surge la presente propuesta metodol??gica, estructurada en 8 fases, cuyo prop??sito central es proporcionar herramientas de co-construcci??n orientadas a promover la generaci??n de una cultura vial';
    var text1_3 = 'basada en el respeto por la vida, a partir de la intervenci??n participativa, integradora y pertinente, tanto de las concesiones, como de los actores sociales y comunitarios. ??Sin m??s pre??mbulo, comencemos este recorrido!';
    //$("#play_origen").html('Reproduciendo...');

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
    //$("#play_origen").html('Reproducir Audio');
});

    $("#play_conoce").click(function(e) {
    var original2 = '??Hola! Mi nombre es Manuel. Soy conductor de una ruta escolar que transita por esta zona. Aprovechando este encuentro, quiero contarte sobre la metodolog??a que hemos venido implementando con otros actores viales, multisectoriales y comunitarios, para garantizar el cuidado de la vida en la v??a.';    
    var text2 = 'Esta metodolog??a tiene como prop??sito promover una cultura vial, a partir de la intervenci??n no s??lo de las concesiones, sino tambi??n de los actores sociales y comunitarios ??S??! Aqu?? todos aportamos.';
    var text2_2 = 'Partimos de identificar problem??ticas y factores de riesgo que pueden afectar a las comunidades cuando se implementa un proyecto vial, pero tambi??n, de reconocer las capacidades que tienen todos sus integrantes para aportar un granito de arena que ayude a su prevenci??n o soluci??n. Todos participamos y tomamos decisiones pensando, no en nuestro bienestar individual, sino en el colectivo.';
    var text2_3 = 'Precisamente, porque reconocemos las capacidades de los miembros de la comunidad, generamos procesos de participaci??n colectiva donde todos son bienvenidos, sin ning??n tipo de discriminaci??n o exclusi??n en raz??n de edad, sexo, g??nero, condici??n social, pertenencia ??tnica, discapacidad, entre otros.';
    var text2_4 = 'Pero de eso sabe m??s Juanita, una de las estudiantes de once que tambi??n participa en el proyecto. Ah?? viene cruzando la cebra para tomar el autob??s ';
    var text2_5 = '??Buenas tardes, Juanita! Estamos conversando un poco sobre el proyecto de seguridad vial. ??Quieres acomodar las cosas en tu lugar y contarnos un poco al respecto?';
    var text2_6 = 'Claro que s?? Don Manuel! Lo que a m?? m??s me ha gustado de la metodolog??a, es que todos participamos reconociendo nuestras diferencias. De hecho, ten??a como tarea para hoy, construir algunos carteles para compartir ';
    var text2_7 = 'con mis compa??eros los factores diferenciales que contempla nuestra metodolog??a. ??Acomp????ame a verlos! No olvides dar clic sobre cada uno, para descubrir en qu?? consisten???';
    //$("#play_conoce").html('Reproduciendo...');


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
    //$("#play_conoce").html('Reproducir Audio');
    $(".background").addClass("--invisible");
    $(".--type002").removeClass("--invisible");
    $(".dialog").addClass("--invisible");
    $("#person2").addClass("--invisible");
    $("#girl__img").addClass("--invisible");
});

//Dialogos Boton Ruta
    $("#play_ruta").click(function(e) {

    var original3 = '??Hola! Mi nombre es Javier. Soy docente. Al igual que Don Manuel y Juanita, he apoyado la construcci??n e implementaci??n de la metodolog??a para fortalecer una cultura vial. ';
    var text3 = 'Esta se encuentra estructurada en 8 fases que te presentar?? a continuaci??n. No olvides dar clic sobre cada una para descubrir cu??l es su objetivo??? ??Comencemos! ';
    //$("#play_ruta").html('Reproduciendo...');

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
    //$("#play_ruta").html('Reproducir Audio');
    window.location.href = 'ruta.html'
});


})
