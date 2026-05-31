import { Header } from "../components/Header.js";
import { Footer } from "../components/Footer.js";
import { Icon, ArrowIcon } from "../components/Icons.js";

export function Contact() {
  return `
    ${Header()}

    <main>
      <section class="page-hero">
        <div class="container">
          <div class="center-copy" data-animate>
            <span class="eyebrow">Contact Us</span>
            <h1 class="page-title">Let’s talk about your errand needs.</h1>
            <p class="lead">
              Send a message for support, partnership questions, service clarification, or general inquiries about ErrandLink.
            </p>
          </div>
        </div>
      </section>

      <section class="section section--compact">
        <div class="container contact-grid">
          <div class="stack" data-animate>
            <div class="info-card">
              <div class="icon-box">${Icon("chat")}</div>
              <h2 class="card-title">Contact details</h2>
              <ul class="card-list">
                <li>Email: ditangeorgeedward@gmail.com</li>
                <li>Phone: +63 994 907 9807</li>
                <li>Hours: Daily, 8:00 AM to 8:00 PM</li>
              </ul>
            </div>

            <div class="info-card">
              <div class="icon-box">${Icon("list")}</div>
              <h2 class="card-title">What to include</h2>
              <p class="card-copy">
                Add your name, preferred contact method, and a short description of the errand or question you need help with.
              </p>
            </div>
          </div>

          <div class="form-card" data-animate>
            <div class="stack" style="gap: 10px;">
              <p class="kicker">Message form</p>
              <h2 class="section-title" style="font-size: clamp(1.85rem, 3vw, 2.65rem);">Send a message</h2>
              <p class="copy">This form sends messages directly to your email using FormSubmit.</p>
            </div>

            <form
              class="form-grid"
              data-contact-form
              action="https://formsubmit.co/ditangeorgeedward@gmail.com"
              method="POST"
              style="margin-top: 24px;"
            >
              <input type="hidden" name="_subject" value="New ErrandLink Contact Form Submission" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />

              <div class="form-grid form-grid--two">
                <label>
                  <span class="mini-label">Name</span>
                  <input class="form-control" type="text" name="name" placeholder="Your name" required />
                </label>

                <label>
                  <span class="mini-label">Email</span>
                  <input class="form-control" type="email" name="email" placeholder="you@example.com" required />
                </label>
              </div>

              <label>
                <span class="mini-label">Subject</span>
                <input class="form-control" type="text" name="subject" placeholder="How can we help?" required />
              </label>

              <label>
                <span class="mini-label">Message</span>
                <textarea class="form-control" name="message" placeholder="Write your message here..." required></textarea>
              </label>

              <p class="form-status" data-form-status>Thank you! Your message has been sent.</p>

              <button class="btn btn-primary" type="submit">
                Send message ${ArrowIcon()}
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>

    ${Footer()}
  `;
}
