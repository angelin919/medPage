document.addEventListener('DOMContentLoaded', function () {

  document.querySelector('#burger').addEventListener('click', function () {
    document.querySelector('#menu').classList.toggle('show')

  })
  window.onclick = function (event) {
    if (!event.target.matches('.menu-burger')) {

      var dropdowns = document.getElementsByClassName('.nav-menu-burger');
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
})

