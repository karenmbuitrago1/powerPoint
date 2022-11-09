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
	$(".background").removeClass("--invisible").addClass("--type016");
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
	$(".background").removeClass("--type016")
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
	$(".background").removeClass("--type016")
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
	$(".background").removeClass("--type016")
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
		var original = '¡Hola! Mi nombre es Edilberto. Soy costurero desde muy pequeño.Ya sabe, cualquier arreglo, enmendadura o corte que necesite, nada más me dice. Al igual que mis compañeros, yo también hago parte de esta metodología.';
		var text1 = 'Hoy me han encargado la tarea de contarle en qué consiste esta última fase llamada ¡Vallas por la vida! Pues bien, lo que hacemos aquí es recoger los frutos de lo que hemos caminado. Revisando las cosas buenas y las que podemos mejorar.';
		var text1_1 = 'Así, podemos perfeccionar nuestra práctica. Esto es como la costura su merced, se trata de hilar colectivamente y buscar los mejores modelos, a partir del ensayo y el error.';
		var text1_2 = 'Anoche luego de tejer una manta para los niños y niñas del Jardín infantil del barrio, escribí unas notas adhesivas para usted, con datos importantes que debe tener en cuenta en esta fase. Ahora, voy a llamar a la señora Josefina para que le cuente un poco más al respecto. Un gusto saludarle.';

		$("#play_f4_bienvenida").html('Reproduciendo...');

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
				}, 30000);
				setTimeout(function () {
					$('#change_f4_1').html(text1_2);
				}, 45000);
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
				}, 30000);
				setTimeout(function () {
					$('#change_f4_1').html(text1_2);
				}, 45000);
				$('#change_f4_1').html(original);
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
		//   $(".background").addClass("--type016");

	});

	$("#play_paso_f4").click(function (e) {
		var original = '¡Bienvenido de nuevo! Mi nombre es Josefina. Soy empresaria automotriz. Una de las sedes de mi negocio queda aquí en el barrio, así que ya sabe, si tiene alguna falla con su vehículo, no dude en contactarme.';
		var text1 = 'Como parte de esta iniciativa, tengo la responsabilidad de mostrarle los pasos que debe seguir para desarrollar esta última fase. Diseñé un gráfico que espero sea de ayuda. Me despido. Cualquier cosa que necesite, estamos para servirle.';


		$("#play_paso_f4").html('Reproduciendo...');

		if (e.target.tagName !== "AUDIO") {
			if (is_playing) {
				$('#change_f4_2').html(original);
				$('#my_audio_f4')[0].load();
				$('#my_audio_f4')[0].play();

				setTimeout(function () {
					$('#change_f4_2').html(text1);
				}, 14000);
				$('#change_f4_2').html(original);
				is_playing = true;

			} else {
				$('#change_f4_2').html(original);
				$('#my_audio_f4')[0].load();
				$('#my_audio_f4')[0].play();
				is_playing = true;
				setTimeout(function () {
					$('#change_f4_2').html(text1);
				}, 14000);

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
		$(".background").removeClass("--type016");
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