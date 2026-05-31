import { Header } from "../components/Header.js";
import { Footer } from "../components/Footer.js";

export function Services() {
  return `
    ${Header()}

    <main class="pt-16 bg-slate-950 text-slate-100">
      <!-- HERO -->
      <section class="relative overflow-hidden border-b border-white/10">
        <div class="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.16),transparent_32%),radial-gradient(circle_at_top_right,rgba(59,130,246,0.14),transparent_30%),linear-gradient(to_bottom,#020617,#0f172a_70%,#111827)]"></div>

        <div class="mx-auto max-w-7xl px-6 py-24 md:py-28">
          <div class="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div class="space-y-6" data-animate>
              <span class="inline-flex items-center rounded-full border border-cyan-400/20 bg-white/5 px-4 py-2 text-sm font-semibold text-cyan-200 backdrop-blur">
                Services
              </span>

              <div class="space-y-4">
                <h1 class="max-w-3xl text-5xl font-bold tracking-tight text-white md:text-6xl">
                  Practical help for everyday tasks.
                </h1>

                <p class="max-w-2xl text-lg leading-8 text-slate-300 md:text-xl">
                  Choose from flexible support options designed to keep errands simple, fast, and reliable.
                </p>
              </div>

              <div class="flex flex-wrap gap-3 pt-2">
                <div class="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300">
                  Local helpers
                </div>
                <div class="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300">
                  Fast turnaround
                </div>
                <div class="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300">
                  Clear pricing flow
                </div>
              </div>
            </div>

            <div class="relative" data-animate>
              <div class="absolute -left-6 top-10 h-24 w-24 rounded-full bg-cyan-400/10 blur-2xl"></div>
              <div class="absolute -right-8 bottom-8 h-32 w-32 rounded-full bg-blue-400/10 blur-2xl"></div>

              <div class="relative overflow-hidden rounded-4xl border border-white/10 bg-slate-900/85 p-6 shadow-2xl shadow-black/30 backdrop-blur-xl">
                <div class="flex items-center justify-between border-b border-white/10 pb-4">
                  <div>
                    <p class="text-sm font-medium text-slate-400">Service overview</p>
                    <h2 class="mt-1 text-xl font-semibold text-white">Reliable support categories</h2>
                  </div>
                  <span class="rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-semibold text-emerald-300">
                    Available now
                  </span>
                </div>

                <div class="mt-5 grid gap-4 sm:grid-cols-2">
                  <div class="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p class="text-sm font-medium text-slate-400">Best for</p>
                    <p class="mt-2 text-lg font-semibold text-white">Daily errands</p>
                    <p class="mt-1 text-sm text-slate-300">Simple tasks handled efficiently.</p>
                  </div>

                  <div class="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p class="text-sm font-medium text-slate-400">Support style</p>
                    <p class="mt-2 text-lg font-semibold text-white">Task-based</p>
                    <p class="mt-1 text-sm text-slate-300">Clear scope, easy coordination.</p>
                  </div>

                  <div class="rounded-2xl border border-white/10 bg-white/5 p-4 sm:col-span-2">
                    <p class="text-sm font-medium text-slate-400">Promise</p>
                    <p class="mt-2 text-lg font-semibold text-white">
                      A smoother way to request help without the usual hassle.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- SERVICES GRID -->
      <section class="bg-slate-900 py-24">
        <div class="mx-auto max-w-7xl px-6">
          <div class="mx-auto max-w-2xl text-center" data-animate>
            <p class="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">What we offer</p>
            <h2 class="mt-4 text-3xl font-bold tracking-tight text-white md:text-4xl">
              Flexible services for everyday life.
            </h2>
            <p class="mt-4 text-lg leading-8 text-slate-300">
              Each service is designed to be straightforward, useful, and easy to request.
            </p>
          </div>

          <div class="mt-14 grid gap-6 md:grid-cols-2">
            <article class="group rounded-3xl border border-white/10 bg-slate-950 p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl" data-animate>
              <div class="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-300">
                <svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M3 7h2l2 10h10l2-7H7" />
                  <circle cx="10" cy="19" r="1.5" />
                  <circle cx="17" cy="19" r="1.5" />
                </svg>
              </div>
              <h3 class="mt-5 text-2xl font-semibold text-white">Grocery Assistance</h3>
              <p class="mt-3 leading-8 text-slate-300">
                Have helpers shop and deliver groceries for you with a simple request and quick turnaround.
              </p>
            </article>

            <article class="group rounded-3xl border border-white/10 bg-slate-950 p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl" data-animate>
              <div class="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-400/10 text-blue-300">
                <svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M5 12h14" />
                  <path d="m13 5 7 7-7 7" />
                </svg>
              </div>
              <h3 class="mt-5 text-2xl font-semibold text-white">Delivery Services</h3>
              <p class="mt-3 leading-8 text-slate-300">
                Send documents and packages quickly with a convenient delivery workflow.
              </p>
            </article>

            <article class="group rounded-3xl border border-white/10 bg-slate-950 p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl" data-animate>
              <div class="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-400/10 text-emerald-300">
                <svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M4 12h16" />
                  <path d="M8 6h8" />
                  <path d="M8 18h8" />
                </svg>
              </div>
              <h3 class="mt-5 text-2xl font-semibold text-white">Personal Errands</h3>
              <p class="mt-3 leading-8 text-slate-300">
                Queueing, pickups, and simple day-to-day tasks handled with clarity and care.
              </p>
            </article>

            <article class="group rounded-3xl border border-white/10 bg-slate-950 p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl" data-animate>
              <div class="flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-400/10 text-violet-300">
                <svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M12 22s8-4 8-10V6l-8-3-8 3v6c0 6 8 10 8 10Z" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
              </div>
              <h3 class="mt-5 text-2xl font-semibold text-white">Senior Assistance</h3>
              <p class="mt-3 leading-8 text-slate-300">
                Helpful support for elderly individuals who need help with daily errands and routine tasks.
              </p>
            </article>
          </div>
        </div>
      </section>

      <!-- PROCESS -->
      <section class="bg-slate-950 py-24">
        <div class="mx-auto max-w-7xl px-6">
          <div class="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div data-animate>
              <p class="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">How it works</p>
              <h2 class="mt-4 text-3xl font-bold tracking-tight text-white md:text-4xl">
                A simple process from request to completion.
              </h2>
              <p class="mt-4 max-w-xl text-lg leading-8 text-slate-300">
                Every service follows the same streamlined flow so users can move quickly and confidently.
              </p>

              <a
                href="#/how-it-works"
                class="mt-8 inline-flex items-center rounded-2xl border border-white/10 bg-white/5 px-5 py-3 font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/10"
              >
                See how it works
              </a>
            </div>

            <div class="grid gap-5" data-animate>
              <div class="flex gap-4 rounded-3xl border border-white/10 bg-white/5 p-6">
                <div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white text-base font-bold text-slate-950">
                  01
                </div>
                <div>
                  <h3 class="text-lg font-semibold text-white">Choose a service</h3>
                  <p class="mt-2 leading-7 text-slate-300">Pick the task type that matches your needs.</p>
                </div>
              </div>

              <div class="flex gap-4 rounded-3xl border border-white/10 bg-white/5 p-6">
                <div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white text-base font-bold text-slate-950">
                  02
                </div>
                <div>
                  <h3 class="text-lg font-semibold text-white">Submit the details</h3>
                  <p class="mt-2 leading-7 text-slate-300">Add your request, location, and any special instructions.</p>
                </div>
              </div>

              <div class="flex gap-4 rounded-3xl border border-white/10 bg-white/5 p-6">
                <div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white text-base font-bold text-slate-950">
                  03
                </div>
                <div>
                  <h3 class="text-lg font-semibold text-white">Get matched and complete</h3>
                  <p class="mt-2 leading-7 text-slate-300">A nearby helper accepts the task and gets it done.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA -->
      <section class="bg-slate-900 py-24">
        <div class="mx-auto max-w-7xl px-6">
          <div class="overflow-hidden rounded-4xl border border-white/10 bg-slate-950 px-8 py-14 shadow-2xl shadow-black/30 md:px-12" data-animate>
            <div class="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div>
                <p class="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">Need support?</p>
                <h2 class="mt-4 text-3xl font-bold tracking-tight text-white md:text-4xl">
                  Pick a service and get started.
                </h2>
                <p class="mt-4 max-w-2xl text-lg leading-8 text-slate-300">
                  ErrandLink keeps everyday help organized, modern, and easy to request.
                </p>
              </div>

              <div class="flex flex-col gap-4 sm:flex-row lg:justify-end">
                <a
                  href="#/contact"
                  class="inline-flex items-center justify-center rounded-2xl bg-white px-6 py-3.5 font-semibold text-slate-950 transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-100"
                >
                  Contact Us
                </a>
                <a
                  href="#/faq"
                  class="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/5 px-6 py-3.5 font-semibold text-white backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/10"
                >
                  View FAQ
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>

    ${Footer()}
  `;
}
