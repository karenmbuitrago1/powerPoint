//active
$('.phase__text').click(function () {
	if ($(this).hasClass('phase__text_active')) {
		$('.phase__text').removeClass('phase__text_active')
	} else {
		$('.phase__text').removeClass('phase__text_active')
		$(this).addClass('phase__text_active')
	}
});

document.getElementById("btn_obj_f2").addEventListener("click", btn_obj_f2, false);
document.getElementById("btn_pas_f2").addEventListener("click", btn_pas_f2, false);
document.getElementById("btn_her_f2").addEventListener("click", btn_her_f2, false);
document.getElementById("btn_tip_f2").addEventListener("click", btn_tip_f2, false);

// Acciones botones objetivo
function btn_obj_f2() {

	// Audio
	$("#my_audio_f2").trigger('pause');
	$("#play_f2_bienvenida").html('Reproducir Audio');

	// Personas hablantes y dialogos
	$(".obj_f2").removeClass("--invisible");
	$(".herr_f2").addClass("--invisible");
	$(".tip_f2").addClass("--invisible");

	$("#person6").addClass("--invisible");
	$("#person7").addClass("--invisible");
	$("#person9").addClass("--invisible");
	$("#person5").removeClass("--invisible");
    $("#person10").addClass("--invisible");
	$("#person11").addClass("--invisible");

	// Contenidos por pantalla
	$(".--pas_fase2").addClass("--invisible");
	$(".--pas_2_fase2").addClass("--invisible");
	$(".--her_fase2").addClass("--invisible");
	$(".--obj_fase2_postits").addClass("--invisible");
	$(".--tip_fase2").addClass("--invisible");

	// background por pantalla
	$(".background").removeClass("--pas_fase2")
		.removeClass("--obj_fase2_postits")
		.removeClass("--her_fase2")
		.removeClass("--tip_fase2");
	$(".background").removeClass("--invisible").addClass("--type006");
	$(".background__image").removeClass("--invisible");
	$(".--pas_phase2").addClass("--invisible");


	var highestTimeoutId = setTimeout(";");
	for (var i = 0; i < highestTimeoutId; i++) {
		clearTimeout(i);
	}
}

function btn_pas_f2() {
	$("#my_audio_f2_1").trigger('pause');
	$("#play_paso_f2").html('Reproducir Audio');

	// Personas hablantes y dialogos
	$("#person5").addClass("--invisible");
	$("#person6").removeClass("--invisible");
	$("#person7").removeClass("--invisible");
	$("#person9").removeClass("--invisible");
    $("#person10").addClass("--invisible");
	$("#person11").addClass("--invisible");
	$(".obj_f2").addClass("--invisible");
	$(".herr_f2").addClass("--invisible");

	//contenidos por pantalla
	$(".--pas_fase2").removeClass("--invisible");
	$(".--obj_fase2_postits").addClass("--invisible");
	$(".--pas_2_fase2").addClass("--invisible");
	$(".--her_fase2").addClass("--invisible");
	$(".--tip_fase2").addClass("--invisible");

	// background por pantalla
	$(".background").removeClass("--obj_fase2_postits")
		.removeClass("--her_fase2")
		.removeClass("--tip_fase2");
	$(".background").removeClass("--invisible").addClass("--type006");
	$(".background__image").removeClass("--invisible");


	var highestTimeoutId = setTimeout(";");
	for (var i = 0; i < highestTimeoutId; i++) {
		clearTimeout(i);
	}
}
function btn_her_f2() {
	$("#my_audio_f2_1").trigger('pause');
	$("#my_audio_f2").trigger('pause');

	$(".--pas_fase2").addClass("--invisible");
	$("#person5").addClass("--invisible");
	$("#person6").addClass("--invisible");
	$("#person7").addClass("--invisible");
	$("#person9").addClass("--invisible");
	$("#person10").addClass("--invisible");
	$("#person11").addClass("--invisible");
	$(".obj_f2").addClass("--invisible");

	$(".--pas_2_fase2").addClass("--invisible");
	$(".--her_fase2").removeClass("--invisible");
	$(".--obj_fase2_postits").addClass("--invisible");
	$(".--tip_fase2").addClass("--invisible");

	// background por pantalla
	$(".background").removeClass("--type006")
		.removeClass("--obj_fase2_postits")
		.removeClass("--pas_fase2")
		.removeClass("--tip_fase2");
	$(".background").removeClass("--invisible").addClass("--her_fase2");
	$(".background__image").addClass("--invisible");

	var highestTimeoutId = setTimeout(";");
	for (var i = 0; i < highestTimeoutId; i++) {
		clearTimeout(i);
	}
}
function btn_tip_f2() {
	$("#my_audio_f2_1").trigger('pause');
	$("#my_audio_f2").trigger('pause');

	$(".--pas_fase2").addClass("--invisible");

	$("#person5").addClass("--invisible");
	$("#person6").addClass("--invisible");
	$("#person7").addClass("--invisible");
	$("#person9").addClass("--invisible");
	$("#person10").removeClass("--invisible");
	$("#person11").removeClass("--invisible");

	$(".obj_f2").addClass("--invisible");
	$(".herr_f2").addClass("--invisible");
	$(".tip_f2").addClass("--invisible");

	$(".--pas_2_fase2").addClass("--invisible");
	$(".--her_fase2").addClass("--invisible");
	$(".--obj_fase2_postits").addClass("--invisible");
	$(".--tip_fase2").removeClass("--invisible");

	// background por pantalla
	$(".background").removeClass("--type006")
		.removeClass("--obj_fase2_postits")
		.removeClass("--pas_fase2")
		.removeClass("--her_fase2");
	$(".background").removeClass("--invisible").addClass("--tip_fase2");
	$(".background__image").addClass("--invisible");

	var highestTimeoutId = setTimeout(";");
	for (var i = 0; i < highestTimeoutId; i++) {
		clearTimeout(i);
	}
}

//Audios y textos
$(function() {
    var is_playing;
    
    $("#play_f2_bienvenida").click(function(e) {
      var original = 'Me alegra que estén tan participativos hoy, pero vamos a pedir la palabra. De esta forma, garantizamos que todos nos escuchemos por igual. Para continuar, quiero presentar la segunda fase, denominada ¡La vida en la vía, un asunto de todos!';
      var text1 = 'Esta fase tiene como propósito identificar los actores clave que, dentro de nuestra comunidad y en los diferentes sectores que en ella intervienen, pueden aportar de manera positiva en la implementación de nuestra metodología, favoreciendo la apropiación local y promoviendo la seguridad vial.';
      var text1_1 = 'La Junta de Acción Comunal ha preparado algunas notas adhesivas, con datos importantes que debemos tener en cuenta en esta segunda fase. Ahora, los dejo con Juan y Margarita, que les van a presentar el paso a paso a seguir.';
      
      $("#play_f2_bienvenida").html('Reproduciendo...');
  
      if(e.target.tagName !== "AUDIO") {
      if (is_playing) {
        $('#change_f2_1').html(original);
        $('#my_audio_f2_1')[0].load();
        $('#my_audio_f2_1')[0].play();
   
         setTimeout(function(){
             $('#change_f2_1').html(text1);
         }, 16000);
         setTimeout(function(){
             $('#change_f2_1').html(text1_1);
         }, 32000);
         $('#change_f2_1').html(original);
               is_playing = true;
  
      } else {
        $('#change_f2_1').html(original);
        $('#my_audio_f2_1')[0].load();
        $('#my_audio_f2_1')[0].play();
        is_playing = true;
        setTimeout(function(){
            $('#change_f2_1').html(text1);
        }, 16000);
        setTimeout(function(){
            $('#change_f2_1').html(text1_1);
        }, 32000);
        $('#change_f2_1').html(original);
              is_playing = true;
    }
      } else {
        e.stopPropagtion()
      }
    });
    $("#my_audio_f2_1").on("ended", function() {
      $("#play_f2_bienvenida").html('Reproducir Audio');
      $(".--obj_fase2_postits").removeClass("--invisible");
      $(".--type006").addClass("--invisible");
      $(".obj_f2").addClass("--invisible");
      $(".--obj_fase2").addClass("--invisible");
      $(".background").addClass("--type005");

  });

  $("#play_paso_f2").click(function(e) {
    var original = '¡Buenos días para todos! Para los que no me conocen yo soy Juan. Vendo jugos de naranja y fruta en las mañanas en la esquina del salón comunal. Por allá los espero. Me acompaña la señorita Margarita, ella es motociclista';
    var text1 = 'Hoy nos han dado la tarea de mostrarles las instrucciones que deben seguir para desarrollar esta fase. Como soy amante de los rompecabezas, construimos unas fichas con la hoja de ruta. ¡Ayúdennos a armarlas para conocer el paso a paso';
    
    
    $("#play_paso_f2").html('Reproduciendo...');

    if(e.target.tagName !== "AUDIO") {
    if (is_playing) {
      $('#change_f2_2').html(original);
      $('#my_audio_f2')[0].load();
      $('#my_audio_f2')[0].play();
 
       setTimeout(function(){
           $('#change_f2_2').html(text1);
       }, 14000);
       $('#change_f2_2').html(original);
             is_playing = true;

    } else {
      $('#change_f2_2').html(original);
      $('#my_audio_f2')[0].load();
      $('#my_audio_f2')[0].play();
      is_playing = true;
      setTimeout(function(){
          $('#change_f2_2').html(text1);
      }, 14000);

      $('#change_f2_2').html(original);
            is_playing = true;
  }
    } else {
      e.stopPropagtion()
    }
  });
  $("#my_audio_f2").on("ended", function() {
    $("#play_paso_f2").html('Reproducir Audio');
    $(".--pas_fase2").addClass("--invisible");
    $("#person9").addClass("--invisible");
    $(".--pas_2_fase2").removeClass("--invisible");
    $(".background").removeClass("--type005");
    $(".background").removeClass("--type006");
    $(".background").addClass("--obj_fase2_postits");
});

});
