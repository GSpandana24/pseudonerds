$(document).ready(function(){
    $('#dropdownMenuButton').onmouseover(function() {
      $(this).find(".dropdown-menu").removeClass('hide');
    });
    $('#dropdownMenuButton').onmouseout(function() {
        $(this).find(".dropdown-menu").addClass('hide');
    });  
});