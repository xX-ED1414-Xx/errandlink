export function Footer() {
  return `
    <footer class="border-t border-white/10 bg-slate-950 py-10">
      <div class="mx-auto flex max-w-7xl flex-col gap-4 px-6 text-sm text-slate-300 sm:flex-row sm:items-center sm:justify-between">
        <p class="font-medium text-slate-200">
          © ${new Date().getFullYear()} ErrandLink Inc.
        </p>

        <div class="flex gap-6">
          <a href="#/privacy" class="transition-colors hover:text-white">
            Privacy
          </a>
          <a href="#/terms" class="transition-colors hover:text-white">
            Terms
          </a>
        </div>
      </div>
    </footer>
  `;
}
