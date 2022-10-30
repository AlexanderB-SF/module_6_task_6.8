let trafficLight = document.querySelectorAll('.color');

trafficLight[0].addEventListener('click', function() {
    trafficLight[1].classList.remove('yellow');
    trafficLight[2].classList.remove('red');
    trafficLight[0].classList.add('green');
});

trafficLight[1].addEventListener('click', function() {
    trafficLight[0].classList.remove('green');
    trafficLight[2].classList.remove('red');
    trafficLight[1].classList.add('yellow');
});

trafficLight[2].addEventListener('click', function() {
    trafficLight[0].classList.remove('green');
    trafficLight[1].classList.remove('yellow');
    trafficLight[2].classList.add('red');
});
