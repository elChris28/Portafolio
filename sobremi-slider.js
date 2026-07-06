const lifeSlides = [
  {
    category: "Contenido digital",
    title: "Creador de contenido Tech",
    description:
      "Comparto contenido sobre programación, tecnología, herramientas digitales y aprendizaje de una forma simple, cercana y útil para estudiantes.",
    image: "img/highlights/tiktok.jpg",
    miniOne: "+28k comunidad",
    miniTwo: "Tech & educación",
    tags: ["TikTok", "Educación", "Tecnología"],
    link: "https://tiktok.com"
  },
  {
    category: "Vida universitaria",
    title: "Talleres, cultura y aprendizaje",
    description:
      "Participo en espacios académicos y culturales donde desarrollo habilidades de comunicación, liderazgo y colaboración con otros estudiantes.",
    image: "img/highlights/universidad.jpg",
    miniOne: "Universidad",
    miniTwo: "Cultura & talleres",
    tags: ["Talleres", "Cultura", "Comunidad"],
    link: "#"
  },
  {
    category: "Hobbies",
    title: "Creatividad fuera de pantalla",
    description:
      "Me gusta explorar actividades que despierten creatividad, disciplina y nuevas ideas para aplicar en proyectos personales y profesionales.",
    image: "img/highlights/hobbies.jpg",
    miniOne: "Creatividad",
    miniTwo: "Aprendizaje continuo",
    tags: ["Hobbies", "Ideas", "Creatividad"],
    link: "#"
  },
  {
    category: "Comunidad",
    title: "Compartir lo que aprendo",
    description:
      "Creo que enseñar también es una forma de aprender. Por eso comparto experiencias, recursos y aprendizajes con personas que están iniciando.",
    image: "img/highlights/comunidad.jpg",
    miniOne: "Aprender enseñando",
    miniTwo: "Comunidad tech",
    tags: ["Mentoría", "Contenido", "Colaboración"],
    link: "#"
  }
];

const lifeCard = document.querySelector(".life-card");
const lifeImage = document.getElementById("lifeImage");
const lifeNumber = document.getElementById("lifeNumber");
const lifeCategory = document.getElementById("lifeCategory");
const lifeTitle = document.getElementById("lifeTitle");
const lifeDescription = document.getElementById("lifeDescription");
const lifeTags = document.getElementById("lifeTags");
const lifeLink = document.getElementById("lifeLink");
const lifeMiniOne = document.getElementById("lifeMiniOne");
const lifeMiniTwo = document.getElementById("lifeMiniTwo");
const lifeDots = document.getElementById("lifeDots");

const prevBtn = document.querySelector(".life-btn-prev");
const nextBtn = document.querySelector(".life-btn-next");

let currentLifeSlide = 0;

function createLifeDots() {
  lifeDots.innerHTML = "";

  lifeSlides.forEach((_, index) => {
    const dot = document.createElement("button");
    dot.classList.add("life-dot");
    dot.setAttribute("aria-label", `Ir al slide ${index + 1}`);

    if (index === currentLifeSlide) {
      dot.classList.add("active");
    }

    dot.addEventListener("click", () => {
      currentLifeSlide = index;
      renderLifeSlide();
    });

    lifeDots.appendChild(dot);
  });
}

function renderLifeSlide() {
  const slide = lifeSlides[currentLifeSlide];

  lifeCard.classList.add("is-changing");

  setTimeout(() => {
    lifeImage.src = slide.image;
    lifeImage.alt = slide.title;

    lifeNumber.textContent = String(currentLifeSlide + 1).padStart(2, "0");
    lifeCategory.textContent = slide.category;
    lifeTitle.textContent = slide.title;
    lifeDescription.textContent = slide.description;
    lifeLink.href = slide.link;

    lifeMiniOne.textContent = slide.miniOne;
    lifeMiniTwo.textContent = slide.miniTwo;

    lifeTags.innerHTML = "";
    slide.tags.forEach((tag) => {
      const span = document.createElement("span");
      span.textContent = tag;
      lifeTags.appendChild(span);
    });

    document.querySelectorAll(".life-dot").forEach((dot, index) => {
      dot.classList.toggle("active", index === currentLifeSlide);
    });

    lifeCard.classList.remove("is-changing");
  }, 260);
}

function nextLifeSlide() {
  currentLifeSlide = (currentLifeSlide + 1) % lifeSlides.length;
  renderLifeSlide();
}

function prevLifeSlide() {
  currentLifeSlide =
    (currentLifeSlide - 1 + lifeSlides.length) % lifeSlides.length;
  renderLifeSlide();
}

nextBtn.addEventListener("click", nextLifeSlide);
prevBtn.addEventListener("click", prevLifeSlide);

createLifeDots();
renderLifeSlide();