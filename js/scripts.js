function total(one, two, three, four, five) {
  const totalVal = one + two + three + four + five;
  if (totalVal < 12) {
    return "PYTHON";
  }
  else if (totalVal >= 12 && totalVal < 15) {
    return "C++";
  }
  else if (totalVal >= 15 && totalVal < 18) {
    return "JAVASCRIPT";
  }
  else if (totalVal >= 18 && totalVal < 21) {
    return "JAVA";
  }
  else {
    return "JSF*CK"
  }
  //return totalVal; //for debugging
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
    $("#output").text(total(choiceOne, choiceTwo, choiceThree, choiceFour, choiceFive));
  });
});

//Confirmed Working:

//Above 20: JSFuck ***
//18-20: Java ***
//15-17: JS
//12-14: C++ ***
//< 12: Python ***

//Definitely revise, Python isn't even an option ATM