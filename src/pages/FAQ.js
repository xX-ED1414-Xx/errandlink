import { Header } from "../components/Header.js";
import { Footer } from "../components/Footer.js";
import { ArrowIcon } from "../components/Icons.js";

export function FAQ() {
  return `
    ${Header()}

    <main>
      <section class="page-hero">
        <div class="container">
          <div class="center-copy" data-animate>
            <span class="eyebrow">FAQ</span>
            <h1 class="page-title">Answers to common questions.</h1>
            <p class="lead">
              Quick details about verification, allowed errands, pricing, and how the ErrandLink request flow works.
            </p>
          </div>
        </div>
      </section>

      <section class="section section--compact">
        <div class="container" style="max-width: 880px;">
          <div class="faq-list">
            <details class="faq-card" data-animate open>
              <summary>
                <span>How are helpers verified?</span>
                <span>+</span>
              </summary>
              <p>Helpers should go through identity checks and basic screening before they can accept tasks. This supports safer coordination between clients and helpers.</p>
            </details>

            <details class="faq-card" data-animate>
              <summary>
                <span>What errands are allowed?</span>
                <span>+</span>
              </summary>
              <p>ErrandLink is intended for legal, low-risk everyday tasks such as grocery assistance, deliveries, pickups, queueing, and routine personal errands.</p>
            </details>

            <details class="faq-card" data-animate>
              <summary>
                <span>How do payments and fees work?</span>
                <span>+</span>
              </summary>
              <p>Payments are tied to completed tasks. The platform can apply a small commission-based service fee, and subscription options can be offered for premium helper access.</p>
            </details>

            <details class="faq-card" data-animate>
              <summary>
                <span>Can elderly users use ErrandLink?</span>
                <span>+</span>
              </summary>
              <p>Yes. The website and service flow are designed with clearer labels, readable spacing, and simple instructions to make browsing easier for older users.</p>
            </details>

            <details class="faq-card" data-animate>
              <summary>
                <span>What makes ErrandLink different?</span>
                <span>+</span>
              </summary>
              <p>ErrandLink focuses on micro-errands and nearby helper matching, making small daily tasks easier to request, coordinate, and complete.</p>
            </details>
          </div>
        </div>
      </section>

      <section class="section section--compact">
        <div class="container cta-panel" data-animate>
          <div class="split-card">
            <div class="stack">
              <p class="kicker">Still have questions?</p>
              <h2 class="section-title">Reach out before getting started.</h2>
              <p class="lead">Send a message for service questions, partnership concerns, or pricing clarifications.</p>
            </div>
            <div class="actions" style="justify-content: flex-end;">
              <a class="btn btn-primary" href="#/contact">Contact support ${ArrowIcon()}</a>
            </div>
          </div>
        </div>
      </section>
    </main>

    ${Footer()}
  `;
}
