export function Header() {
  return `
    <header class="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur border-b border-neutral-200">
      <div class="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#/" class="font-bold text-lg">
          YourName
        </a>

        <nav class="flex gap-6 text-sm font-medium">
          <a href="#/" class="hover:text-blue-600">Home</a>
          <a href="#/about" class="hover:text-blue-600">About</a>
          <a href="#projects" class="hover:text-blue-600">Projects</a>
          <a href="#contact" class="hover:text-blue-600">Contact</a>
        </nav>
      </div>
    </header>
  `
}