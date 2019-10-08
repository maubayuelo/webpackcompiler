//console.log('04-search-bar.js - Expand and colapse search bar');

var icon_search = document.getElementById("icon-search");
var icon_search_mobile = document.getElementById("icon-search-mobile");
var search_Bar = document.getElementById("search_Bar");
// Place cursor on search form function
function SetFocus() {
  search_Bar.focus();
}
function unSetFocus() {
  search_Bar.blur();
}
// Display search form
function expand_search_form() {
  // "hamburguer_menu" variable comes from "03-navigation.js"
  if (hamburguer_menu.classList.contains("active")) {
    expand_collapse_mobile_menu();
  }
  search_section.classList.toggle('expanded');
  if(search_section.classList.contains('expanded')){
    SetFocus();
  }else{
    unSetFocus()
  }

}
if ((typeof(icon_search) != 'undefined' && icon_search != null) || typeof(icon_search_mobile) != 'undefined' && icon_search_mobile != null) {
  //icon_search_mobile.onclick = function() {expand_search_form()};
  //icon_search.onclick = function() {expand_search_form()};

  icon_search_mobile.addEventListener('click', function(event) {
    event.preventDefault();
    expand_search_form();
  });
  icon_search.addEventListener('click', function(event) {
    event.preventDefault();
    expand_search_form();
  });
}
