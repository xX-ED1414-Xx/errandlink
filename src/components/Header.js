const navItems = [
  { label: "Home", href: "#/", path: "/" },
  { label: "About", href: "#/about", path: "/about" },
  { label: "Services", href: "#/services", path: "/services" },
  { label: "How it Works", href: "#/how-it-works", path: "/how-it-works" },
  { label: "Pricing", href: "#/pricing", path: "/pricing" },
  { label: "FAQ", href: "#/faq", path: "/faq" },
  { label: "Contact", href: "#/contact", path: "/contact" },
];

function LogoMark() {
  return `
    <span class="logo-mark" aria-hidden="true">
      <svg viewBox="0 0 64 48" role="img" class="brand-symbol">
        <defs>
          <linearGradient id="errandlinkLogoGradient" x1="6" y1="38" x2="56" y2="8" gradientUnits="userSpaceOnUse">
            <stop stop-color="#12b8bd" />
            <stop offset=".58" stop-color="#1378d9" />
            <stop offset="1" stop-color="#0957c8" />
          </linearGradient>
        </defs>
        <path class="logo-route" d="M10 34h24c9.5 0 15.5-5.8 15.5-14.2" fill="none" stroke="url(#errandlinkLogoGradient)" stroke-width="6.2" stroke-linecap="round" />
        <path class="logo-route" d="M20 23.5h17" fill="none" stroke="url(#errandlinkLogoGradient)" stroke-width="6.2" stroke-linecap="round" opacity=".9" />
        <circle cx="10" cy="34" r="5.4" fill="#fff" stroke="#12b8bd" stroke-width="4" />
        <circle cx="49.5" cy="17.6" r="7.2" fill="#fff" stroke="#1378d9" stroke-width="4" />
        <path d="m45.9 17.3 2.5 2.5 5-5.6" fill="none" stroke="#0b5fd3" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M22 13.8c2.9-3.1 7.8-3.3 11-.3" fill="none" stroke="#12b8bd" stroke-width="4.7" stroke-linecap="round" />
      </svg>
    </span>
  `;
}
function navLinks(currentPath) {
  return navItems
    .map((item) => {
      const isActive = currentPath === item.path;
      return `
        <a class="nav-link ${isActive ? "is-active" : ""}" href="${item.href}" ${
          isActive ? 'aria-current="page"' : ""
        }>
          ${item.label}
        </a>
      `;
    })
    .join("");
}

export function Header() {
  const currentPath = window.location.hash.slice(1) || "/";

  return `
    <header class="site-header">
      <div class="site-header__inner">
        <a href="#/" class="brand-link" aria-label="ErrandLink home">
          ${LogoMark()}
          <span class="brand-text">ErrandLink</span>
        </a>

        <nav class="desktop-nav" aria-label="Primary navigation">
          ${navLinks(currentPath)}
        </nav>

        <a href="#/contact" class="header-cta">Start a request <span aria-hidden="true">→</span></a>

        <details class="mobile-nav">
          <summary aria-label="Open menu">
            <span></span>
            <span></span>
            <span></span>
          </summary>
          <div class="mobile-nav__panel">
            ${navLinks(currentPath)}
            <a href="#/contact" class="btn btn-primary btn-full">Start a request</a>
          </div>
        </details>
      </div>
    </header>
  `;
}
