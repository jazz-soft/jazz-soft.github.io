function qr() {
  var link = document.getElementsByTagName('link');
  var canonical;
  for (var i = 0; i < link.length; i++) {
    if (link[i].rel === 'canonical') {
      canonical = link[i].href;
      break;
    }
  }
  if (!canonical) {
    canonical = window.location.href;
    if (canonical.indexOf('#') != -1) canonical = canonical.substring(0, canonical.indexOf('#')); 
  }
  while (canonical[canonical.length - 1] == '/') canonical = canonical.substring(0, canonical.length - 1);
  drawQR(canonical, document.getElementById('qrcode'));
}
function drawQR(txt, at) {
  var qr = QR(txt);
  var w, x = document.createElementNS('http://www.w3.org/2000/svg', "svg");
  x.setAttribute('version', "1.1");
  x.setAttribute('xmlns', "http://www.w3.org/2000/svg");
  x.setAttribute('viewBox', [-3, -3, qr.length + 6, qr.length + 6].join(' '));
  for (i = 0; i < qr.length; i++) for (j = 0; j < qr.length; j++) if (qr[i][j]) {
    w = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    w.setAttribute('fill', "currentColor")
    w.setAttribute('width', 1);
    w.setAttribute('height', 1);
    w.setAttribute('x', j);
    w.setAttribute('y', i);
    x.appendChild(w);
  }
  at.innerHTML = '';
  at.title = decodeURI(txt);
  at.appendChild(x);
  at.addEventListener("click", function() { at.classList.toggle('qrcode'); });
}

qr();