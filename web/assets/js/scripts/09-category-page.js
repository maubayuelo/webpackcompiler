//console.log('09-category-page - category page');
var dots = document.getElementById("dots");
var moreText = document.getElementById("more");
var btnText = document.getElementById("readMoreBtn");

function readMore() {
  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "More";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Less";
    moreText.style.display = "inline";
  }
}

if ((typeof(btnText) != 'undefined' && btnText != null)) {
  btnText.addEventListener('click', function(event) {
    btnText.classList.toggle('read-more-expanded');
    readMore();
  });
}
