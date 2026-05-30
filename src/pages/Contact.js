import { Header } from "../components/Header.js";
import { Footer } from "../components/Footer.js";

export function Contact() {
  return `
    ${Header()}

    <main class="pt-24 max-w-4xl mx-auto px-6">

      <h1 class="text-4xl font-bold">Contact Us</h1>

      <p class="mt-4 text-neutral-600">
        Email: support@errandlink.com<br/>
        Phone: +63 900 000 0000
      </p>

      <form class="mt-8 space-y-4">
        <input class="w-full border p-3 rounded" placeholder="Name" />
        <input class="w-full border p-3 rounded" placeholder="Email" />
        <textarea class="w-full border p-3 rounded" placeholder="Message"></textarea>
        <button class="bg-blue-600 text-white px-5 py-3 rounded hover:bg-blue-700">
          Send Message
        </button>
      </form>

    </main>

    ${Footer()}
  `;
}
