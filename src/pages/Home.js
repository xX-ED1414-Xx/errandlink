import { Header } from "../components/Header.js";
import { Footer } from "../components/Footer.js";
import { Icon, ArrowIcon } from "../components/Icons.js";

export function Home() {
  return `
    ${Header()}

    <main>
      <section class="page-hero hero-polished">
        <div class="hero-bg-shape hero-bg-shape--left" aria-hidden="true"></div>
        <div class="hero-bg-shape hero-bg-shape--right" aria-hidden="true"></div>
        <div class="hero-dot-pattern hero-dot-pattern--left" aria-hidden="true"></div>
        <div class="hero-dot-pattern hero-dot-pattern--right" aria-hidden="true"></div>

        <div class="container hero-grid hero-grid--premium">
          <div class="hero-copy" data-animate>
            <span class="eyebrow">ErrandLink Inc.</span>
            <h1 class="headline headline--premium">
              Everyday errands,<br />
              <span class="gradient-text">handled with care.</span>
            </h1>
            <span class="headline-swish" aria-hidden="true"></span>
            <p class="lead hero-lead">
              ErrandLink connects clients with nearby helpers for groceries, deliveries, and other low-risk tasks through a simple, reliable, and easy-to-follow platform.
            </p>

            <div class="actions hero-actions">
              <a class="btn btn-primary btn-with-icon" href="#/services"><span class="btn-icon">${Icon("cart")}</span>Explore services ${ArrowIcon()}</a>
              <a class="btn btn-secondary btn-with-icon" href="#/how-it-works"><span class="btn-icon btn-icon--play">▶</span>See how it works</a>
            </div>

            <div class="hero-benefits" aria-label="ErrandLink highlights">
              <div class="benefit-item" data-animate>
                <span class="benefit-icon benefit-icon--teal">${Icon("shield")}</span>
                <div>
                  <strong>Trusted & verified</strong>
                  <p>Helpers are vetted for your peace of mind.</p>
                </div>
              </div>
              <div class="benefit-item" data-animate>
                <span class="benefit-icon benefit-icon--blue">${Icon("location")}</span>
                <div>
                  <strong>Nearby support</strong>
                  <p>Local helpers for faster coordination.</p>
                </div>
              </div>
              <div class="benefit-item" data-animate>
                <span class="benefit-icon benefit-icon--purple">${Icon("heart")}</span>
                <div>
                  <strong>Community first</strong>
                  <p>Simple help from real neighbors.</p>
                </div>
              </div>
            </div>
          </div>

          <div class="hero-visual hero-visual--premium" data-animate>
            <span class="orb orb--one"></span>
            <span class="orb orb--two"></span>

            <div class="request-card request-card--premium" aria-label="Live request preview">
              <div class="request-card__top">
                <div>
                  <p class="mini-label">Live request preview</p>
                  <h2 class="preview-title">Quick grocery pickup</h2>
                </div>
                <span class="status-pill">Active</span>
              </div>

              <div class="request-card__body">
                <div class="task-card task-card--featured">
                  <div class="task-row">
                    <div>
                      <p class="mini-label">Task</p>
                      <p class="preview-title">Buy rice, eggs, and drinking water</p>
                    </div>
                    <span class="eta-pill"><span aria-hidden="true">◷</span> ETA 18 min</span>
                  </div>
                </div>

                <div class="card-grid-2">
                  <div class="small-card small-card--clean">
                    <p class="mini-label">Helper</p>
                    <div class="avatar-row">
                      <div class="avatar">JL</div>
                      <div>
                        <strong>Jamie L.</strong>
                        <p class="copy verified-copy"><span aria-hidden="true">✓</span> Nearby verified helper</p>
                      </div>
                    </div>
                  </div>

                  <div class="small-card small-card--clean">
                    <p class="mini-label">Status</p>
                    <div class="progress" aria-hidden="true"><span></span></div>
                    <p class="copy" style="margin-top: 10px;">Matched and in progress</p>
                  </div>
                </div>
              </div>

              <div class="request-card__footer">
                <div class="safety-note safety-note--premium">
                  <div class="icon-box icon-box--green">${Icon("shield")}</div>
                  <div>
                    <strong>Safety-first support</strong>
                    <p class="copy">Designed for simple tasks, clear instructions, and trusted coordination.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="section section--compact">
        <div class="container accessibility-strip" data-animate>
          <div class="strip-item strip-item--accent">
            <strong>Readable design</strong>
            <p>Larger text, clearer spacing, and simple labels for easier browsing.</p>
          </div>
          <div class="strip-item strip-item--accent">
            <strong>Guided actions</strong>
            <p>Buttons and sections are organized so users know what to do next.</p>
          </div>
          <div class="strip-item strip-item--accent">
            <strong>Friendly for seniors</strong>
            <p>Simple language and low-risk service categories for everyday needs.</p>
          </div>
        </div>
      </section>

      <section class="section">
        <div class="container">
          <div class="center-copy" data-animate>
            <p class="kicker">Why ErrandLink</p>
            <h2 class="section-title">Built for speed, trust, and convenience.</h2>
            <p class="lead">
              A polished experience for clients who need help quickly and helpers who need clear, manageable requests.
            </p>
          </div>

          <div class="card-grid-3" style="margin-top: 38px;">
            <article class="info-card" data-animate>
              <div class="icon-box">${Icon("location")}</div>
              <h3 class="card-title">Nearby helpers</h3>
              <p class="card-copy">Connect with available helpers close to your area for faster task completion.</p>
            </article>

            <article class="info-card" data-animate>
              <div class="icon-box">${Icon("shield")}</div>
              <h3 class="card-title">Low-risk tasks</h3>
              <p class="card-copy">The service focuses on safe everyday errands like groceries, pickups, and deliveries.</p>
            </article>

            <article class="info-card" data-animate>
              <div class="icon-box">${Icon("chat")}</div>
              <h3 class="card-title">Clear communication</h3>
              <p class="card-copy">Each request keeps task details, status, and coordination easy to follow.</p>
            </article>
          </div>
        </div>
      </section>

      <section class="section">
        <div class="container split-card feature-panel" data-animate>
          <div class="stack">
            <p class="kicker">Designed for real users</p>
            <h2 class="section-title">Simple enough for daily use, polished enough to feel trustworthy.</h2>
            <p class="lead">
              The interface uses a brighter design, softer colors, and obvious actions so both younger and older users can browse with less confusion.
            </p>
            <div class="pill-row">
              <span class="tag-pill">Large touch targets</span>
              <span class="tag-pill">Clear section labels</span>
              <span class="tag-pill">Friendly colors</span>
            </div>
          </div>

          <div class="step-list">
            <div class="step-card">
              <div class="step-number">01</div>
              <div>
                <h3 class="step-title">Choose the errand</h3>
                <p class="copy">Select groceries, delivery, queueing, pickup, or senior assistance.</p>
              </div>
            </div>
            <div class="step-card">
              <div class="step-number">02</div>
              <div>
                <h3 class="step-title">Add simple details</h3>
                <p class="copy">Provide instructions, location, and preferred completion time.</p>
              </div>
            </div>
            <div class="step-card">
              <div class="step-number">03</div>
              <div>
                <h3 class="step-title">Track progress</h3>
                <p class="copy">View the request status until the helper completes the task.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="section section--compact">
        <div class="container cta-panel" data-animate>
          <div class="split-card">
            <div class="stack">
              <p class="kicker">Ready to request help?</p>
              <h2 class="section-title">Start with a simple errand and let ErrandLink handle the coordination.</h2>
              <p class="lead">Explore the service categories or contact the team for questions about the platform.</p>
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
