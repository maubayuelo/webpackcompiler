//console.log('03-navigation.js - Loading Navigation scripts');
// Activating Mobile Menu
var hamburguer_menu = document.getElementById("hamburguer-menu");
var nav_mobile = document.getElementById('nav-mobile');
function expand_collapse_mobile_menu() {
  html_element.classList.toggle('menu-mobile-expanded');
  body_element.classList.toggle('menu-mobile-expanded');
  hamburguer_menu.classList.toggle('active');
  nav_mobile.classList.toggle('active');
}
if (typeof(hamburguer_menu) != 'undefined' && hamburguer_menu != null) {
  hamburguer_menu.onclick = function() {
    expand_collapse_mobile_menu();
  };
}
// expand colapse mobile menu sub-items
var html_element = document.getElementById("html_element");
var body_element = document.getElementById("body_element");
var acc = document.getElementsByClassName("panel-parent");
var panel;
var i;
function display_panel(el) {
  // Get the natural height of the element
  var getHeight = function() {
    el.style.display = 'block'; // Make it visible
    var height = el.scrollHeight + 'px'; // Get it's height
    el.style.display = ''; //  Hide it again
    return height;
  };
  var height = getHeight(); // Get the natural height
  el.classList.add('expanded'); // Make the element visible
  el.style.height = height; // Update the max-height
  // Once the transition is complete, remove the inline max-height so the content can scale responsively
  window.setTimeout(function() {
    el.style.height = '';
  }, 350);
}
function hide_panel(el) {
  // Give the element a height to change from
  el.style.height = el.scrollHeight + 'px';
  // Set the height back to 0
  window.setTimeout(function() {
    el.style.height = '0';
  }, 1);
  // When the transition is complete, hide it
  window.setTimeout(function() {
    el.classList.remove('expanded');
  }, 350);
}
function collapse_opened(el) {
  for (i = 0; i < acc.length; i++) {
    if (acc[i].nextElementSibling) {
      acc[i].classList.remove("active");
      if (acc[i].nextElementSibling.classList.contains('expanded')) {
        hide_panel(acc[i].nextElementSibling);
      }
    }
  }
}
for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    panel = this.nextElementSibling;
    collapse_opened(this);
    if (panel) {
      if (!panel.classList.contains('expanded')) {
        display_panel(panel);
        this.classList.add("active");
      } else {
        for (i = 0; i < acc.length; i++) {
          hide_panel(panel);
          this.classList.remove("active");
        }
      }

    }
  });
}
