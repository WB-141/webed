function fadeHeader() {
  const headerBG = document.getElementById("headerbg");
  const headerdif = document.getElementById("headerdif");
  const navtext = document.querySelectorAll(".nav-text-color");
  const herocover = document.getElementById("h-cover");
  const herotext = document.getElementById("herotext")

  headerBG.style.opacity = 1;
  headerdif.style.opacity = 0;
  herocover.style.opacity = 0.6;
  herotext.style.opacity = 1;

  window.addEventListener("scroll", function () {
    const scrollPos = window.scrollY;

    if (scrollPos > 0) {
      headerBG.style.opacity = 0;
      headerdif.style.opacity = 1;
      herocover.style.opacity = 0.4;
      herotext.style.opacity = 0;

      navtext.forEach(function (text) {
        text.style.color = "#3960b4";
      });

    } else {
      headerBG.style.opacity = 1;
      headerdif.style.opacity = 0;
      herocover.style.opacity = 0.6;
      herotext.style.opacity =1;
      navtext.forEach(function (text) {
        text.style.color = "#ffffffff";
      });
    }
  });
}

fadeHeader();
