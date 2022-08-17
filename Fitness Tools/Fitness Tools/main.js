
function timer() {
    let homePage = document.getElementById("home");
    homePage.style.display = "none";
    let timerPage = document.getElementById("timer");
    timerPage.style.display = "block";
    document.getElementById("back").style.display = "block";
}

let seconds = 0;
let minutes = 0;

let displaySeconds = 0;
let displayMinutes = 0;

let interval = null;

let status = "stopped";


function stopWatch() {
    seconds++

    if (seconds / 60 === 1) {
        seconds = 0;
        minutes++;
    }

    if (minutes / 60 === 1) {
        minutes = 0;
        hours++;
    }

    if (seconds < 10) {
        displaySeconds = "0" + seconds.toString();
    }

    else {
        displaySeconds = seconds;
    }

    if (minutes < 10) {
        displayMinutes = "0" + minutes.toString();
    }

    else {
        displayMinutes = minutes;
    }

    document.getElementById("clock").innerHTML = displayMinutes + ":" + displaySeconds;

}

function startFunc() {

    if (status === "stopped") {

        //Start the stopwatch (by calling the setInterval() function)
        interval = window.setInterval(stopWatch, 1000);
        document.getElementById("start").innerHTML = "Stop";
        status = "started";

    }
    else {

        window.clearInterval(interval);
        document.getElementById("start").innerHTML = "Start";
        status = "stopped";

    }

}

function refresh() {
    location.reload()
}

function calc() {
    let homePage = document.getElementById("home");
    homePage.style.display = "none";
    let calcPage = document.getElementById("calc");
    calcPage.style.display = "block";
    document.getElementById("back").style.display = "block"
}

function calculate() {

    if (document.getElementById("height").value == "" || document.getElementById("weight").value == "") {
        ons.notification.toast('Please fill out required fields', {
            timeout: 2000
        });
    } else {

        let height = document.getElementById("height").value / 39.37;
        let weight = document.getElementById("weight").value / 2.205;

        let step1 = height * height
        let BMI = weight / step1
        let roundBMI = Math.round(BMI * 10) / 10

        if (roundBMI < 18.5) {
            document.getElementById("summary").innerHTML = "Your BMI is " + roundBMI + ", which means that you are underweight"
        } else if (roundBMI >= 25) {
            document.getElementById("summary").innerHTML = "Your BMI is " + roundBMI + ", which means that you are overweight"
        } else {
            document.getElementById("summary").innerHTML = "Your BMI is " + roundBMI + ", which means that you are normal weight"
        }


    }
}

function counter() {
    let homePage = document.getElementById("home");
    homePage.style.display = "none";
    let countPage = document.getElementById("count");
    countPage.style.display = "block";
    document.getElementById("back").style.display = "block"
    ons.notification.toast('Tap the number to begin counting', {
        timeout: 2000
    });
}

let num = 0
function add() {
    num += 1
    document.getElementById("add").innerHTML = num;

}