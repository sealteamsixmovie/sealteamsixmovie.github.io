$(document).ready(function(){
    var images = document.querySelectorAll('img')
    var imageData = []
    function replaceImage (node) {
      if (
        node.getAttribute('data-lazyload-replaced') ||
        (window.scrollY + window.innerHeight) <= node.offsetTop
      ) {
        return
      }
      var newImage = new Image()
      newImage.src = node.getAttribute('data-src')
      newImage.onload = (function (event) {
        setTimeout(function () {
          node.parentElement.replaceChild(newImage, node)      
        }, Math.random() * 2000 + 500)
      }).bind(this)
      
      node.setAttribute('data-lazyload-replaced', true)
    }
    document.addEventListener('scroll', function (event) {
      for (var i = 0, numImages = images.length; i < numImages; i++) {
        replaceImage(images[i])
      }
    })
    for (var i = 0, numImages = images.length; i < numImages; i++) {
      images[i].onload = function (event) {
        replaceImage(event.target)
      }
    }
});