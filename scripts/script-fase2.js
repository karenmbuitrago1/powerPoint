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
	$("#btn_her_f2 > .phase__text").removeClass("phase__text_active")
	$("#btn_tip_f2 > .phase__text").removeClass("phase__text_active")
	$("#btn_obj_f2 > .phase__text").addClass("phase__text_active")
	$("#btn_pas_f2 > .phase__text").removeClass("phase__text_active")

	$("#next-f2-obj_2").addClass("--invisible");
	$("#next-f2-obj").removeClass("--invisible");
	$("#next-f2-pas").addClass("--invisible");
	$("#next-f2-her").addClass("--invisible");
	$("#next-f2-tip").addClass("--invisible");
	$("#next-f2-pas_2").addClass("--invisible");

	// Audio
	$("#my_audio_f2").trigger('pause');
	//$("#play_f2_bienvenida").html('Reproducir Audio');

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
function btn_obj_f2_2() {
	$("#btn_her_f2 > .phase__text").removeClass("phase__text_active")
	$("#btn_tip_f2 > .phase__text").removeClass("phase__text_active")
	$("#btn_obj_f2 > .phase__text").addClass("phase__text_active")
	$("#btn_pas_f2 > .phase__text").removeClass("phase__text_active")

	$("#next-f2-obj_2").removeClass("--invisible");
	$("#next-f2-obj").addClass("--invisible");
	$("#next-f2-pas").addClass("--invisible");
	$("#next-f2-her").addClass("--invisible");
	$("#next-f2-tip").addClass("--invisible");
	$("#next-f2-pas_2").addClass("--invisible");


	//$("#play_f2_bienvenida").html('Reproducir Audio');
	$(".--obj_fase2_postits").removeClass("--invisible");
	$(".--type006").addClass("--invisible");
	$(".obj_f2").addClass("--invisible");
	$(".--obj_fase2").addClass("--invisible");
	$(".background").addClass("--type005");
}

function btn_pas_f2() {
	$("#btn_her_f2 > .phase__text").removeClass("phase__text_active")
	$("#btn_tip_f2 > .phase__text").removeClass("phase__text_active")
	$("#btn_obj_f2 > .phase__text").removeClass("phase__text_active")
	$("#btn_pas_f2 > .phase__text").addClass("phase__text_active")

	$("#next-f2-obj_2").addClass("--invisible");
	$("#next-f2-obj").addClass("--invisible");
	$("#next-f2-pas").removeClass("--invisible");
	$("#next-f2-her").addClass("--invisible");
	$("#next-f2-tip").addClass("--invisible");
	$("#next-f2-pas_2").addClass("--invisible");


	$("#my_audio_f2_1").trigger('pause');
	//$("#play_paso_f2").html('Reproducir Audio');

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
	$("#btn_her_f2 > .phase__text").addClass("phase__text_active")
	$("#btn_tip_f2 > .phase__text").removeClass("phase__text_active")
	$("#btn_obj_f2 > .phase__text").removeClass("phase__text_active")
	$("#btn_pas_f2 > .phase__text").removeClass("phase__text_active")

	$("#next-f2-obj_2").addClass("--invisible");
	$("#next-f2-obj").addClass("--invisible");
	$("#next-f2-pas").addClass("--invisible");
	$("#next-f2-her").removeClass("--invisible");
	$("#next-f2-tip").addClass("--invisible");
	$("#next-f2-pas_2").addClass("--invisible");


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
function btn_pas_f2_2() {


	$("#next-f2-obj_2").addClass("--invisible");
	$("#next-f2-obj").addClass("--invisible");
	$("#next-f2-pas").addClass("--invisible");
	$("#next-f2-pas_2").removeClass("--invisible");
	$("#next-f2-her").addClass("--invisible");
	$("#next-f2-tip").addClass("--invisible");

	// $("#play_paso_f2").html('Reproducir Audio');
	$(".--pas_fase2").addClass("--invisible");
	$("#person9").addClass("--invisible");
	$(".--pas_2_fase2").removeClass("--invisible");
	$(".background").removeClass("--type005");
	$(".background").removeClass("--type006");
	$(".background").addClass("--obj_fase2_postits");
}

function btn_tip_f2() {
	$("#btn_her_f2 > .phase__text").removeClass("phase__text_active")
	$("#btn_tip_f2 > div >.phase__text").addClass("phase__text_active")
	$("#btn_obj_f2 > .phase__text").removeClass("phase__text_active")
	$("#btn_pas_f2 > .phase__text").removeClass("phase__text_active")

	$("#next-f2-obj_2").addClass("--invisible");
	$("#next-f2-obj").addClass("--invisible");
	$("#next-f2-pas").addClass("--invisible");
	$("#next-f2-pas_2").addClass("--invisible");
	$("#next-f2-her").addClass("--invisible");
	$("#next-f2-tip").removeClass("--invisible");

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
$(function () {
	var is_playing;

	$("#play_f2_bienvenida").click(function (e) {
		var original = 'Me alegra que estén tan participativos hoy, pero vamos a pedir la palabra. De esta forma, garantizamos que todos nos escuchemos por igual. Para continuar, quiero presentar la segunda fase, denominada ¡La vida en la vía, un asunto de todos!';
		var text1 = 'Esta fase tiene como propósito identificar los actores clave que, dentro de nuestra comunidad y en los diferentes sectores que en ella intervienen, pueden aportar de manera positiva en la implementación de nuestra metodología, favoreciendo la apropiación local y promoviendo la seguridad vial.';
		var text1_1 = 'La Junta de Acción Comunal ha preparado algunas notas adhesivas, con datos importantes que debemos tener en cuenta en esta segunda fase. Ahora, los dejo con Juan y Margarita, que les van a presentar el paso a paso a seguir.';

		//$("#play_f2_bienvenida").html('Reproduciendo...');

		if (e.target.tagName !== "AUDIO") {
			if (is_playing) {
				$('#change_f2_1').html(original);
				$('#my_audio_f2_1')[0].load();
				$('#my_audio_f2_1')[0].play();

				setTimeout(function () {
					$('#change_f2_1').html(text1);
				}, 16000);
				setTimeout(function () {
					$('#change_f2_1').html(text1_1);
				}, 32000);
				$('#change_f2_1').html(original);
				is_playing = true;

			} else {
				$('#change_f2_1').html(original);
				$('#my_audio_f2_1')[0].load();
				$('#my_audio_f2_1')[0].play();
				is_playing = true;
				setTimeout(function () {
					$('#change_f2_1').html(text1);
				}, 16000);
				setTimeout(function () {
					$('#change_f2_1').html(text1_1);
				}, 32000);
				$('#change_f2_1').html(original);
				is_playing = true;
			}
		} else {
			e.stopPropagtion()
		}
	});
	$("#my_audio_f2_1").on("ended", function () {
		btn_obj_f2_2();

	});

	$("#play_paso_f2").click(function (e) {
		var original = '¡Buenos días para todos! Para los que no me conocen yo soy Juan. Vendo jugos de naranja y fruta en las mañanas en la esquina del salón comunal. Por allá los espero. Me acompaña la señorita Margarita, ella es motociclista.';
		var text1 = 'Hoy nos han dado la tarea de mostrarles las instrucciones que deben seguir para desarrollar esta fase. Como soy amante de los rompecabezas, construimos unas fichas con la hoja de ruta. ¡Ayúdennos a armarlas para conocer el paso a paso!';


		//$("#play_paso_f2").html('Reproduciendo...');

		if (e.target.tagName !== "AUDIO") {
			if (is_playing) {
				$('#change_f2_2').html(original);
				$('#my_audio_f2')[0].load();
				$('#my_audio_f2')[0].play();

				setTimeout(function () {
					$('#change_f2_2').html(text1);
				}, 14000);
				$('#change_f2_2').html(original);
				is_playing = true;

			} else {
				$('#change_f2_2').html(original);
				$('#my_audio_f2')[0].load();
				$('#my_audio_f2')[0].play();
				is_playing = true;
				setTimeout(function () {
					$('#change_f2_2').html(text1);
				}, 14000);

				$('#change_f2_2').html(original);
				is_playing = true;
			}
		} else {
			e.stopPropagtion()
		}
	});
	$("#my_audio_f2").on("ended", function () {
		btn_pas_f2_2();
	});

	jQuery(document).ready(function ($) {

		var drag_items = $('.dnd-image-drag .drag');
		var drop_items = $('.dnd-image-drag').find('.drop');

		//set up drag and drop event listeners
		function setUpEventListeners() {

			drag_items.each(function () {
				var thisDrag = $(this);
				thisDrag[0].addEventListener('dragstart', dragStart);
				thisDrag[0].addEventListener('drag', drag);
				thisDrag[0].addEventListener('dragend', dragEnd);

			});

			drop_items.each(function () {
				var thisDrop = $(this);

				thisDrop[0].addEventListener('dragenter', dragEnter);
				thisDrop[0].addEventListener('dragover', dragOver);
				thisDrop[0].addEventListener('dragleave', dragLeave);
				thisDrop[0].addEventListener('drop', drop);

			});

		}
		setUpEventListeners();

		var dragItem;

		//called as soon as the draggable starts being dragged
		//used to set up data and options


		function dragStart(event) {

			drag = event.target;
			dragItem = event.target;

			//set the effectAllowed for the drag item
			event.dataTransfer.effectAllowed = 'copy';

			var imageSrc = $(dragItem).prop('src');
			var imageHTML = $(dragItem).prop('outerHTML');

			//check for IE (it supports only 'text' or 'URL')
			try {
				event.dataTransfer.setData('text/uri-list', imageSrc);
				event.dataTransfer.setData('text/html', imageHTML);
			} catch (e) {
				event.dataTransfer.setData('text', imageSrc);
			}

			$(drag).addClass('drag-active');

		}

		//called as the draggable enters a droppable 
		//needs to return false to make droppable area valid
		function dragEnter(event) {

			var drop = this;

			//set the drop effect for this zone
			event.dataTransfer.dropEffect = 'copy';
			$(drop).addClass('drop-active');

			event.preventDefault();
			event.stopPropagation();

		}

		//called continually while the draggable is over a droppable 
		//needs to return false to make droppable area valid
		function dragOver(event) {
			var drop = this;

			//set the drop effect for this zone
			event.dataTransfer.dropEffect = 'copy';
			$(drop).addClass('drop-active');

			event.preventDefault();
			event.stopPropagation();
		}

		//called when the draggable was inside a droppable but then left
		function dragLeave(event) {
			var drop = this;
			$(drop).removeClass('drop-active');
		}

		//called continually as the draggable is dragged
		function drag(event) {

		}

		//called when the draggable has been released (either on droppable or not)
		//may be called on invalid or valid drop
		function dragEnd(event) {

			var drag = this;
			$(drag).removeClass('drag-active');

		}

		//called when draggable is dropped on droppable 
		//final process, used to copy data or update UI on successful drop
		function drop(event) {

			drop = this;
			$(drop).removeClass('drop-active');

			var dataList, dataHTML, dataText;

			//collect our data (based on what browser support we have)
			try {
				dataList = event.dataTransfer.getData('text/uri-list');
				dataHTML = event.dataTransfer.getData('text/html');
			} catch (e) {
				;
				dataText = event.dataTransfer.getData('text');
			}

			//we have access to the HTML
			if (dataHTML) {
				$(drop).empty();
				$(drop).prepend(dataHTML);
				var drag = $(drop).find('.drag');
			}
			//only have access to text (old browsers + IE)
			else {
				$(drop).empty();
				$(drop).prepend($(dragItem).clone());
				var drag = $(drop).find('.drag');
			}

			//check if this element is in the right spot
			checkCorrectDrop(drop, drag);
			//see if the final image is complete
			checkCorrectFinalImage();

			event.preventDefault();
			event.stopPropagation();
		}

		//check to see if this dropped item is in the correct spot
		function checkCorrectDrop(drop, drag) {

			//check if this drop is correct
			var imageValue = $(drag).attr('value');
			var dropValue = $(drop).attr('value');

			if (imageValue == dropValue) {
				$(drop).removeClass('incorrect').addClass('correct');
				//make the dropped item no longer draggable (removing the attr)
				$(drag).attr('draggable', 'false');

				//hide the original drag item (set during dragStart), we don't need it anymore
				$(dragItem).hide();

			} else {
				$(drop).removeClass('correct').addClass('incorrect');
			}

		}

		//checks to see if the dropped images are in the correct locations
		function checkCorrectFinalImage() {

			var correctItems = drop_items.filter('.correct');
			if (correctItems.length == drop_items.length) {
				$('.message-container').empty();
				$('.message-container').append('<h3>Lo lograste!!</h3>');
			} else {
				$('.message-container').empty();
			}
		}

		//Reset the drop containers
		$('.reset-button').on('click', function () {
			$('.dnd-image-drag').find('.drop').children('img').remove();
			$('.dnd-image-drag').find('.drop').removeClass('correct incorrect');
			$('.message-container').empty();
			$('.dnd-image-drag .drag').show();
		});

		// check for ie
		var userAgent = window.navigator.userAgent;
		if (userAgent.indexOf('MSIE') != -1) {
			$('.ie-message').show();
		}

	});


	document.getElementById("globo1").addEventListener("click", globoAction1);
	document.getElementById("globo2").addEventListener("click", globoAction2);
	document.getElementById("globo3").addEventListener("click", globoAction3);
	document.getElementById("globo4").addEventListener("click", globoAction4);

	function globoAction1() {
		$("#globo1__description").removeClass("--invisible");
	}
	function globoAction2() {
		$("#globo2__description").removeClass("--invisible");
	}
	function globoAction3() {
		$("#globo3__description").removeClass("--invisible");
	}
	function globoAction4() {
		$("#globo4__description").removeClass("--invisible");
	}


});
