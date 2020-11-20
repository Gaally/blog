// fonction ancre
function smoothScroll(target, duration) { // target -> où on veut que l'animation nous emmène // duration -> la durée de l'animation
var target = document.querySelector(target);
var targetPosition = target.getBoundingClientRect().top;
var startPosition = window.pageYOffset;
var distance = targetPosition - startPosition;
var starTime = null;

function animationScroll(currentTime) {
    if(starTime === null) starTime = currentTime;
    var timeElapsed = currentTime - starTime;
    var run = ease(timeElapsed, startPosition, distance, duration);
    window.scrollTo(0, run);
    if(timeElapsed < duration) requestAnimationFrame(animationScroll);
} 

function ease (t, b, c, d) { 
    t /= d / 2;
    if(t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t* (t - 2) - 1) + b;
}

requestAnimationFrame(animationScroll);

}








var ancor1 = document.querySelector('.ancor1');
    var ancor2 = document.querySelector('.ancor2');
    
    ancor1.addEventListener('click', function() {
        smoothScroll('.ancor2', 1500);
    });
    
    ancor2.addEventListener('click', function() {
        smoothScroll('.ancor1', 1500);
    });
