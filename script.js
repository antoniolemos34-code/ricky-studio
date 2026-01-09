// year
document.getElementById("year").textContent = new Date().getFullYear();

// mobile menu
const burger = document.querySelector(".burger");
const mobile = document.querySelector(".mobile-menu");

if (burger && mobile) {
  burger.addEventListener("click", () => {
    const open = !mobile.hasAttribute("hidden");
    if (open) {
      mobile.setAttribute("hidden", "");
      burger.setAttribute("aria-expanded", "false");
    } else {
      mobile.removeAttribute("hidden");
      burger.setAttribute("aria-expanded", "true");
    }
  });

  mobile.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => {
      mobile.setAttribute("hidden", "");
      burger.setAttribute("aria-expanded", "false");
    });
  });
}

// reveal on scroll
const items = document.querySelectorAll(".reveal");
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add("show");
  });
}, { threshold: 0.12 });

items.forEach(el => io.observe(el));
