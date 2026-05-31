import { Header } from "../components/Header.js";
import { Footer } from "../components/Footer.js";
import { Icon, ArrowIcon } from "../components/Icons.js";

export function HowItWorks() {
  return `
    ${Header()}

    <main>
      <section class="page-hero">
        <div class="container two-column">
          <div class="stack" data-animate>
            <span class="eyebrow">How it Works</span>
            <h1 class="page-title">A guided errand flow from request to completion.</h1>
            <p class="lead">
              ErrandLink keeps the process simple so clients can request help quickly while helpers receive clear and manageable instructions.
            </p>
            <div class="actions">
              <a class="btn btn-primary" href="#/services">Choose a service ${ArrowIcon()}</a>
              <a class="btn btn-secondary" href="#/faq">Read FAQ</a>
            </div>
          </div>

          <div class="request-card" data-animate>
            <div class="request-card__top">
              <div>
                <p class="mini-label">Process preview</p>
                <h2 class="preview-title">From request to completed errand</h2>
              </div>
              <span class="status-pill">Guided</span>
            </div>
            <div class="request-card__body">
              <div class="timeline">
                <div class="timeline-item">
                  <div class="timeline-dot">1</div>
                  <div class="small-card">
                    <h3 class="step-title">Post task</h3>
                    <p class="copy">Client adds the errand details.</p>
                  </div>
                </div>
                <div class="timeline-item">
                  <div class="timeline-dot">2</div>
                  <div class="small-card">
                    <h3 class="step-title">Match helper</h3>
                    <p class="copy">A nearby helper accepts the request.</p>
                  </div>
                </div>
                <div class="timeline-item">
                  <div class="timeline-dot">3</div>
                  <div class="small-card">
                    <h3 class="step-title">Finish safely</h3>
                    <p class="copy">Task status is tracked until completion.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="section">
        <div class="container">
          <div class="center-copy" data-animate>
            <p class="kicker">Step-by-step</p>
            <h2 class="section-title">Clear enough for first-time users.</h2>
            <p class="lead">Each step uses plain instructions and visible actions to help users move forward confidently.</p>
          </div>

          <div class="step-list" style="margin-top: 38px;">
            <div class="step-card" data-animate>
              <div class="step-number">01</div>
              <div>
                <h3 class="step-title">Create a request</h3>
                <p class="copy">The client chooses a service type and writes the needed task details, location, and preferred time.</p>
              </div>
            </div>
            <div class="step-card" data-animate>
              <div class="step-number">02</div>
              <div>
                <h3 class="step-title">Find a nearby helper</h3>
                <p class="copy">The platform connects the request to available helpers who are near the client’s area.</p>
              </div>
            </div>
            <div class="step-card" data-animate>
              <div class="step-number">03</div>
              <div>
                <h3 class="step-title">Confirm the details</h3>
                <p class="copy">The client and helper can clarify instructions before the task starts.</p>
              </div>
            </div>
            <div class="step-card" data-animate>
              <div class="step-number">04</div>
              <div>
                <h3 class="step-title">Track the task</h3>
                <p class="copy">Users can follow the status so they know whether the errand is pending, in progress, or completed.</p>
              </div>
            </div>
            <div class="step-card" data-animate>
              <div class="step-number">05</div>
              <div>
                <h3 class="step-title">Complete and close</h3>
                <p class="copy">After the helper finishes the errand, the request is completed and the transaction fee is applied when applicable.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="section section--compact">
        <div class="container card-grid-3">
          <article class="info-card" data-animate>
            <div class="icon-box">${Icon("user")}</div>
            <h2 class="card-title">For clients</h2>
            <ul class="card-list">
              <li>Request simple errands</li>
              <li>Provide clear task details</li>
              <li>Track the request status</li>
            </ul>
          </article>

          <article class="info-card" data-animate>
            <div class="icon-box">${Icon("check")}</div>
            <h2 class="card-title">For helpers</h2>
            <ul class="card-list">
              <li>Accept manageable tasks</li>
              <li>Follow instructions</li>
              <li>Complete errands safely</li>
            </ul>
          </article>

          <article class="info-card" data-animate>
            <div class="icon-box">${Icon("shield")}</div>
            <h2 class="card-title">For the platform</h2>
            <ul class="card-list">
              <li>Organize the request flow</li>
              <li>Support user coordination</li>
              <li>Apply service fees fairly</li>
            </ul>
          </article>
        </div>
      </section>

      <section class="section section--compact">
        <div class="container cta-panel" data-animate>
          <div class="split-card">
            <div class="stack">
              <p class="kicker">Simple request flow</p>
              <h2 class="section-title">Less confusion, more confidence.</h2>
              <p class="lead">The website now presents the process with clearer spacing, brighter visuals, and friendlier guidance for all types of users.</p>
            </div>
            <div class="actions" style="justify-content: flex-end;">
              <a class="btn btn-primary" href="#/services">Explore services ${ArrowIcon()}</a>
              <a class="btn btn-secondary" href="#/contact">Contact support</a>
            </div>
          </div>
        </div>
      </section>
    </main>

    ${Footer()}
  `;
}
