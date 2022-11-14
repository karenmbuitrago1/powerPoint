//active
$('.phase__text').click(function () {
	if ($(this).hasClass('phase__text_active')) {
		$('.phase__text').removeClass('phase__text_active')
	} else {
		$('.phase__text').removeClass('phase__text_active')
		$(this).addClass('phase__text_active')
	}
});

document.getElementById("btn_obj_f6").addEventListener("click", btn_obj_f6, false);
document.getElementById("btn_pas_f6").addEventListener("click", btn_pas_f6, false);
document.getElementById("btn_her_f6").addEventListener("click", btn_her_f6, false);
document.getElementById("btn_tip_f6").addEventListener("click", btn_tip_f6, false);

document.getElementById("globo1").addEventListener("click", globoAction1);
document.getElementById("globo2").addEventListener("click", globoAction2);
document.getElementById("globo3").addEventListener("click", globoAction3);

// Acciones botones objetivo
function btn_obj_f6() {

	// Audio
	$("#my_audio_f6").trigger('pause');
	//$("#play_f6_bienvenida").html('Reproducir Audio');

	// Personas hablantes y dialogos
	$(".obj_f6").removeClass("--invisible");
	$(".herr_f6").addClass("--invisible");
	$(".tip_f6").addClass("--invisible");

	$("#person6").addClass("--invisible");
	$("#person7").addClass("--invisible");
	$("#person5").removeClass("--invisible");

	// Contenidos por pantalla
	$(".--pas_fase6").addClass("--invisible");
	$(".--pas_2_fase6").addClass("--invisible");
	$(".--her_fase6").addClass("--invisible");
	$(".--obj_fase6_postits").addClass("--invisible");
	$(".--tip_fase6").addClass("--invisible");

	// background por pantalla
	$(".background").removeClass("--pas_fase6")
		.removeClass("--obj_fase6_postits")
		.removeClass("--her_fase6")
		.removeClass("--tip_fase6");
	$(".background").removeClass("--invisible").addClass("--type012");
	$(".background__image").removeClass("--invisible");
	$(".--pas_phase6").addClass("--invisible");


	var highestTimeoutId = setTimeout(";");
	for (var i = 0; i < highestTimeoutId; i++) {
		clearTimeout(i);
	}
}

function btn_pas_f6() {
	$("#my_audio_f6_1").trigger('pause');
	//$("#play_paso_f6").html('Reproducir Audio');

	// Personas hablantes y dialogos
	$("#person5").addClass("--invisible");
	$("#person6").removeClass("--invisible");
	$("#person7").removeClass("--invisible");
	$(".obj_f6").addClass("--invisible");
	$(".herr_f6").addClass("--invisible");

	//contenidos por pantalla
	$(".--pas_fase6").removeClass("--invisible");
	$(".--obj_fase6_postits").addClass("--invisible");
	$(".--pas_2_fase6").addClass("--invisible");
	$(".--her_fase6").addClass("--invisible");
	$(".--tip_fase6").addClass("--invisible");

	// background por pantalla
	$(".background").removeClass("--type012")
		.removeClass("--obj_fase6_postits")
		.removeClass("--her_fase6")
		.removeClass("--tip_fase6");
	$(".background").removeClass("--invisible").addClass("--pas_fase6");
	$(".background__image").removeClass("--invisible");


	var highestTimeoutId = setTimeout(";");
	for (var i = 0; i < highestTimeoutId; i++) {
		clearTimeout(i);
	}
}
function btn_her_f6() {
	$("#my_audio_f6_1").trigger('pause');
	$("#my_audio_f6").trigger('pause');

	$(".--pas_fase6").addClass("--invisible");
	$("#person5").addClass("--invisible");
	$("#person6").addClass("--invisible");
	$("#person7").addClass("--invisible");
	$(".obj_f6").addClass("--invisible");

	$(".--pas_2_fase6").addClass("--invisible");
	$(".--her_fase6").removeClass("--invisible");
	$(".--obj_fase6_postits").addClass("--invisible");
	$(".--tip_fase6").addClass("--invisible");

	// background por pantalla
	$(".background").removeClass("--type012")
		.removeClass("--obj_fase6_postits")
		.removeClass("--pas_fase6")
		.removeClass("--tip_fase6");
	$(".background").removeClass("--invisible").addClass("--her_fase6");
	$(".background__image").addClass("--invisible");

	var highestTimeoutId = setTimeout(";");
	for (var i = 0; i < highestTimeoutId; i++) {
		clearTimeout(i);
	}
}
function btn_tip_f6() {
	$("#my_audio_f6_1").trigger('pause');
	$("#my_audio_f6").trigger('pause');

	$(".--pas_fase6").addClass("--invisible");

	$("#person5").addClass("--invisible");
	$("#person6").addClass("--invisible");
	$("#person7").addClass("--invisible");

	$(".obj_f6").addClass("--invisible");
	$(".herr_f6").addClass("--invisible");
	$(".tip_f6").addClass("--invisible");

	$(".--pas_2_fase6").addClass("--invisible");
	$(".--her_fase6").addClass("--invisible");
	$(".--obj_fase6_postits").addClass("--invisible");
	$(".--tip_fase6").removeClass("--invisible");

	// background por pantalla
	$(".background").removeClass("--type012")
		.removeClass("--obj_fase6_postits")
		.removeClass("--pas_fase6")
		.removeClass("--her_fase6");
	$(".background").removeClass("--invisible").addClass("--tip_fase6");
	$(".background__image").addClass("--invisible");

	var highestTimeoutId = setTimeout(";");
	for (var i = 0; i < highestTimeoutId; i++) {
		clearTimeout(i);
	}
}

//Audios y textos
$(function () {
	var is_playing;

	$("#play_f6_bienvenida").click(function (e) {
		var original = '¡Hola! Mi nombre es Magdalena, soy madre comunitaria y también hago parte de esta iniciativa. Quisiera contarte en qué consiste esta fase que hemos denominado ¡Construyendo puentes!';
		var text1 = 'El propósito es diseñar con la comunidad y con miembros de diferentes sectores, acciones que contribuyan a mejorar los comportamientos viales y a cuidar la vida de todos y todas. ¡Así es, tal cual lo están haciendo mis compañeros allí atrás!';
		var text1_1 = 'De manera conjunta, hemos preparado algunas notas adhesivas para ti, con datos importantes que debes tener en cuenta en esta fase. Ahora, voy a llamar a Telesforo y Amalia para que te cuenten un poco más.';

		//$("#play_f6_bienvenida").html('Reproduciendo...');

		if (e.target.tagName !== "AUDIO") {
			if (is_playing) {
				$('#change_f6_1').html(original);
				$('#my_audio_f6_1')[0].load();
				$('#my_audio_f6_1')[0].play();

				setTimeout(function () {
					$('#change_f6_1').html(text1);
				}, 12000);
				setTimeout(function () {
					$('#change_f6_1').html(text1_1);
				}, 26000);				
				$('#change_f6_1').html(original);
				is_playing = true;

			} else {
				$('#change_f6_1').html(original);
				$('#my_audio_f6_1')[0].load();
				$('#my_audio_f6_1')[0].play();
				is_playing = true;
				setTimeout(function () {
					$('#change_f6_1').html(text1);
				}, 12000);
				setTimeout(function () {
					$('#change_f6_1').html(text1_1);
				}, 26000);				
				$('#change_f6_1').html(original);
				is_playing = true;
			}
		} else {
			e.stopPropagtion()
		}
	});
	$("#my_audio_f6_1").on("ended", function () {
		//$("#play_f6_bienvenida").html('Reproducir Audio');
		$(".--obj_fase6_postits").removeClass("--invisible");
		$(".--type006").addClass("--invisible");
		$(".obj_f6").addClass("--invisible");
		$(".--obj_fase6").addClass("--invisible");
		//   $(".background").addClass("--type012");

	});

	$("#play_paso_f6").click(function (e) {
		var original = '¡Hola, cómo está! Mi nombre es Amalia y estoy aquí con Telesforo para mostrarle los pasos que debe seguir para desarrollar esta fase. Ambos diseñamos esta hoja de ruta que esperamos le ayude. Como hay tantos niños y niñas en la comunidad, para el encuentro de hoy pusimos el paso a paso en unos globos de fiesta,';
		var text1 = '...así, cada vez que se estalla uno, sale volando el papelito con la descripción... ¡Venga y juega con nosotros! De clic en cada globo y descubra en qué consiste cada paso.';


		//$("#play_paso_f6").html('Reproduciendo...');

		if (e.target.tagName !== "AUDIO") {
			if (is_playing) {
				$('#change_f6_2').html(original);
				$('#my_audio_f6')[0].load();
				$('#my_audio_f6')[0].play();

				setTimeout(function () {
					$('#change_f6_2').html(text1);
				}, 17000);
				$('#change_f6_2').html(original);
				is_playing = true;

			} else {
				$('#change_f6_2').html(original);
				$('#my_audio_f6')[0].load();
				$('#my_audio_f6')[0].play();
				is_playing = true;
				setTimeout(function () {
					$('#change_f6_2').html(text1);
				}, 17000);

				$('#change_f6_2').html(original);
				is_playing = true;
			}
		} else {
			e.stopPropagtion()
		}
	});
	$("#my_audio_f6").on("ended", function () {
		//$("#play_paso_f6").html('Reproducir Audio');
		$(".--pas_fase6").addClass("--invisible");
		$(".--pas_2_fase6").removeClass("--invisible");
		$(".background").removeClass("--type012");
		$(".background").addClass("--obj_fase6_postits");
	});

});


// Globos

function globoAction1(){
    $("#globo1__description").removeClass("--invisible");
}
function globoAction2(){
    $("#globo2__description").removeClass("--invisible");
}
function globoAction3(){
    $("#globo3__description").removeClass("--invisible");
}