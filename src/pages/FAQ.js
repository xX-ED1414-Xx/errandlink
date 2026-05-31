import { Header } from "../components/Header.js";
import { Footer } from "../components/Footer.js";

export function FAQ() {
  return `
    ${Header()}

    <main class="pt-16 bg-slate-950 text-slate-100 min-h-screen">
      <!-- HERO -->
      <section class="border-b border-white/10">
        <div class="mx-auto max-w-5xl px-6 py-20">
          <div class="mx-auto max-w-2xl text-center">
            <span class="inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-300">
              FAQ
            </span>

            <h1 class="mt-6 text-5xl font-bold tracking-tight text-white">
              Answers to common questions.
            </h1>

            <p class="mt-5 text-lg leading-8 text-slate-300">
              A few quick details about verification, allowed errands, and how payments work.
            </p>
          </div>
        </div>
      </section>

      <!-- FAQ LIST -->
      <section class="py-20">
        <div class="mx-auto max-w-4xl px-6 space-y-4">
          <details class="group rounded-3xl border border-white/10 bg-slate-900 p-6">
            <summary class="cursor-pointer list-none font-semibold text-white flex items-center justify-between gap-4">
              <span>How are helpers verified?</span>
              <span class="text-slate-400 transition-transform group-open:rotate-45">+</span>
            </summary>
            <p class="mt-4 leading-7 text-slate-300">
              Helpers are verified through identity checks and basic screening before they can take tasks.
            </p>
          </details>

          <details class="group rounded-3xl border border-white/10 bg-slate-900 p-6">
            <summary class="cursor-pointer list-none font-semibold text-white flex items-center justify-between gap-4">
              <span>What errands are allowed?</span>
              <span class="text-slate-400 transition-transform group-open:rotate-45">+</span>
            </summary>
            <p class="mt-4 leading-7 text-slate-300">
              Only legal, low-risk everyday tasks are allowed, such as groceries, pickups, deliveries, and similar errands.
            </p>
          </details>

          <details class="group rounded-3xl border border-white/10 bg-slate-900 p-6">
            <summary class="cursor-pointer list-none font-semibold text-white flex items-center justify-between gap-4">
              <span>How do payments work?</span>
              <span class="text-slate-400 transition-transform group-open:rotate-45">+</span>
            </summary>
            <p class="mt-4 leading-7 text-slate-300">
              Payments are processed per completed task, with the platform commission applied where applicable.
            </p>
          </details>
        </div>
      </section>

      <!-- CTA STRIP -->
      <section class="border-y border-white/10 bg-slate-900">
        <div class="mx-auto max-w-5xl px-6 py-12 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 class="text-2xl font-bold text-white">Still have questions?</h2>
            <p class="mt-2 text-slate-300">Reach out and we will help clarify anything before you get started.</p>
          </div>
          <a
            href="#/contact"
            class="inline-flex items-center justify-center rounded-2xl bg-white px-6 py-3.5 font-semibold text-slate-950 transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-100"
          >
            Contact Support
          </a>
        </div>
      </section>
    </main>

    ${Footer()}
  `;
}
