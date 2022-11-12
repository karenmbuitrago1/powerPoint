//active
$('.phase__text').click(function () {
	if ($(this).hasClass('phase__text_active')) {
		$('.phase__text').removeClass('phase__text_active')
	} else {
		$('.phase__text').removeClass('phase__text_active')
		$(this).addClass('phase__text_active')
	}
});

document.getElementById("btn_obj_f4").addEventListener("click", btn_obj_f4, false);
document.getElementById("btn_pas_f4").addEventListener("click", btn_pas_f4, false);
document.getElementById("btn_her_f4").addEventListener("click", btn_her_f4, false);
document.getElementById("btn_tip_f4").addEventListener("click", btn_tip_f4, false);

// Acciones botones objetivo
function btn_obj_f4() {

	// Audio
	$("#my_audio_f4").trigger('pause');
	$("#play_f4_bienvenida").html('Reproducir Audio');

	// Personas hablantes y dialogos
	$(".obj_f4").removeClass("--invisible");
	$(".herr_f4").addClass("--invisible");
	$(".tip_f4").addClass("--invisible");

	$("#person6").addClass("--invisible");
	$("#person7").addClass("--invisible");
	$("#person5").removeClass("--invisible");

	// Contenidos por pantalla
	$(".--pas_fase4").addClass("--invisible");
	$(".--pas_2_fase4").addClass("--invisible");
	$(".--her_fase4").addClass("--invisible");
	$(".--obj_fase4_postits").addClass("--invisible");
	$(".--tip_fase4").addClass("--invisible");

	// background por pantalla
	$(".background").removeClass("--pas_fase4")
		.removeClass("--obj_fase4_postits")
		.removeClass("--her_fase4")
		.removeClass("--tip_fase4");
	$(".background").removeClass("--invisible").addClass("--type008");
	$(".background__image").removeClass("--invisible");


	var highestTimeoutId = setTimeout(";");
	for (var i = 0; i < highestTimeoutId; i++) {
		clearTimeout(i);
	}
}

function btn_pas_f4() {
	$("#my_audio_f4_1").trigger('pause');
	$("#play_paso_f4").html('Reproducir Audio');

	// Personas hablantes y dialogos
	$("#person5").addClass("--invisible");
	$("#person6").removeClass("--invisible");
	$("#person7").removeClass("--invisible");
	$(".obj_f4").addClass("--invisible");
	$(".herr_f4").addClass("--invisible");

	//contenidos por pantalla
	$(".--pas_fase4").removeClass("--invisible");
	$(".--obj_fase4_postits").addClass("--invisible");
	$(".--pas_2_fase4").addClass("--invisible");
	$(".--her_fase4").addClass("--invisible");
	$(".--tip_fase4").addClass("--invisible");

	// background por pantalla
	$(".background").removeClass("--type008")
		.removeClass("--obj_fase4_postits")
		.removeClass("--her_fase4")
		.removeClass("--tip_fase4");
	$(".background").removeClass("--invisible").addClass("--pas_fase4");
	$(".background__image").removeClass("--invisible");


	var highestTimeoutId = setTimeout(";");
	for (var i = 0; i < highestTimeoutId; i++) {
		clearTimeout(i);
	}
}
function btn_her_f4() {
	$("#my_audio_f4_1").trigger('pause');
	$("#my_audio_f4").trigger('pause');

	$(".--pas_fase4").addClass("--invisible");
	$("#person5").addClass("--invisible");
	$("#person6").addClass("--invisible");
	$("#person7").addClass("--invisible");
	$(".obj_f4").addClass("--invisible");

	$(".--pas_2_fase4").addClass("--invisible");
	$(".--her_fase4").removeClass("--invisible");
	$(".--obj_fase4_postits").addClass("--invisible");
	$(".--tip_fase4").addClass("--invisible");

	// background por pantalla
	$(".background").removeClass("--type008")
		.removeClass("--obj_fase4_postits")
		.removeClass("--pas_fase4")
		.removeClass("--tip_fase4");
	$(".background").removeClass("--invisible").addClass("--her_fase4");
	$(".background__image").addClass("--invisible");

	var highestTimeoutId = setTimeout(";");
	for (var i = 0; i < highestTimeoutId; i++) {
		clearTimeout(i);
	}
}
function btn_tip_f4() {
	$("#my_audio_f4_1").trigger('pause');
	$("#my_audio_f4").trigger('pause');

	$(".--pas_fase4").addClass("--invisible");

	$("#person5").addClass("--invisible");
	$("#person6").addClass("--invisible");
	$("#person7").addClass("--invisible");

	$(".obj_f4").addClass("--invisible");
	$(".herr_f4").addClass("--invisible");
	$(".tip_f4").addClass("--invisible");

	$(".--pas_2_fase4").addClass("--invisible");
	$(".--her_fase4").addClass("--invisible");
	$(".--obj_fase4_postits").addClass("--invisible");
	$(".--tip_fase4").removeClass("--invisible");

	// background por pantalla
	$(".background").removeClass("--type008")
		.removeClass("--obj_fase4_postits")
		.removeClass("--pas_fase4")
		.removeClass("--her_fase4");
	$(".background").removeClass("--invisible").addClass("--tip_fase4");
	$(".background__image").addClass("--invisible");

	var highestTimeoutId = setTimeout(";");
	for (var i = 0; i < highestTimeoutId; i++) {
		clearTimeout(i);
	}
}

//Audios y textos
$(function () {
	var is_playing;

	$("#play_f4_bienvenida").click(function (e) {
		var original = '¡Hola! Mi nombre es Linda. Soy la representante del grupo de teatro Teloneros de vida, conformado por más de veinte jóvenes de la zona. Semanalmente, nos reunimos en el parque del barrio para realizar nuestros ensayos. ';
		var text1 = 'Hace unos días nos enteramos que se iba a realizar un proyecto vial en el espacio en que ensayamos, lo cual nos preocupó mucho. Sin embargo, Jacinta, la directora de la Junta de Acción Comunal, nos habló de una metodología';
		var text1_1 = ' ...que iba a implementarse con la comunidad, para mitigar las afectaciones de la obra y nos invitó a participar en una reunión para empaparnos más del tema. ¡Fue así como nos acercamos a la metodología y nos vinculamos a ella!';
		var text1_2 = 'Hoy nos hemos reunido aquí, antes del ensayo, para compartirte en qué consiste esta cuarta fase denominada ¡Planos de acción y prevención! Esta fase tiene como propósito construir y aplicar un instrumento que nos permita identificar posibles factores';
		var text1_3 = '...de riesgo derivados del proyecto vial, por ejemplo esos que tienen que ver con la seguridad, el medio ambiente, la salud, la movilidad, entre otros.';
		var text1_4 ='El grupo y yo hemos preparado algunas notas adhesivas para ti, con datos importantes que debes tener en cuenta en esta cuarta fase. Ahora, te dejamos con el colectivo Buen vivir, para que te cuenten un poco más al respecto.'

		$("#play_f4_bienvenida").html('Reproduciendo...') ;

		if (e.target.tagName !== "AUDIO") {
			if (is_playing) {
				$('#change_f4_1').html(original);
				$('#my_audio_f4_1')[0].load();
				$('#my_audio_f4_1')[0].play();

				setTimeout(function () {
					$('#change_f4_1').html(text1);
				}, 15000);
				setTimeout(function () {
					$('#change_f4_1').html(text1_1);
				}, 27000);
				setTimeout(function () {
					$('#change_f4_1').html(text1_2);
				}, 40000);
				$('#change_f4_1').html(original);
				setTimeout(function () {
					$('#change_f4_1').html(text1_3);
				}, 54000);
				setTimeout(function () {
					$('#change_f4_1').html(text1_4);
				}, 63000);
				$('#change_f4_1').html(original);
				is_playing = true;

			} else {
				$('#change_f4_1').html(original);
				$('#my_audio_f4_1')[0].load();
				$('#my_audio_f4_1')[0].play();
				is_playing = true;
				setTimeout(function () {
					$('#change_f4_1').html(text1);
				}, 15000);
				setTimeout(function () {
					$('#change_f4_1').html(text1_1);
				}, 27000);
				setTimeout(function () {
					$('#change_f4_1').html(text1_2);
				}, 40000);
				$('#change_f4_1').html(original);
				setTimeout(function () {
					$('#change_f4_1').html(text1_3);
				}, 54000);
				setTimeout(function () {
					$('#change_f4_1').html(text1_4);
				}, 63000);
				$('#change_f4_1').html(original);
				is_playing = true;
				is_playing = true;
			}
		} else {
			e.stopPropagtion()
		}
	});
	$("#my_audio_f4_1").on("ended", function () {
		$("#play_f4_bienvenida").html('Reproducir Audio');
		$(".--obj_fase4_postits").removeClass("--invisible");
		$(".--type006").addClass("--invisible");
		$(".obj_f4").addClass("--invisible");
		$(".--obj_fase4").addClass("--invisible");
		//   $(".background").addClass("--type008");

	});

	$("#play_paso_f4").click(function (e) {
		var original = '¡Bienvenido! Mi nombre es Nahuel, soy un sabedor de la comunidad indígena wayuu. Hoy estoy reunido con mi comunidad para mostrarte los pasos que debes seguir para desarrollar esta fase. Todos juntos, a partir de un diálogo de saberes, diseñamos esta hoja de ruta con fichas de memoria… El propósito es emparejar cada fase con su descripción ¡Adelante!';
		


		$("#play_paso_f4").html('Reproduciendo...');

		if (e.target.tagName !== "AUDIO") {
			if (is_playing) {
				$('#change_f4_2').html(original);
				$('#my_audio_f4')[0].load();
				$('#my_audio_f4')[0].play();

				is_playing = true;

			} else {
				$('#change_f4_2').html(original);
				$('#my_audio_f4')[0].load();
				$('#my_audio_f4')[0].play();
				is_playing = true;


				$('#change_f4_2').html(original);
				is_playing = true;
			}
		} else {
			e.stopPropagtion()
		}
	});
	$("#my_audio_f4").on("ended", function () {
		$("#play_paso_f4").html('Reproducir Audio');
		$(".--pas_fase4").addClass("--invisible");
		$(".--pas_2_fase4").removeClass("--invisible");
		$(".background").removeClass("--type008");
		$(".background").addClass("--obj_fase4_postits");
	});

});

// Cartas memoria
const cards = document.querySelectorAll('.memory__card');

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

function flipCard() {
  if (lockBoard) return;
  if (this === firstCard) return;

  this.classList.add('flip');

  if (!hasFlippedCard) {
    // first click
    hasFlippedCard = true;
    firstCard = this;

    return;
  }

  // second click
  secondCard = this;

  checkForMatch();
}

function checkForMatch() {
  let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;

  isMatch ? disableCards() : unflipCards();
}

function disableCards() {
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);

  resetBoard();
}

function unflipCards() {
  lockBoard = true;

  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');

    resetBoard();
  }, 1500);
}

function resetBoard() {
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}

(function shuffle() {
  cards.forEach(card => {
    let randomPos = Math.floor(Math.random() * 12);
    card.style.order = randomPos;
  });
})();

cards.forEach(card => card.addEventListener('click', flipCard));