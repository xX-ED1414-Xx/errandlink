import { Header } from "../components/Header.js";
import { Footer } from "../components/Footer.js";

export function About() {
  return `
    ${Header()}

    <main class="pt-24 max-w-4xl mx-auto px-6">

      <h1 class="text-4xl font-bold">About ErrandLink</h1>

      <p class="mt-6 text-neutral-600">
        ErrandLink Inc. is a digital platform that connects clients with nearby helpers
        who can assist with everyday tasks such as grocery shopping, delivery, and other
        low-risk errands.
      </p>

      <h2 class="mt-10 text-2xl font-semibold">Mission</h2>
      <p class="mt-2 text-neutral-600">
        To make everyday assistance accessible, fast, and community-driven.
      </p>

      <h2 class="mt-10 text-2xl font-semibold">Vision</h2>
      <p class="mt-2 text-neutral-600">
        A world where no simple task is a burden.
      </p>

    </main>

    ${Footer()}
  `;
}
