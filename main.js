const scrollButtons = document.querySelectorAll("[data-scroll]");

scrollButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const target = btn.getAttribute("data-scroll");
    const el = document.querySelector(target);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
      }
    });
  },
  { threshold: 0.2 }
);

document.querySelectorAll(".section, .project-card, .hero-card").forEach((el) => {
  observer.observe(el);
});
