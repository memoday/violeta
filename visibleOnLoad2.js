window.addEventListener('load', function() {
    var innerWidth = window.innerWidth;

    innerWidth <= "960" ? document.getElementById('vioChat').style.visibility = "hidden" : document.getElementById('vioChat').style.visibility = "visible";
  }, true);