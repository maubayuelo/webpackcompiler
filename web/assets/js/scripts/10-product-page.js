//console.log('10-product-page - category page');
/// CTA BOX ON THE BOTTOM OF THE PRODUCT PAGE
var element_offset = 400;
if (!detectmob()) {
  var element_offset = 110;
}
var button_visit_top = document.getElementById("button-visit-top");
var cta_box = document.getElementById('cta-box');

function ctaFade(element_1, element_2) {
  if (typeof(element_1) != 'undefined' && element_1 != null) {
    if (window.pageYOffset > element_offset) {
      element_2.classList.add("visible");
    } else {
      element_2.classList.remove("visible");
    }
  }
}
if (cta_box != 'undefined' && cta_box != null) {
  window.onscroll = function() {
    ctaFade(button_visit_top, cta_box)
  };
}


/// SIDEBAR ON THE PRODUCT PAGE
var mainNavLinks = document.querySelectorAll("ul.side_nav li a");
var mainSections = document.querySelectorAll("section.main_content h2");
var sideNav = document.getElementById("col-side-nav");
var sideNav_link = document.querySelectorAll("nav.col-side-nav ul li a");
var lastId;
var cur = [];
// This should probably be throttled.
// Especially because it triggers during smooth scrolling.
// https://lodash.com/docs/4.17.10#throttle
// You could do like...
// window.addEventListener("scroll", () => {
//    _.throttle(doThatStuff, 100);
// });
// Only not doing it here to keep this Pen dependency-free.
window.addEventListener("scroll", event => {
  var fromTop = window.scrollY + 350;
  mainNavLinks.forEach(link => {
    var section_t = document.querySelector(link.hash);
    if (
      section_t.offsetTop <= fromTop &&
      section_t.offsetTop + section_t.offsetHeight > fromTop
    ) {
      link.parentNode.classList.add("active");
    } else {
      link.parentNode.classList.remove("active");
    }
  });
});

//  NAV SMOOTH SCROLLLING TO SECTION
if (sideNav != 'undefined' && sideNav != null) {
  sideNav_link.forEach(sideNav_link => {
    sideNav_link.addEventListener('click', (e) => {
      event.preventDefault();
      scrollTo(document.getElementById(e.target.hash.substr(1)), document.getElementById(e.target.hash.substr(1)).offsetTop - 245)
    })
  })
}
//  MOBILE NAVIGATION FOR PRODUCT PAGE SECTIONS
var mobile_nav_container = document.getElementById('toggleMe');
var mobile_nav_toogler = document.getElementById('toggle');
var mobNav_link = document.querySelectorAll("nav.mobile-nav-container ul li a");
var product_title_section = document.getElementById('product_title_section');
if (mobile_nav_toogler != 'undefined' && mobile_nav_toogler != null) {
  mobile_nav_toogler.addEventListener('click', function(event) {
    event.preventDefault();
    if (!mobile_nav_container.classList.contains('mobile-nav-container-active')) {
      mobile_nav_container.classList.add('mobile-nav-container-active');
      mobile_nav_toogler.classList.add('toggle-content-active');
      mobile_nav_container.style.height = 'auto';
      var height = mobile_nav_container.clientHeight + 'px';
      mobile_nav_container.style.height = '0px';
      setTimeout(function() {
        mobile_nav_container.style.height = height;
      }, 0);
    } else {
      mobile_nav_container.style.height = '0px';
      mobile_nav_container.classList.remove('mobile-nav-container-active');
      mobile_nav_toogler.classList.remove('toggle-content-active');
    }
  });
  // scrolling to section
  mobNav_link.forEach(mobNav_link => {
    mobNav_link.addEventListener('click', (e) => {
      event.preventDefault();
      scrollTo(document.getElementById(e.target.hash.substr(1)), document.getElementById(e.target.hash.substr(1)).offsetTop - (product_title_section.offsetHeight + 70));
      mobile_nav_container.style.height = '0px';
      mobile_nav_container.addEventListener('transitionend', function() {
        mobile_nav_container.classList.remove('mobile-nav-container-active');
        mobile_nav_toogler.classList.remove('toggle-content-active');
      }, {
        once: true
      });
    })
  })
}
