export default function PricingPage() {
  const links = {
    mainCheckout: "/thank-you",
    stripe: "/contact",
    paypal: "/contact",
    applePay: "/contact",
    googlePay: "/contact",
    payLater: "/contact",
    globalCards: "/contact",
    enterprise: "/contact",
  };

  return (
    <section id="pricing-payment-board" className="ssgpt6-pricing-board">
      <div className="container">
        <div className="hero">
          <p className="eyebrow">SSGPT6-CORE</p>
          <h1>Secure Global Payment Board</h1>
          <p className="subtitle">
            Trusted checkout, premium access, global payment pathways, and structured tax-aware billing support.
          </p>
        </div>

        <div className="pricing-grid">
          <div className="card">
            <h3>Free</h3>
            <p className="price">$0</p>
            <p>Public browsing and selected access</p>
            <a href="/contact" className="btn">Join Free</a>
          </div>

          <div className="card">
            <h3>Core Member</h3>
            <p className="price">$5<span>/month</span></p>
            <p>Expanded member content and basic tools</p>
            <a href="/contact" className="btn">Choose Core</a>
          </div>

          <div className="card">
            <h3>Plus Member</h3>
            <p className="price">$15<span>/month</span></p>
            <p>Premium content, downloads, and broader access</p>
            <a href="/contact" className="btn">Choose Plus</a>
          </div>

          <div className="card">
            <h3>Pro Member</h3>
            <p className="price">$29<span>/month</span></p>
            <p>Advanced access for active users and creators</p>
            <a href="/contact" className="btn">Choose Pro</a>
          </div>

          <div className="card">
            <h3>Business Member</h3>
            <p className="price">$79<span>/month</span></p>
            <p>Business-focused access, strategy pathways, and automation-oriented support</p>
            <a href="/contact" className="btn">Choose Business</a>
          </div>
        </div>

        <div className="packages-grid">
          <div className="package-card">
            <h3>Starter</h3>
            <p className="price">$29</p>
            <p>Basic service access and guided starting support</p>
            <a href="/contact" className="btn">Select Starter</a>
          </div>

          <div className="package-card">
            <h3>Growth</h3>
            <p className="price">$99</p>
            <p>Expanded support and stronger growth direction</p>
            <a href="/contact" className="btn">Select Growth</a>
          </div>

          <div className="package-card">
            <h3>Premium</h3>
            <p className="price">$249</p>
            <p>Advanced support and premium service pathway</p>
            <a href="/contact" className="btn">Select Premium</a>
          </div>

          <div className="package-card">
            <h3>Custom / Enterprise</h3>
            <p className="price">Contact Us</p>
            <p>Tailored support for large-scale, institutional, or custom business needs</p>
            <a href="/contact" className="btn">Contact Enterprise</a>
          </div>
        </div>

        <div className="payment-methods">
          <h2>Supported Payment Methods</h2>
          <div className="payment-buttons">
            <a href={links.stripe} className="pay-btn">Stripe Checkout</a>
            <a href={links.paypal} className="pay-btn">PayPal</a>
            <a href={links.applePay} className="pay-btn">Apple Pay</a>
            <a href={links.googlePay} className="pay-btn">Google Pay</a>
            <a href={links.payLater} className="pay-btn">Pay Later</a>
            <a href={links.globalCards} className="pay-btn">Global Card Payments</a>
          </div>
          <p className="notice">
            Available payment methods may vary depending on country, currency, bank, device compatibility, provider support, legal requirements, and risk review.
          </p>
        </div>

        <div className="smart-access-grid">
          <div className="smart-card">
            <h3>Voice Checkout</h3>
            <p>Voice command direction for future smart navigation.</p>
            <ul>
              <li>Open secure checkout</li>
              <li>Open payment cart</li>
              <li>Pay with Stripe</li>
              <li>Pay with PayPal</li>
              <li>Use Apple Pay</li>
              <li>Use Google Pay</li>
            </ul>
          </div>

          <div className="smart-card">
            <h3>QR Payment Access</h3>
            <p>Scan to open the official payment cart or checkout page.</p>
            <div className="qr-box">QR PAYMENT PANEL</div>
          </div>

          <div className="smart-card">
            <h3>Tax-Aware Billing</h3>
            <p>Tax stored separately from revenue.</p>
            <ul>
              <li>Subtotal tracked separately</li>
              <li>Tax tracked separately</li>
              <li>Processor fee tracked separately</li>
              <li>Refunds tracked separately</li>
              <li>Net amount tracked separately</li>
            </ul>
          </div>
        </div>

        <div className="success-guidance">
          <h2>Business Support and Growth Guidance</h2>
          <div className="guidance-grid">
            <div>
              <h4>Strategy Support</h4>
              <p>Structured support for growth direction and planning.</p>
            </div>
            <div>
              <h4>Automation Support</h4>
              <p>Future-ready pathways for workflow and operational automation.</p>
            </div>
            <div>
              <h4>Technical Support</h4>
              <p>Guidance for digital setup, support flow, and platform access.</p>
            </div>
            <div>
              <h4>Business Development</h4>
              <p>Support pathways for long-term growth and premium service use.</p>
            </div>
          </div>
        </div>

        <div id="payment-cart" className="cta-area">
          <a href={links.mainCheckout} className="primary-btn">Proceed to Secure Checkout</a>
          <a href="/contact" className="secondary-btn">Choose Payment Method</a>
          <a href={links.enterprise} className="secondary-btn">Contact Enterprise Sales</a>
        </div>

        <div className="policy-links">
          <a href="/privacy-policy">Privacy Policy</a>
          <span> • </span>
          <a href="/refund-policy">Refund Policy</a>
          <span> • </span>
          <a href="/terms-of-use">Terms of Use</a>
          <span> • </span>
          <a href="/support-center">Support Center</a>
        </div>
      </div>
    </section>
  );
}