import { Header } from "../components/Header.js";
import { Footer } from "../components/Footer.js";

export function HowItWorks() {
  return `
    ${Header()}

    <main class="pt-24 max-w-4xl mx-auto px-6">

      <h1 class="text-4xl font-bold">How It Works</h1>

      <div class="mt-10 space-y-8">

        <div>
          <h2 class="text-xl font-semibold">For Clients</h2>
          <p class="text-neutral-600 mt-2">
            Post an errand → Get matched → Track progress → Confirm completion → Pay
          </p>
        </div>

        <div>
          <h2 class="text-xl font-semibold">For Helpers</h2>
          <p class="text-neutral-600 mt-2">
            Accept tasks → Complete errands → Earn income per task
          </p>
        </div>

      </div>

    </main>

    ${Footer()}
  `;
}
