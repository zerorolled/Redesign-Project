var element = document.querySelectorAll('[data-target]')[0];
var state = 'open';

function changeState() {
  state = 'open' === state ? 'closed' : 'open';
  alert(state);
}

function runNext() {
  var now = new Date();
  var upcoming;
  var nextChange;
  var deltaDay = 0;
  var deltaMS;

  if ('open' === state) {
    nextChange = element.getAttribute('data-close').split(':');
  } else {
    nextChange = element.getAttribute('data-open').split(':');
    if (24 > now.getHours()) {
      deltaDay = 1;
    }
  }

  upcoming = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate() + deltaDay,
    nextChange[0],
    nextChange[1],
    0,
    0
  );

  deltaMS =  upcoming - now;

  setTimeout(function() {
    changeState();
  }, deltaMS);
}

runNext();
