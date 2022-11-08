//active
$('.phase__text').click(function(){
    if($(this).hasClass('phase__text_active')){
        $('.phase__text').removeClass('phase__text_active')
    } else {
        $('.phase__text').removeClass('phase__text_active')
        $(this).addClass('phase__text_active')
    }
});


document.getElementById ("btn_obj_f2").addEventListener ("click", btn_obj_f2, false);
document.getElementById ("btn_pas_f2").addEventListener ("click", btn_pas_f2, false);
document.getElementById ("btn_her_f2").addEventListener ("click", btn_her_f2, false);
document.getElementById ("btn_tip_f2").addEventListener ("click", btn_tip_f2, false);

// Cambio de Botones

function btn_obj_f2(){
    $("#my_audio_f2").trigger('pause');
    $("#play_f2_bienvenida").html('Reproducir Audio');
    $("#person6").addClass("--invisible");
    $(".--pas_fase2").addClass("--invisible");
    $("#person7").addClass("--invisible"); 
    $("#person4").removeClass("--invisible");
    $("#person5").removeClass("--invisible");
    $(".paso_paso").removeClass("--invisible");
    $(".obj_f2").removeClass("--invisible");
    $(".herr_f2").addClass("--invisible");
    $(".tip_f2").addClass("--invisible");
    $(".--pas_2_fase2").addClass("--invisible");
    $(".background").removeClass("--type005");
    $(".background").removeClass("--type007");
    $(".--her_fase2").addClass("--invisible");
    $(".--obj_fase2_postits").addClass("--invisible");
    $(".background").removeClass("--invisible");
    $(".background").removeClass("--type008");
    $(".--tip_fase2").addClass("--invisible");
    $(".background").addClass("--type006");
    $(".background").removeClass("--obj_fase2_postits");

    var highestTimeoutId = setTimeout(";");
    for (var i = 0 ; i < highestTimeoutId ; i++) {
        clearTimeout(i); 
    }
    }

function btn_pas_f2(){
    $("#my_audio_f2_1").trigger('pause');
    $("#play_paso_f2").html('Reproducir Audio');
    $(".--pas_fase2").removeClass("--invisible");
    $("#person4").addClass("--invisible");
    $("#person5").addClass("--invisible"); 
    $("#person6").removeClass("--invisible");
    $("#person7").removeClass("--invisible");
    $(".paso_paso").removeClass("--invisible");
    $(".obj_f2").addClass("--invisible");
    $(".herr_f2").addClass("--invisible");
    $(".tip_f2").addClass("--invisible");
    $(".--pas_2_fase2").addClass("--invisible");
    $(".background").removeClass("--type005");
    $(".background").removeClass("--type007");
    $(".--obj_fase2_postits").addClass("--invisible");
    $(".--her_fase2").addClass("--invisible");
    $(".background").removeClass("--invisible");
    $(".background").removeClass("--type008");
    $(".--tip_fase2").addClass("--invisible");
    $(".background").addClass("--type006");
    $(".background").removeClass("--obj_fase2_postits");



    var highestTimeoutId = setTimeout(";");
    for (var i = 0 ; i < highestTimeoutId ; i++) {
        clearTimeout(i); 
    }
    }
    function btn_her_f2(){
        $("#my_audio_f2_1").trigger('pause');
        $("#my_audio_f2").trigger('pause');
        $(".--pas_fase2").addClass("--invisible");
        $("#person4").addClass("--invisible");
        $("#person5").addClass("--invisible"); 
        $("#person6").addClass("--invisible");
        $("#person7").addClass("--invisible");
        $(".paso_paso").addClass("--invisible");
        $(".obj_f2").addClass("--invisible");
        $(".herr_f2").addClass("--invisible");
        $(".tip_f2").addClass("--invisible");
        $(".--pas_2_fase2").addClass("--invisible");
        $(".background").removeClass("--type005");
        $(".--her_fase2").removeClass("--invisible");
        $(".background").removeClass("--type008");
        $(".--obj_fase2_postits").addClass("--invisible");
        $(".background").addClass("--her_fase2");
        $(".background").removeClass("--invisible");
        $(".--tip_fase2").addClass("--invisible");
        $(".background__image").addClass("--invisible");


    
        var highestTimeoutId = setTimeout(";");
        for (var i = 0 ; i < highestTimeoutId ; i++) {
            clearTimeout(i); 
        }
        }
        function btn_tip_f2(){
            $("#my_audio_f2_1").trigger('pause');
            $("#my_audio_f2").trigger('pause');
            $(".--pas_fase2").addClass("--invisible");
            $("#person4").addClass("--invisible");
            $("#person5").addClass("--invisible"); 
            $("#person6").addClass("--invisible");
            $("#person7").addClass("--invisible");
            $(".paso_paso").addClass("--invisible");
            $(".obj_f2").addClass("--invisible");
            $(".herr_f2").addClass("--invisible");
            $(".tip_f2").addClass("--invisible");
            $(".--pas_2_fase2").addClass("--invisible");
            $(".background").removeClass("--type005");
            $(".--her_fase2").addClass("--invisible");
            $(".--obj_fase2_postits").addClass("--invisible");
            $(".background").addClass("--type008");
            $(".background").removeClass("--invisible");
            $(".--tip_fase2").removeClass("--invisible");

        
            var highestTimeoutId = setTimeout(";");
            for (var i = 0 ; i < highestTimeoutId ; i++) {
                clearTimeout(i); 
            }
            }
    

//Audios y textos
$(function() {
    var is_playing;
    
    $("#play_f2_bienvenida").click(function(e) {
      var original = 'Me alegra que estén tan participativos hoy, pero vamos a pedir la palabra. De esta forma, garantizamos que todos nos escuchemos por igual. Para continuar, quiero presentar la segunda fase, denominada ¡La vida en la vía, un asunto de todos!';
      var text1 = 'Esta fase tiene como propósito identificar los actores clave que, dentro de nuestra comunidad y en los diferentes sectores que en ella intervienen, pueden aportar de manera positiva en la implementación de nuestra metodología, favoreciendo la apropiación local y promoviendo la seguridad vial.';
      var text1_1 = 'La Junta de Acción Comunal ha preparado algunas notas adhesivas, con datos importantes que debemos tener en cuenta en esta segunda fase. Ahora, los dejo con Juan y Margarita, que les van a presentar el paso a paso a seguir.';
      
      $("#play_f2_bienvenida").html('Reproduciendo...');
  
      if(e.target.tagName !== "AUDIO") {
      if (is_playing) {
        $('#change_f2_1').html(original);
        $('#my_audio_f2_1')[0].load();
        $('#my_audio_f2_1')[0].play();
   
         setTimeout(function(){
             $('#change_f2_1').html(text1);
         }, 16000);
         setTimeout(function(){
             $('#change_f2_1').html(text1_1);
         }, 32000);
         $('#change_f2_1').html(original);
               is_playing = true;
  
      } else {
        $('#change_f2_1').html(original);
        $('#my_audio_f2_1')[0].load();
        $('#my_audio_f2_1')[0].play();
        is_playing = true;
        setTimeout(function(){
            $('#change_f2_1').html(text1);
        }, 16000);
        setTimeout(function(){
            $('#change_f2_1').html(text1_1);
        }, 32000);
        $('#change_f2_1').html(original);
              is_playing = true;
    }
      } else {
        e.stopPropagtion()
      }
    });
    $("#my_audio_f2_1").on("ended", function() {
      $("#play_f2_bienvenida").html('Reproducir Audio');
      $(".--obj_fase2_postits").removeClass("--invisible");
      $(".--type006").addClass("--invisible");
      $(".obj_f2").addClass("--invisible");
      $(".--obj_fase2").addClass("--invisible");
      $(".background").addClass("--type005");

  });

  $("#play_paso_f2").click(function(e) {
    var original = '¡¡Bienvenido de vuelta! Mi nombre es Alirio, soy un líder afro de este territorio. Hoy estoy con mi compañera Marcela, que trabaja junto con Pedro en el proyecto vial.';
    var text1 = 'Nosotros somos los encargados de mostrarte las instrucciones que debes seguir para desarrollar esta fase. Ambos diseñamos unas fichas con la hoja de ruta que esperamos sean de gran ayuda… ¿Nos ayudarías a organizarlas? ';
    
    
    $("#play_paso_f2").html('Reproduciendo...');

    if(e.target.tagName !== "AUDIO") {
    if (is_playing) {
      $('#change_f2_2').html(original);
      $('#my_audio_f2')[0].load();
      $('#my_audio_f2')[0].play();
 
       setTimeout(function(){
           $('#change_f2_2').html(text1);
       }, 9000);
       $('#change_f2_2').html(original);
             is_playing = true;

    } else {
      $('#change_f2_2').html(original);
      $('#my_audio_f2')[0].load();
      $('#my_audio_f2')[0].play();
      is_playing = true;
      setTimeout(function(){
          $('#change_f2_2').html(text1);
      }, 9000);

      $('#change_f2_2').html(original);
            is_playing = true;
  }
    } else {
      e.stopPropagtion()
    }
  });
  $("#my_audio_f2").on("ended", function() {
    $("#play_paso_f2").html('Reproducir Audio');
    $(".--pas_fase2").addClass("--invisible");
    $(".--pas_2_fase2").removeClass("--invisible");
    $(".background").removeClass("--type005");
    $(".background").removeClass("--type006");
    $(".background").addClass("--obj_fase2_postits");
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