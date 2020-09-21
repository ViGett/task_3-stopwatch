"use strict";

//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< СТАРТОВАЯ ФУНКЦИЯ
document.addEventListener('DOMContentLoaded', function() {
    var minutes = 0;
    var seconds = 0;
    var tens = 0;
    var appendMinutes = document.getElementById("minutes");
    var appendSeconds = document.getElementById("seconds");
    var appendTens = document.getElementById("tens");
    var buttonOfStart = document.getElementById("button_of_start");
    var buttonOfStop = document.getElementById("button_of_stop");
    var buttonOfReset = document.getElementById("button_of_reset");
    var Interval;

    buttonOfStart.addEventListener('click', clickToStart);
    buttonOfStop.addEventListener('click', clickToStop);
    buttonOfReset.addEventListener('click', clickToReset);

//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< Событие: Нажатие на кнопку START
    function clickToStart() {
        clearInterval(Interval);
        Interval = setInterval(startTimer, 10);
    }

//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< Событие: Нажатие на кнопку STOP
    function clickToStop () {
        clearInterval(Interval);
    }

//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< Событие: Нажатие на кнопку RESET
    function clickToReset () {
        clearInterval(Interval);
        minutes = "00";
        seconds = "00";
        tens = "00";
        appendMinutes.innerHTML = minutes;
        appendSeconds.innerHTML = seconds;
        appendTens.innerHTML = tens;
    }

//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< ОБРАБОТКА ТАЙМЕРА
    function startTimer () {
        tens++;
        if (tens < 10) appendTens.innerHTML = "0" + tens;
        if (tens > 9) appendTens.innerHTML = tens;
        if (tens > 99) {
            seconds++;
            appendSeconds.innerHTML = "0" + seconds;
            tens = 0;
            appendTens.innerHTML = "0" + 0;
        }
        if (seconds > 9) appendSeconds.innerHTML = seconds;
        if (seconds > 59) {
            minutes++;
            appendMinutes.innerHTML = "0" + minutes;
            seconds = 0;
            appendSeconds.innerHTML = "0" + 0;
        }
        if (minutes > 9) appendMinutes.innerHTML = minutes;
    }

})
