const skills = [
  {
    id: "html5-modal",
    name: "HTML5",
    level: "Intermédiaire",
    experience: "2 ans",
    description:
      "Maîtrise partielle. Connaissances en optimisation SEO et structures responsives.",
  },
  {
    id: "css3-modal",
    name: "CSS3",
    level: "Intermédiaire",
    experience: "2 ans",
    description:
      "Conception de sites web avec inclusion de Bootstrap, Sass, Tailwind. Expérience en optimisation SEO et structures responsives.",
  },
  {
    id: "javascript-modal",
    name: "Javascript",
    level: "Débutant",
    experience: "1 an",
    description:
      "Création de fonctions mineures (menu, buttons...). Expérience en carousels, menus déroulants.",
  },
  {
    id: "php-modal",
    name: "PHP",
    level: "Intermédiaire",
    experience: "2 ans",
    description:
      "Connaissances en POO, architecture MVC et projets développés en PHP.",
  },
  {
    id: "symfony-modal",
    name: "Symfony",
    level: "Intermédiaire",
    experience: "1 an",
    description:
      "Création d'applications web structurées, intégration des entités avec ORM/ODM, gestion de BDD SQL/NoSQL.",
  },
  {
    id: "mysql-modal",
    name: "MySQL",
    level: "Intermédiaire",
    experience: "2 ans",
    description:
      "Mises en relation de tables et gestion de BDD SQL. Expérience en projets en groupe.",
  },
  {
    id: "mongodb-modal",
    name: "MongoDB",
    level: "Débutant",
    experience: "1 an",
    description:
      "Gestion et insertions de données via Framework (Symfony) et Node.JS (Mongoose).",
  },
  {
    id: "react-modal",
    name: "React",
    level: "Débutant",
    experience: "1 an",
    description:
      "Utilisation de hooks, composants et props. Projet en groupe avec Symfony.",
  },
];

const skillIcons = {
  HTML5: "./assets/icons/html.svg",
  CSS3: "./assets/icons/css.svg",
  Javascript: "./assets/icons/js.svg",
  PHP: "./assets/icons/php.svg",
  Symfony: "./assets/icons/symfony.svg",
  MySQL: "./assets/icons/mysql.svg",
  MongoDB: "./assets/icons/mongodb.svg",
  React: "./assets/icons/react.svg",
};

const cardsContainer = document.getElementById("skills-cards");

skills.forEach((skill) => {
  const card = document.createElement("div");
  card.className =
    "bg-gray-100 rounded-lg shadow-md p-6 w-[8pc] transform transition-all duration-300 border-transparent border-2 hover:scale-110 hover:border-2 hover:border-green-300 cursor-pointer flex flex-col items-center";

  const skillName = document.createElement("p");
  skillName.textContent = skill.name;
  skillName.className = "font-bold text-lg mb-2 text-center";

  const icon = document.createElement("img");
  icon.src =
    skillIcons[skill.name]
  icon.alt = skill.name;
  icon.className = "w-12 h-12 mb-2";

  card.appendChild(icon);
  card.appendChild(skillName);

  card.onclick = () => openModal(skill.id);

  cardsContainer.appendChild(card);
});

const modalContainer = document.createElement("div");
document.body.appendChild(modalContainer);
skills.forEach((skill) => {
  const modal = document.createElement("div");
  modal.id = skill.id;
  modal.className =
    "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 pointer-events-none transition-opacity duration-300 z-50 p-4";

  modal.innerHTML = `
    <div class="modal-content bg-white rounded-xl p-6 max-w-md w-full transform scale-95 opacity-0 transition-all duration-300">
      <div class="flex justify-between items-center mb-4">
        <h3 class="text-xl font-bold text-gray-900">${skill.name}</h3>
        <button class="close-btn text-gray-500 hover:text-gray-700 text-2xl">&times;</button>
      </div>
      <div class="text-gray-700 space-y-3">
        <p><strong>Niveau :</strong> ${skill.level}</p>
        <p><strong>Expérience :</strong> ${skill.experience}</p>
        <p>${skill.description}</p>
      </div>
    </div>
  `;

  modalContainer.appendChild(modal);

  const closeBtn = modal.querySelector(".close-btn");

  closeBtn.addEventListener("click", () => {
    closeModal(skill.id);
  });

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      closeModal(skill.id);
    }
  });
});

function openModal(id) {
  const modal = document.getElementById(id);
  const content = modal.querySelector(".modal-content");

  modal.classList.remove("opacity-0", "pointer-events-none");
  modal.classList.add("opacity-100", "pointer-events-auto");

  content.classList.remove("scale-95", "opacity-0");
  content.classList.add("scale-100", "opacity-100");
}

function closeModal(id) {
  const modal = document.getElementById(id);
  const content = modal.querySelector(".modal-content");

  content.classList.remove("scale-100", "opacity-100");
  content.classList.add("scale-95", "opacity-0");

  modal.classList.remove("opacity-100", "pointer-events-auto");
  modal.classList.add("opacity-0", "pointer-events-none");
}
