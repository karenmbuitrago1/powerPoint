//active
$('.phase__text').click(function () {
	if ($(this).hasClass('phase__text_active')) {
		$('.phase__text').removeClass('phase__text_active')
	} else {
		$('.phase__text').removeClass('phase__text_active')
		$(this).addClass('phase__text_active')
	}
});

document.getElementById("btn_obj_f8").addEventListener("click", btn_obj_f8, false);
document.getElementById("btn_pas_f8").addEventListener("click", btn_pas_f8, false);
document.getElementById("btn_her_f8").addEventListener("click", btn_her_f8, false);
document.getElementById("btn_tip_f8").addEventListener("click", btn_tip_f8, false);

// Acciones botones objetivo
function btn_obj_f8() {

	// Audio
	$("#my_audio_f8").trigger('pause');
	$("#play_f8_bienvenida").html('Reproducir Audio');

	// Personas hablantes y dialogos
	$(".obj_f8").removeClass("--invisible");
	$(".herr_f8").addClass("--invisible");
	$(".tip_f8").addClass("--invisible");

	$("#person6").addClass("--invisible");
	$("#person7").addClass("--invisible");
	$("#person5").removeClass("--invisible");

	// Contenidos por pantalla
	$(".--pas_fase8").addClass("--invisible");
	$(".--pas_2_fase8").addClass("--invisible");
	$(".--her_fase8").addClass("--invisible");
	$(".--obj_fase8_postits").addClass("--invisible");
	$(".--tip_fase8").addClass("--invisible");

	// background por pantalla
	$(".background").removeClass("--pas_fase8")
		.removeClass("--obj_fase8_postits")
		.removeClass("--her_fase8")
		.removeClass("--tip_fase8");
	$(".background").removeClass("--invisible").addClass("--type016");
	$(".background__image").removeClass("--invisible");


	var highestTimeoutId = setTimeout(";");
	for (var i = 0; i < highestTimeoutId; i++) {
		clearTimeout(i);
	}
}

function btn_pas_f8() {
	$("#my_audio_f8_1").trigger('pause');
	$("#play_paso_f8").html('Reproducir Audio');

	// Personas hablantes y dialogos
	$("#person5").addClass("--invisible");
	$("#person6").removeClass("--invisible");
	$("#person7").removeClass("--invisible");
	$(".obj_f8").addClass("--invisible");
	$(".herr_f8").addClass("--invisible");

	//contenidos por pantalla
	$(".--pas_fase8").removeClass("--invisible");
	$(".--obj_fase8_postits").addClass("--invisible");
	$(".--pas_2_fase8").addClass("--invisible");
	$(".--her_fase8").addClass("--invisible");
	$(".--tip_fase8").addClass("--invisible");

	// background por pantalla
	$(".background").removeClass("--type016")
		.removeClass("--obj_fase8_postits")
		.removeClass("--her_fase8")
		.removeClass("--tip_fase8");
	$(".background").removeClass("--invisible").addClass("--pas_fase8");
	$(".background__image").removeClass("--invisible");


	var highestTimeoutId = setTimeout(";");
	for (var i = 0; i < highestTimeoutId; i++) {
		clearTimeout(i);
	}
}
function btn_her_f8() {
	$("#my_audio_f8_1").trigger('pause');
	$("#my_audio_f8").trigger('pause');

	$(".--pas_fase8").addClass("--invisible");
	$("#person5").addClass("--invisible");
	$("#person6").addClass("--invisible");
	$("#person7").addClass("--invisible");
	$(".obj_f8").addClass("--invisible");

	$(".--pas_2_fase8").addClass("--invisible");
	$(".--her_fase8").removeClass("--invisible");
	$(".--obj_fase8_postits").addClass("--invisible");
	$(".--tip_fase8").addClass("--invisible");

	// background por pantalla
	$(".background").removeClass("--type016")
		.removeClass("--obj_fase8_postits")
		.removeClass("--pas_fase8")
		.removeClass("--tip_fase8");
	$(".background").removeClass("--invisible").addClass("--her_fase8");
	$(".background__image").addClass("--invisible");

	var highestTimeoutId = setTimeout(";");
	for (var i = 0; i < highestTimeoutId; i++) {
		clearTimeout(i);
	}
}
function btn_tip_f8() {
	$("#my_audio_f8_1").trigger('pause');
	$("#my_audio_f8").trigger('pause');

	$(".--pas_fase8").addClass("--invisible");

	$("#person5").addClass("--invisible");
	$("#person6").addClass("--invisible");
	$("#person7").addClass("--invisible");

	$(".obj_f8").addClass("--invisible");
	$(".herr_f8").addClass("--invisible");
	$(".tip_f8").addClass("--invisible");

	$(".--pas_2_fase8").addClass("--invisible");
	$(".--her_fase8").addClass("--invisible");
	$(".--obj_fase8_postits").addClass("--invisible");
	$(".--tip_fase8").removeClass("--invisible");

	// background por pantalla
	$(".background").removeClass("--type016")
		.removeClass("--obj_fase8_postits")
		.removeClass("--pas_fase8")
		.removeClass("--her_fase8");
	$(".background").removeClass("--invisible").addClass("--tip_fase8");
	$(".background__image").addClass("--invisible");

	var highestTimeoutId = setTimeout(";");
	for (var i = 0; i < highestTimeoutId; i++) {
		clearTimeout(i);
	}
}

//Audios y textos
$(function () {
	var is_playing;

	$("#play_f8_bienvenida").click(function (e) {
		var original = 'Me alegra que estén tan participativos hoy, pero vamos a pedir la palabra. De esta forma, garantizamos que todos nos escuchemos por igual. Para continuar, quiero presentar la segunda fase, denominada ¡La vida en la vía, un asunto de todos!';
		var text1 = 'Esta fase tiene como propósito identificar los actores clave que, dentro de nuestra comunidad y en los diferentes sectores que en ella intervienen, pueden aportar de manera positiva en la implementación de nuestra metodología, favoreciendo la apropiación local y promoviendo la seguridad vial.';
		var text1_1 = 'La Junta de Acción Comunal ha preparado algunas notas adhesivas, con datos importantes que debemos tener en cuenta en esta segunda fase. Ahora, los dejo con Juan y Margarita, que les van a presentar el paso a paso a seguir.';

		$("#play_f8_bienvenida").html('Reproduciendo...');

		if (e.target.tagName !== "AUDIO") {
			if (is_playing) {
				$('#change_f8_1').html(original);
				$('#my_audio_f8_1')[0].load();
				$('#my_audio_f8_1')[0].play();

				setTimeout(function () {
					$('#change_f8_1').html(text1);
				}, 16000);
				setTimeout(function () {
					$('#change_f8_1').html(text1_1);
				}, 32000);
				$('#change_f8_1').html(original);
				is_playing = true;

			} else {
				$('#change_f8_1').html(original);
				$('#my_audio_f8_1')[0].load();
				$('#my_audio_f8_1')[0].play();
				is_playing = true;
				setTimeout(function () {
					$('#change_f8_1').html(text1);
				}, 16000);
				setTimeout(function () {
					$('#change_f8_1').html(text1_1);
				}, 32000);
				$('#change_f8_1').html(original);
				is_playing = true;
			}
		} else {
			e.stopPropagtion()
		}
	});
	$("#my_audio_f8_1").on("ended", function () {
		$("#play_f8_bienvenida").html('Reproducir Audio');
		$(".--obj_fase8_postits").removeClass("--invisible");
		$(".--type006").addClass("--invisible");
		$(".obj_f8").addClass("--invisible");
		$(".--obj_fase8").addClass("--invisible");
		//   $(".background").addClass("--type016");

	});

	$("#play_paso_f8").click(function (e) {
		var original = '¡¡Bienvenido de vuelta! Mi nombre es Alirio, soy un líder afro de este territorio. Hoy estoy con mi compañera Marcela, que trabaja junto con Pedro en el proyecto vial.';
		var text1 = 'Nosotros somos los encargados de mostrarte las instrucciones que debes seguir para desarrollar esta fase. Ambos diseñamos unas fichas con la hoja de ruta que esperamos sean de gran ayuda… ¿Nos ayudarías a organizarlas? ';


		$("#play_paso_f8").html('Reproduciendo...');

		if (e.target.tagName !== "AUDIO") {
			if (is_playing) {
				$('#change_f8_2').html(original);
				$('#my_audio_f8')[0].load();
				$('#my_audio_f8')[0].play();

				setTimeout(function () {
					$('#change_f8_2').html(text1);
				}, 9000);
				$('#change_f8_2').html(original);
				is_playing = true;

			} else {
				$('#change_f8_2').html(original);
				$('#my_audio_f8')[0].load();
				$('#my_audio_f8')[0].play();
				is_playing = true;
				setTimeout(function () {
					$('#change_f8_2').html(text1);
				}, 9000);

				$('#change_f8_2').html(original);
				is_playing = true;
			}
		} else {
			e.stopPropagtion()
		}
	});
	$("#my_audio_f8").on("ended", function () {
		$("#play_paso_f8").html('Reproducir Audio');
		$(".--pas_fase8").addClass("--invisible");
		$(".--pas_2_fase8").removeClass("--invisible");
		$(".background").removeClass("--type016");
		$(".background").addClass("--obj_fase8_postits");
	});

});
