function total(one, two, three, four, five) {
  const totalVal = one + two + three + four + five;
  return totalVal; //for debugging
}

$(document).ready(function() {
  $("button#start").click(function() {
    $('#ready').hide();
    $('#one').show();
  });

  $("button#next1").click(function() {
    $('#one').hide();
    $('#two').show();
  });

  $("button#next2").click(function() {
    $('#two').hide();
    $('#three').show();
  });

  $("button#next3").click(function() {
    $('#three').hide();
    $('#four').show();
  });

  $("button#next4").click(function() {
    $('#four').hide();
    $('#five').show();
  });

  $("button#finish").click(function() {
    $('#five').hide();
    $('#output').show();
  });

  $("form#questions").submit(function(event) {
    event.preventDefault();
    const choiceOne = parseInt($("input:radio[name=q1]:checked").val());
    const choiceTwo = parseInt($("input:radio[name=q2]:checked").val());
    const choiceThree = parseInt($("input:radio[name=q3]:checked").val());
    const choiceFour = parseInt($("#q4").val());
    const choiceFive = parseInt($("input:radio[name=q5]:checked").val());
    console.log(choiceOne);
    console.log(choiceTwo);
    console.log(choiceThree);
    console.log(choiceFour);
    console.log(choiceFive);
    //$("#output").text(choiceOne + choiceTwo + choiceThree + choiceFour + choiceFive);
    $("#output").text(total(choiceOne, choiceTwo, choiceThree, choiceFour, choiceFive));
    // if this works it will look identical
    // it worked first try, I'm da bes
  });
});