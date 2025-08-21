// animatie skill bars
document.addEventListener("scroll", () => {
  document.querySelectorAll(".progress").forEach(bar => {
    const rect = bar.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
      bar.style.setProperty("--value", bar.style.getPropertyValue("--value"));
    }
  });
});

// active nav link
const links = document.querySelectorAll(".nav-links a");
window.addEventListener("scroll", () => {
  let fromTop = window.scrollY;
  links.forEach(link => {
    let section = document.querySelector(link.getAttribute("href"));
    if (section.offsetTop <= fromTop + 100 &&
        section.offsetTop + section.offsetHeight > fromTop + 100) {
      links.forEach(l => l.classList.remove("active"));
      link.classList.add("active");
    }
  });
});
