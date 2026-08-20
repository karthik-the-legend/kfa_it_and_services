// KFA IT and Services — shared site behaviour (mobile nav toggle)
document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.getElementById("mobile-menu-btn");
  var panel = document.getElementById("mobile-nav-panel");
  var icon = document.getElementById("mobile-menu-icon");

  if (!toggle || !panel) return;

  function closeMenu() {
    panel.classList.add("hidden");
    toggle.setAttribute("aria-expanded", "false");
    if (icon) icon.textContent = "menu";
  }

  function openMenu() {
    panel.classList.remove("hidden");
    toggle.setAttribute("aria-expanded", "true");
    if (icon) icon.textContent = "close";
  }

  toggle.addEventListener("click", function () {
    if (panel.classList.contains("hidden")) {
      openMenu();
    } else {
      closeMenu();
    }
  });

  panel.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeMenu();
  });
});
