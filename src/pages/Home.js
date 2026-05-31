import { Header } from "../components/Header.js";
import { Footer } from "../components/Footer.js";

export function Home() {
  return `
    ${Header()}

    <main class="pt-16 bg-slate-950 text-slate-100">
      <!-- HERO -->
      <section class="relative overflow-hidden">
        <div class="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.18),transparent_32%),radial-gradient(circle_at_top_right,rgba(59,130,246,0.16),transparent_30%),linear-gradient(to_bottom,#020617,#0f172a_55%,#111827)]"></div>

        <div class="absolute inset-0 -z-10">
          <div class="absolute left-10 top-20 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl animate-pulse"></div>
          <div class="absolute right-0 top-40 h-96 w-96 rounded-full bg-blue-400/10 blur-3xl animate-pulse [animation-delay:1.5s]"></div>
        </div>

        <div class="mx-auto flex min-h-[calc(100vh-4rem)] max-w-7xl items-center px-6 py-20">
          <div class="grid w-full items-center gap-14 lg:grid-cols-2">
            <div class="space-y-8" data-animate>
              <span class="inline-flex items-center rounded-full border border-cyan-400/20 bg-white/5 px-4 py-2 text-sm font-semibold text-cyan-200 shadow-sm backdrop-blur">
                ErrandLink Inc.
              </span>

              <div class="space-y-5">
                <h1 class="max-w-2xl text-5xl font-bold tracking-tight text-white md:text-7xl">
                  Your everyday errands,
                  <span class="bg-linear-to-r from-cyan-300 via-sky-400 to-blue-400 bg-clip-text text-transparent">
                    handled with care.
                  </span>
                </h1>

                <p class="max-w-2xl text-lg leading-8 text-slate-300 md:text-xl">
                  ErrandLink connects clients with nearby helpers for groceries, deliveries, and everyday low-risk tasks — fast, simple, and reliable.
                </p>
              </div>

              <div class="flex flex-col gap-4 sm:flex-row">
                <a
                  href="#/services"
                  class="inline-flex items-center justify-center rounded-2xl bg-white px-6 py-3.5 text-base font-semibold text-slate-950 shadow-lg shadow-black/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-100 hover:shadow-xl"
                >
                  Explore Services
                </a>

                <a
                  href="#/how-it-works"
                  class="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-6 py-3.5 text-base font-semibold text-white shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/10"
                >
                  How it Works
                </a>
              </div>

              <div class="grid max-w-2xl grid-cols-1 gap-4 pt-4 sm:grid-cols-3">
                <div class="rounded-2xl border border-white/10 bg-white/5 p-4 shadow-sm backdrop-blur" data-animate>
                  <div class="text-2xl font-bold text-white">500+</div>
                  <div class="mt-1 text-sm text-slate-300">Completed tasks</div>
                </div>
                <div class="rounded-2xl border border-white/10 bg-white/5 p-4 shadow-sm backdrop-blur" data-animate>
                  <div class="text-2xl font-bold text-white">24/7</div>
                  <div class="mt-1 text-sm text-slate-300">Request access</div>
                </div>
                <div class="rounded-2xl border border-white/10 bg-white/5 p-4 shadow-sm backdrop-blur" data-animate>
                  <div class="text-2xl font-bold text-white">4.9/5</div>
                  <div class="mt-1 text-sm text-slate-300">Average rating</div>
                </div>
              </div>
            </div>

            <div class="relative" data-animate>
              <div class="absolute -left-6 top-10 h-24 w-24 rounded-full bg-cyan-400/10 blur-2xl"></div>
              <div class="absolute -right-8 bottom-8 h-32 w-32 rounded-full bg-blue-400/10 blur-2xl"></div>

              <div class="relative overflow-hidden rounded-4xl border border-white/10 bg-slate-900/85 p-5 shadow-2xl shadow-black/30 backdrop-blur-xl">
                <div class="flex items-center justify-between border-b border-white/10 pb-4">
                  <div>
                    <p class="text-sm font-medium text-slate-400">Live request preview</p>
                    <h2 class="mt-1 text-xl font-semibold text-white">Quick grocery pickup</h2>
                  </div>
                  <span class="rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-semibold text-emerald-300">
                    Active
                  </span>
                </div>

                <div class="mt-5 space-y-4">
                  <div class="rounded-2xl bg-slate-950/60 p-4 transition-transform duration-300 hover:-translate-y-0.5">
                    <div class="flex items-start justify-between gap-4">
                      <div>
                        <p class="text-sm font-medium text-slate-400">Task</p>
                        <p class="mt-1 font-semibold text-white">Buy rice, eggs, and drinking water</p>
                      </div>
                      <div class="rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-semibold text-cyan-300">ETA 18 min</div>
                    </div>
                  </div>

                  <div class="grid gap-4 md:grid-cols-2">
                    <div class="rounded-2xl border border-white/10 bg-white/5 p-4">
                      <p class="text-sm font-medium text-slate-400">Helper</p>
                      <div class="mt-3 flex items-center gap-3">
                        <div class="flex h-11 w-11 items-center justify-center rounded-full bg-linear-to-br from-cyan-400 to-blue-500 text-sm font-bold text-slate-950">
                          JL
                        </div>
                        <div>
                          <p class="font-semibold text-white">Jamie L.</p>
                          <p class="text-sm text-slate-400">Nearby verified helper</p>
                        </div>
                      </div>
                    </div>

                    <div class="rounded-2xl border border-white/10 bg-white/5 p-4">
                      <p class="text-sm font-medium text-slate-400">Status</p>
                      <div class="mt-3 space-y-2">
                        <div class="h-2 w-full rounded-full bg-slate-800">
                          <div class="h-2 w-4/5 rounded-full bg-linear-to-r from-cyan-400 to-blue-500 animate-[pulse_2.5s_ease-in-out_infinite]"></div>
                        </div>
                        <p class="text-sm text-slate-300">Request matched and in progress</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="absolute -bottom-4 left-6 rounded-2xl border border-white/10 bg-slate-900 px-4 py-3 shadow-lg shadow-black/20">
                <p class="text-xs font-medium uppercase tracking-wide text-slate-400">Trusted platform</p>
                <p class="mt-1 font-semibold text-white">Safety-first, local support</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- FEATURES -->
      <section class="bg-slate-900 py-24 text-slate-100">
        <div class="mx-auto max-w-7xl px-6">
          <div class="mx-auto max-w-2xl text-center" data-animate>
            <p class="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">Why ErrandLink</p>
            <h2 class="mt-4 text-3xl font-bold tracking-tight text-white md:text-4xl">
              Built for speed, trust, and convenience.
            </h2>
            <p class="mt-4 text-lg leading-8 text-slate-300">
              A polished experience for clients who need help quickly, and helpers who want clear, low-friction tasks.
            </p>
          </div>

          <div class="mt-14 grid gap-6 md:grid-cols-3">
            <div class="group rounded-3xl border border-white/10 bg-slate-950 p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl" data-animate>
              <div class="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-300">
                <svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M12 21s7-4.5 7-11a7 7 0 1 0-14 0c0 6.5 7 11 7 11Z" />
                  <circle cx="12" cy="10" r="2.5" />
                </svg>
              </div>
              <h3 class="mt-5 text-xl font-semibold text-white">Nearby Helpers</h3>
              <p class="mt-3 leading-7 text-slate-300">
                Get matched with people close to your location for faster completion and smoother coordination.
              </p>
            </div>

            <div class="group rounded-3xl border border-white/10 bg-slate-950 p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl" data-animate>
              <div class="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-400/10 text-blue-300">
                <svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M5 12h14" />
                  <path d="m13 5 7 7-7 7" />
                </svg>
              </div>
              <h3 class="mt-5 text-xl font-semibold text-white">Fast Transactions</h3>
              <p class="mt-3 leading-7 text-slate-300">
                Clear requests, quick confirmations, and a streamlined workflow from posting to completion.
              </p>
            </div>

            <div class="group rounded-3xl border border-white/10 bg-slate-950 p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl" data-animate>
              <div class="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-400/10 text-emerald-300">
                <svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M12 22s8-4 8-10V6l-8-3-8 3v6c0 6 8 10 8 10Z" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
              </div>
              <h3 class="mt-5 text-xl font-semibold text-white">Trusted System</h3>
              <p class="mt-3 leading-7 text-slate-300">
                Ratings, verification, and transparent task flow help keep the experience safe and reliable.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- PROCESS -->
      <section class="bg-slate-950 py-24 text-slate-100">
        <div class="mx-auto max-w-7xl px-6">
          <div class="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div data-animate>
              <p class="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">How it works</p>
              <h2 class="mt-4 text-3xl font-bold tracking-tight text-white md:text-4xl">
                A simple process that keeps everything easy to follow.
              </h2>
              <p class="mt-4 max-w-xl text-lg leading-8 text-slate-300">
                From request to completion, the experience stays clear, responsive, and professional.
              </p>

              <a
                href="#/how-it-works"
                class="mt-8 inline-flex items-center rounded-2xl border border-white/10 bg-white/5 px-5 py-3 font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/10"
              >
                Learn the full process
              </a>
            </div>

            <div class="grid gap-5" data-animate>
              <div class="flex gap-4 rounded-3xl border border-white/10 bg-white/5 p-6">
                <div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white text-base font-bold text-slate-950">
                  01
                </div>
                <div>
                  <h3 class="text-lg font-semibold text-white">Post a request</h3>
                  <p class="mt-2 leading-7 text-slate-300">Describe what you need and set the details in a few steps.</p>
                </div>
              </div>

              <div class="flex gap-4 rounded-3xl border border-white/10 bg-white/5 p-6">
                <div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white text-base font-bold text-slate-950">
                  02
                </div>
                <div>
                  <h3 class="text-lg font-semibold text-white">Get matched</h3>
                  <p class="mt-2 leading-7 text-slate-300">Nearby helpers review the task and confirm availability quickly.</p>
                </div>
              </div>

              <div class="flex gap-4 rounded-3xl border border-white/10 bg-white/5 p-6">
                <div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white text-base font-bold text-slate-950">
                  03
                </div>
                <div>
                  <h3 class="text-lg font-semibold text-white">Track completion</h3>
                  <p class="mt-2 leading-7 text-slate-300">Follow progress and close the task once everything is done.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA -->
      <section class="bg-slate-950 py-24">
        <div class="mx-auto max-w-7xl px-6">
          <div class="overflow-hidden rounded-4xl border border-white/10 bg-slate-900 px-8 py-14 shadow-2xl shadow-black/30 md:px-12" data-animate>
            <div class="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div>
                <p class="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">Ready to begin?</p>
                <h2 class="mt-4 text-3xl font-bold tracking-tight text-white md:text-4xl">
                  Make everyday errands feel effortless.
                </h2>
                <p class="mt-4 max-w-2xl text-lg leading-8 text-slate-300">
                  Bring clarity and speed to everyday requests with a platform designed to look modern and feel dependable.
                </p>
              </div>

              <div class="flex flex-col gap-4 sm:flex-row lg:justify-end">
                <a
                  href="#/services"
                  class="inline-flex items-center justify-center rounded-2xl bg-white px-6 py-3.5 font-semibold text-slate-950 transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-100"
                >
                  Get Started
                </a>
                <a
                  href="#/contact"
                  class="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/5 px-6 py-3.5 font-semibold text-white backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/10"
                >
                  Contact Us
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
