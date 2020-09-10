import $ from 'jquery';

// Applies 'active' class to sidebar elems when toggle btn is clicked
// Deprecated - add js method onClick() in MainNavBar

$(document).ready(function () {
  $('#sidebarCollapse').on('click', function () {
    $('#sidebar').toggleClass('active');
  });
});
