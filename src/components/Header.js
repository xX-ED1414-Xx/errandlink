export function Header() {
  return `
    <header class="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
      <div class="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        
        <a href="#/" class="text-lg font-bold tracking-tight text-white">
          ErrandLink
        </a>

        <nav class="flex gap-5 text-sm font-medium text-slate-300">
          <a href="#/" class="transition-colors hover:text-white">Home</a>
          <a href="#/about" class="transition-colors hover:text-white">About</a>
          <a href="#/services" class="transition-colors hover:text-white">Services</a>
          <a href="#/how-it-works" class="transition-colors hover:text-white">How it Works</a>
          <a href="#/pricing" class="transition-colors hover:text-white">Pricing</a>
          <a href="#/faq" class="transition-colors hover:text-white">FAQ</a>
          <a href="#/contact" class="transition-colors hover:text-white">Contact</a>
        </nav>

      </div>
    </header>
  `;
}
