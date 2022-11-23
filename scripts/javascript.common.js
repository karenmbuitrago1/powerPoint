//-------------------------------
//------ Javascript Common ------
//----------Version 1.0----------
//-------------------------------
// Biblioteca de funciones comunes de javascript
//-------------------------------
//--------------------
//Funcion base para hacer animacion de intro
function jqcallback() {
  setTimeout(function () {
    $("#effect:visible").removeAttr("style").fadeOut();
  }, 1000);
};
//--------------------
//Funcion base para reproducior audio
//#ID-audio: id del audio que se va reproducir
//#ID-audio-btn: id del contenedor que tiene las imágenes del reproductor
//playAndPauseAudio("#ID-audio","#ID-audio-btn")
function playAndPauseAudio(audioId, audioContainer) {
  var imgContainerId = `#${audioContainer.id}`
  currentAudioPlay = currentAudioPlay == "" ? audioId : currentAudioPlay

  if (audioId != currentAudioPlay) {
    // console.log('diferente');
    currentAudioPlay = audioId

    $('audio').each(function () {
      this.pause(); // Stop playing
      this.currentTime = 0; // Reset time
      $('.btn-audio-play').removeClass("img-pause");
    });
  }

  $(audioId).on("ended", () => {
    $(audioId).unbind("ended")
    $(imgContainerId).removeClass("img-pause");
  })

  if (!$(imgContainerId).hasClass("img-pause")) {
    $(audioId)[0].play();
    $(imgContainerId).addClass("img-pause");
  }
  else {
    $(audioId)[0].pause();
    $(imgContainerId).removeClass("img-pause");
  }
}
//--------------------
//Reproducir audio play/pause
function toggleAudio(audioId, activity) {
  $('audio').each(function () {
    this.pause(); // Stop playing
    this.currentTime = 0; // Reset time
  });
  if (activity === 2) {
    $("#" + audioId + "Audio")[0].play();
  } else {
    $("#" + audioId + "AudioMotorcycle")[0].play();
  }
}
//--------------------
//Reproducir audio de correcto/incorrecto
function playAudio(audioId) {
  $('audio').each(function () {
    this.pause(); // Stop playing
    this.currentTime = 0; // Reset time
  });
  $("#" + audioId + 'Audio')[0].play();
}

function playAudio4(audioId) {
  $('audio').each(function () {
    this.pause(); // Stop playing
    this.currentTime = 0; // Reset time
  });
  $("#" + audioId)[0].play();
}

function pause() {
  $('audio').each(function () {
    this.pause(); // Stop playing
    this.currentTime = 0; // Reset time
  });
}
// Comprueba si el audio ha terminado y muestra el boton de siguiente
function checkEndedAudio(id, buttonId) {
  $(id).on("ended", () => {
    $("#nextControlButton").focus();
    $("#nextControlButton").css("transition", "all 1s ease-in");
    $("#nextControlButton").removeClass("hidden");

    if (buttonId) {
      $(buttonId).css("transition", "all 1s ease-in");
      $(buttonId).removeClass("hidden");
    }
  })
}
//--------------------
//Comprobacion de si esta en mobile
function isMobileDevice() {
  return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
}
//--------------------
//Crear un comboBox usando checkBox -> onReady()
//label: prefijo del id usado para los checkbox
// -> ej: id="check_1" -> label: "check_"
//totalChecks: numero total de Checks que contine el combo
function checkboxGroup(label, totalChecks) {
  $('input[type=checkbox]').on('click', function () {
    for (i = 1; i <= totalChecks; i++) {
      var idCheck = "#" + label + i;
      $(idCheck).prop('checked', false);
    }
    $(this).prop('checked', true);
  });
}
//--------------------
//Aleatorizar el orden de divs
//requiere un div parent y prefijo de id para sus miembros
//parentDiv: id del parent que contiene los divs ej: "#divParent", ".divParent"
//prefijo del id usado para los div
// -> ej: id="div_1" -> label: "#div_"
//total divs a randomizar
function randomDiv(parentDiv, idDivPrefix, totalDivs) {
  var randomDiv = Array.apply(null, { length: totalDivs }).map(function (value, index) { return index + 1; });
  randomDiv.sort(function (a, b) { return 0.5 - Math.random() });
  for (i = 0; i < randomDiv.length; i++) {
    var divID = idDivPrefix + randomDiv[i];
    $(parentDiv).append($(divID));
  }
}
//-------------------------------
//Bloquea o desbloquea los botones de control de la Actividad
//Dependiendo de hideDisabledControlButtons muestra/oculta el botón bloqueado
function setActivityButtonState(buttonId, state) {
  if (state === "disabled") {
    $(buttonId).addClass("disabled");
    if (activityContent.hideDisabledControlButtons)
      $(buttonId).hide();
  }
  if (state === "enabled") {
    $(buttonId).removeClass("disabled");
    if (activityContent.hideDisabledControlButtons)
      $(buttonId).show();
  }
}
//-------------------------------
// Jump to Top
function jumpTop() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// Jump to Bottom
function jumpTopCenter() {
  document.body.scrollTop = 250; // For Safari
  document.documentElement.scrollTop = 250; // For Chrome, Firefox, IE and Opera
}

// -----------------------------------
// Ajusta la barra de menu al hacer scroll
function checkScrollTop() {
  let heightControls = `${controlsRef.outerHeight()}px`

  if (controlsRef.is(":visible")) {

    controlsRef.addClass("fixed-top");
    $('body').css('padding-top', heightControls);

    // Se fijara la barra de navegacion despues de un determinado desplazamiento
    // ---------------------------
    // if ($(this).scrollTop() > 80) {
    //   controlsRef.addClass("fixed-top");
    //   $('body').css('padding-top', heightControls);
    // } else {
    //     controlsRef.removeClass("fixed-top");
    //     $('body').css('padding-top', '0');
    // }
  }
  else {
    controlsRef.removeClass("fixed-top");
    $('body').css('padding-top', '0');
  }
}
//-------------------------------
// Unblock buttons according advance
var advanceButtonsArray = [1];
var missionsCompleted = [0, 0, 0, 0, 0];

function loadBlockedState() {
  for (let index = 0; index < advanceButtonsArray.length; index++) {
    if (advanceButtonsArray[index] === 0)
      $("#modal-" + index).addClass("disable");
    else
      $("#modal-" + index).removeClass("disable");
  }
}

function changedMissionState() {
  for (const index in missionsCompleted) {
    if (missionsCompleted[index] === 0) {
      $(`#modal-${index} .checked`).addClass('d-none');
    }
    else {
      $(`#modal-${index} .checked`).removeClass('d-none');
    }
    if (missionsCompleted[index] === 0) {
      $(`#btn-${index} .checked`).addClass('d-none');
    }
    else {
      $(`#btn-${index} .checked`).removeClass('d-none');
    }
    if (missionsCompleted[index] === 1) {
      $(`#modal-${index} .img1`).addClass('d-none');
      $(`#modal-${index} .img2`).removeClass('d-none');
    }
  }
}

function allActivitiesCompleted() {
  return missionsCompleted.every(item => item === 1)
}


//-------------------------------
// Detener el temporizador de la actividad
var timeinterval;

function stopTimer() {
  clearInterval(timeinterval);
}
//-------------------------------
// Comenzar el temporizador de la actividad
function startTimer(duration, stop) {
  var clock = document.getElementById("countdownTimer");
  var minutesSpan = clock.querySelector('.minutes');
  var secondsSpan = clock.querySelector('.seconds');

  var timer = duration,
    minutes, seconds;

  updateClock();
  timeinterval = setInterval(updateClock, 1000);

  function updateClock() {
    minutes = parseInt(timer / 60, 10)
    seconds = parseInt(timer % 60, 10);
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    minutesSpan.innerHTML = minutes;
    secondsSpan.innerHTML = seconds;
    activityTimeRemaining = timer;

    if (--timer < 0) {
      clearInterval(timeinterval);
      finishActivityByTime();
    }
  }
}

function playAudio2(ref) {
  let audios = $("audio");
  let i = audios.length;
  while (i--) {
    audios[i].pause();
    audios[i].currentTime = 0;
  }
  document.getElementById(ref).play();
}

function showStars() {
  console.log(stars)
  let container = $('#stars-container')
  container.empty()
  stars.forEach(star => {
    let starImg = 'grey'
    switch (star) {
      case 'GOOD':
        starImg = 'green'
        break;
      case 'MEDIUM':
        starImg = 'orange'
        break;
      case 'BAD':
        starImg = 'red'
        break;
      default:
        break;
    }
    console.log(starImg)
    container.append(`<img src="resources/images/html1/star_${starImg}.png">`)
  })
}

function completeStar(index, value) {
  if (value == 0) {
    stars[index] = 'GOOD'
  } else if (value == 1) {
    stars[index] = 'MEDIUM'
  } else {
    stars[index] = 'BAD'
  }
}

//-------------------------------
// Comenzar el temporizador de la actividad


var minutesShow = 0;
var secondsShow = 0;


function startTimer(reset) {
  if (reset) {
    minutesShow = 0
    secondsShow = 0
  };
  var clock = document.getElementById("countdownTimer");
  var minutesSpan = clock.querySelector('.minutes');
  var secondsSpan = clock.querySelector('.seconds');
  timeinterval = setInterval(updateClock, 1000);

  var timer = {
    hours: 0,
    minutes: minutesShow,
    seconds: secondsShow
  }

  function updateClock() {
    // Segundos
    timer.seconds++;
    if (timer.seconds > 59) {
      timer.seconds = 0;
      timer.minutes++;
    }

    // Minutos
    if (timer.minutes > 59) {
      timer.minutes = 0;
      timer.hours++;
    }

    minutes = timer.minutes < 10 ? "0" + timer.minutes : timer.minutes;
    seconds = timer.seconds < 10 ? "0" + timer.seconds : timer.seconds;

    minutesSpan.innerHTML = minutes;
    secondsSpan.innerHTML = seconds;
    activityTimeRemaining = timer;
  }
  $("#contentModal").on('show.bs.modal', function () {
    $("#contentModal").unbind('show.bs.modal');
    clearInterval(timeinterval);
    minutesShow = timer.minutes
    secondsShow = timer.seconds
    minutesShow < 10 ? $("#contentModal").find(".minutes").text("0" + minutesShow) : $("#contentModal").find(".minutes").text(minutesShow);
    secondsShow < 10 ? $("#contentModal").find(".seconds").text("0" + secondsShow) : $("#contentModal").find(".seconds").text(secondsShow);

  });

}


