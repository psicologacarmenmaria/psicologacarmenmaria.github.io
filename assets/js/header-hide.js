(function(){
  var lastScroll = 0;
  var ticking = false;
  var header = document.querySelector('.site-header');
  if (!header) return;

  function onScroll() {
    var current = window.scrollY || window.pageYOffset;
    var mobileToggle = document.querySelector('.mobile-menu-toggle');
    var menuExpanded = mobileToggle && mobileToggle.getAttribute('aria-expanded') === 'true';

    if (menuExpanded) {
      // don't hide header while mobile menu is open
      header.classList.remove('site-header--hidden');
      lastScroll = current;
      return;
    }

    if (current <= 50) {
      header.classList.remove('site-header--hidden');
      lastScroll = current;
      return;
    }

    if (current > lastScroll) {
      // scrolling down
      header.classList.add('site-header--hidden');
    } else {
      // scrolling up
      header.classList.remove('site-header--hidden');
    }
    lastScroll = current;
  }

  function requestTick() {
    if (!ticking) {
      requestAnimationFrame(function(){
        onScroll();
        ticking = false;
      });
      ticking = true;
    }
  }

  window.addEventListener('scroll', requestTick, { passive: true });
})();
