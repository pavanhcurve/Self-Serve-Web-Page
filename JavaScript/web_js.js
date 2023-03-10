function numberCounting(obj, start, end, duration) {
    console.log("in here");
    var range = end - start;

    var current = start;
    var increment = end > start ? 1 : -1;
    var stepTime = Math.abs(Math.floor(duration / range));
    var timer = setInterval(function () {
        current += increment;
        obj.innerHTML = current;
        if (current == end) {
            clearInterval(timer);
        }
    }, stepTime);
}

var transaction = 500;
var spending = 40000;

var porcent = document.querySelector(".transactions-stat__number");
var dolars = document.querySelector(".spending-stat__number");

function run() {
    duration = 1000;
    numberCounting(porcent, 0, spending, duration);
    numberCounting(dolars, 0, transaction, duration);
}

run();
