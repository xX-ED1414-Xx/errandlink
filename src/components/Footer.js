const html = String.raw;

function LogoMark() {
  return html `
    <span class="logo-mark logo-mark--small" aria-hidden="true">
      <svg viewBox="0 0 64 48" role="img" class="brand-symbol">
        <defs>
          <linearGradient id="errandlinkFooterLogoGradient" x1="6" y1="38" x2="56" y2="8" gradientUnits="userSpaceOnUse">
            <stop stop-color="#12b8bd" />
            <stop offset=".58" stop-color="#1378d9" />
            <stop offset="1" stop-color="#0957c8" />
          </linearGradient>
        </defs>
        <path class="logo-route" d="M10 34h24c9.5 0 15.5-5.8 15.5-14.2" fill="none" stroke="url(#errandlinkFooterLogoGradient)" stroke-width="6.2" stroke-linecap="round" />
        <path class="logo-route" d="M20 23.5h17" fill="none" stroke="url(#errandlinkFooterLogoGradient)" stroke-width="6.2" stroke-linecap="round" opacity=".9" />
        <circle cx="10" cy="34" r="5.4" fill="#fff" stroke="#12b8bd" stroke-width="4" />
        <circle cx="49.5" cy="17.6" r="7.2" fill="#fff" stroke="#1378d9" stroke-width="4" />
        <path d="m45.9 17.3 2.5 2.5 5-5.6" fill="none" stroke="#0b5fd3" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M22 13.8c2.9-3.1 7.8-3.3 11-.3" fill="none" stroke="#12b8bd" stroke-width="4.7" stroke-linecap="round" />
      </svg>
    </span>
  `;
}
export function Footer() {
  return html `
    <footer class="site-footer">
      <div class="container footer-grid">
        <div>
          <a href="#/" class="brand-link footer-brand" aria-label="ErrandLink home">
            ${LogoMark()}
            <span class="brand-text">ErrandLink</span>
          </a>
          <p class="footer-copy">
            Reliable micro-errand support for groceries, deliveries, and everyday low-risk tasks.
          </p>
        </div>

        <div class="footer-links" aria-label="Footer navigation">
          <a href="#/services">Services</a>
          <a href="#/how-it-works">How it Works</a>
          <a href="#/pricing">Pricing</a>
          <a href="#/contact">Contact</a>
        </div>
      </div>

      <div class="container footer-bottom">
        <p>© ${new Date().getFullYear()} ErrandLink Inc. All rights reserved.</p>
        <p>Safety-first, local support.</p>
      </div>
    </footer>
  `;
}
