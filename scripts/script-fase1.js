//active
$('.phase__text').click(function () {
  if ($(this).hasClass('phase__text_active')) {
    $('.phase__text').removeClass('phase__text_active')
  } else {
    $('.phase__text').removeClass('phase__text_active')
    $(this).addClass('phase__text_active')
  }
});


document.getElementById("btn_obj_f1").addEventListener("click", btn_obj_f1, false);
document.getElementById("btn_pas_f1").addEventListener("click", btn_pas_f1, false);
document.getElementById("btn_her_f1").addEventListener("click", btn_her_f1, false);
document.getElementById("btn_tip_f1").addEventListener("click", btn_tip_f1, false);

// Cambio de Botones

function btn_obj_f1() {

  // Audio
  $("#my_audio_f1").trigger('pause');
  $("#my_audio_f1_2").trigger('pause');

  //$("#play_f1_bienvenida").html('Reproducir Audio');

  // Personas hablantes y dialogos
  $(".obj_f1").removeClass("--invisible");
  $(".herr_f1").addClass("--invisible");
  $(".tip_f1").addClass("--invisible");

  $("#person6").addClass("--invisible");
  $("#person7").addClass("--invisible");
  $("#person9").removeClass("--invisible");
  $("#person5").removeClass("--invisible");
  $("#person10").addClass("--invisible");
  $("#person20").addClass("--invisible");

  // Contenidos por pantalla
  $(".--pas_fase1").addClass("--invisible");
  $(".--pas_2_fase1").addClass("--invisible");
  $(".--her_fase1").addClass("--invisible");
  $(".--obj_fase1_postits").addClass("--invisible");
  $(".--tip_fase1").addClass("--invisible");

  // background por pantalla
  $(".background").removeClass("--pas_fase1")
    .removeClass("--obj_fase1_postits")
    .removeClass("--her_fase1")
    .removeClass("--tip_fase1");
  $(".background").removeClass("--invisible").addClass("--type004");
  $(".background__image").removeClass("--invisible");
  $(".--pas_phase1").addClass("--invisible");


  var highestTimeoutId = setTimeout(";");
  for (var i = 0; i < highestTimeoutId; i++) {
    clearTimeout(i);
  }
}

function btn_pas_f1() {
  $("#my_audio_f1_1").trigger('pause');
  $("#my_audio_f1_2").trigger('pause');

  //$("#play_paso_f1").html('Reproducir Audio');

  // Personas hablantes y dialogos
  $("#person5").addClass("--invisible");
  $("#person6").removeClass("--invisible");
  $("#person7").removeClass("--invisible");
  $("#person9").addClass("--invisible");
  $("#person10").addClass("--invisible");
  $("#person20").removeClass("--invisible");
  $(".obj_f1").addClass("--invisible");
  $(".herr_f1").addClass("--invisible");

  //contenidos por pantalla
  $(".--pas_fase1").removeClass("--invisible");
  $(".--obj_fase1_postits").addClass("--invisible");
  $(".--pas_2_fase1").addClass("--invisible");
  $(".--her_fase1").addClass("--invisible");
  $(".--tip_fase1").addClass("--invisible");

  // background por pantalla
  $(".background").removeClass("--obj_fase1_postits")
    .removeClass("--her_fase1")
    .removeClass("--tip_fase1");
  $(".background").removeClass("--invisible").addClass("--type004");
  $(".background__image").removeClass("--invisible");


  var highestTimeoutId = setTimeout(";");
  for (var i = 0; i < highestTimeoutId; i++) {
    clearTimeout(i);
  }
}
function btn_her_f1() {
  $("#my_audio_f1_1").trigger('pause');
  $("#my_audio_f1").trigger('pause');
  $("#my_audio_f1_2").trigger('pause');


  $(".--pas_fase1").addClass("--invisible");
  $("#person5").addClass("--invisible");
  $("#person6").addClass("--invisible");
  $("#person7").addClass("--invisible");
  $("#person9").addClass("--invisible");
  $("#person10").addClass("--invisible");
  $("#person20").addClass("--invisible");
  $(".obj_f1").addClass("--invisible");

  $(".--pas_2_fase1").addClass("--invisible");
  $(".--her_fase1").removeClass("--invisible");
  $(".--obj_fase1_postits").addClass("--invisible");
  $(".--tip_fase1").addClass("--invisible");

  // background por pantalla
  $(".background").removeClass("--type004")
    .removeClass("--obj_fase1_postits")
    .removeClass("--pas_fase1")
    .removeClass("--tip_fase1");
  $(".background").removeClass("--invisible").addClass("--her_fase1");
  $(".background__image").addClass("--invisible");

  var highestTimeoutId = setTimeout(";");
  for (var i = 0; i < highestTimeoutId; i++) {
    clearTimeout(i);
  }
}
function btn_tip_f1() {
  $("#my_audio_f1_1").trigger('pause');
  $("#my_audio_f1").trigger('pause');
  $("#my_audio_f1_2").trigger('pause');

  $(".--pas_fase1").addClass("--invisible");

  $("#person5").addClass("--invisible");
  $("#person6").addClass("--invisible");
  $("#person7").addClass("--invisible");
  $("#person9").addClass("--invisible");
  $("#person20").addClass("--invisible");
  $("#person10").removeClass("--invisible");

  $(".obj_f1").addClass("--invisible");
  $(".herr_f1").addClass("--invisible");
  $(".tip_f1").addClass("--invisible");

  $(".--pas_2_fase1").addClass("--invisible");
  $(".--her_fase1").addClass("--invisible");
  $(".--obj_fase1_postits").addClass("--invisible");
  $(".--tip_fase1").removeClass("--invisible");

  // background por pantalla
  $(".background").removeClass("--type004")
    .removeClass("--obj_fase1_postits")
    .removeClass("--pas_fase1")
    .removeClass("--her_fase1");
  $(".background").removeClass("--invisible").addClass("--tip_fase1");
  $(".background__image").addClass("--invisible");

  var highestTimeoutId = setTimeout(";");
  for (var i = 0; i < highestTimeoutId; i++) {
    clearTimeout(i);
  }
}
//Audios y textos
$(function () {
  var is_playing;

  $("#play_f1_bienvenida").click(function (e) {
    var original = '??Hola! Bienvenido a la primera fase de nuestra metodolog??a. Mi nombre es Ana, soy lideresa social del territorio. Tambi??n nos acompa??a Pedro, uno de los constructores que est?? desarrollando un proyecto vial en esta zona.';
    var text1 = 'Nos hemos reunido aqu?? para contarte en qu?? consiste esta fase que hemos denominado ??Preconstrucci??n y planificaci??n!';
    var text1_1 = '??As?? es! Esta fase tiene como prop??sito conformar el equipo que, desde las concesiones, implementar?? la metodolog??a, atendiendo a las capacidades y saberes requeridos, para lo cual estimamos un tiempo de un mes.';
    var text1_2 = 'Ana y yo hemos preparado algunas notas adhesivas para ti, con datos importantes que debes tener en cuenta en esta primera fase. Ahora, te dejamos con Alirio y Marcela para que te cuenten un poco m??s al respecto.';

    //$("#play_f1_bienvenida").html('Reproduciendo...');

    if (e.target.tagName !== "AUDIO") {
      if (is_playing) {
        $('#change_f1_1').html(original);
        $('#my_audio_f1_1')[0].load();
        $('#my_audio_f1_1')[0].play();

        setTimeout(function () {
          $('#change_f1_1').html(text1);
        }, 15000);
        setTimeout(function () {
          $('#change_f1_1').html(text1_1);
        }, 22000);
        setTimeout(function () {
          $('#change_f1_1').html(text1_2);
        }, 34000);
        $('#change_f1_1').html(original);
        is_playing = true;

      } else {
        $('#change_f1_1').html(original);
        $('#my_audio_f1_1')[0].load();
        $('#my_audio_f1_1')[0].play();
        is_playing = true;
        setTimeout(function () {
          $('#change_f1_1').html(text1);
        }, 15000);
        setTimeout(function () {
          $('#change_f1_1').html(text1_1);
        }, 22000);
        setTimeout(function () {
          $('#change_f1_1').html(text1_2);
        }, 34000);
        $('#change_f1_1').html(original);
        is_playing = true;
      }
    } else {
      e.stopPropagtion()
    }
  });
  $("#my_audio_f1_1").on("ended", function () {
    //$("#play_f1_bienvenida").html('Reproducir Audio');
    $(".--obj_fase1_postits").removeClass("--invisible");
    $(".--type004").addClass("--invisible");
    $(".obj_f1").addClass("--invisible");
    $(".--obj_fase1").addClass("--invisible");
    $("#person9").addClass("--invisible");

  });

  $("#play_paso_f1").click(function (e) {
    var original = '??Bienvenido de vuelta! Mi nombre es Alirio, soy un l??der afro de este territorio. Hoy estoy con mi compa??era Marcela, que trabaja junto con Pedro en el proyecto vial.';
    var text1 = 'Nosotros somos los encargados de mostrarte las instrucciones que debes seguir para desarrollar esta fase. Ambos dise??amos unas fichas con la hoja de ruta que esperamos sean de gran ayuda??? ??Nos ayudar??as a organizarlas? ';
    var text1_1 = 'Atendiendo a lo que te contaron Ana y Pedro ??cu??l crees que es el orden de los pasos que se deben seguir para implementar esta fase? ??Int??ntalo! Arrastra cada una de las fichas al paso que corresponda';


    //$("#play_paso_f1").html('Reproduciendo...');

    if (e.target.tagName !== "AUDIO") {
      if (is_playing) {
        $('#change_f1_2').html(original);
        $('#my_audio_f1_2')[0].load();
        $('#my_audio_f1_2')[0].play();

        setTimeout(function () {
          $('#change_f1_2').html(text1);
        }, 9000);
        setTimeout(function () {
          $('#change_f1_2').html(text1_1);
        }, 21000);
        $('#change_f1_2').html(original);
        is_playing = true;

      } else {
        $('#change_f1_1').html(original);
        $('#my_audio_f1_2')[0].load();
        $('#my_audio_f1_2')[0].play();
        is_playing = true;
        setTimeout(function () {
          $('#change_f1_2').html(text1);
        }, 9000);
        setTimeout(function () {
          $('#change_f1_2').html(text1_1);
        }, 21000);

        $('#change_f1_1').html(original);
        is_playing = true;
      }
    } else {
      e.stopPropagtion()
    }
  });
  $("#my_audio_f1_2").on("ended", function () {
    //$("#play_paso_f1").html('Reproducir Audio');
    $(".--pas_fase1").addClass("--invisible");
    $(".--pas_2_fase1").removeClass("--invisible");
    $("#person9").addClass("--invisible");
    $("#person20").addClass("--invisible");

  });

});


//Juegos de Arrastre
document.addEventListener('DOMContentLoaded', (event) => {
  const draggableListItems = document.querySelectorAll('.draggable-list li');
  const endMessage = document.getElementById('endMessage');

  // current phrase being dragged
  let selectedId;

  // target phrase
  let dropTargetId;

  // counter for correct phrases
  let matchingCounter = 0;

  addEventListeners();

  function dragStart() {
    selectedId = this.id;
  }

  function dragEnter() {
    this.classList.add('over');
  }

  function dragLeave() {
    this.classList.remove('over');
  }

  function dragOver(ev) {
    ev.preventDefault();
  }

  function dragDrop() {
    dropTargetId = this.id;

    if (checkForMatch(selectedId, dropTargetId)) {
      document.getElementById(selectedId).style.display = 'none';
      document.getElementById(dropTargetId).style.display = 'none';
      matchingCounter++;
    } else if (checkForMatch2(selectedId, dropTargetId)) {
      document.getElementById(selectedId).style.display = 'none';
      document.getElementById(dropTargetId).style.display = 'none';
      matchingCounter++;
    }

    if (matchingCounter === 4) {
      endMessage.style.display = 'block';
    }

    this.classList.remove('over');
  }

  function checkForMatch(selected, dropTarget) {
    switch (selected) {
      case 'e1':
        return dropTarget === 's1' ? true : false;

      case 'e2':
        return dropTarget === 's2' ? true : false;

      case 'e3':
        return dropTarget === 's3' ? true : false;

      case 'e4':
        return dropTarget === 's4' ? true : false;

      default:
        return false;
    }
  }

  function checkForMatch2(selected, dropTarget) {
    switch (selected) {
      case 's1':
        return dropTarget === 'e1' ? true : false;

      case 's2':
        return dropTarget === 'e2' ? true : false;

      case 's3':
        return dropTarget === 'e3' ? true : false;

      case 's4':
        return dropTarget === 'e4' ? true : false;

      default:
        return false;
    }
  }

  function addEventListeners() {
    draggableListItems.forEach(item => {
      item.addEventListener('dragstart', dragStart);
      item.addEventListener('dragenter', dragEnter);
      item.addEventListener('drop', dragDrop);
      item.addEventListener('dragover', dragOver);
      item.addEventListener('dragleave', dragLeave);
    })
  }
});