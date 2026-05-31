import "./style.css";
import { router } from "./utils/router.js";

function initRevealAnimations() {
  const items = document.querySelectorAll("[data-animate]");

  if (!items.length) return;

  items.forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(22px)";
    el.style.transition = "opacity 720ms cubic-bezier(0.2, 0.75, 0.25, 1), transform 720ms cubic-bezier(0.2, 0.75, 0.25, 1)";
    el.style.willChange = "opacity, transform";
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const delay = Number(el.dataset.delay || 0);
          window.setTimeout(() => {
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
          }, delay);
          observer.unobserve(el);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -34px 0px" },
  );

  items.forEach((el, index) => {
    el.dataset.delay = String(Math.min(index * 55, 320));
    observer.observe(el);
  });
}

function initFriendlyInteractions() {
  document.querySelectorAll(".mobile-nav__panel a").forEach((link) => {
    link.addEventListener("click", () => {
      const details = link.closest("details");
      if (details) details.open = false;
    });
  });

  const form = document.querySelector("[data-contact-form]");
  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const status = form.querySelector("[data-form-status]");
      if (status) {
        status.classList.add("is-visible");
        status.textContent = "Thank you! Your message is ready for frontend testing.";
      }
      form.reset();
    });
  }
}

function boot() {
  router();
  window.scrollTo({ top: 0, behavior: "smooth" });
  initRevealAnimations();
  initFriendlyInteractions();
}

window.addEventListener("hashchange", boot);
window.addEventListener("load", boot);
