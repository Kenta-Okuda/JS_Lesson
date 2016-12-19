var calc_mark = ['+','-','*','/'];

$('input.form1,input.form2,select.select1').bind('keyup change',function() {
  var num1 = parseInt($('input.form1').val());
  var num2 = parseInt($('input.form2').val());

  if(!isNaN(num1) && !isNaN(num2)) { 
    switch(calc_mark[$('.select1').val()]) {
      case '+':
        $('.label2').text(num1 + num2);
        break;
      case '-':
        $('.label2').text(num1 - num2);
        break;
      case '*':
        $('.label2').text(num1 * num2);
        break;
      case '/':
        $('.label2').text(num1 / num2);
        break;
      default:
    }
  } else {
    $('.label2').text("Error");
  }
});

function selectList() {
  for(var i = 0; i < 4; i++) {
    document.write('<option value="' + i + '">' + calc_mark[i] + '</option>');
  }
}

$('input.radio').bind('change',function() {
  switch($(this).val()) {
    case 'red':
      $('.label2').css('background-color','red');
      break;
    case 'green':
      $('.label2').css('background-color','green');
      break;
    case 'blue':
      $('.label2').css('background-color','blue');
      break;
    default:
      break;
  }
});
