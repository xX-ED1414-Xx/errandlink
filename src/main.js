import "./style.css";
import { router } from "./utils/router.js";

function initRevealAnimations() {
  const items = document.querySelectorAll("[data-animate]");

  if (!items.length) return;

  items.forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(24px)";
    el.style.transition = "opacity 700ms ease, transform 700ms ease";
    el.style.willChange = "opacity, transform";
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const delay = el.dataset.delay || 0;
          setTimeout(() => {
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
          }, delay);
          observer.unobserve(el);
        }
      });
    },
    { threshold: 0.14, rootMargin: "0px 0px -40px 0px" },
  );

  items.forEach((el, index) => {
    el.dataset.delay = String(index * 70);
    observer.observe(el);
  });
}

function boot() {
  router();
  initRevealAnimations();
}

window.addEventListener("hashchange", boot);
window.addEventListener("load", boot);
