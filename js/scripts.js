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

  $("button#finish").click(function() {
    $('#one').hide();
    $('#two').hide();
    $('#three').hide();
    $('#four').hide();
    $('#five').hide();
    $('#output').show(); // Submit only refreshing the page not showing results
  });

  $("form#add").submit(function(event) {
    event.preventDefault();
      const choiceOne = $("input:radio[name=q1]:checked").val(); // Need to change this to get the value of the selected radio buttons
      const choiceTwo = $("input:radio[name=q2]:checked").val();
      const choiceThree = $("input:radio[name=q3]:checked").val();
      const choiceFour = $("input:radio[name=q4]:checked").val();
      const choiceFive = $("input:radio[name=q5]:checked").val();
      console.log(choiceOne);
      console.log(choiceTwo);
      console.log(choiceThree);
      console.log(choiceFour);
      console.log(choiceFive);
      $("#output").text(choiceOne);
   });
});