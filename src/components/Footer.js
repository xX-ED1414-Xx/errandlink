export function Footer() {
  return `
    <footer id="contact" class="border-t border-neutral-200 py-10">
      <div class="max-w-6xl mx-auto px-6 flex flex-col md:flex-row gap-4 justify-between">
        <p class="text-neutral-600">
          © ${new Date().getFullYear()} YourName. All rights reserved.
        </p>

        <div class="flex gap-4">
          <a href="#" class="text-neutral-600 hover:text-blue-600">GitHub</a>
          <a href="#" class="text-neutral-600 hover:text-blue-600">LinkedIn</a>
          <a href="mailto:you@example.com" class="text-neutral-600 hover:text-blue-600">Email</a>
        </div>
      </div>
    </footer>
  `
}