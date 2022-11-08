//active
$('.phase__text').click(function(){
    if($(this).hasClass('phase__text_active')){
        $('.phase__text').removeClass('phase__text_active')
    } else {
        $('.phase__text').removeClass('phase__text_active')
        $(this).addClass('phase__text_active')
    }
});


document.getElementById ("btn_obj_f3").addEventListener ("click", btn_obj_f3, false);
document.getElementById ("btn_pas_f3").addEventListener ("click", btn_pas_f3, false);
document.getElementById ("btn_her_f3").addEventListener ("click", btn_her_f3, false);
document.getElementById ("btn_tip_f3").addEventListener ("click", btn_tip_f3, false);

// Cambio de Botones

function btn_obj_f3(){
    $("#my_audio_f3_2").trigger('pause');
    $("#play_f3_bienvenida").html('Reproducir Audio');
    $("#person6").addClass("--invisible");
    $(".--pas_fase3").addClass("--invisible");
    $("#person7").addClass("--invisible"); 
    $("#person4").removeClass("--invisible");
    $("#person5").removeClass("--invisible");
    $(".paso_paso").removeClass("--invisible");
    $(".obj_f3").removeClass("--invisible");
    $(".herr_f3").addClass("--invisible");
    $(".tip_f3").addClass("--invisible");
    $(".--pas_2_fase3").addClass("--invisible");
    $(".background").removeClass("--type005");
    $(".background").addClass("--type009");
    $(".--her_fase3").addClass("--invisible");
    $(".--obj_fase3_postits").addClass("--invisible");
    $(".background").removeClass("--invisible");
    $(".background").removeClass("--type008");
    $(".--tip_fase3").addClass("--invisible");

    var highestTimeoutId = setTimeout(";");
    for (var i = 0 ; i < highestTimeoutId ; i++) {
        clearTimeout(i); 
    }
    }

function btn_pas_f3(){
    $("#my_audio_f3_1").trigger('pause');
    $("#play_paso_f3").html('Reproducir Audio');
    $(".--pas_fase3").removeClass("--invisible");
    $("#person4").addClass("--invisible");
    $("#person5").addClass("--invisible"); 
    $("#person6").removeClass("--invisible");
    $("#person7").removeClass("--invisible");
    $(".paso_paso").removeClass("--invisible");
    $(".obj_f3").addClass("--invisible");
    $(".herr_f3").addClass("--invisible");
    $(".tip_f3").addClass("--invisible");
    $(".--pas_2_fase3").addClass("--invisible");
    $(".background").removeClass("--type005");
    $(".background").removeClass("--type009");
    $(".--obj_fase3_postits").addClass("--invisible");
    $(".--her_fase3").addClass("--invisible");
    $(".background").removeClass("--invisible");
    $(".background").removeClass("--type008");
    $(".--tip_fase3").addClass("--invisible");



    var highestTimeoutId = setTimeout(";");
    for (var i = 0 ; i < highestTimeoutId ; i++) {
        clearTimeout(i); 
    }
    }
    function btn_her_f3(){
        $("#my_audio_f3_1").trigger('pause');
        $("#my_audio_f3_2").trigger('pause');
        $(".--pas_fase3").addClass("--invisible");
        $("#person4").addClass("--invisible");
        $("#person5").addClass("--invisible"); 
        $("#person6").addClass("--invisible");
        $("#person7").addClass("--invisible");
        $(".paso_paso").addClass("--invisible");
        $(".obj_f3").addClass("--invisible");
        $(".herr_f3").addClass("--invisible");
        $(".tip_f3").addClass("--invisible");
        $(".--pas_2_fase3").addClass("--invisible");
        $(".background").removeClass("--type005");
        $(".--her_fase3").removeClass("--invisible");
        $(".background").removeClass("--type008");
        $(".--obj_fase3_postits").addClass("--invisible");
        $(".background").addClass("--type009");
        $(".background").removeClass("--invisible");
        $(".--tip_fase3").addClass("--invisible");


    
        var highestTimeoutId = setTimeout(";");
        for (var i = 0 ; i < highestTimeoutId ; i++) {
            clearTimeout(i); 
        }
        }
        function btn_tip_f3(){
            $("#my_audio_f3_1").trigger('pause');
            $("#my_audio_f3_2").trigger('pause');
            $(".--pas_fase3").addClass("--invisible");
            $("#person4").addClass("--invisible");
            $("#person5").addClass("--invisible"); 
            $("#person6").addClass("--invisible");
            $("#person7").addClass("--invisible");
            $(".paso_paso").addClass("--invisible");
            $(".obj_f3").addClass("--invisible");
            $(".herr_f3").addClass("--invisible");
            $(".tip_f3").addClass("--invisible");
            $(".--pas_2_fase3").addClass("--invisible");
            $(".background").removeClass("--type005");
            $(".--her_fase3").addClass("--invisible");
            $(".--obj_fase3_postits").addClass("--invisible");
            $(".background").addClass("--type008");
            $(".background").removeClass("--invisible");
            $(".--tip_fase3").removeClass("--invisible");

        
            var highestTimeoutId = setTimeout(";");
            for (var i = 0 ; i < highestTimeoutId ; i++) {
                clearTimeout(i); 
            }
            }
    

//Audios y textos
$(function() {
    var is_playing;
    
    $("#play_f3_bienvenida").click(function(e) {
      var original = 'Me alegra que estén tan participativos hoy, pero vamos a pedir la palabra. De esta forma, garantizamos que todos nos escuchemos por igual. Para continuar, quiero presentar la segunda fase, denominada ¡La vida en la vía, un asunto de todos!';
      var text1 = 'Esta fase tiene como propósito identificar los actores clave que, dentro de nuestra comunidad y en los diferentes sectores que en ella intervienen, pueden aportar de manera positiva en la implementación de nuestra metodología, favoreciendo la apropiación local y promoviendo la seguridad vial.';
      var text1_1 = 'La Junta de Acción Comunal ha preparado algunas notas adhesivas, con datos importantes que debemos tener en cuenta en esta segunda fase. Ahora, los dejo con Juan y Margarita, que les van a presentar el paso a paso a seguir.';
      
      $("#play_f3_bienvenida").html('Reproduciendo...');
  
      if(e.target.tagName !== "AUDIO") {
      if (is_playing) {
        $('#change_f3_1').html(original);
        $('#my_audio_f3_1')[0].load();
        $('#my_audio_f3_1')[0].play();
   
         setTimeout(function(){
             $('#change_f3_1').html(text1);
         }, 16000);
         setTimeout(function(){
             $('#change_f3_1').html(text1_1);
         }, 32000);
         $('#change_f3_1').html(original);
               is_playing = true;
  
      } else {
        $('#change_f3_1').html(original);
        $('#my_audio_f3_1')[0].load();
        $('#my_audio_f3_1')[0].play();
        is_playing = true;
        setTimeout(function(){
            $('#change_f3_1').html(text1);
        }, 16000);
        setTimeout(function(){
            $('#change_f3_1').html(text1_1);
        }, 32000);
        $('#change_f3_1').html(original);
              is_playing = true;
    }
      } else {
        e.stopPropagtion()
      }
    });
    $("#my_audio_f3_1").on("ended", function() {
      $("#play_f3_bienvenida").html('Reproducir Audio');
      $(".--obj_fase3_postits").removeClass("--invisible");
      $(".--type009").addClass("--invisible");
      $(".obj_f3").addClass("--invisible");
      $(".--obj_fase3").addClass("--invisible");
      $(".background").addClass("--type005");

  });

  $("#play_paso_f3").click(function(e) {
    var original = '¡Buenos días para todos! Para los que no me conocen yo soy Juan. Vendo jugos de naranja y fruta en las mañanas en la esquina del salón comunal. Por allá los espero. Me acompaña la señorita Margarita, ella es motociclista.';
    var text1 = 'Hoy nos han dado la tarea de mostrarles las instrucciones que deben seguir para desarrollar esta fase. Como soy amante de los rompecabezas, construimos unas fichas con la hoja de ruta. ¡Ayúdennos a armarlas para conocer el paso a paso!';
    
    
    $("#play_paso_f3").html('Reproduciendo...');

    if(e.target.tagName !== "AUDIO") {
    if (is_playing) {
      $('#change_f3_2').html(original);
      $('#my_audio_f3_2')[0].load();
      $('#my_audio_f3_2')[0].play();
 
       setTimeout(function(){
           $('#change_f3_2').html(text1);
       }, 15000);
       $('#change_f3_2').html(original);
             is_playing = true;

    } else {
      $('#change_f3_2').html(original);
      $('#my_audio_f3_2')[0].load();
      $('#my_audio_f3_2')[0].play();
      is_playing = true;
      setTimeout(function(){
          $('#change_f3_2').html(text1);
      }, 15000);

      $('#change_f3_2').html(original);
            is_playing = true;
  }
    } else {
      e.stopPropagtion()
    }
  });
  $("#my_audio_f3_2").on("ended", function() {
    $("#play_paso_f3").html('Reproducir Audio');
    $(".--pas_fase3").addClass("--invisible");
    $(".--pas_2_fase3").removeClass("--invisible");
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