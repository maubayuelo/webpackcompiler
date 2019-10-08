//console.log('01-global-04-sticky - sticky elements');

var sub_nav = document.getElementById("sub_nav");
var search_section = document.querySelector('.search_section');

// SubNav goes sticky on dektop
window.onscroll = function() {
  addStickyClass(sub_nav);
  addStickyClass(search_section);
};

function addStickyClass(element) {
  if (typeof(element) != 'undefined' && element != null) {
    var element_offset = element.offsetTop;
    if (window.pageYOffset > element_offset) {
      element.classList.add("sticky");
    } else {
      element.classList.remove("sticky");
    }
  }
}
