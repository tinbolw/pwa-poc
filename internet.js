function checkInternet() {
  document.getElementById("internet-label").innerText = window.navigator.onLine;
}

function checkHost() {
  // kind of shit but it works for now
  try {
    const res = httpGet(window.location.href + (/\?/.test(window.location.href) ? "&" : "?") + new Date().getTime());
    document.getElementById("host-label").innerText = true;
  } catch(err) {
    document.getElementById("host-label").innerText = false;
  }
}

function httpGet(theUrl) {
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
  xmlHttp.send( null );
  return xmlHttp;
}