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
	//$("#play_f8_bienvenida").html('Reproducir Audio');

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
	//$("#play_paso_f8").html('Reproducir Audio');

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
		var original = '??Hola! Mi nombre es Edilberto. Soy costurero desde muy peque??o.Ya sabe, cualquier arreglo, enmendadura o corte que necesite, nada m??s me dice. Al igual que mis compa??eros, yo tambi??n hago parte de esta metodolog??a.';
		var text1 = 'Hoy me han encargado la tarea de contarle en qu?? consiste esta ??ltima fase llamada ??Vallas por la vida! Pues bien, lo que hacemos aqu?? es recoger los frutos de lo que hemos caminado. Revisando las cosas buenas y las que podemos mejorar.';
		var text1_1 = 'As??, podemos perfeccionar nuestra pr??ctica. Esto es como la costura su merced, se trata de hilar colectivamente y buscar los mejores modelos, a partir del ensayo y el error.';
		var text1_2 = 'Anoche luego de tejer una manta para los ni??os y ni??as del Jard??n infantil del barrio, escrib?? unas notas adhesivas para usted, con datos importantes que debe tener en cuenta en esta fase. Ahora, voy a llamar a la se??ora Josefina para que le cuente un poco m??s al respecto. Un gusto saludarle.';

		//$("#play_f8_bienvenida").html('Reproduciendo...');

		if (e.target.tagName !== "AUDIO") {
			if (is_playing) {
				$('#change_f8_1').html(original);
				$('#my_audio_f8_1')[0].load();
				$('#my_audio_f8_1')[0].play();

				setTimeout(function () {
					$('#change_f8_1').html(text1);
				}, 15000);
				setTimeout(function () {
					$('#change_f8_1').html(text1_1);
				}, 30000);
				setTimeout(function () {
					$('#change_f8_1').html(text1_2);
				}, 45000);				
				$('#change_f8_1').html(original);
				is_playing = true;

			} else {
				$('#change_f8_1').html(original);
				$('#my_audio_f8_1')[0].load();
				$('#my_audio_f8_1')[0].play();
				is_playing = true;
				setTimeout(function () {
					$('#change_f8_1').html(text1);
				}, 15000);
				setTimeout(function () {
					$('#change_f8_1').html(text1_1);
				}, 30000);
				setTimeout(function () {
					$('#change_f8_1').html(text1_2);
				}, 45000);				
				$('#change_f8_1').html(original);
				is_playing = true;
			}
		} else {
			e.stopPropagtion()
		}
	});
	$("#my_audio_f8_1").on("ended", function () {
		//$("#play_f8_bienvenida").html('Reproducir Audio');
		$(".--obj_fase8_postits").removeClass("--invisible");
		$(".--type006").addClass("--invisible");
		$(".obj_f8").addClass("--invisible");
		$(".--obj_fase8").addClass("--invisible");
		//   $(".background").addClass("--type016");

	});

	$("#play_paso_f8").click(function (e) {
		var original = '??Bienvenido de nuevo! Mi nombre es Josefina. Soy empresaria automotriz. Una de las sedes de mi negocio queda aqu?? en el barrio, as?? que ya sabe, si tiene alguna falla con su veh??culo, no dude en contactarme.';
		var text1 = 'Como parte de esta iniciativa, tengo la responsabilidad de mostrarle los pasos que debe seguir para desarrollar esta ??ltima fase. Dise???? un gr??fico que espero sea de ayuda. Me despido. Cualquier cosa que necesite, estamos para servirle.';


		//$("#play_paso_f8").html('Reproduciendo...');

		if (e.target.tagName !== "AUDIO") {
			if (is_playing) {
				$('#change_f8_2').html(original);
				$('#my_audio_f8')[0].load();
				$('#my_audio_f8')[0].play();

				setTimeout(function () {
					$('#change_f8_2').html(text1);
				}, 14000);
				$('#change_f8_2').html(original);
				is_playing = true;

			} else {
				$('#change_f8_2').html(original);
				$('#my_audio_f8')[0].load();
				$('#my_audio_f8')[0].play();
				is_playing = true;
				setTimeout(function () {
					$('#change_f8_2').html(text1);
				}, 14000);

				$('#change_f8_2').html(original);
				is_playing = true;
			}
		} else {
			e.stopPropagtion()
		}
	});
	$("#my_audio_f8").on("ended", function () {
		//$("#play_paso_f8").html('Reproducir Audio');
		$(".--pas_fase8").addClass("--invisible");
		$(".--pas_2_fase8").removeClass("--invisible");
		$(".background").removeClass("--type016");
		$(".background").addClass("--obj_fase8_postits");
	});

});
