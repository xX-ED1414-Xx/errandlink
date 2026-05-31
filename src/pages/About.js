import { Header } from "../components/Header.js";
import { Footer } from "../components/Footer.js";

export function About() {
  return `
    ${Header()}

    <main class="pt-16 bg-slate-950 text-slate-100">
      <!-- HERO -->
      <section class="relative overflow-hidden border-b border-white/10">
        <div class="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.18),transparent_32%),radial-gradient(circle_at_top_right,rgba(59,130,246,0.14),transparent_30%),linear-gradient(to_bottom,#020617,#0f172a_70%,#111827)]"></div>

        <div class="mx-auto max-w-7xl px-6 py-24 md:py-28">
          <div class="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div class="space-y-6" data-animate>
              <span class="inline-flex items-center rounded-full border border-cyan-400/20 bg-white/5 px-4 py-2 text-sm font-semibold text-cyan-200 backdrop-blur">
                About ErrandLink
              </span>

              <div class="space-y-4">
                <h1 class="max-w-3xl text-5xl font-bold tracking-tight text-white md:text-6xl">
                  Built to make everyday support feel simple.
                </h1>

                <p class="max-w-2xl text-lg leading-8 text-slate-300 md:text-xl">
                  ErrandLink Inc. connects clients with nearby helpers for grocery shopping, delivery, and other low-risk errands — with a focus on speed, clarity, and trust.
                </p>
              </div>

              <div class="flex flex-wrap gap-3 pt-2">
                <div class="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300">
                  Community-driven
                </div>
                <div class="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300">
                  Fast coordination
                </div>
                <div class="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300">
                  Low-risk errands
                </div>
              </div>
            </div>

            <div class="relative" data-animate>
              <div class="absolute -left-6 top-10 h-24 w-24 rounded-full bg-cyan-400/10 blur-2xl"></div>
              <div class="absolute -right-8 bottom-8 h-32 w-32 rounded-full bg-blue-400/10 blur-2xl"></div>

              <div class="relative overflow-hidden rounded-4xl border border-white/10 bg-slate-900/85 p-6 shadow-2xl shadow-black/30 backdrop-blur-xl">
                <div class="grid gap-4 sm:grid-cols-2">
                  <div class="rounded-2xl border border-white/10 bg-white/5 p-5">
                    <p class="text-sm font-medium text-slate-400">What we do</p>
                    <p class="mt-2 text-lg font-semibold text-white">Connect people to trusted nearby helpers.</p>
                  </div>

                  <div class="rounded-2xl border border-white/10 bg-white/5 p-5">
                    <p class="text-sm font-medium text-slate-400">What we value</p>
                    <p class="mt-2 text-lg font-semibold text-white">Speed, safety, and clear communication.</p>
                  </div>

                  <div class="rounded-2xl border border-white/10 bg-white/5 p-5 sm:col-span-2">
                    <p class="text-sm font-medium text-slate-400">Platform promise</p>
                    <p class="mt-2 text-lg font-semibold text-white">Make simple errands feel effortless from request to completion.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- CONTENT -->
      <section class="bg-slate-900 py-24">
        <div class="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-3">
          <div class="rounded-3xl border border-white/10 bg-slate-950 p-8 shadow-sm" data-animate>
            <div class="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-300">
              <svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M12 21s7-4.5 7-11a7 7 0 1 0-14 0c0 6.5 7 11 7 11Z" />
                <circle cx="12" cy="10" r="2.5" />
              </svg>
            </div>
            <h2 class="mt-5 text-2xl font-semibold text-white">Mission</h2>
            <p class="mt-3 leading-8 text-slate-300">
              To make everyday assistance accessible, fast, and community-driven.
            </p>
          </div>

          <div class="rounded-3xl border border-white/10 bg-slate-950 p-8 shadow-sm" data-animate>
            <div class="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-400/10 text-blue-300">
              <svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M4 19V5" />
                <path d="M4 5h14v14H4z" />
                <path d="M8 9h8" />
                <path d="M8 13h5" />
              </svg>
            </div>
            <h2 class="mt-5 text-2xl font-semibold text-white">Vision</h2>
            <p class="mt-3 leading-8 text-slate-300">
              A world where no simple task is a burden.
            </p>
          </div>

          <div class="rounded-3xl border border-white/10 bg-slate-950 p-8 shadow-sm" data-animate>
            <div class="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-400/10 text-emerald-300">
              <svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M12 22s8-4 8-10V6l-8-3-8 3v6c0 6 8 10 8 10Z" />
                <path d="m9 12 2 2 4-4" />
              </svg>
            </div>
            <h2 class="mt-5 text-2xl font-semibold text-white">Approach</h2>
            <p class="mt-3 leading-8 text-slate-300">
              A simple, polished platform that helps clients get support quickly while giving helpers clear and manageable tasks.
            </p>
          </div>
        </div>
      </section>

      <!-- CTA -->
      <section class="bg-slate-950 py-24">
        <div class="mx-auto max-w-7xl px-6">
          <div class="rounded-4xl border border-white/10 bg-slate-900 px-8 py-12 shadow-2xl shadow-black/30 md:px-12" data-animate>
            <div class="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div>
                <p class="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">Our focus</p>
                <h2 class="mt-4 text-3xl font-bold tracking-tight text-white md:text-4xl">
                  Reliable help, without the friction.
                </h2>
                <p class="mt-4 max-w-2xl text-lg leading-8 text-slate-300">
                  ErrandLink is designed to make small tasks feel organized, modern, and easy to trust.
                </p>
              </div>

              <div class="flex flex-col gap-4 sm:flex-row lg:justify-end">
                <a
                  href="#/services"
                  class="inline-flex items-center justify-center rounded-2xl bg-white px-6 py-3.5 font-semibold text-slate-950 transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-100"
                >
                  View Services
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
