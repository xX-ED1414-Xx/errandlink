import { Header } from "../components/Header.js";
import { Footer } from "../components/Footer.js";

export function Pricing() {
  return `
    ${Header()}

    <main class="pt-16 bg-slate-950 text-slate-100 min-h-screen">

      <!-- HEADER -->
      <section class="border-b border-white/10">
        <div class="mx-auto max-w-5xl px-6 py-20">
          <div class="mx-auto max-w-2xl text-center">
            <span class="inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-300">
              Pricing
            </span>

            <h1 class="mt-6 text-5xl font-bold tracking-tight text-white">
              Flexible plans for every user.
            </h1>

            <p class="mt-5 text-lg leading-8 text-slate-300">
              Start with standard pay-per-task pricing or upgrade for faster matching and priority support.
            </p>
          </div>
        </div>
      </section>

      <!-- PRICING CARDS -->
      <section class="py-20">
        <div class="mx-auto max-w-6xl px-6">
          <div class="grid gap-8 md:grid-cols-2">

            <!-- STANDARD -->
            <div class="rounded-3xl border border-white/10 bg-slate-900 p-8">
              <div class="mb-6">
                <h2 class="text-2xl font-bold text-white">
                  Standard
                </h2>

                <p class="mt-2 text-slate-400">
                  Ideal for occasional users.
                </p>
              </div>

              <div class="mb-8">
                <span class="text-4xl font-bold text-white">
                  Pay Per Task
                </span>
              </div>

              <ul class="space-y-4 text-slate-300">
                <li>✓ Access to all basic services</li>
                <li>✓ Standard helper matching</li>
                <li>✓ Task tracking and updates</li>
                <li>✓ Secure payment processing</li>
              </ul>
            </div>

            <!-- PREMIUM -->
            <div class="relative rounded-3xl border border-cyan-400/30 bg-slate-900 p-8 shadow-lg shadow-cyan-500/10">
              <div class="absolute right-6 top-6 rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-semibold text-cyan-300">
                Recommended
              </div>

              <div class="mb-6">
                <h2 class="text-2xl font-bold text-white">
                  Premium
                </h2>

                <p class="mt-2 text-slate-400">
                  Designed for frequent users.
                </p>
              </div>

              <div class="mb-8">
                <span class="text-4xl font-bold text-white">
                  Subscription
                </span>
              </div>

              <ul class="space-y-4 text-slate-300">
                <li>✓ Everything in Standard</li>
                <li>✓ Priority task matching</li>
                <li>✓ Access to experienced helpers</li>
                <li>✓ Faster response times</li>
                <li>✓ Priority customer support</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      <!-- SIMPLE COMPARISON -->
      <section class="pb-20">
        <div class="mx-auto max-w-4xl px-6">
          <div class="overflow-hidden rounded-3xl border border-white/10 bg-slate-900">
            <div class="border-b border-white/10 px-6 py-4">
              <h2 class="text-xl font-semibold text-white">
                Quick Comparison
              </h2>
            </div>

            <div class="grid grid-cols-3 text-sm">
              <div class="border-r border-white/10 p-4 text-slate-400">
                Feature
              </div>
              <div class="border-r border-white/10 p-4 text-center text-white">
                Standard
              </div>
              <div class="p-4 text-center text-white">
                Premium
              </div>

              <div class="border-t border-r border-white/10 p-4 text-slate-300">
                Task Access
              </div>
              <div class="border-t border-r border-white/10 p-4 text-center">
                ✓
              </div>
              <div class="border-t p-4 text-center">
                ✓
              </div>

              <div class="border-t border-r border-white/10 p-4 text-slate-300">
                Priority Matching
              </div>
              <div class="border-t border-r border-white/10 p-4 text-center">
                —
              </div>
              <div class="border-t p-4 text-center">
                ✓
              </div>

              <div class="border-t border-r border-white/10 p-4 text-slate-300">
                Premium Support
              </div>
              <div class="border-t border-r border-white/10 p-4 text-center">
                —
              </div>
              <div class="border-t p-4 text-center">
                ✓
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>

    ${Footer()}
  `;
}
