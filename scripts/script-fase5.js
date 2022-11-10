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
	$("#play_f5_bienvenida").html('Reproducir Audio');

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
	$("#play_paso_f5").html('Reproducir Audio');

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
		var original = '¡Bienvenido! Mi nombre es Nahuel, soy un sabedor de la comunidad indígena wayuu. Hoy estoy reunido con mi comunidad para mostrarte los pasos que debes seguir para desarrollar esta fase. Todos juntos, a partir de un diálogo de saberes, diseñamos esta hoja de ruta con fichas de memoria… El propósito es emparejar cada fase con su descripción ¡Adelante!	';
		var text1 = 'Hoy me han encargado la tarea de contarle en qué consiste esta última fase llamada ¡Vallas por la vida! Pues bien, lo que hacemos aquí es recoger los frutos de lo que hemos caminado. Revisando las cosas buenas y las que podemos mejorar.';
		var text1_1 = 'Así, podemos perfeccionar nuestra práctica. Esto es como la costura su merced, se trata de hilar colectivamente y buscar los mejores modelos, a partir del ensayo y el error.';
		var text1_2 = 'Anoche luego de tejer una manta para los niños y niñas del Jardín infantil del barrio, escribí unas notas adhesivas para usted, con datos importantes que debe tener en cuenta en esta fase. Ahora, voy a llamar a la señora Josefina para que le cuente un poco más al respecto. Un gusto saludarle.';

		$("#play_f5_bienvenida").html('Reproduciendo...');

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
				}, 30000);
				setTimeout(function () {
					$('#change_f5_1').html(text1_2);
				}, 45000);				
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
				}, 30000);
				setTimeout(function () {
					$('#change_f5_1').html(text1_2);
				}, 45000);				
				$('#change_f5_1').html(original);
				is_playing = true;
			}
		} else {
			e.stopPropagtion()
		}
	});
	$("#my_audio_f5_1").on("ended", function () {
		$("#play_f5_bienvenida").html('Reproducir Audio');
		$(".--obj_fase5_postits").removeClass("--invisible");
		$(".--type006").addClass("--invisible");
		$(".obj_f5").addClass("--invisible");
		$(".--obj_fase5").addClass("--invisible");
		$("#person7").addClass("--invisible");
		//   $(".background").addClass("--type010");

	});

	$("#play_paso_f5").click(function (e) {
		var original = '¡Bienvenido de nuevo! Mi nombre es Josefina. Soy empresaria automotriz. Una de las sedes de mi negocio queda aquí en el barrio, así que ya sabe, si tiene alguna falla con su vehículo, no dude en contactarme.';
		var text1 = 'Como parte de esta iniciativa, tengo la responsabilidad de mostrarle los pasos que debe seguir para desarrollar esta última fase. Diseñé un gráfico que espero sea de ayuda. Me despido. Cualquier cosa que necesite, estamos para servirle.';


		$("#play_paso_f5").html('Reproduciendo...');

		if (e.target.tagName !== "AUDIO") {
			if (is_playing) {
				$('#change_f5_2').html(original);
				$('#my_audio_f5')[0].load();
				$('#my_audio_f5')[0].play();

				setTimeout(function () {
					$('#change_f5_2').html(text1);
				}, 14000);
				$('#change_f5_2').html(original);
				is_playing = true;

			} else {
				$('#change_f5_2').html(original);
				$('#my_audio_f5')[0].load();
				$('#my_audio_f5')[0].play();
				is_playing = true;
				setTimeout(function () {
					$('#change_f5_2').html(text1);
				}, 14000);

				$('#change_f5_2').html(original);
				is_playing = true;
			}
		} else {
			e.stopPropagtion()
		}
	});
	$("#my_audio_f5").on("ended", function () {
		$("#play_paso_f5").html('Reproducir Audio');
		$(".--pas_fase5").addClass("--invisible");
		$(".--pas_2_fase5").removeClass("--invisible");
		$(".background").removeClass("--type010");
		$(".background").addClass("--obj_fase5_postits");
        $("#person8").addClass("--invisible");
	});

});

