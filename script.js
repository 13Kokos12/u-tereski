const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLinks = document.querySelectorAll(".nav-menu a");

// Otwieranie/Zamykanie menu hamburger
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");

  // Blokada scrollowania strony przy otwartym menu
  document.body.style.overflow = navMenu.classList.contains("active")
    ? "hidden"
    : "auto";
});

// Zamykanie menu po kliknięciu w link
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    document.body.style.overflow = "auto";
  });
});

// Efekt zmiany wyglądu navbaru podczas przewijania
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.style.height = "70px";
    navbar.style.boxShadow = "0 5px 20px rgba(0,0,0,0.1)";
  } else {
    navbar.style.height = "80px";
    navbar.style.boxShadow = "none";
  }
});

// Płynne przewijanie (Smooth Scroll) z poprawką na wysokość navbaru
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href");
    if (targetId === "#") return;

    const targetElement = document.querySelector(targetId);
    const offset = 80; // wysokość navbaru
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = targetElement.getBoundingClientRect().top;
    const elementPosition = elementRect - bodyRect;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  });
});
