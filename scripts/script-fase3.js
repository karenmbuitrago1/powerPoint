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
    $(".background").removeClass("--invisible");
    $(".background").removeClass("--type008");
    $(".--tip_fase3").addClass("--invisible");
    $(".--obj_fase3_postits").addClass("--invisible");

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
    $(".paso_paso").removeClass("--invisible");
    $(".obj_f3").addClass("--invisible");
    $(".herr_f3").addClass("--invisible");
    $(".tip_f3").addClass("--invisible");
    $(".--pas_2_fase3").addClass("--invisible");
    $(".background").removeClass("--type005");
    $(".background").removeClass("--type009");
    $(".--her_fase3").addClass("--invisible");
    $(".background").removeClass("--invisible");
    $(".background").removeClass("--type008");
    $(".background").addClass("--pas_fase3_bg");
    $(".--tip_fase3").addClass("--invisible");
    $(".--obj_fase3_postits").addClass("--invisible");



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
        $(".background").addClass("--type009");
        $(".background").removeClass("--invisible");
        $(".--tip_fase3").addClass("--invisible");
        $(".--obj_fase3_postits").addClass("--invisible");


    
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
            $(".background").addClass("--type008");
            $(".background").removeClass("--invisible");
            $(".--tip_fase3").removeClass("--invisible");
            $(".--obj_fase3_postits").addClass("--invisible");


        
            var highestTimeoutId = setTimeout(";");
            for (var i = 0 ; i < highestTimeoutId ; i++) {
                clearTimeout(i); 
            }
            }
    

//Audios y textos
$(function() {
    var is_playing;
    
    $("#play_f3_bienvenida").click(function(e) {
      var original = 'Hola, mi nombre es Pastor. Soy un ganadero de la región. Mis vaquitas y yo proveemos de leche a todos los vecinos del sector. Por ahí se rumora que aquí producimos la mejor leche de todo el país. No sé si sea cierto, lo único que sé, es que lo que hacemos, lo hacemos con mucho amor.';
      var text1 = 'Les cuento que yo también hago parte de esta metodología, pues muchas veces, las obras afectan espacios que utilizamos aquí en la finca para mis animalitos, entonces trabajamos de manera conjunta para reducir los problemas y los riesgos. Como dicen por ahí, para que nadie salga perjudicado.';
      var text1_1 = 'Voy a contarles un poco sobre la fase que más me gusta, se llama: ¡Geografías humanas! Ahí lo que hacemos es caracterizar el espacio físico y humano donde se realizará el proyecto vial, para identificar factores de riesgo asociados a la ocupación y uso del espacio.';
      var text1_2 = 'Anoche estuve preparando algunas notas adhesivas para ustedes, con datos importantes que deben tener en cuenta. Ahora, los dejo con William y Andrés, para que les cuenten un poco más al respecto';
      
      $("#play_f3_bienvenida").html('Reproduciendo...');
  
      if(e.target.tagName !== "AUDIO") {
      if (is_playing) {
        $('#change_f3_1').html(original);
        $('#my_audio_f3_1')[0].load();
        $('#my_audio_f3_1')[0].play();
   
         setTimeout(function(){
             $('#change_f3_1').html(text1);
         }, 20000);
         setTimeout(function(){
             $('#change_f3_1').html(text1_1);
         }, 36000);
         setTimeout(function(){
          $('#change_f3_1').html(text1_2);
        }, 51000);
         $('#change_f3_1').html(original);
               is_playing = true;
  
      } else {
        $('#change_f3_1').html(original);
        $('#my_audio_f3_1')[0].load();
        $('#my_audio_f3_1')[0].play();
        is_playing = true;
        setTimeout(function(){
          $('#change_f3_1').html(text1);
      }, 20000);
      setTimeout(function(){
          $('#change_f3_1').html(text1_1);
      }, 36000);
      setTimeout(function(){
       $('#change_f3_1').html(text1_2);
     }, 51000);
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
      $(".obj_f3").addClass("--invisible");
      $(".--obj_fase3").addClass("--invisible");
      $(".background").addClass("--type005");

  });

  $("#play_paso_f3").click(function(e) {
    var original = '¡Bienvenido de vuelta! Mi nombre es William. Trabajo con Andrés repartiendo la leche de Pastor por toda la vereda. Nosotros somos los encargados de mostrarte las instrucciones que debes seguir para desarrollar esta fase';
    var text1 = 'Ambos diseñamos una hoja de ruta, a manera de mapa, que esperamos sea de gran ayuda… No olvides dar clic sobre cada estación, para conocer en qué consisten los pasos a seguir…';
    
    
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
    //$(".--pas_fase3").addClass("--invisible");
    //$(".--pas_2_fase3").removeClass("--invisible");
    //$(".background").addClass("--type005");
    $(".--pas_2_fase3").removeClass("--invisible");
    $(".background").addClass("--pas_fase3_bg");
    $(".--pas_fase3").addClass("--invisible");
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