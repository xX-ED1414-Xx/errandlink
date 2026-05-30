export function Footer() {
  return `
    <footer class="border-t border-neutral-200 py-10 mt-20">
      <div class="max-w-6xl mx-auto px-6 flex justify-between text-sm text-neutral-600">
        <p>© ${new Date().getFullYear()} ErrandLink Inc.</p>

        <div class="flex gap-4">
          <a href="#/privacy" class="hover:text-blue-600">Privacy</a>
          <a href="#/terms" class="hover:text-blue-600">Terms</a>
        </div>
      </div>
    </footer>
  `;
}
