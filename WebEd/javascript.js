function fadeHeader() {
  const headerBG = document.querySelector("headerBG");
  const headerdif = document.querySelector("header-different");
  headerBG.style.opacity = 1;
  headerdif.style.opacity = 0;

  window.addEventListener("scroll", function () {
    const scrollPos = this.window.scrollY;

    if (scrollPos > 0) {
      headerBG.style.opacity = 0;
      headerdif.style.opacity = 1;
    } else {
      headerBG.style.opacity = 1;
      headerdif.style.opacity = 0;
    }
  });
}

fadeHeader();
