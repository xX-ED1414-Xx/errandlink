export function Header() {
  return `
    <header class="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur border-b border-neutral-200">
      <div class="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        
        <a href="#/" class="font-bold text-lg">
          ErrandLink
        </a>

        <nav class="flex gap-5 text-sm font-medium">
          <a href="#/" class="hover:text-blue-600">Home</a>
          <a href="#/about" class="hover:text-blue-600">About</a>
          <a href="#/services" class="hover:text-blue-600">Services</a>
          <a href="#/how-it-works" class="hover:text-blue-600">How it Works</a>
          <a href="#/pricing" class="hover:text-blue-600">Pricing</a>
          <a href="#/faq" class="hover:text-blue-600">FAQ</a>
          <a href="#/contact" class="hover:text-blue-600">Contact</a>
        </nav>

      </div>
    </header>
  `;
}
