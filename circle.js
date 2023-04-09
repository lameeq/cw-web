var circle = anime({
    targets: '.circle',
    opacity: 1,
    easing: 'easeInOutQuad',
    duration: 2000,
    autoplay: false
  });
  
  document.querySelector('.container').addEventListener('mouseenter', function() {
    circle.play();
  });
  
  document.querySelector('.container').addEventListener('mouseleave', function() {
    circle.reverse();
  });