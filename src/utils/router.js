import { Home } from "../pages/Home.js";
import { About } from "../pages/About.js";
import { Services } from "../pages/Services.js";
import { HowItWorks } from "../pages/HowItWorks.js";
import { Pricing } from "../pages/Pricing.js";
import { FAQ } from "../pages/FAQ.js";
import { Contact } from "../pages/Contact.js";

const routes = {
  "/": Home,
  "/about": About,
  "/services": Services,
  "/how-it-works": HowItWorks,
  "/pricing": Pricing,
  "/faq": FAQ,
  "/contact": Contact,
};

export function router() {
  const app = document.querySelector("#app");

  const path = window.location.hash.slice(1) || "/";
  const page = routes[path] || Home;

  app.innerHTML = page();
}
