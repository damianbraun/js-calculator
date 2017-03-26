
$('.btn').click(function() {
  var value = $(this).text();
  var display = $('.display').text();
  if (value) {
    switch (value) {
      case 'C':
        $('.display').text('');
        break;
      case '=':
        var solution = eval(display);
        $('.display').text(solution);
        break;
      default:
        $('.display').text(display+value);

    }
  }
});
// TODO: przycisk kasujący ostatni znak z display
