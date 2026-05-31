import { Header } from "../components/Header.js";
import { Footer } from "../components/Footer.js";

export function HowItWorks() {
  return `
    ${Header()}

    <main class="pt-16 bg-slate-950 text-slate-100">

      <!-- HEADER -->
      <section class="border-b border-white/10">
        <div class="mx-auto max-w-5xl px-6 py-24">
          <div class="mx-auto max-w-2xl text-center">
            <span class="inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-300">
              How It Works
            </span>

            <h1 class="mt-6 text-5xl font-bold tracking-tight text-white md:text-6xl">
              Simple from start to finish.
            </h1>

            <p class="mt-6 text-lg leading-8 text-slate-300">
              Whether you're requesting help or completing errands, the process is designed
              to be straightforward, transparent, and easy to follow.
            </p>
          </div>
        </div>
      </section>

      <!-- SPLIT FLOW -->
      <section class="py-24">
        <div class="mx-auto max-w-7xl px-6">

          <div class="grid gap-12 lg:grid-cols-2">

            <!-- CLIENT FLOW -->
            <div>
              <div class="mb-10">
                <h2 class="text-3xl font-bold text-white">
                  For Clients
                </h2>

                <p class="mt-3 text-slate-300">
                  Need help with an errand? Here's what happens after you submit a request.
                </p>
              </div>

              <div class="relative pl-8">

                <div class="absolute left-3 top-0 bottom-0 w-px bg-white/10"></div>

                <div class="relative mb-10">
                  <div class="absolute -left-8 flex h-6 w-6 items-center justify-center rounded-full bg-cyan-400 text-xs font-bold text-slate-950">
                    1
                  </div>
                  <h3 class="font-semibold text-white">Post an Errand</h3>
                  <p class="mt-2 text-slate-400">
                    Describe your task, location, and any special instructions.
                  </p>
                </div>

                <div class="relative mb-10">
                  <div class="absolute -left-8 flex h-6 w-6 items-center justify-center rounded-full bg-cyan-400 text-xs font-bold text-slate-950">
                    2
                  </div>
                  <h3 class="font-semibold text-white">Get Matched</h3>
                  <p class="mt-2 text-slate-400">
                    Nearby helpers review and accept available tasks.
                  </p>
                </div>

                <div class="relative mb-10">
                  <div class="absolute -left-8 flex h-6 w-6 items-center justify-center rounded-full bg-cyan-400 text-xs font-bold text-slate-950">
                    3
                  </div>
                  <h3 class="font-semibold text-white">Track Progress</h3>
                  <p class="mt-2 text-slate-400">
                    Stay updated as your errand is being completed.
                  </p>
                </div>

                <div class="relative mb-10">
                  <div class="absolute -left-8 flex h-6 w-6 items-center justify-center rounded-full bg-cyan-400 text-xs font-bold text-slate-950">
                    4
                  </div>
                  <h3 class="font-semibold text-white">Confirm Completion</h3>
                  <p class="mt-2 text-slate-400">
                    Review the completed task and verify that everything was done correctly.
                  </p>
                </div>

                <div class="relative">
                  <div class="absolute -left-8 flex h-6 w-6 items-center justify-center rounded-full bg-cyan-400 text-xs font-bold text-slate-950">
                    5
                  </div>
                  <h3 class="font-semibold text-white">Pay Securely</h3>
                  <p class="mt-2 text-slate-400">
                    Complete the transaction and leave feedback.
                  </p>
                </div>

              </div>
            </div>

            <!-- HELPER FLOW -->
            <div>
              <div class="mb-10">
                <h2 class="text-3xl font-bold text-white">
                  For Helpers
                </h2>

                <p class="mt-3 text-slate-300">
                  Earn by helping people in your community complete everyday errands.
                </p>
              </div>

              <div class="space-y-5">

                <div class="rounded-3xl border border-white/10 bg-slate-900 p-6">
                  <div class="flex items-center gap-4">
                    <div class="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-400/10 text-blue-300 font-bold">
                      01
                    </div>

                    <div>
                      <h3 class="font-semibold text-white">
                        Browse Available Tasks
                      </h3>
                      <p class="mt-1 text-sm text-slate-400">
                        View nearby errands that match your availability.
                      </p>
                    </div>
                  </div>
                </div>

                <div class="rounded-3xl border border-white/10 bg-slate-900 p-6">
                  <div class="flex items-center gap-4">
                    <div class="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-400/10 text-blue-300 font-bold">
                      02
                    </div>

                    <div>
                      <h3 class="font-semibold text-white">
                        Accept a Task
                      </h3>
                      <p class="mt-1 text-sm text-slate-400">
                        Review the requirements and confirm participation.
                      </p>
                    </div>
                  </div>
                </div>

                <div class="rounded-3xl border border-white/10 bg-slate-900 p-6">
                  <div class="flex items-center gap-4">
                    <div class="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-400/10 text-blue-300 font-bold">
                      03
                    </div>

                    <div>
                      <h3 class="font-semibold text-white">
                        Complete the Errand
                      </h3>
                      <p class="mt-1 text-sm text-slate-400">
                        Carry out the requested task and provide updates when needed.
                      </p>
                    </div>
                  </div>
                </div>

                <div class="rounded-3xl border border-white/10 bg-slate-900 p-6">
                  <div class="flex items-center gap-4">
                    <div class="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-400/10 text-blue-300 font-bold">
                      04
                    </div>

                    <div>
                      <h3 class="font-semibold text-white">
                        Earn Per Task
                      </h3>
                      <p class="mt-1 text-sm text-slate-400">
                        Receive payment after successful completion and confirmation.
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      <!-- SUMMARY STRIP -->
      <section class="border-y border-white/10 bg-slate-900">
        <div class="mx-auto max-w-7xl px-6 py-12">
          <div class="grid gap-8 text-center md:grid-cols-3">

            <div>
              <div class="text-3xl font-bold text-cyan-300">Fast</div>
              <p class="mt-2 text-slate-400">
                Quick matching with nearby helpers.
              </p>
            </div>

            <div>
              <div class="text-3xl font-bold text-cyan-300">Simple</div>
              <p class="mt-2 text-slate-400">
                Clear steps from request to completion.
              </p>
            </div>

            <div>
              <div class="text-3xl font-bold text-cyan-300">Reliable</div>
              <p class="mt-2 text-slate-400">
                Transparent progress and task tracking.
              </p>
            </div>

          </div>
        </div>
      </section>

    </main>

    ${Footer()}
  `;
}
