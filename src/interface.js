$(document).ready(function() {
  var thermostat = new Thermostat();

  function updateTemp() {
    $('#temperature').text(thermostat.temp)
    $('#temperature').attr('class', thermostat.usage());
  }

  $(updateTemp())

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

  $('#psm-on').on('click', function() {
    thermostat.powerSave('on');
    $('#power-saving-status').text('On');
    updateTemp();
  })

  $('#psm-off').on('click', function() {
    thermostat.powerSave('off');
    $('#power-saving-status').text('Off');
    updateTemp();
  })

})
