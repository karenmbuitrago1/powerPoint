
//active
$('.menu__listBtn').click(function(){
    if($(this).hasClass('menu__listBtn_active')){
        $('.menu__listBtn').removeClass('menu__listBtn_active')
    } else {
        $('.menu__listBtn').removeClass('menu__listBtn_active')
        $(this).addClass('menu__listBtn_active')
    }
});


// Cambio de dialogos
function btn_origen(){
  $("#bienvenida").addClass("invisible");
  $(".origen").removeClass("invisible");
  $(".ruta").addClass("invisible");
  $(".conoce").addClass("invisible"); 
}
function btn_conoce(){
  $("#bienvenida").addClass("invisible");
  $(".origen").addClass("invisible");
  $(".ruta").addClass("invisible");
  $(".conoce").removeClass("invisible"); 
}
function cards(){
  alert("termino");
}
function btn_ruta(){
  $("#bienvenida").addClass("invisible");
  $(".origen").addClass("invisible");
  $(".conoce").addClass("invisible"); 
  $(".ruta").removeClass("invisible");
}
//Audios y textos
$(function() {
  var is_playing;
  var original = $('#change').html();
  
  $("#play_origen").click(function(e) {
    var text1 = 'Para dar alcance a este objetivo, indagó acciones adelantadas por 36 concesiónes en el país para garantizar la participación comunitaria y la gestión social en el marco de la implementación de proyectos viales, identificando, entre otros, lecciones aprendidas y buenas prácticas.';
  var text1_2 = 'A partir de los hallazgos de esta exploración, surge la presente propuesta metodológica, estructurada en 8 fases, cuyo propósito central es proporcionar herramientas de co-construcción orientadas a promover la generación de una cultura vial';

    if(e.target.tagName !== "AUDIO") {
    if (is_playing) {
      $('#my_audio').stop();
      $('#my_audio')[0].play();
       
       setTimeout(function(){
           $('#change').html(text1);
       }, 2000);
       setTimeout(function(){
           $('#change').html(text1_2);
       }, 5000);
       $('#change').html(original);
    } else {
      $('#my_audio').stop();
      $('#my_audio')[0].play();
      is_playing = true;
       $('#change').html(original);
       setTimeout(function(){
           $('#change').html(text1);
       }, 2000);
       setTimeout(function(){
           $('#change').html(text1_2);
       }, 5000);
       $('#change').html(original);       
    }
    } else {
      e.stopPropagtion()
    }
  });

    $("#play_conoce").click(function(e) {
    var text1 = 'Para dar alcance a este objetivo, indagó acciones adelantadas por 36 concesiónes en el país para garantizar la participación comunitaria y la gestión social en el marco de la implementación de proyectos viales, identificando, entre otros, lecciones aprendidas y buenas prácticas.';
  var text1_2 = 'A partir de los hallazgos de esta exploración, surge la presente propuesta metodológica, estructurada en 8 fases, cuyo propósito central es proporcionar herramientas de co-construcción orientadas a promover la generación de una cultura vial';
     $("audio::-webkit-media-controls-play-button").click();
    if(e.target.tagName !== "AUDIO") {
    if (is_playing) {       
       setTimeout(function(){
           $('#change').html(text1);
       }, 2000);
       setTimeout(function(){
           $('#change').html(text1_2);
       }, 5000);
       $('#change').html(original);
    } else {
      $('#my_audio').stop();
      $('#my_audio')[0].play();
      is_playing = true;
       $('#change').html(original);
       setTimeout(function(){
           $('#change').html(text1);
       }, 2000);
       setTimeout(function(){
           $('#change').html(text1_2);
       }, 5000);
       $('#change').html(original);       
    }
    } else {
      e.stopPropagtion()
    }


  });
        $('#my_audio_conoce').onended=function(){alert("termino");};

})

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

function playAgain() {
  matchingCounter = 0;
  endMessage.style.display = 'none';
  draggableListItems.forEach(item => {
    document.getElementById(item.id).style.display = 'block';
  })
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