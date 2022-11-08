//active
$('.phase__text').click(function(){
    if($(this).hasClass('phase__text_active')){
        $('.phase__text').removeClass('phase__text_active')
    } else {
        $('.phase__text').removeClass('phase__text_active')
        $(this).addClass('phase__text_active')
    }
});


document.getElementById ("btn_obj_f8").addEventListener ("click", btn_obj_f8, false);
document.getElementById ("btn_pas_f8").addEventListener ("click", btn_pas_f8, false);
document.getElementById ("btn_her_f8").addEventListener ("click", btn_her_f8, false);
document.getElementById ("btn_tip_f8").addEventListener ("click", btn_tip_f8, false);

// Cambio de Botones

function btn_obj_f8(){
    $("#my_audio_f8").trigger('pause');
    $("#play_f8_bienvenida").html('Reproducir Audio');
    $("#person6").addClass("--invisible");
    $(".--pas_fase8").addClass("--invisible");
    $("#person7").addClass("--invisible"); 
    $("#person4").removeClass("--invisible");
    $("#person5").removeClass("--invisible");
    $(".paso_paso").removeClass("--invisible");
    $(".obj_f8").removeClass("--invisible");
    $(".herr_f8").addClass("--invisible");
    $(".tip_f8").addClass("--invisible");
    $(".--pas_2_fase8").addClass("--invisible");
    $(".background").removeClass("--type016");
    $(".--her_fase8").addClass("--invisible");
    $(".--obj_fase8_postits").addClass("--invisible");
    $(".background").removeClass("--invisible");
    $(".background").removeClass("--type016");
    $(".--tip_fase8").addClass("--invisible");

    $(".background").removeClass("--pas_fase8");
    $(".background").removeClass("--obj_fase8_postits");
    $(".background").removeClass("--her_fase8");
    $(".background__image").removeClass("--invisible");
    $(".background").removeClass("--tip_fase8");
    $(".background").addClass("--type016");



    var highestTimeoutId = setTimeout(";");
    for (var i = 0 ; i < highestTimeoutId ; i++) {
        clearTimeout(i); 
    }
    }

function btn_pas_f8(){
    $("#my_audio_f8_1").trigger('pause');
    $("#play_paso_f8").html('Reproducir Audio');
    $(".--pas_fase8").removeClass("--invisible");
    $("#person4").addClass("--invisible");
    $("#person5").addClass("--invisible"); 
    $("#person6").removeClass("--invisible");
    $("#person7").removeClass("--invisible");
    $(".paso_paso").removeClass("--invisible");
    $(".obj_f8").addClass("--invisible");
    $(".herr_f8").addClass("--invisible");
    $(".tip_f8").addClass("--invisible");
    $(".--pas_2_fase8").addClass("--invisible");
    $(".background").removeClass("--type016");
    $(".--obj_fase8_postits").addClass("--invisible");
    $(".--her_fase8").addClass("--invisible");
    $(".background").removeClass("--invisible");
    $(".background").removeClass("--type016");
    $(".--tip_fase8").addClass("--invisible");

    $(".background").removeClass("--invisible");
    $(".background").addClass("--pas_fase8");
    $(".background").removeClass("--obj_fase8_postits");
    $(".background").removeClass("--her_fase8");
    $(".background__image").removeClass("--invisible");
    $(".background").removeClass("--tip_fase8");






    var highestTimeoutId = setTimeout(";");
    for (var i = 0 ; i < highestTimeoutId ; i++) {
        clearTimeout(i); 
    }
    }
    function btn_her_f8(){
        $("#my_audio_f8_1").trigger('pause');
        $("#my_audio_f8").trigger('pause');
        $(".--pas_fase8").addClass("--invisible");
        $("#person4").addClass("--invisible");
        $("#person5").addClass("--invisible"); 
        $("#person6").addClass("--invisible");
        $("#person7").addClass("--invisible");
        $(".paso_paso").addClass("--invisible");
        $(".obj_f8").addClass("--invisible");
        $(".herr_f8").addClass("--invisible");
        $(".tip_f8").addClass("--invisible");
        $(".--pas_2_fase8").addClass("--invisible");
        $(".background").removeClass("--type016");
        $(".--her_fase8").removeClass("--invisible");
        $(".background").removeClass("--type016");
        $(".--obj_fase8_postits").addClass("--invisible");
        $(".background").addClass("--her_fase8");
        $(".background").removeClass("--invisible");
        $(".--tip_fase8").addClass("--invisible");
        $(".background__image").addClass("--invisible");
        $(".background").removeClass("--tip_fase8");



    
        var highestTimeoutId = setTimeout(";");
        for (var i = 0 ; i < highestTimeoutId ; i++) {
            clearTimeout(i); 
        }
        }
        function btn_tip_f8(){
            $("#my_audio_f8_1").trigger('pause');
            $("#my_audio_f8").trigger('pause');
            $(".--pas_fase8").addClass("--invisible");
            $("#person4").addClass("--invisible");
            $("#person5").addClass("--invisible"); 
            $("#person6").addClass("--invisible");
            $("#person7").addClass("--invisible");
            $(".paso_paso").addClass("--invisible");
            $(".obj_f8").addClass("--invisible");
            $(".herr_f8").addClass("--invisible");
            $(".tip_f8").addClass("--invisible");
            $(".--pas_2_fase8").addClass("--invisible");
            $(".background").removeClass("--type016");
            $(".--her_fase8").addClass("--invisible");
            $(".--obj_fase8_postits").addClass("--invisible");
            $(".background").addClass("--type016");
            $(".background").removeClass("--invisible");
            $(".--tip_fase8").removeClass("--invisible");
            $(".background").removeClass("--her_fase8");
            $(".background__image").removeClass("--invisible");
            $(".background").addClass("--tip_fase8");
            $(".background__image").addClass("--invisible");





        
            var highestTimeoutId = setTimeout(";");
            for (var i = 0 ; i < highestTimeoutId ; i++) {
                clearTimeout(i); 
            }
            }
    

//Audios y textos
$(function() {
    var is_playing;
    
    $("#play_f8_bienvenida").click(function(e) {
      var original = 'Me alegra que estén tan participativos hoy, pero vamos a pedir la palabra. De esta forma, garantizamos que todos nos escuchemos por igual. Para continuar, quiero presentar la segunda fase, denominada ¡La vida en la vía, un asunto de todos!';
      var text1 = 'Esta fase tiene como propósito identificar los actores clave que, dentro de nuestra comunidad y en los diferentes sectores que en ella intervienen, pueden aportar de manera positiva en la implementación de nuestra metodología, favoreciendo la apropiación local y promoviendo la seguridad vial.';
      var text1_1 = 'La Junta de Acción Comunal ha preparado algunas notas adhesivas, con datos importantes que debemos tener en cuenta en esta segunda fase. Ahora, los dejo con Juan y Margarita, que les van a presentar el paso a paso a seguir.';
      
      $("#play_f8_bienvenida").html('Reproduciendo...');
  
      if(e.target.tagName !== "AUDIO") {
      if (is_playing) {
        $('#change_f8_1').html(original);
        $('#my_audio_f8_1')[0].load();
        $('#my_audio_f8_1')[0].play();
   
         setTimeout(function(){
             $('#change_f8_1').html(text1);
         }, 16000);
         setTimeout(function(){
             $('#change_f8_1').html(text1_1);
         }, 32000);
         $('#change_f8_1').html(original);
               is_playing = true;
  
      } else {
        $('#change_f8_1').html(original);
        $('#my_audio_f8_1')[0].load();
        $('#my_audio_f8_1')[0].play();
        is_playing = true;
        setTimeout(function(){
            $('#change_f8_1').html(text1);
        }, 16000);
        setTimeout(function(){
            $('#change_f8_1').html(text1_1);
        }, 32000);
        $('#change_f8_1').html(original);
              is_playing = true;
    }
      } else {
        e.stopPropagtion()
      }
    });
    $("#my_audio_f8_1").on("ended", function() {
      $("#play_f8_bienvenida").html('Reproducir Audio');
      $(".--obj_fase8_postits").removeClass("--invisible");
      $(".--type006").addClass("--invisible");
      $(".obj_f8").addClass("--invisible");
      $(".--obj_fase8").addClass("--invisible");
      $(".background").addClass("--type016");

  });

  $("#play_paso_f8").click(function(e) {
    var original = '¡¡Bienvenido de vuelta! Mi nombre es Alirio, soy un líder afro de este territorio. Hoy estoy con mi compañera Marcela, que trabaja junto con Pedro en el proyecto vial.';
    var text1 = 'Nosotros somos los encargados de mostrarte las instrucciones que debes seguir para desarrollar esta fase. Ambos diseñamos unas fichas con la hoja de ruta que esperamos sean de gran ayuda… ¿Nos ayudarías a organizarlas? ';
    
    
    $("#play_paso_f8").html('Reproduciendo...');

    if(e.target.tagName !== "AUDIO") {
    if (is_playing) {
      $('#change_f8_2').html(original);
      $('#my_audio_f8')[0].load();
      $('#my_audio_f8')[0].play();
 
       setTimeout(function(){
           $('#change_f8_2').html(text1);
       }, 9000);
       $('#change_f8_2').html(original);
             is_playing = true;

    } else {
      $('#change_f8_2').html(original);
      $('#my_audio_f8')[0].load();
      $('#my_audio_f8')[0].play();
      is_playing = true;
      setTimeout(function(){
          $('#change_f8_2').html(text1);
      }, 9000);

      $('#change_f8_2').html(original);
            is_playing = true;
  }
    } else {
      e.stopPropagtion()
    }
  });
  $("#my_audio_f8").on("ended", function() {
    $("#play_paso_f8").html('Reproducir Audio');
    $(".--pas_fase8").addClass("--invisible");
    $(".--pas_2_fase8").removeClass("--invisible");
    $(".background").removeClass("--type016");
    $(".background").addClass("--obj_fase8_postits");
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