(function () {
  const toggle = document.querySelector(".nav-toggle");
  const menu = document.querySelector(".mobile-menu");
  const backdrop = document.querySelector(".mobile-menu-backdrop");

  if (!toggle || !menu || !backdrop) return;

  const isOpen = () => document.body.classList.contains("menu-open");

  function openMenu() {
    document.body.classList.add("menu-open");
    toggle.setAttribute("aria-expanded", "true");
    menu.setAttribute("aria-hidden", "false");
    backdrop.setAttribute("aria-hidden", "false");
  }

  function closeMenu() {
    document.body.classList.remove("menu-open");
    toggle.setAttribute("aria-expanded", "false");
    menu.setAttribute("aria-hidden", "true");
    backdrop.setAttribute("aria-hidden", "true");
  }

  toggle.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();
    isOpen() ? closeMenu() : openMenu();
  });

  menu.addEventListener("click", (e) => e.stopPropagation());
  backdrop.addEventListener("click", closeMenu);

  document.addEventListener("click", (e) => {
    if (!isOpen()) return;
    if (!menu.contains(e.target) && !toggle.contains(e.target)) closeMenu();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeMenu();
  });

  menu.querySelectorAll("a").forEach((a) => a.addEventListener("click", closeMenu));

  window.addEventListener("resize", () => {
    if (window.innerWidth > 820) closeMenu();
  });
})();
