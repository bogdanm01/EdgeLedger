const navbar = document.getElementById('navbar');
      let scrolled = false;

      window.onscroll = function () {
        if (window.pageYOffset > 100) {
          navbar.style.background = '#333';
          if (!scrolled) {
            navbar.style.transform = 'translateY(-70px)';
          }
          setTimeout(function () {
            navbar.style.transform = 'translateY(0)';
            scrolled = true;
          }, 200);
        } else {
          navbar.style.background = 'transparent';
          scrolled = false;
        }
      };