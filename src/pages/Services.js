import { Header } from "../components/Header.js";
import { Footer } from "../components/Footer.js";
import { Icon, ArrowIcon } from "../components/Icons.js";

export function Services() {
  return `
    ${Header()}

    <main>
      <section class="page-hero">
        <div class="container two-column">
          <div class="stack" data-animate>
            <span class="eyebrow">ErrandLink Services</span>
            <h1 class="page-title">Everyday assistance made easier to request.</h1>
            <p class="lead">
              ErrandLink focuses on practical, legal, and low-risk errands such as groceries, deliveries, personal pickups, and senior-friendly assistance.
            </p>
            <div class="actions">
              <a class="btn btn-primary" href="#/contact">Ask about a service ${ArrowIcon()}</a>
              <a class="btn btn-secondary" href="#/how-it-works">View process</a>
            </div>
          </div>

          <div class="soft-panel" data-animate>
            <div class="card-grid-2">
              <div class="small-card">
                <p class="mini-label">Best for</p>
                <h2 class="preview-title">Daily errands</h2>
                <p class="copy">Simple tasks handled with clear instructions.</p>
              </div>
              <div class="small-card">
                <p class="mini-label">Support style</p>
                <h2 class="preview-title">Task-based</h2>
                <p class="copy">Organized request, matching, and completion flow.</p>
              </div>
              <div class="small-card" style="grid-column: 1 / -1;">
                <p class="mini-label">Promise</p>
                <h2 class="preview-title">A smoother way to request help without the usual hassle.</h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="section">
        <div class="container">
          <div class="center-copy" data-animate>
            <p class="kicker">What we offer</p>
            <h2 class="section-title">Flexible services for everyday life.</h2>
            <p class="lead">Each category is designed to be straightforward, useful, and easy for clients and helpers to understand.</p>
          </div>

          <div class="card-grid-4" style="margin-top: 38px;">
            <article class="service-card" data-animate>
              <div class="icon-box">${Icon("cart")}</div>
              <h3 class="card-title">Grocery Assistance</h3>
              <p class="card-copy">Request help for basic grocery shopping and delivery with simple item instructions.</p>
            </article>

            <article class="service-card" data-animate>
              <div class="icon-box">${Icon("delivery")}</div>
              <h3 class="card-title">Delivery Services</h3>
              <p class="card-copy">Send documents, parcels, or everyday items through a convenient task workflow.</p>
            </article>

            <article class="service-card" data-animate>
              <div class="icon-box">${Icon("list")}</div>
              <h3 class="card-title">Personal Errands</h3>
              <p class="card-copy">Queueing, pickups, drop-offs, and simple tasks handled with clear scope.</p>
            </article>

            <article class="service-card" data-animate>
              <div class="icon-box">${Icon("heart")}</div>
              <h3 class="card-title">Senior Assistance</h3>
              <p class="card-copy">Friendly errand support for elderly users who need help with routine needs.</p>
            </article>
          </div>
        </div>
      </section>

      <section class="section section--compact">
        <div class="container safety-note" data-animate>
          <div class="icon-box">${Icon("shield")}</div>
          <div class="stack" style="gap: 12px;">
            <p class="kicker">Safety scope</p>
            <h2 class="section-title" style="font-size: clamp(1.7rem, 3vw, 2.45rem);">Low-risk errands only.</h2>
            <p class="lead">
              ErrandLink is made for everyday assistance. Requests should be legal, safe, clearly described, and manageable for helpers. High-risk, illegal, or unclear tasks should not be accepted.
            </p>
          </div>
        </div>
      </section>

      <section class="section">
        <div class="container two-column">
          <div class="stack" data-animate>
            <p class="kicker">How services are organized</p>
            <h2 class="section-title">One request flow for every service type.</h2>
            <p class="lead">
              Users do not need to learn a complicated process. They choose the service, add details, wait for matching, and track the task until completion.
            </p>
            <a class="btn btn-secondary" href="#/how-it-works">Learn the process ${ArrowIcon()}</a>
          </div>

          <div class="step-list" data-animate>
            <div class="step-card">
              <div class="step-number">01</div>
              <div>
                <h3 class="step-title">Select a service</h3>
                <p class="copy">Choose from grocery, delivery, personal errands, or senior assistance.</p>
              </div>
            </div>
            <div class="step-card">
              <div class="step-number">02</div>
              <div>
                <h3 class="step-title">Add instructions</h3>
                <p class="copy">Write what needs to be done, where, and when it should be completed.</p>
              </div>
            </div>
            <div class="step-card">
              <div class="step-number">03</div>
              <div>
                <h3 class="step-title">Complete the errand</h3>
                <p class="copy">A matched helper handles the task while the client follows the progress.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="section section--compact">
        <div class="container cta-panel" data-animate>
          <div class="split-card">
            <div class="stack">
              <p class="kicker">Need support?</p>
              <h2 class="section-title">Pick a service and get started.</h2>
              <p class="lead">ErrandLink keeps everyday help organized, modern, and easy to request.</p>
            </div>
            <div class="actions" style="justify-content: flex-end;">
              <a class="btn btn-primary" href="#/contact">Contact us ${ArrowIcon()}</a>
              <a class="btn btn-secondary" href="#/faq">View FAQ</a>
            </div>
          </div>
        </div>
      </section>
    </main>

    ${Footer()}
  `;
}
