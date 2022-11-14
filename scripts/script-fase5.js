//active
$('.phase__text').click(function () {
	if ($(this).hasClass('phase__text_active')) {
		$('.phase__text').removeClass('phase__text_active')
	} else {
		$('.phase__text').removeClass('phase__text_active')
		$(this).addClass('phase__text_active')
	}
});

document.getElementById("btn_obj_f5").addEventListener("click", btn_obj_f5, false);
document.getElementById("btn_pas_f5").addEventListener("click", btn_pas_f5, false);
document.getElementById("btn_her_f5").addEventListener("click", btn_her_f5, false);
document.getElementById("btn_tip_f5").addEventListener("click", btn_tip_f5, false);

// Acciones botones objetivo
function btn_obj_f5() {

	// Audio
	$("#my_audio_f5").trigger('pause');
	//$("#play_f5_bienvenida").html('Reproducir Audio');

	// Personas hablantes y dialogos
	$(".obj_f5").removeClass("--invisible");
	$(".herr_f5").addClass("--invisible");
	$(".tip_f5").addClass("--invisible");

	$("#person6").addClass("--invisible");
	$("#person7").addClass("--invisible");
	$("#person8").addClass("--invisible");
	$("#person5").removeClass("--invisible");
	$("#person9").removeClass("--invisible");
    $("#person10").addClass("--invisible");
	$("#person11").addClass("--invisible");

	// Contenidos por pantalla
	$(".--pas_fase5").addClass("--invisible");
	$(".--pas_2_fase5").addClass("--invisible");
	$(".--her_fase5").addClass("--invisible");
	$(".--obj_fase5_postits").addClass("--invisible");
	$(".--tip_fase5").addClass("--invisible");

	// background por pantalla
	$(".background").removeClass("--pas_fase5")
		.removeClass("--obj_fase5_postits")
		.removeClass("--her_fase5")
		.removeClass("--tip_fase5");
	$(".background").removeClass("--invisible").addClass("--type010");
	$(".background__image").removeClass("--invisible");
	$(".--pas_phase5").addClass("--invisible");


	var highestTimeoutId = setTimeout(";");
	for (var i = 0; i < highestTimeoutId; i++) {
		clearTimeout(i);
	}
}

function btn_pas_f5() {
	$("#my_audio_f5_1").trigger('pause');
	//$("#play_paso_f5").html('Reproducir Audio');

	// Personas hablantes y dialogos
	$("#person5").addClass("--invisible");
	$("#person6").removeClass("--invisible");
	$("#person7").removeClass("--invisible");
	$("#person8").removeClass("--invisible");
    $("#person9").addClass("--invisible");
    $("#person10").addClass("--invisible");
	$("#person11").addClass("--invisible");
	$(".obj_f5").addClass("--invisible");
	$(".herr_f5").addClass("--invisible");

	//contenidos por pantalla
	$(".--pas_fase5").removeClass("--invisible");
	$(".--obj_fase5_postits").addClass("--invisible");
	$(".--pas_2_fase5").addClass("--invisible");
	$(".--her_fase5").addClass("--invisible");
	$(".--tip_fase5").addClass("--invisible");

	// background por pantalla
	$(".background").removeClass("--type010")
		.removeClass("--obj_fase5_postits")
		.removeClass("--her_fase5")
		.removeClass("--tip_fase5");
	$(".background").removeClass("--invisible").addClass("--pas_fase5");
	$(".background__image").removeClass("--invisible");


	var highestTimeoutId = setTimeout(";");
	for (var i = 0; i < highestTimeoutId; i++) {
		clearTimeout(i);
	}
}
function btn_her_f5() {
	$("#my_audio_f5_1").trigger('pause');
	$("#my_audio_f5").trigger('pause');

	$(".--pas_fase5").addClass("--invisible");
	$("#person5").addClass("--invisible");
	$("#person6").addClass("--invisible");
	$("#person7").addClass("--invisible");
	$("#person8").addClass("--invisible");
	$("#person9").addClass("--invisible");
	$("#person10").addClass("--invisible");
	$("#person11").addClass("--invisible");
	$(".obj_f5").addClass("--invisible");

	$(".--pas_2_fase5").addClass("--invisible");
	$(".--her_fase5").removeClass("--invisible");
	$(".--obj_fase5_postits").addClass("--invisible");
	$(".--tip_fase5").addClass("--invisible");

	// background por pantalla
	$(".background").removeClass("--type010")
		.removeClass("--obj_fase5_postits")
		.removeClass("--pas_fase5")
		.removeClass("--tip_fase5");
	$(".background").removeClass("--invisible").addClass("--her_fase5");
	$(".background__image").addClass("--invisible");

	var highestTimeoutId = setTimeout(";");
	for (var i = 0; i < highestTimeoutId; i++) {
		clearTimeout(i);
	}
}
function btn_tip_f5() {
	$("#my_audio_f5_1").trigger('pause');
	$("#my_audio_f5").trigger('pause');

	$(".--pas_fase5").addClass("--invisible");

	$("#person5").addClass("--invisible");
	$("#person6").addClass("--invisible");
	$("#person7").addClass("--invisible");
	$("#person8").addClass("--invisible");
	$("#person9").addClass("--invisible");
	$("#person10").removeClass("--invisible");
	$("#person11").removeClass("--invisible");

	$(".obj_f5").addClass("--invisible");
	$(".herr_f5").addClass("--invisible");
	$(".tip_f5").addClass("--invisible");

	$(".--pas_2_fase5").addClass("--invisible");
	$(".--her_fase5").addClass("--invisible");
	$(".--obj_fase5_postits").addClass("--invisible");
	$(".--tip_fase5").removeClass("--invisible");

	// background por pantalla
	$(".background").removeClass("--type010")
		.removeClass("--obj_fase5_postits")
		.removeClass("--pas_fase5")
		.removeClass("--her_fase5");
	$(".background").removeClass("--invisible").addClass("--tip_fase5");
	// $(".background__image").addClass("--invisible");

	var highestTimeoutId = setTimeout(";");
	for (var i = 0; i < highestTimeoutId; i++) {
		clearTimeout(i);
	}
}

//Audios y textos
$(function () {
	var is_playing;

	$("#play_f5_bienvenida").click(function (e) {
		var original = ' ¡Hola! Bienvenido a la quinta fase de nuestra metodología. Mi nombre es Lucía, soy parte de la concesión que está desarrollando el proyecto vial en la zona. Me acompaña Gabriel, otro de los miembros de la concesión.';
		var text1 = 'Nos hemos reunido aquí para contarte en qué consiste esta fase que hemos denominado ¡Cimientos para la edificación! ';
		var text1_1 = '¡Así es! Esta fase tiene como propósito identificar los factores de riesgo derivados del proyecto vial que deben ser abordados y atendidos de manera prioritaria.';
		var text1_2 = 'Lucía y yo hemos preparado algunas notas adhesivas para ti, con datos importantes que debes tener en cuenta en esta quinta fase. Ahora, te dejamos con Soraya y Antonio para que te cuenten un poco más al respecto.';

		//$("#play_f5_bienvenida").html('Reproduciendo...');

		if (e.target.tagName !== "AUDIO") {
			if (is_playing) {
				$('#change_f5_1').html(original);
				$('#my_audio_f5_1')[0].load();
				$('#my_audio_f5_1')[0].play();

				setTimeout(function () {
					$('#change_f5_1').html(text1);
				}, 15000);
				setTimeout(function () {
					$('#change_f5_1').html(text1_1);
				}, 21000);
				setTimeout(function () {
					$('#change_f5_1').html(text1_2);
				}, 31000);				
							
				$('#change_f5_1').html(original);
				is_playing = true;

			} else {
				$('#change_f5_1').html(original);
				$('#my_audio_f5_1')[0].load();
				$('#my_audio_f5_1')[0].play();
				is_playing = true;
				setTimeout(function () {
					$('#change_f5_1').html(text1);
				}, 15000);
				setTimeout(function () {
					$('#change_f5_1').html(text1_1);
				}, 21000);
				setTimeout(function () {
					$('#change_f5_1').html(text1_2);
				}, 31000);			
							
				$('#change_f5_1').html(original);
				is_playing = true;
			}
		} else {
			e.stopPropagtion()
		}
	});
	$("#my_audio_f5_1").on("ended", function () {
		//$("#play_f5_bienvenida").html('Reproducir Audio');
		$(".--obj_fase5_postits").removeClass("--invisible");
		$(".--type006").addClass("--invisible");
		$(".obj_f5").addClass("--invisible");
		$(".--obj_fase5").addClass("--invisible");
		$("#person7").addClass("--invisible");
		//   $(".background").addClass("--type010");

	});

	$("#play_paso_f5").click(function (e) {
		var original = '¡Bienvenido de vuelta! Mi nombre es Antonio. Estoy junto a mi compañera Soraya. Ambos pertenecemos a la Organización Movilidad digna. Trabajamos para defender y garantizar los derechos de las personas en condición de discapacidad física en la zona.';
		var text1 = 'Hace unos meses nos integramos de manera activa en esta metodología. Hoy, somos los encargados de mostrarte las instrucciones que debes seguir para desarrollar esta fase. Ambos diseñamos esta hoja de ruta que esperamos sea de gran ayuda… ';


		//$("#play_paso_f5").html('Reproduciendo...');

		if (e.target.tagName !== "AUDIO") {
			if (is_playing) {
				$('#change_f5_2').html(original);
				$('#my_audio_f5')[0].load();
				$('#my_audio_f5')[0].play();

				setTimeout(function () {
					$('#change_f5_2').html(text1);
				}, 17000);
				$('#change_f5_2').html(original);
				is_playing = true;

			} else {
				$('#change_f5_2').html(original);
				$('#my_audio_f5')[0].load();
				$('#my_audio_f5')[0].play();
				is_playing = true;
				setTimeout(function () {
					$('#change_f5_2').html(text1);
				}, 17000);

				$('#change_f5_2').html(original);
				is_playing = true;
			}
		} else {
			e.stopPropagtion()
		}
	});
	$("#my_audio_f5").on("ended", function () {
		//$("#play_paso_f5").html('Reproducir Audio');
		$(".--pas_fase5").addClass("--invisible");
		$(".--pas_2_fase5").removeClass("--invisible");
		$(".background").removeClass("--type010");
		$(".background").addClass("--obj_fase5_postits");
        $("#person8").addClass("--invisible");
	});

});

