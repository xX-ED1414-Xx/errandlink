import { Header } from "../components/Header.js";
import { Footer } from "../components/Footer.js";

export function FAQ() {
  return `
    ${Header()}

    <main class="pt-24 max-w-4xl mx-auto px-6">

      <h1 class="text-4xl font-bold">FAQ</h1>

      <div class="mt-10 space-y-6">

        <div>
          <h3 class="font-semibold">How are helpers verified?</h3>
          <p class="text-neutral-600">Through identity and basic background screening.</p>
        </div>

        <div>
          <h3 class="font-semibold">What errands are allowed?</h3>
          <p class="text-neutral-600">Only legal, low-risk everyday tasks.</p>
        </div>

        <div>
          <h3 class="font-semibold">How do payments work?</h3>
          <p class="text-neutral-600">Payments are processed per completed task with commission.</p>
        </div>

      </div>

    </main>

    ${Footer()}
  `;
}
