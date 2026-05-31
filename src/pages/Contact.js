import { Header } from "../components/Header.js";
import { Footer } from "../components/Footer.js";

export function Contact() {
  return `
    ${Header()}

    <main class="pt-16 bg-slate-950 text-slate-100 min-h-screen">
      <!-- HERO -->
      <section class="border-b border-white/10">
        <div class="mx-auto max-w-5xl px-6 py-20">
          <div class="mx-auto max-w-2xl text-center">
            <span class="inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-300">
              Contact Us
            </span>

            <h1 class="mt-6 text-5xl font-bold tracking-tight text-white">
              Let’s talk.
            </h1>

            <p class="mt-5 text-lg leading-8 text-slate-300">
              Send a message for support, partnership questions, or general inquiries.
            </p>
          </div>
        </div>
      </section>

      <!-- CONTACT GRID -->
      <section class="py-20">
        <div class="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-[0.9fr_1.1fr]">
          
          <!-- INFO -->
          <div class="space-y-6">
            <div class="rounded-3xl border border-white/10 bg-slate-900 p-8">
              <h2 class="text-2xl font-bold text-white">Contact details</h2>
              <div class="mt-6 space-y-4 text-slate-300">
                <p>
                  <span class="block text-sm font-semibold uppercase tracking-wide text-slate-400">Email</span>
                  support@errandlink.com
                </p>
                <p>
                  <span class="block text-sm font-semibold uppercase tracking-wide text-slate-400">Phone</span>
                  +63 900 000 0000
                </p>
                <p>
                  <span class="block text-sm font-semibold uppercase tracking-wide text-slate-400">Hours</span>
                  Daily, 8:00 AM to 8:00 PM
                </p>
              </div>
            </div>

            <div class="rounded-3xl border border-white/10 bg-slate-900 p-8">
              <h2 class="text-2xl font-bold text-white">What to include</h2>
              <p class="mt-3 leading-7 text-slate-300">
                Add your name, preferred contact method, and a short description of what you need.
              </p>
            </div>
          </div>

          <!-- FORM -->
          <div class="rounded-3xl border border-white/10 bg-slate-900 p-8 shadow-2xl shadow-black/20">
            <h2 class="text-2xl font-bold text-white">Send a message</h2>
            <p class="mt-2 text-slate-400">
              We usually respond as soon as possible during operating hours.
            </p>

            <form class="mt-8 space-y-4">
              <div class="grid gap-4 md:grid-cols-2">
                <input
                  class="w-full rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 text-white placeholder:text-slate-500 outline-none transition focus:border-cyan-400/40"
                  placeholder="Name"
                />
                <input
                  class="w-full rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 text-white placeholder:text-slate-500 outline-none transition focus:border-cyan-400/40"
                  placeholder="Email"
                />
              </div>

              <input
                class="w-full rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 text-white placeholder:text-slate-500 outline-none transition focus:border-cyan-400/40"
                placeholder="Subject"
              />

              <textarea
                rows="6"
                class="w-full rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 text-white placeholder:text-slate-500 outline-none transition focus:border-cyan-400/40"
                placeholder="Message"
              ></textarea>

              <button
                type="submit"
                class="inline-flex items-center justify-center rounded-2xl bg-white px-6 py-3.5 font-semibold text-slate-950 transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-100"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>

    ${Footer()}
  `;
}
