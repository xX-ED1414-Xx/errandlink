const paths = {
  cart: `<path d="M3.5 6h2.2l2 10.5h9.8l2.2-7.5H7"/><circle cx="10" cy="20" r="1.6"/><circle cx="17" cy="20" r="1.6"/>`,
  delivery: `<path d="M4 7h10v10H4z"/><path d="M14 10h3.2l2.8 3v4h-6"/><circle cx="8" cy="19" r="1.6"/><circle cx="17" cy="19" r="1.6"/>`,
  location: `<path d="M12 21s7-4.7 7-11a7 7 0 1 0-14 0c0 6.3 7 11 7 11Z"/><circle cx="12" cy="10" r="2.4"/>`,
  shield: `<path d="M12 22s8-4 8-10V6l-8-3-8 3v6c0 6 8 10 8 10Z"/><path d="m9 12 2 2 4-4"/>`,
  chat: `<path d="M21 12a8 8 0 0 1-8 8H7l-4 2 1.6-4.8A8 8 0 1 1 21 12Z"/><path d="M8 11h8"/><path d="M8 14h5"/>`,
  clock: `<circle cx="12" cy="12" r="8.5"/><path d="M12 7v5l3.5 2"/>`,
  user: `<path d="M20 21a8 8 0 0 0-16 0"/><circle cx="12" cy="8" r="4"/>`,
  phone: `<path d="M7 3h10a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z"/><path d="M10 18h4"/>`,
  list: `<path d="M8 6h13"/><path d="M8 12h13"/><path d="M8 18h13"/><path d="M3 6h.01"/><path d="M3 12h.01"/><path d="M3 18h.01"/>`,
  star: `<path d="m12 3 2.7 5.5 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.8 1-6.1-4.4-4.3 6.1-.9L12 3Z"/>`,
  heart: `<path d="M20.8 4.6a5.4 5.4 0 0 0-7.7 0L12 5.7l-1.1-1.1a5.4 5.4 0 1 0-7.7 7.7L12 21l8.8-8.7a5.4 5.4 0 0 0 0-7.7Z"/>`,
  wallet: `<path d="M4 7.5A2.5 2.5 0 0 1 6.5 5H20v14H6.5A2.5 2.5 0 0 1 4 16.5v-9Z"/><path d="M16 12h4"/>`,
  check: `<path d="M20 6 9 17l-5-5"/>`,
  arrow: `<path d="M5 12h14"/><path d="m13 6 6 6-6 6"/>`,
  sparkle: `<path d="M12 2l1.6 5.5L19 9l-5.4 1.5L12 16l-1.6-5.5L5 9l5.4-1.5L12 2Z"/><path d="M19 15l.8 2.6 2.2.7-2.2.7L19 22l-.8-2.6-2.2-.7 2.2-.7L19 15Z"/>`,
};

export function Icon(name) {
  return `
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      ${paths[name] || paths.sparkle}
    </svg>
  `;
}

export function ArrowIcon() {
  return `<svg class="icon-arrow" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">${paths.arrow}</svg>`;
}
