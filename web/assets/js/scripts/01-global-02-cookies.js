//console.log('02-cookies.js - Loading Cookies');
// function to clear cookies (ex: used on 05-main-banner-video.js)
function clearCookie(name, domain, path) {
  var domain = domain || document.domain;
  var path = path || "/";
  document.cookie = name + "=; expires=" + +new Date + "; domain=" + domain + "; path=" + path;
};
