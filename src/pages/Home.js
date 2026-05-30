import { Header } from "../components/Header.js";
import { Footer } from "../components/Footer.js";

export function Home() {
  return `
    ${Header()}

    <main class="pt-16">

      <!-- HERO -->
      <section class="min-h-screen flex items-center bg-gradient-to-b from-white to-blue-50">
        <div class="max-w-6xl mx-auto px-6 py-24">
          
          <p class="text-sm font-semibold uppercase tracking-wide text-blue-600">
            ErrandLink Inc.
          </p>

          <h1 class="mt-4 text-4xl md:text-6xl font-bold tracking-tight">
            Your everyday errands, handled by people near you.
          </h1>

          <p class="mt-6 max-w-2xl text-lg text-neutral-600">
            ErrandLink connects clients with nearby helpers for groceries, deliveries,
            and everyday low-risk tasks — fast, simple, and reliable.
          </p>

          <div class="mt-8 flex gap-4">
            <a href="#/services" class="rounded-lg bg-blue-600 px-5 py-3 text-white font-medium hover:bg-blue-700">
              Explore Services
            </a>

            <a href="#/how-it-works" class="rounded-lg border border-neutral-300 px-5 py-3 font-medium hover:bg-neutral-100">
              How it Works
            </a>
          </div>
        </div>
      </section>

      <!-- FEATURES -->
      <section class="py-24 bg-white">
        <div class="max-w-6xl mx-auto px-6">
          <h2 class="text-3xl font-bold">Why ErrandLink?</h2>

          <div class="mt-8 grid gap-6 md:grid-cols-3">

            <div class="p-6 rounded-xl border">
              <h3 class="font-semibold text-xl">Nearby Helpers</h3>
              <p class="mt-2 text-neutral-600">Get matched with people close to your location.</p>
            </div>

            <div class="p-6 rounded-xl border">
              <h3 class="font-semibold text-xl">Fast Transactions</h3>
              <p class="mt-2 text-neutral-600">Quick requests and real-time completion.</p>
            </div>

            <div class="p-6 rounded-xl border">
              <h3 class="font-semibold text-xl">Trusted System</h3>
              <p class="mt-2 text-neutral-600">Ratings and verification for safety and quality.</p>
            </div>

          </div>
        </div>
      </section>

    </main>

    ${Footer()}
  `;
}
