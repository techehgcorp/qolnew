export const metadata = { title: "Terms" };

export default function TermsPage() {
  return (
    <>
      <main className="main">
          {/* Page Title */}
          <div className="page-title">
            <div className="heading">
              <div className="container">
                <div className="row d-flex justify-content-center text-center">
                  <div className="col-lg-8">
                    <h1 className="heading-title">Terms of Service</h1>
                    <p className="mb-0">
                      Review the terms that govern use of our website, plan resources, and support services for members and visitors.
                    </p>
                    <span className="last-updated-heading">Last Updated: 6/10/2026</span>
                  </div>
                </div>
              </div>
            </div>
            <nav className="breadcrumbs">
              <div className="container">
                <ol>
                  <li>
                    <a href="index.html">Home</a>
                  </li>
                  <li className="current">Terms of Service</li>
                  
                </ol>
              </div>
            </nav>
          </div>
          {/* End Page Title */}
          {/* Terms Of Service Section */}
          <section id="terms-of-service" className="terms-of-service section">
            <div className="container" data-aos="fade-up">
              {/* Page Header */}
              <div className="tos-header text-center" data-aos="fade-up">
                <h2>Agreement Overview</h2>
                <p>
                  Please read these terms of service carefully before using our
                  services
                </p>
              </div>
              {/* Content */}
              <div className="tos-content" data-aos="fade-up" data-aos-delay={200}>
                {/* Agreement Section */}
                <div id="agreement" className="content-section">
                  <h3>1. Agreement to Terms</h3>
                  <p>
By accessing this website, you agree to be bound by these Terms of Service. This site is provided by Quality of Life Insurance and its licensed agents to offer information regarding life, health, Medicare, and ancillary insurance products.
                  </p>
                  {/* <div className="info-box">
                    <i className="bi bi-info-circle" />
                    <p>
                      These terms apply to all users, visitors, and others who access
                      or use our services.
                    </p>
                  </div> */}
                </div>
                {/* Intellectual Property */}
                <div id="intellectual-property" className="content-section">
                  <h3>2. Not Medical Advice</h3>
                  <p>
                    The content provided on this website, including any downloadable guides, is for informational and educational purposes only. It does not constitute medical or legal advice. Always consult with a qualified professional regarding your specific health or financial needs.
                  </p>
                  {/* <ul className="list-items">
                    <li>All content is our exclusive property</li>
                    <li>You may not copy or modify the content</li>
                    <li>Our trademarks may not be used without permission</li>
                    <li>Content is for personal, non-commercial use only</li>
                  </ul> */}
                </div>
                {/* User Accounts */}
                <div id="user-accounts" className="content-section">
                  <h3>3. Medicare Disclaimer</h3>
                  <p>
                    We do not offer every plan available in your area. Any information we provide is limited to those plans we do offer in your area. Please contact Medicare.gov or 1-800-MEDICARE to get information on all of your options.
                  </p>
                  {/* <div className="alert-box">
                    <i className="bi bi-exclamation-triangle" />
                    <div className="alert-content">
                      <h5>Important Notice</h5>
                      <p>
                        You are responsible for safeguarding the password and for all
                        activities that occur under your account.
                      </p>
                    </div>
                  </div> */}
                </div>
                {/* Prohibited Activities */}
                <div id="prohibited" className="content-section">
                  <h3>4. Limitation of Liability</h3>
                  <p>
                    Quality of Life Insurance and its agents strive to keep all information accurate and up-to-date; however, insurance plan details, premiums, and availability are subject to change by the carriers. We are not liable for any inaccuracies or coverage decisions made based on the material presented on this site.
                  </p>
                  {/* <div className="prohibited-list">
                    <div className="prohibited-item">
                      <i className="bi bi-x-circle" />
                      <span>Systematic retrieval of data or content</span>
                    </div>
                    <div className="prohibited-item">
                      <i className="bi bi-x-circle" />
                      <span>Publishing malicious content</span>
                    </div>
                    <div className="prohibited-item">
                      <i className="bi bi-x-circle" />
                      <span>Engaging in unauthorized framing</span>
                    </div>
                    <div className="prohibited-item">
                      <i className="bi bi-x-circle" />
                      <span>Attempting to gain unauthorized access</span>
                    </div>
                  </div> */}
                </div>
                {/* Disclaimers */}
                {/* <div id="disclaimer" className="content-section">
                  <h3>5. Disclaimers</h3>
                  <p>
                    Your use of our service is at your sole risk. The service is
                    provided "AS IS" and "AS AVAILABLE" without warranties of any
                    kind, whether express or implied.
                  </p>
                  <div className="disclaimer-box">
                    <p>We do not guarantee that:</p>
                    <ul>
                      <li>The service will meet your requirements</li>
                      <li>The service will be uninterrupted or error-free</li>
                      <li>Results from using the service will be accurate</li>
                      <li>Any errors will be corrected</li>
                    </ul>
                  </div>
                </div> */}
                {/* Limitation of Liability */}
                {/* <div id="limitation" className="content-section">
                  <h3>6. Limitation of Liability</h3>
                  <p>
                    In no event shall we be liable for any indirect, punitive,
                    incidental, special, consequential, or exemplary damages arising
                    out of or in connection with your use of the service.
                  </p>
                </div> */}
                {/* Indemnification */}
                {/* <div id="indemnification" className="content-section">
                  <h3>7. Indemnification</h3>
                  <p>
                    You agree to defend, indemnify, and hold us harmless from and
                    against any claims, liabilities, damages, losses, and expenses
                    arising out of your use of the service.
                  </p>
                </div> */}
                {/* Termination */}
                {/* <div id="termination" className="content-section">
                  <h3>8. Termination</h3>
                  <p>
                    We may terminate or suspend your account immediately, without
                    prior notice or liability, for any reason whatsoever, including
                    without limitation if you breach the Terms.
                  </p>
                </div> */}
                {/* Governing Law */}
                {/* <div id="governing-law" className="content-section">
                  <h3>9. Governing Law</h3>
                  <p>
                    These Terms shall be governed by and construed in accordance with
                    the laws of [Your Country], without regard to its conflict of law
                    provisions.
                  </p>
                </div> */}
                {/* Changes */}
                {/* <div id="changes" className="content-section">
                  <h3>10. Changes to Terms</h3>
                  <p>
                    We reserve the right to modify or replace these Terms at any time.
                    We will provide notice of any changes by posting the new Terms on
                    this page.
                  </p>
                  <div className="notice-box">
                    <i className="bi bi-bell" />
                    <p>
                      By continuing to access or use our service after those revisions
                      become effective, you agree to be bound by the revised terms.
                    </p>
                  </div>
                </div> */}
              </div>
              {/* Contact Section */}
              <div className="tos-contact" data-aos="fade-up" data-aos-delay={300}>
                <div className="contact-box">
                  <div className="contact-icon">
                    <i className="bi bi-envelope" />
                  </div>
                  <div className="contact-content">
                    <h4>Questions About Terms?</h4>
                    <p>
                      If you have any questions about these Terms, please contact us.
                    </p>
                    <a href="#!" className="contact-link">
                      Contact Support
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* /Terms Of Service Section */}
        </main>
    </>
  );
}
