import "./style.css";
import { router } from "./utils/router.js";

function initRevealAnimations() {
  const items = document.querySelectorAll("[data-animate]");

  if (!items.length) return;

  items.forEach((el) => {
    if (el.dataset.animated === "true") return;

    el.style.opacity = "0";
    el.style.transform = "translateY(22px)";
    el.style.transition =
      "opacity 720ms cubic-bezier(0.2, 0.75, 0.25, 1), transform 720ms cubic-bezier(0.2, 0.75, 0.25, 1)";
    el.style.willChange = "opacity, transform";
    el.dataset.animated = "true";
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        const el = entry.target;
        const delay = Number(el.dataset.delay || 0);

        window.setTimeout(() => {
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
        }, delay);

        observer.unobserve(el);
      });
    },
    {
      threshold: 0.12,
      rootMargin: "0px 0px -34px 0px",
    },
  );

  items.forEach((el, index) => {
    el.dataset.delay = String(Math.min(index * 55, 320));
    observer.observe(el);
  });
}

function initContactForm() {
  const form = document.querySelector("[data-contact-form]");
  if (!form || form.dataset.bound === "true") return;

  form.dataset.bound = "true";

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const status = form.querySelector("[data-form-status]");
    const submitButton = form.querySelector('button[type="submit"]');

    if (status) {
      status.classList.remove("is-visible", "is-error");
      status.classList.add("is-pending");
      status.textContent = "Sending your message...";
    }

    if (submitButton) {
      submitButton.disabled = true;
      submitButton.style.opacity = "0.75";
      submitButton.style.cursor = "wait";
    }

    try {
      const formData = new FormData(form);

      await fetch(form.action, {
        method: "POST",
        body: formData,
        mode: "no-cors",
      });

      form.reset();

      if (status) {
        status.classList.remove("is-pending", "is-error");
        status.classList.add("is-visible");
        status.textContent =
          "Success! Your message has been sent. We will get back to you soon.";
      }
    } catch (error) {
      if (status) {
        status.classList.remove("is-pending", "is-visible");
        status.classList.add("is-error");
        status.textContent =
          "Something went wrong. Please try again or email ditangeorgeedward@gmail.com.";
      }
    } finally {
      if (submitButton) {
        submitButton.disabled = false;
        submitButton.style.opacity = "";
        submitButton.style.cursor = "";
      }
    }
  });
}

function initFriendlyInteractions() {
  document.querySelectorAll(".mobile-nav__panel a").forEach((link) => {
    link.addEventListener("click", () => {
      const details = link.closest("details");
      if (details) details.open = false;
    });
  });

  initContactForm();
}

function boot() {
  router();
  window.scrollTo(0, 0);
  initRevealAnimations();
  initFriendlyInteractions();
}

window.addEventListener("load", boot);
window.addEventListener("hashchange", boot);
