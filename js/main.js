$(document).ready(function () {

});
$('.wrapper ').on('click', function () {
  $('.wrapper').addClass('test-class');
});
$('.btn-popap ').on('click', function () {
  $('.wrap-popap').css({
    'display': 'block',
    'position': 'fixed',
    'top': '0',
    'bottom': '0',
    'left': '0',
    'right': '0',
    'background': "rgba(0, 0, 0, 0.5)"
  });
});
$('.btn-close').on('click', function () {
   $('.wrap-popap').css('display', 'none');
 });
