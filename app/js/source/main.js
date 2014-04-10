(function(){
  'use strict';
  $(document).ready(initialize);

  function initialize(){
    $('#btn').click(doStuff);
    $('#anotherBtn').click(activateBitchPowers);
    $('#btn3').click(doMoreStuff);
    $('#btn4').click(removeAlert);
    $('#btn5').click(toggleAlert);
    $('#btn6').click(grabText);
    $('#btn7').click(changeColor);
  }

  function doStuff(){
    $('h1').css('color', 'red');
    $('h2').css('background-color', 'green');
    $('h3').text('courey');

  }

  function activateBitchPowers(){
    $('#btn').text('take that.');
  }

  function doMoreStuff(){
    $('body').addClass('alert');//adds the class "alert" to the body
  }

  function removeAlert(){// removes alert class from the body
    $('body').removeClass('alert');
  }

  function toggleAlert(){
    $('body').toggleClass('alert');
  }

  function grabText(){
    var x = $('#tb1').val();
    $('h1').text(x.toUpperCase());
  }

  function changeColor(){
    var x = $('#tb1').val();
    $('h1').css('color', x);
  }

  //this is setting the value to hello. when clicked, hello appears in the text box
  // function grabText(){
  //   $('#tb1').val('hello');
  // }


})();
