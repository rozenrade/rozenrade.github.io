tailwind.config = {
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        "custom-green": "#10B981",
      },
    },
  },
};

const btn = document.getElementById("menuBtn");
const menu = document.getElementById("mobileMenu");
const links = menu.querySelectorAll("a");

btn.addEventListener("click", () => {
  menu.classList.toggle("translate-x-0"); // fait glisser le menu dans l’écran
  menu.classList.toggle("translate-x-full"); // remet hors écran
  menu.classList.toggle("opacity-[85%]"); // menu visible
  menu.classList.toggle("opacity-0"); // menu invisible
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.add("translate-x-full", "opacity-0");
    menu.classList.remove("translate-x-0", "opacity-[85%]");
  });
});

////////////////////////////////////////////////////////////////////////////////////

document.addEventListener("DOMContentLoaded", () => {
  const aboutSection = document.querySelector(".about-section");
  const skillsSection = document.querySelector(".skills-section");

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("slide-in");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.3 }
  );

  observer.observe(aboutSection);
  observer.observe(skillsSection);
});

window.addEventListener("load", () => {
  window.scrollTo(0, 0);
});

////////////////////////////////////////////////////////////////////////////////////
