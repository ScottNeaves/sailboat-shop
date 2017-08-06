// Look for .hamburger
var hamburger = document.querySelector(".hamburger");
// On click
hamburger.addEventListener("click", function() {
  // Toggle class "is-active"
  hamburger.classList.toggle("is-active");
  // Do something else, like open/close menu
});

$(document).ready(function() {
  $.simpleWeather({
    location: 'Austin, TX',
    woeid: '',
    unit: 'f',
    success: function(weather) {
      html = '<em><h5>Austin Conditions: '
      html += weather.temp+'&deg;'+weather.units.temp+', ';
      html += weather.currently+', ';
      html += 'wind '+weather.wind.direction+' '+weather.wind.speed+' '+weather.units.speed+'</h5></em>';

      $("#weather").html(html);
    },
    error: function(error) {
      $("#weather").html('<p>'+error+'</p>');
    }
  });
});

// media query event handler
if (matchMedia) {
  var mq = window.matchMedia("(min-width: 767px)");
  mq.addListener(WidthChange);
  WidthChange(mq);
}

// media query change
function WidthChange(mq) {
  if (mq.matches) {
    $('#products .item').removeClass('list-group-item');
    $('#products .item').addClass('grid-group-item');
  } else {
    $('#products .item').addClass('list-group-item');
  }
}
