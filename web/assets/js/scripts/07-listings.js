//console.log('07-listings.js - listing section');

// Others Products Carousel

var my_slider = document.getElementById('my-slider');
if (typeof(my_slider) != 'undefined' && my_slider != null) {
  var slider = tns({
    container: '.my-slider',
    items: 1,
    nav: false,
    touch: true,
    loop: false,
    mouseDrag: true,
    responsive: {
      640: {
        edgePadding: 0,
        gutter: 10,
        items: 2
      },
      700: {
        gutter: 15,
        items: 4
      },
      1200: {
        items: 5
      }
    }
  });
}
