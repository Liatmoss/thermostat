$(document).ready(function() {
  var thermostat = new Thermostat();
  $('#temperature').text(thermostat.temp);

  function updateTemp() {
    $('#temperature').text(thermostat.temp)
  }

  $('#temperture-up').on('click', function() {
    thermostat.up(1);
    updateTemp();
  })

  $('#temperature-down').on('click', function() {
    thermostat.down(1);
    updateTemp();
  })

  $('#temerature-reset').on('click', function() {
    thermostat.reset();
    updateTemp();
  })

})
