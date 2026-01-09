// Mobile menu
const burger = document.getElementById("burger");
const mobileMenu = document.getElementById("mobileMenu");
const year = document.getElementById("year");
const fab = document.getElementById("fab");

year.textContent = new Date().getFullYear();

function toggleMenu() {
  const expanded = burger.getAttribute("aria-expanded") === "true";
  burger.setAttribute("aria-expanded", String(!expanded));
  mobileMenu.hidden = expanded;
}

if (burger && mobileMenu) {
  burger.addEventListener("click", toggleMenu);
  mobileMenu.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => {
      burger.setAttribute("aria-expanded", "false");
      mobileMenu.hidden = true;
    });
  });
}

// FAB button -> scroll to contact or open WhatsApp if link exists
const waBtn = document.getElementById("waBtn");
if (fab && waBtn) {
  fab.addEventListener("click", () => {
    // If you prefer scroll: document.querySelector("#contact").scrollIntoView({behavior:"smooth"});
    window.open(waBtn.href, "_blank", "noopener");
  });
}

// Smooth scroll for internal anchors
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener("click", (e) => {
    const href = a.getAttribute("href");
    if (!href || href === "#") return;
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});
