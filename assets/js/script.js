const btn = document.getElementById("menuBtn");
const menu = document.getElementById("mobileMenu");

btn.addEventListener("click", () => {
  menu.classList.toggle("translate-x-0"); // fait glisser le menu dans l’écran
  menu.classList.toggle("translate-x-full"); // remet hors écran
  menu.classList.toggle("opacity-100"); // menu visible
  menu.classList.toggle("opacity-0"); // menu invisible
});

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

function openModal(modalId) {
  document.getElementById(modalId).classList.remove("hidden");
}

function closeModal(modalId) {
  document.getElementById(modalId).classList.add("hidden");
}

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("fixed")) {
    e.target.classList.add("hidden");
  }
});
