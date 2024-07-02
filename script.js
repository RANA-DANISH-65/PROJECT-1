document.addEventListener("DOMContentLoaded", function () {
    const menuItems = document.querySelectorAll(".menu li a");
    const checkBox = document.getElementById("check");

    menuItems.forEach((item) => {
      item.addEventListener("click", () => {
        checkBox.checked = false; 
      });
    });
  });

  document.addEventListener("DOMContentLoaded", function () {
    let slides = document.querySelectorAll(".slide"); 
    let current = 0;

    function cls() {
      for (let i = 0; i < 20; i++) {
        slides[i].style.display = "none";
      }
    }

    function showSlide(index) {
      slides[index].style.display = "block";
      slides[index].style.opacity = 0.4;

      let x = 0.4;
      let intX = setInterval(function () {
        x += 0.1;
        slides[index].style.opacity = x;
        if (x >= 1) {
          clearInterval(intX);
          x = 0.4;
        }
      }, 100);
    }

    function next() {
      cls();
      current = (current + 1) % slides.length;
      showSlide(current);
      slides[currentSlide].scrollIntoView({ behavior: "smooth" });
    }

    function prev() {
      cls();
      current = (current - 1 + slides.length) % slides.length;
      showSlide(current);
      slides[currentSlide].scrollIntoView({ behavior: "smooth" });
    }

    function start() {
      cls();
      showSlide(current);
    }

    document.querySelector(".arrow.l").addEventListener("click", prev);
    document.querySelector(".arrow.r").addEventListener("click", next);

    start();
  });