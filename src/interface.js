$(document).ready(function() {
  var thermostat = new Thermostat();
  $('#temperature').text(thermostat.temp);

  $('#temperture-up').on('click', function() {
    thermostat.up(1);
    $('#temperature').text(thermostat.temp)
  })

  $('#temperature-down').on('click', function() {
    thermostat.down(1);
    $('#temperature').text(thermostat.temp)
  })

})
