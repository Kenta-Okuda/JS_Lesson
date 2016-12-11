function pushButton(e) {
  var count = $('.label').text();
  switch(e.value) {
    case 'plus':
      count++;
      break;
    case 'minus':
      count--;
      break;
    default:
      break;
  }
  $('.label').text(count);
}

