import { Header } from "../components/Header.js";
import { Footer } from "../components/Footer.js";

export function Services() {
  return `
    ${Header()}

    <main class="pt-24 max-w-6xl mx-auto px-6">

      <h1 class="text-4xl font-bold">Services</h1>

      <div class="mt-10 grid md:grid-cols-2 gap-6">

        <div class="p-6 border rounded-xl">
          <h2 class="font-semibold text-xl">Grocery Assistance</h2>
          <p class="text-neutral-600 mt-2">Have helpers shop and deliver groceries for you.</p>
        </div>

        <div class="p-6 border rounded-xl">
          <h2 class="font-semibold text-xl">Delivery Services</h2>
          <p class="text-neutral-600 mt-2">Send documents and packages quickly.</p>
        </div>

        <div class="p-6 border rounded-xl">
          <h2 class="font-semibold text-xl">Personal Errands</h2>
          <p class="text-neutral-600 mt-2">Queueing, pickups, and simple tasks.</p>
        </div>

        <div class="p-6 border rounded-xl">
          <h2 class="font-semibold text-xl">Senior Assistance</h2>
          <p class="text-neutral-600 mt-2">Help for elderly individuals with daily errands.</p>
        </div>

      </div>

    </main>

    ${Footer()}
  `;
}
