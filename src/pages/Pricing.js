import { Header } from "../components/Header.js";
import { Footer } from "../components/Footer.js";
import { Icon, ArrowIcon } from "../components/Icons.js";

export function Pricing() {
  return `
    ${Header()}

    <main>
      <section class="page-hero">
        <div class="container two-column">
          <div class="stack" data-animate>
            <span class="eyebrow">Pricing</span>
            <h1 class="page-title">Simple earning model with flexible support options.</h1>
            <p class="lead">
              ErrandLink uses a commission-based service fee for completed transactions, with optional subscriptions for users who want access to more experienced helpers.
            </p>
            <div class="actions">
              <a class="btn btn-primary" href="#/contact">Ask about pricing ${ArrowIcon()}</a>
              <a class="btn btn-secondary" href="#/services">View services</a>
            </div>
          </div>

          <div class="soft-panel" data-animate>
            <div class="safety-note" style="padding: 22px; border-radius: 26px;">
              <div class="icon-box">${Icon("wallet")}</div>
              <div>
                <p class="kicker">Transparent fees</p>
                <h2 class="preview-title">Fees are tied to completed requests.</h2>
                <p class="copy">This keeps the model simple for clients and sustainable for the platform.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="section">
        <div class="container">
          <div class="center-copy" data-animate>
            <p class="kicker">Plans and fees</p>
            <h2 class="section-title">Choose the option that matches the user’s need.</h2>
            <p class="lead">Use these cards as a clean frontend presentation. Exact prices can still be updated later depending on the final business decision.</p>
          </div>

          <div class="card-grid-3" style="margin-top: 38px;">
            <article class="price-card" data-animate>
              <p class="price-label">Basic</p>
              <h3 class="price-title">Standard Request</h3>
              <div class="price-value">Per task</div>
              <p class="price-note">For regular groceries, pickups, and delivery errands.</p>
              <ul class="card-list">
                <li>Access to available helpers</li>
                <li>Simple request tracking</li>
                <li>Service fee per completed task</li>
              </ul>
            </article>

            <article class="price-card featured" data-animate>
              <p class="price-label">Optional</p>
              <h3 class="price-title">Premium Helper Access</h3>
              <div class="price-value">Subscription</div>
              <p class="price-note">For users who prefer more experienced helpers.</p>
              <ul class="card-list">
                <li>Priority access to experienced helpers</li>
                <li>Better fit for frequent users</li>
                <li>Helpful for families and seniors</li>
              </ul>
            </article>

            <article class="price-card" data-animate>
              <p class="price-label">Support</p>
              <h3 class="price-title">Partner / Group Use</h3>
              <div class="price-value">Custom</div>
              <p class="price-note">For organizations or families with repeated errand needs.</p>
              <ul class="card-list">
                <li>Flexible coordination setup</li>
                <li>Support for repeated requests</li>
                <li>Can be adjusted by demand</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section class="section section--compact">
        <div class="container table-card" data-animate>
          <table class="comparison-table">
            <thead>
              <tr>
                <th>Feature</th>
                <th>Standard Request</th>
                <th>Premium Access</th>
                <th>Partner / Group</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Task access</td>
                <td class="check">✓</td>
                <td class="check">✓</td>
                <td class="check">✓</td>
              </tr>
              <tr>
                <td>Nearby helper matching</td>
                <td class="check">✓</td>
                <td class="check">✓</td>
                <td class="check">✓</td>
              </tr>
              <tr>
                <td>Experienced helper priority</td>
                <td>—</td>
                <td class="check">✓</td>
                <td>Optional</td>
              </tr>
              <tr>
                <td>Best use case</td>
                <td>Occasional errands</td>
                <td>Frequent or senior support</td>
                <td>Repeated group needs</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section class="section section--compact">
        <div class="container cta-panel" data-animate>
          <div class="split-card">
            <div class="stack">
              <p class="kicker">Pricing note</p>
              <h2 class="section-title">Keep the final rates editable.</h2>
              <p class="lead">The UI is ready for exact commission percentages, service fees, or subscription rates once your group finalizes them.</p>
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
