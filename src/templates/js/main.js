//кнопка навигации
$(".button-collapse").sideNav();


$(document).ready(function() {
  $('select').material_select();
});
$('select').material_select('destroy');

//модальное окно корректировки бюджета
$( "#" ).on("click", function() {
  $('#billModal1').modal('open');
});



//модальные окна счетов
$( "#bill1" ).on("click", function() {
  $('#billModal1').modal('open');
});


//переход к списку после нажатия на блок
//реализовать при помощи vue т.к. одностраничное приложение

$("#buyList").on('click', function () {
  window.location.href = "index.html";
});