var today = new Date();
var hourNow = today.getHours();
var greeting;

if (hourNow > 18) {
  greeting ='The evening is upon us! Today is';
} else if (hourNow >12) {
greeting = 'Hey, partner, its pizza time! Today is';
} else if (hourNow > 0) {
  greeting = 'Good morning, my friend! Today is';
} else {
  greeting = 'Welcome';
}
// document.getElementById('greeting');

var elgreeting = document.getElementById('greeting');

elgreeting.innerHTML = greeting;

// lol work you silly javascript
