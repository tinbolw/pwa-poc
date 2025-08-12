function checkInternet() {
  document.getElementById("internet-label").innerText = window.navigator.onLine;
}

async function checkHost() {
  fetch(window.location.href + (/\?/.test(window.location.href) ? "&" : "?") + new Date().getTime()).then((res) => {
    document.getElementById("host-label").innerText = res.status === 200;
  }).catch((err) => {
    document.getElementById("host-label").innerText = false;
  });
}