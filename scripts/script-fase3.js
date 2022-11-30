//active
$('.phase__text').click(function () {
	if ($(this).hasClass('phase__text_active')) {
		$('.phase__text').removeClass('phase__text_active')
	} else {
		$('.phase__text').removeClass('phase__text_active')
		$(this).addClass('phase__text_active')
	}
});

document.getElementById("btn_obj_f3").addEventListener("click", btn_obj_f3, false);
document.getElementById("btn_pas_f3").addEventListener("click", btn_pas_f3, false);
document.getElementById("btn_her_f3").addEventListener("click", btn_her_f3, false);
document.getElementById("btn_tip_f3").addEventListener("click", btn_tip_f3, false);

document.getElementById("globo1").addEventListener("click", globoAction1);
document.getElementById("globo2").addEventListener("click", globoAction2);
document.getElementById("globo3").addEventListener("click", globoAction3);
document.getElementById("globo4").addEventListener("click", globoAction4);

// Acciones botones objetivo
function btn_obj_f3() {

	// Audio
	$("#my_audio_f3").trigger('pause');
	//$("#play_f3_bienvenida").html('Reproducir Audio');

	// Personas hablantes y dialogos
	$(".obj_f3").removeClass("--invisible");
	$(".herr_f3").addClass("--invisible");
	$(".tip_f3").addClass("--invisible");

	$("#person6").addClass("--invisible");
	$("#person7").addClass("--invisible");
	$("#person5").removeClass("--invisible");

	// Contenidos por pantalla
	$(".--pas_fase3").addClass("--invisible");
	$(".--pas_2_fase3").addClass("--invisible");
	$(".--her_fase3").addClass("--invisible");
	$(".--obj_fase3_postits").addClass("--invisible");
	$(".--tip_fase3").addClass("--invisible");

	// background por pantalla
	$(".background").removeClass("--pas_fase3")
		.removeClass("--obj_fase3_postits")
		.removeClass("--her_fase3")
		.removeClass("--tip_fase3");
	$(".background").removeClass("--invisible").addClass("--type009");
	$(".background__animation").removeClass("--invisible");
	$(".background__animation2").addClass("--invisible");


	var highestTimeoutId = setTimeout(";");
	for (var i = 0; i < highestTimeoutId; i++) {
		clearTimeout(i);
	}
}

function btn_pas_f3() {
	$("#my_audio_f3_1").trigger('pause');
	//$("#play_paso_f3").html('Reproducir Audio');

	// Personas hablantes y dialogos
	$("#person5").addClass("--invisible");
	$("#person5").addClass("--invisible");
	$("#person6").removeClass("--invisible");
	$("#person7").removeClass("--invisible");
	$(".obj_f3").addClass("--invisible");
	$(".herr_f3").addClass("--invisible");

	//contenidos por pantalla
	$(".--pas_fase3").removeClass("--invisible");
	$(".--obj_fase3_postits").addClass("--invisible");
	$(".--pas_2_fase3").addClass("--invisible");
	$(".--her_fase3").addClass("--invisible");
	$(".--tip_fase3").addClass("--invisible");

	// background por pantalla
	$(".background").removeClass("--type009")
		.removeClass("--obj_fase3_postits")
		.removeClass("--her_fase3")
		.removeClass("--tip_fase3");
	$(".background").removeClass("--invisible").addClass("--pas_fase3");
	$(".background__animation").addClass("--invisible");
	$(".background__animation2").removeClass("--invisible");


	var highestTimeoutId = setTimeout(";");
	for (var i = 0; i < highestTimeoutId; i++) {
		clearTimeout(i);
	}
}
function btn_her_f3() {
	$("#my_audio_f3_1").trigger('pause');
	$("#my_audio_f3").trigger('pause');

	$(".--pas_fase3").addClass("--invisible");
	$("#person5").addClass("--invisible");
	$("#person6").addClass("--invisible");
	$("#person7").addClass("--invisible");
	$(".obj_f3").addClass("--invisible");

	$(".--pas_2_fase3").addClass("--invisible");
	$(".--her_fase3").removeClass("--invisible");
	$(".--obj_fase3_postits").addClass("--invisible");
	$(".--tip_fase3").addClass("--invisible");

	// background por pantalla
	$(".background").removeClass("--type009")
		.removeClass("--obj_fase3_postits")
		.removeClass("--pas_fase3")
		.removeClass("--tip_fase3");
	$(".background").removeClass("--invisible").addClass("--her_fase3");
	$(".background__animation").addClass("--invisible");
  $(".background__animation2").addClass("--invisible");

	var highestTimeoutId = setTimeout(";");
	for (var i = 0; i < highestTimeoutId; i++) {
		clearTimeout(i);
	}
}
function btn_tip_f3() {
	$("#my_audio_f3_1").trigger('pause');
	$("#my_audio_f3").trigger('pause');

	$(".--pas_fase3").addClass("--invisible");

	$("#person5").addClass("--invisible");
	$("#person6").addClass("--invisible");
	$("#person7").addClass("--invisible");

	$(".obj_f3").addClass("--invisible");
	$(".herr_f3").addClass("--invisible");
	$(".tip_f3").addClass("--invisible");

	$(".--pas_2_fase3").addClass("--invisible");
	$(".--her_fase3").addClass("--invisible");
	$(".--obj_fase3_postits").addClass("--invisible");
	$(".--tip_fase3").removeClass("--invisible");

	// background por pantalla
	$(".background").removeClass("--type009")
		.removeClass("--obj_fase3_postits")
		.removeClass("--pas_fase3")
		.removeClass("--her_fase3");
	$(".background").removeClass("--invisible").addClass("--tip_fase3");
	$(".background__animation").addClass("--invisible");
  $(".background__animation2").addClass("--invisible");

	var highestTimeoutId = setTimeout(";");
	for (var i = 0; i < highestTimeoutId; i++) {
		clearTimeout(i);
	}
}

//Audios y textos
$(function () {
	var is_playing;

	$("#play_f3_bienvenida").click(function (e) {
		var original = 'Hola, mi nombre es Pastor. Soy un ganadero de la región. Mis vaquitas y yo proveemos de leche a todos los vecinos del sector. Por ahí se rumora que aquí producimos la mejor leche de todo el país. No sé si sea cierto, lo único que sé, es que lo que hacemos, lo hacemos con mucho amor.';
		var text1 = 'Les cuento que yo también hago parte de esta metodología, pues muchas veces, las obras afectan espacios que utilizamos aquí en la finca para mis animalitos, entonces trabajamos de manera conjunta para reducir los problemas y los riesgos. Como dicen por ahí, para que nadie salga perjudicado.';
		var text1_1 = 'Voy a contarles un poco sobre la fase que más me gusta, se llama: ¡Geografías humanas! Ahí lo que hacemos es caracterizar el espacio físico y humano donde se realizará el proyecto vial, para identificar factores de riesgo asociados a la ocupación y uso del espacio.';
		var text1_2 = 'Anoche estuve preparando algunas notas adhesivas para ustedes, con datos importantes que deben tener en cuenta. Ahora, los dejo con William y Andrés, para que les cuenten un poco más al respecto.';
		
		//$("#play_f3_bienvenida").html('Reproduciendo...');

		if (e.target.tagName !== "AUDIO") {
			if (is_playing) {
				$('#change_f3_1').html(original);
				$('#my_audio_f3_1')[0].load();
				$('#my_audio_f3_1')[0].play();

				setTimeout(function () {
					$('#change_f3_1').html(text1);
				}, 19000);
				setTimeout(function () {
					$('#change_f3_1').html(text1_1);
				}, 36000);	
				setTimeout(function () {
					$('#change_f3_1').html(text1_2);
				}, 52000);				
				$('#change_f3_1').html(original);
				is_playing = true;

			} else {
				$('#change_f3_1').html(original);
				$('#my_audio_f3_1')[0].load();
				$('#my_audio_f3_1')[0].play();
				is_playing = true;
				setTimeout(function () {
					$('#change_f3_1').html(text1);
				}, 19000);
				setTimeout(function () {
					$('#change_f3_1').html(text1_1);
				}, 36000);	
				setTimeout(function () {
					$('#change_f3_1').html(text1_2);
				}, 52000);				
				$('#change_f3_1').html(original);
				is_playing = true;
			}
		} else {
			e.stopPropagtion()
		}
	});
	$("#my_audio_f3_1").on("ended", function () {
		//$("#play_f3_bienvenida").html('Reproducir Audio');
		$(".--obj_fase3_postits").removeClass("--invisible");
		$(".--type006").addClass("--invisible");
		$(".obj_f3").addClass("--invisible");
		$(".--obj_fase3").addClass("--invisible");
		//   $(".background").addClass("--type009");

	});

	$("#play_paso_f3").click(function (e) {
		var original = '¡Bienvenido de vuelta! Mi nombre es William. Trabajo con Andrés repartiendo la leche de Pastor por toda la vereda. Nosotros somos los encargados de mostrarte las instrucciones que debes seguir para desarrollar esta fase.';
		var text1 = 'Ambos diseñamos una hoja de ruta, a manera de mapa, que esperamos sea de gran ayuda… No olvides dar clic sobre cada estación, para conocer en qué consisten los pasos a seguir.';


		//$("#play_paso_f3").html('Reproduciendo...');

		if (e.target.tagName !== "AUDIO") {
			if (is_playing) {
				$('#change_f3_2').html(original);
				$('#my_audio_f3')[0].load();
				$('#my_audio_f3')[0].play();

				setTimeout(function () {
					$('#change_f3_2').html(text1);
				}, 15000);
				$('#change_f3_2').html(original);
				is_playing = true;

			} else {
				$('#change_f3_2').html(original);
				$('#my_audio_f3')[0].load();
				$('#my_audio_f3')[0].play();
				is_playing = true;
				setTimeout(function () {
					$('#change_f3_2').html(text1);
				}, 15000);

				$('#change_f3_2').html(original);
				is_playing = true;
			}
		} else {
			e.stopPropagtion()
		}
	});
	$("#my_audio_f3").on("ended", function () {
		//$("#play_paso_f3").html('Reproducir Audio');
		$(".--pas_fase3").addClass("--invisible");
		$(".--pas_2_fase3").removeClass("--invisible");
		$(".background").removeClass("--type009");
		$(".background").addClass("--obj_fase3_postits");
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
function globoAction4(){
    $("#globo4__description").removeClass("--invisible");
}