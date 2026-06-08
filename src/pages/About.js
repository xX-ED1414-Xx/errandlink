import { Header } from "../components/Header.js";
import { Footer } from "../components/Footer.js";
import { Icon, ArrowIcon } from "../components/Icons.js";

const html = String.raw;

export function About() {
  return html `
    ${Header()}

    <main>
      <section class="page-hero">
        <div class="container two-column">
          <div class="stack" data-animate>
            <span class="eyebrow">About ErrandLink</span>
            <h1 class="page-title">Built to make everyday support feel simple.</h1>
            <p class="lead">
              ErrandLink Inc. is a digital platform company that connects clients with nearby helpers for grocery shopping, delivery, and other low-risk errands through a service that is fast, clear, and easy to trust.
            </p>
            <div class="pill-row">
              <span class="tag-pill">Community-driven</span>
              <span class="tag-pill">Fast coordination</span>
              <span class="tag-pill">Low-risk errands</span>
            </div>
          </div>

          <div class="soft-panel" data-animate>
            <div class="card-grid-2">
              <div class="small-card">
                <p class="mini-label">What we do</p>
                <h2 class="preview-title">Connect people to trusted nearby helpers.</h2>
              </div>
              <div class="small-card">
                <p class="mini-label">What we value</p>
                <h2 class="preview-title">Speed, safety, and clear communication.</h2>
              </div>
              <div class="small-card" style="grid-column: 1 / -1;">
                <p class="mini-label">Platform promise</p>
                <h2 class="preview-title">Make simple errands feel effortless from request to completion.</h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="section">
        <div class="container card-grid-3">
          <article class="info-card" data-animate>
            <div class="icon-box">${Icon("heart")}</div>
            <h2 class="card-title">Mission</h2>
            <p class="card-copy">To make everyday assistance more accessible, organized, and community-driven for people who need help with simple tasks.</p>
          </article>

          <article class="info-card" data-animate>
            <div class="icon-box">${Icon("star")}</div>
            <h2 class="card-title">Vision</h2>
            <p class="card-copy">A community where no simple errand becomes a heavy burden, especially for busy individuals, families, and elderly users.</p>
          </article>

          <article class="info-card" data-animate>
            <div class="icon-box">${Icon("shield")}</div>
            <h2 class="card-title">Approach</h2>
            <p class="card-copy">Keep every request low-risk, clearly scoped, and easier to coordinate from the first message until task completion.</p>
          </article>
        </div>
      </section>

      <section class="section section--compact">
        <div class="container feature-panel split-card" data-animate>
          <div class="stack">
            <p class="kicker">How the business works</p>
            <h2 class="section-title">A platform model built around simple transactions and optional premium access.</h2>
            <p class="lead">
              ErrandLink earns through a commission-based service fee on completed transactions. Subscription options can also provide access to more experienced helpers for users who need extra convenience.
            </p>
          </div>

          <div class="step-list">
            <div class="step-card">
              <div class="step-number">01</div>
              <div>
                <h3 class="step-title">Clients request help</h3>
                <p class="copy">The client posts a clear, low-risk task with the needed details.</p>
              </div>
            </div>
            <div class="step-card">
              <div class="step-number">02</div>
              <div>
                <h3 class="step-title">Helpers accept tasks</h3>
                <p class="copy">Nearby helpers receive tasks that fit their availability and capability.</p>
              </div>
            </div>
            <div class="step-card">
              <div class="step-number">03</div>
              <div>
                <h3 class="step-title">Platform supports the process</h3>
                <p class="copy">ErrandLink provides the request flow, status tracking, and communication structure.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="section section--compact">
        <div class="container cta-panel" data-animate>
          <div class="split-card">
            <div class="stack">
              <p class="kicker">Our focus</p>
              <h2 class="section-title">Reliable help, without the friction.</h2>
              <p class="lead">ErrandLink is designed to make small tasks feel organized, modern, and easy to trust.</p>
            </div>
            <div class="actions" style="justify-content: flex-end;">
              <a class="btn btn-primary" href="#/services">View services ${ArrowIcon()}</a>
              <a class="btn btn-secondary" href="#/contact">Contact us</a>
            </div>
          </div>
        </div>
      </section>
    </main>

    ${Footer()}
  `;
}
