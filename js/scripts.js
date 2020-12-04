$(document).ready(function() {
  $("button#start").click(function() {
    $('#two').hide();
    $('#three').hide();
    $('#four').hide();
    $('#five').hide();
    $('#one').show();
  });

  $("button#next1").click(function() {
    $('#one').hide();
    $('#three').hide();
    $('#four').hide();
    $('#five').hide();
    $('#two').show();
  });

  $("button#next2").click(function() {
    $('#one').hide();
    $('#two').hide();
    $('#four').hide();
    $('#five').hide();
    $('#three').show();
  });

  $("button#next3").click(function() {
    $('#one').hide();
    $('#two').hide();
    $('#three').hide();
    $('#five').hide();
    $('#four').show();
  });

  $("button#next4").click(function() {
    $('#one').hide();
    $('#two').hide();
    $('#three').hide();
    $('#four').hide();
    $('#five').show();
  });

  $("form#add").submit(function(event) {
    event.preventDefault();
     const number1 = parseInt($("#add1").val()); // Need to change this to get the value of the selected radio buttons
     const number2 = parseInt($("#add2").val()); // Additionally, force a user to choose a radio button (probably just select one by default)
     const result = add(number1, number2);
     $("#output").text(result);
   });
});