//active
$('.phase__text').click(function(){
    if($(this).hasClass('phase__text_active')){
        $('.phase__text').removeClass('phase__text_active')
    } else {
        $('.phase__text').removeClass('phase__text_active')
        $(this).addClass('phase__text_active')
    }
});


document.getElementById ("btn_obj_f1").addEventListener ("click", btn_obj_f1, false);
document.getElementById ("btn_pas_f1").addEventListener ("click", btn_pas_f1, false);
document.getElementById ("btn_her_f1").addEventListener ("click", btn_her_f1, false);
document.getElementById ("btn_tip_f1").addEventListener ("click", btn_tip_f1, false);

// Cambio de Botones

function btn_obj_f1(){
    $("#my_audio_f1_2").trigger('pause');
    $("#play_f1_bienvenida").html('Reproducir Audio');
    $("#person6").addClass("--invisible");
    $(".--pas_fase1").addClass("--invisible");
    $("#person7").addClass("--invisible"); 
    $("#person4").removeClass("--invisible");
    $("#person5").removeClass("--invisible");
    $(".paso_paso").removeClass("--invisible");
    $(".obj_f1").removeClass("--invisible");
    $(".herr_f1").addClass("--invisible");
    $(".tip_f1").addClass("--invisible");
    $(".--pas_2_fase1").addClass("--invisible");
    $(".background").removeClass("--type005");
    $(".background").removeClass("--type007");
    $(".--her_fase1").addClass("--invisible");

    var highestTimeoutId = setTimeout(";");
    for (var i = 0 ; i < highestTimeoutId ; i++) {
        clearTimeout(i); 
    }
    }

function btn_pas_f1(){
    $("#my_audio_f1_1").trigger('pause');
    $("#play_paso_f1").html('Reproducir Audio');
    $(".--pas_fase1").removeClass("--invisible");
    $("#person4").addClass("--invisible");
    $("#person5").addClass("--invisible"); 
    $("#person6").removeClass("--invisible");
    $("#person7").removeClass("--invisible");
    $(".paso_paso").removeClass("--invisible");
    $(".obj_f1").addClass("--invisible");
    $(".herr_f1").addClass("--invisible");
    $(".tip_f1").addClass("--invisible");
    $(".--pas_2_fase1").addClass("--invisible");
    $(".background").removeClass("--type005");
    $(".background").removeClass("--type007");
    $(".--her_fase1").addClass("--invisible");

    var highestTimeoutId = setTimeout(";");
    for (var i = 0 ; i < highestTimeoutId ; i++) {
        clearTimeout(i); 
    }
    }
    function btn_her_f1(){
        $("#my_audio_f1_1").trigger('pause');
        $("#my_audio_f1_2").trigger('pause');
        $(".--pas_fase1").addClass("--invisible");
        $("#person4").addClass("--invisible");
        $("#person5").addClass("--invisible"); 
        $("#person6").addClass("--invisible");
        $("#person7").addClass("--invisible");
        $(".paso_paso").addClass("--invisible");
        $(".obj_f1").addClass("--invisible");
        $(".herr_f1").addClass("--invisible");
        $(".tip_f1").addClass("--invisible");
        $(".--pas_2_fase1").addClass("--invisible");
        $(".background").removeClass("--type005");
        $(".--her_fase1").removeClass("--invisible");
        $(".background").addClass("--type007");
    
        var highestTimeoutId = setTimeout(";");
        for (var i = 0 ; i < highestTimeoutId ; i++) {
            clearTimeout(i); 
        }
        }


//Audios y textos
$(function() {
    var is_playing;
    
    $("#play_f1_bienvenida").click(function(e) {
      var original = '¡Hola! Bienvenido a la primera fase de nuestra metodología. Mi nombre es Ana, soy lideresa social del territorio. También nos acompaña Pedro, uno de los constructores que está desarrollando un proyecto vial en esta zona.';
      var text1 = 'Nos hemos reunido aquí para contarte en qué consiste esta fase que hemos denominado ¡Preconstrucción y planificación!';
      var text1_1 = '¡Así es! Esta fase tiene como propósito conformar el equipo que, desde las concesiones, implementará la metodología, atendiendo a las capacidades y saberes requeridos, para lo cual estimamos un tiempo de un mes.';
      var text1_2 = 'Ana y yo hemos preparado algunas notas adhesivas para ti, con datos importantes que debes tener en cuenta en esta primera fase. Ahora, te dejamos con Alirio y Marcela para que te cuenten un poco más al respecto.';
      
      $("#play_f1_bienvenida").html('Reproduciendo...');
  
      if(e.target.tagName !== "AUDIO") {
      if (is_playing) {
        $('#change_f1_1').html(original);
        $('#my_audio_f1_1')[0].load();
        $('#my_audio_f1_1')[0].play();
   
         setTimeout(function(){
             $('#change_f1_1').html(text1);
         }, 15000);
         setTimeout(function(){
             $('#change_f1_1').html(text1_1);
         }, 22000);
         setTimeout(function(){
             $('#change_f1_1').html(text1_2);
         }, 34000);
         $('#change_f1_1').html(original);
               is_playing = true;
  
      } else {
        $('#change_f1_1').html(original);
        $('#my_audio_f1_1')[0].load();
        $('#my_audio_f1_1')[0].play();
        is_playing = true;
        setTimeout(function(){
            $('#change_f1_1').html(text1);
        }, 15000);
        setTimeout(function(){
            $('#change_f1_1').html(text1_1);
        }, 22000);
        setTimeout(function(){
            $('#change_f1_1').html(text1_2);
        }, 34000);
        $('#change_f1_1').html(original);
              is_playing = true;
    }
      } else {
        e.stopPropagtion()
      }
    });
    $("#my_audio_f1_1").on("ended", function() {
      $("#play_f1_bienvenida").html('Reproducir Audio');
  });

  $("#play_paso_f1").click(function(e) {
    var original = '¡¡Bienvenido de vuelta! Mi nombre es Alirio, soy un líder afro de este territorio. Hoy estoy con mi compañera Marcela, que trabaja junto con Pedro en el proyecto vial.';
    var text1 = 'Nosotros somos los encargados de mostrarte las instrucciones que debes seguir para desarrollar esta fase. Ambos diseñamos unas fichas con la hoja de ruta que esperamos sean de gran ayuda… ¿Nos ayudarías a organizarlas? ';
    var text1_1 = 'Atendiendo a lo que te contaron Ana y Pedro ¿cuál crees que es el orden de los pasos que se deben seguir para implementar esta fase? ¡Inténtalo! Arrastra cada una de las fichas al paso que corresponda';
    
    
    $("#play_paso_f1").html('Reproduciendo...');

    if(e.target.tagName !== "AUDIO") {
    if (is_playing) {
      $('#change_f1_2').html(original);
      $('#my_audio_f1_2')[0].load();
      $('#my_audio_f1_2')[0].play();
 
       setTimeout(function(){
           $('#change_f1_2').html(text1);
       }, 9000);
       setTimeout(function(){
           $('#change_f1_2').html(text1_1);
       }, 21000);
       $('#change_f1_2').html(original);
             is_playing = true;

    } else {
      $('#change_f1_1').html(original);
      $('#my_audio_f1_2')[0].load();
      $('#my_audio_f1_2')[0].play();
      is_playing = true;
      setTimeout(function(){
          $('#change_f1_2').html(text1);
      }, 9000);
      setTimeout(function(){
          $('#change_f1_2').html(text1_1);
      }, 21000);

      $('#change_f1_1').html(original);
            is_playing = true;
  }
    } else {
      e.stopPropagtion()
    }
  });
  $("#my_audio_f1_2").on("ended", function() {
    $("#play_paso_f1").html('Reproducir Audio');
    $(".--pas_fase1").addClass("--invisible");
    $(".--pas_2_fase1").removeClass("--invisible");
    $(".background").addClass("--type005");
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
      draggableListItems.forEach (item => {
        item.addEventListener('dragstart', dragStart);
        item.addEventListener('dragenter', dragEnter);
        item.addEventListener('drop', dragDrop);
        item.addEventListener('dragover', dragOver);
        item.addEventListener('dragleave', dragLeave);
      })
    }
    });