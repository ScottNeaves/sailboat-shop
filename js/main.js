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
      html = '<h4>'+weather.temp+'&deg;'+weather.units.temp+'</h4>';
      html += '<h4 class="currently">'+weather.currently+'</h4>';
      html += '<h4>'+weather.wind.direction+' '+weather.wind.speed+' '+weather.units.speed+'</h4>';

      $("#weather").html(html);
    },
    error: function(error) {
      $("#weather").html('<p>'+error+'</p>');
    }
  });
});
