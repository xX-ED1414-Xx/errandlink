import { Header } from '../components/Header.js'
import { Footer } from '../components/Footer.js'

export function About() {
  return `
    ${Header()}

    <main class="min-h-screen pt-24">
      <section class="max-w-6xl mx-auto px-6 py-20">
        <p class="text-sm font-semibold uppercase tracking-wide text-blue-600">
          About
        </p>

        <h1 class="mt-4 text-4xl md:text-6xl font-bold tracking-tight">
          This is the About page.
        </h1>

        <p class="mt-6 max-w-2xl text-lg text-neutral-600">
          This page is separate from the homepage, but it still uses the same
          Header and Footer components.
        </p>

        <a
          href="#/"
          class="inline-block mt-8 rounded-lg bg-neutral-900 px-5 py-3 text-white font-medium hover:bg-neutral-700"
        >
          Back to Home
        </a>
      </section>
    </main>

    ${Footer()}
  `
}