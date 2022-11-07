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


});