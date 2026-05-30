import { Header } from "../components/Header.js";
import { Footer } from "../components/Footer.js";

export function Pricing() {
  return `
    ${Header()}

    <main class="pt-24 max-w-6xl mx-auto px-6">

      <h1 class="text-4xl font-bold">Pricing</h1>

      <div class="mt-10 grid md:grid-cols-2 gap-6">

        <div class="p-6 border rounded-xl">
          <h2 class="text-xl font-semibold">Standard</h2>
          <p class="mt-2 text-neutral-600">Pay per transaction with standard commission.</p>
        </div>

        <div class="p-6 border rounded-xl">
          <h2 class="text-xl font-semibold">Premium</h2>
          <p class="mt-2 text-neutral-600">Priority access to experienced helpers.</p>
        </div>

      </div>

    </main>

    ${Footer()}
  `;
}
