document.addEventListener('DOMContentLoaded', function () {
  $(function () {
    $("#accordion").accordion({
      collapsible: true,
      active: false,
    })
  });
  $('.questions-list-inf').on('click', function () {
    $(this).toggleClass('transform');
    /* $(".questions-list-inf").click(function(e) {
  e.target.style.transform = 'rotate'*/
  })

})
