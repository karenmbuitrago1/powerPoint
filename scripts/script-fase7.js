//active
$('.phase__text').click(function () {
	if ($(this).hasClass('phase__text_active')) {
		$('.phase__text').removeClass('phase__text_active')
	} else {
		$('.phase__text').removeClass('phase__text_active')
		$(this).addClass('phase__text_active')
	}
});

document.getElementById("btn_obj_f7").addEventListener("click", btn_obj_f7, false);
document.getElementById("btn_pas_f7").addEventListener("click", btn_pas_f7, false);
document.getElementById("btn_her_f7").addEventListener("click", btn_her_f7, false);
document.getElementById("btn_tip_f7").addEventListener("click", btn_tip_f7, false);

// Acciones botones objetivo
function btn_obj_f7() {

	// Audio
	$("#my_audio_f7").trigger('pause');
	//$("#play_f7_bienvenida").html('Reproducir Audio');

	// Personas hablantes y dialogos
	$(".obj_f7").removeClass("--invisible");
	$(".herr_f7").addClass("--invisible");
	$(".tip_f7").addClass("--invisible");

	$("#person6").addClass("--invisible");
	$("#person7").addClass("--invisible");
	$("#person5").removeClass("--invisible");

	// Contenidos por pantalla
	$(".--pas_fase7").addClass("--invisible");
	$(".--pas_2_fase7").addClass("--invisible");
	$(".--her_fase7").addClass("--invisible");
	$(".--obj_fase7_postits").addClass("--invisible");
	$(".--tip_fase7").addClass("--invisible");

	// background por pantalla
	$(".background").removeClass("--pas_fase7")
		.removeClass("--obj_fase7_postits")
		.removeClass("--her_fase7")
		.removeClass("--tip_fase7");
	$(".background").removeClass("--invisible").addClass("--type014");
	$(".background__image").removeClass("--invisible");


	var highestTimeoutId = setTimeout(";");
	for (var i = 0; i < highestTimeoutId; i++) {
		clearTimeout(i);
	}
}

function btn_pas_f7() {
	$("#my_audio_f7_1").trigger('pause');
	//$("#play_paso_f7").html('Reproducir Audio');

	// Personas hablantes y dialogos
	$("#person5").addClass("--invisible");
	$("#person6").removeClass("--invisible");
	$("#person7").removeClass("--invisible");
	$(".obj_f7").addClass("--invisible");
	$(".herr_f7").addClass("--invisible");

	//contenidos por pantalla
	$(".--pas_fase7").removeClass("--invisible");
	$(".--obj_fase7_postits").addClass("--invisible");
	$(".--pas_2_fase7").addClass("--invisible");
	$(".--her_fase7").addClass("--invisible");
	$(".--tip_fase7").addClass("--invisible");

	// background por pantalla
	$(".background").removeClass("--type014")
		.removeClass("--obj_fase7_postits")
		.removeClass("--her_fase7")
		.removeClass("--tip_fase7");
	$(".background").removeClass("--invisible").addClass("--pas_fase7").addClass("--type014");
	$(".background__image").removeClass("--invisible");


	var highestTimeoutId = setTimeout(";");
	for (var i = 0; i < highestTimeoutId; i++) {
		clearTimeout(i);
	}
}
function btn_her_f7() {
	$("#my_audio_f7_1").trigger('pause');
	$("#my_audio_f7").trigger('pause');

	$(".--pas_fase7").addClass("--invisible");
	$("#person5").addClass("--invisible");
	$("#person6").addClass("--invisible");
	$("#person7").addClass("--invisible");
	$(".obj_f7").addClass("--invisible");

	$(".--pas_2_fase7").addClass("--invisible");
	$(".--her_fase7").removeClass("--invisible");
	$(".--obj_fase7_postits").addClass("--invisible");
	$(".--tip_fase7").addClass("--invisible");

	// background por pantalla
	$(".background").removeClass("--type014")
		.removeClass("--obj_fase7_postits")
		.removeClass("--pas_fase7")
		.removeClass("--tip_fase7");
	$(".background").removeClass("--invisible").addClass("--her_fase7");
	$(".background__image").addClass("--invisible");

	var highestTimeoutId = setTimeout(";");
	for (var i = 0; i < highestTimeoutId; i++) {
		clearTimeout(i);
	}
}
function btn_tip_f7() {
	$("#my_audio_f7_1").trigger('pause');
	$("#my_audio_f7").trigger('pause');

	$(".--pas_fase7").addClass("--invisible");

	$("#person5").addClass("--invisible");
	$("#person6").addClass("--invisible");
	$("#person7").addClass("--invisible");

	$(".obj_f7").addClass("--invisible");
	$(".herr_f7").addClass("--invisible");
	$(".tip_f7").addClass("--invisible");

	$(".--pas_2_fase7").addClass("--invisible");
	$(".--her_fase7").addClass("--invisible");
	$(".--obj_fase7_postits").addClass("--invisible");
	$(".--tip_fase7").removeClass("--invisible");

	// background por pantalla
	$(".background").removeClass("--type014")
		.removeClass("--obj_fase7_postits")
		.removeClass("--pas_fase7")
		.removeClass("--her_fase7");
	$(".background").removeClass("--invisible").addClass("--tip_fase7");
	$(".background__image").addClass("--invisible");

	var highestTimeoutId = setTimeout(";");
	for (var i = 0; i < highestTimeoutId; i++) {
		clearTimeout(i);
	}
}

//Audios y textos
$(function () {
	var is_playing;

	$("#play_f7_bienvenida").click(function (e) {
		var original = '¡Hola! Mi nombre es Saúl, soy el gerente comercial de Calzados paso firme, una tienda de zapatos formales y deportivos que lleva 30 años en esta zona. Ahí trabajaron mis abuelos, mis padres y ahora mi esposa y yo. Al igual que ellos...';
		var text1 = 'he vivido toda mi vida aquí. Por esa razón, siempre ayudo a mi comunidad en lo que puedo. ¡Por supuesto, yo también hago parte de esta iniciativa!';
		var text1_1 = 'Quisiera contarte en qué consiste esta fase llamada ¡Manos a la obra! El propósito es implementar las estrategias de intervención comunitaria que diseñamos en la fase anterior. Los vecinos y yo';
		var text1_2 = 'hemos preparado algunas notas adhesivas para ti, con datos importantes que debes tener en cuenta en esta fase. Ahora, voy a llamar a Paula para que te cuente más al respecto.';

		//$("#play_f7_bienvenida").html('Reproduciendo...');

		if (e.target.tagName !== "AUDIO") {
			if (is_playing) {
				$('#change_f7_1').html(original);
				$('#my_audio_f7_1')[0].load();
				$('#my_audio_f7_1')[0].play();

				setTimeout(function () {
					$('#change_f7_1').html(text1);
				}, 16000);
				setTimeout(function () {
					$('#change_f7_1').html(text1_1);
				}, 26000);
				setTimeout(function () {
					$('#change_f7_1').html(text1_2);
				}, 36000);				
				$('#change_f7_1').html(original);
				is_playing = true;

			} else {
				$('#change_f7_1').html(original);
				$('#my_audio_f7_1')[0].load();
				$('#my_audio_f7_1')[0].play();
				is_playing = true;
				setTimeout(function () {
					$('#change_f7_1').html(text1);
				}, 16000);
				setTimeout(function () {
					$('#change_f7_1').html(text1_1);
				}, 26000);
				setTimeout(function () {
					$('#change_f7_1').html(text1_2);
				}, 36000);				
				$('#change_f7_1').html(original);
				is_playing = true;
			}
		} else {
			e.stopPropagtion()
		}
	});
	$("#my_audio_f7_1").on("ended", function () {
	//	$("#play_f7_bienvenida").html('Reproducir Audio');
		$(".--obj_fase7_postits").removeClass("--invisible");
		$(".--type006").addClass("--invisible");
		$(".obj_f7").addClass("--invisible");
		$(".--obj_fase7").addClass("--invisible");
		//   $(".background").addClass("--type014");

	});

	$("#play_paso_f7").click(function (e) {
		var original = '¡Hola! Mi nombre es Paula. Soy taxista desde hace 10 años. Transito frecuentemente por esta zona. La mayoría de mis servicios inician o llegan aquí.';
		var text1 = 'Como miembro de esta metodología, quiero mostrarte los pasos que debes seguir para desarrollar esta fase. Diseñé una hoja de ruta que espero te ayude... ¡Da clic sobre cada paso y descubre de qué se trata!';


		//$("#play_paso_f7").html('Reproduciendo...');

		if (e.target.tagName !== "AUDIO") {
			if (is_playing) {
				$('#change_f7_2').html(original);
				$('#my_audio_f7')[0].load();
				$('#my_audio_f7')[0].play();

				setTimeout(function () {
					$('#change_f7_2').html(text1);
				}, 11000);
				$('#change_f7_2').html(original);
				is_playing = true;

			} else {
				$('#change_f7_2').html(original);
				$('#my_audio_f7')[0].load();
				$('#my_audio_f7')[0].play();
				is_playing = true;
				setTimeout(function () {
					$('#change_f7_2').html(text1);
				}, 11000);

				$('#change_f7_2').html(original);
				is_playing = true;
			}
		} else {
			e.stopPropagtion()
		}
	});
	$("#my_audio_f7").on("ended", function () {
		//$("#play_paso_f7").html('Reproducir Audio');
		$(".--pas_fase7").addClass("--invisible");
		$(".--pas_2_fase7").removeClass("--invisible");
		$(".background").removeClass("--type014");
		$(".background").addClass("--obj_fase7_postits");
	});

});
