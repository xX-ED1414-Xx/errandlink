import { Header } from '../components/Header.js'
import { Footer } from '../components/Footer.js'

export function Home() {
  return `
    ${Header()}

    <main>
      <section class="min-h-screen flex items-center">
        <div class="max-w-6xl mx-auto px-6 py-24">
          <p class="text-sm font-semibold uppercase tracking-wide text-blue-600">
            Welcome
          </p>

          <h1 class="mt-4 text-4xl md:text-6xl font-bold tracking-tight">
            Build a clean, scalable website.
          </h1>

          <p class="mt-6 max-w-2xl text-lg text-neutral-600">
            This is your homepage. You can split the site into pages,
            components, data files, and utilities as it grows.
          </p>

          <div class="mt-8 flex gap-4">
            <a
              href="#/about"
              class="rounded-lg bg-neutral-900 px-5 py-3 text-white font-medium hover:bg-neutral-700"
            >
              Go to About
            </a>

            <a
              href="#projects"
              class="rounded-lg border border-neutral-300 px-5 py-3 font-medium hover:bg-neutral-100"
            >
              View Projects
            </a>
          </div>
        </div>
      </section>

      <section id="projects" class="py-24 bg-neutral-50">
        <div class="max-w-6xl mx-auto px-6">
          <h2 class="text-3xl font-bold">Featured Projects</h2>

          <div class="mt-8 grid gap-6 md:grid-cols-3">
            <article class="rounded-xl bg-white p-6 shadow-sm">
              <h3 class="text-xl font-semibold">Project One</h3>
              <p class="mt-2 text-neutral-600">
                Short description of the project.
              </p>
            </article>

            <article class="rounded-xl bg-white p-6 shadow-sm">
              <h3 class="text-xl font-semibold">Project Two</h3>
              <p class="mt-2 text-neutral-600">
                Short description of the project.
              </p>
            </article>

            <article class="rounded-xl bg-white p-6 shadow-sm">
              <h3 class="text-xl font-semibold">Project Three</h3>
              <p class="mt-2 text-neutral-600">
                Short description of the project.
              </p>
            </article>
          </div>
        </div>
      </section>
    </main>

    ${Footer()}
  `
}