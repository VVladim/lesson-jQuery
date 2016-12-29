$(document).ready(function () {
  var wrapPopap = $('.wrap-popap');

  $(document).ready(function () {

  });
  $('.wrapper ').on('click', function () {
    $('.wrapper').addClass('test-class');
  });
  $('.btn-popap ').on('click', function () {
    wrapPopap.fadeIn(3000);
  });
  $('#btn-close').on('click', function () {
     wrapPopap.fadeOut(3000);
   });
  $('.btn-acc').on('click', function () {
      $(this).parent().find('p').slideToggle(300);
  });
  $('.btn-acc').each(function(index, item) {
    item.append(index + 1);
  });

});
