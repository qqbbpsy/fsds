document.addEventListener("contextmenu", function(e){
  e.preventDefault();
}, false);

document.addEventListener('contextmenu', function(event) {
  if (event.target.nodeName.toLowerCase() === 'img') {
    event.preventDefault();
  }
});

(function() {
    var disableSelectionCSS = "body{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}";
    var head = document.head || document.getElementsByTagName('head')[0];
    var style = document.createElement('style');

    style.type = 'text/css';
    style.id = 'disableSelectionCSS';
    style.appendChild(document.createTextNode(disableSelectionCSS));
    head.appendChild(style);

    var body = document.body || document.getElementsByTagName('body')[0];
    body.onselectstart = function() {
        return false;
    };
})();

document.onkeydown = function(e) {
  if (e.keyCode === 123 || (e.ctrlKey && e.keyCode === 85)) {
    return false;
  }
};
