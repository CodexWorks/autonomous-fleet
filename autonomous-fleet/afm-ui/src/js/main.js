import $ from 'jquery';

// Applies 'active' class to sidebar elems when toggle btn is clicked

$(document).ready(function () {
  $('#sidebarCollapse').on('click', function () {
    $('#sidebar').toggleClass('active');
  });
});
