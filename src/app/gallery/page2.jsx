import PageShell from "@/components/PageShell";

export const metadata = { title: "Gallery" };

export default function GalleryPage() {
  return (
<>
  <meta charSet="utf-8" />
  <meta content="width=device-width, initial-scale=1.0" name="viewport" />
  <title>Terms - Clinic Bootstrap Template</title>
  <meta name="description" content="" />
  <meta name="keywords" content="" />
  {/* Favicons */}
  <link href="/assets/img/favicon.png" rel="icon" />
  <link href="/assets/img/apple-touch-icon.png" rel="apple-touch-icon" />
  {/* Fonts */}
  <link href="https://fonts.googleapis.com" rel="preconnect" />
  <link href="https://fonts.gstatic.com" rel="preconnect" crossOrigin="" />
  <link
    href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap"
    rel="stylesheet"
  />
  {/* Vendor CSS Files */}
  <link href="/assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
  <link
    href="/assets/vendor/bootstrap-icons/bootstrap-icons.css"
    rel="stylesheet"
  />
  <link href="/assets/vendor/aos/aos.css" rel="stylesheet" />
  <link href="/assets/vendor/glightbox/css/glightbox.min.css" rel="stylesheet" />
  <link
    href="/assets/vendor/fontawesome-free/css/all.min.css"
    rel="stylesheet"
  />
  <link href="/assets/vendor/swiper/swiper-bundle.min.css" rel="stylesheet" />
  {/* Main CSS File */}
  <link href="/assets/css/main.css" rel="stylesheet" />
  {/* =======================================================
  * Template Name: Clinic
  * Template URL: https://bootstrapmade.com/clinic-bootstrap-template/
  * Updated: Jul 23 2025 with Bootstrap v5.3.7
  * Author: BootstrapMade.com
  * License: https://bootstrapmade.com/license/
  ======================================================== */}
  <header id="header" className="header fixed-top">
    <div className="topbar d-flex align-items-center dark-background">
      <div className="container d-flex justify-content-center justify-content-md-between">
        <div className="contact-info d-flex align-items-center">
          <i className="bi bi-envelope d-flex align-items-center">
            <a href="mailto:contact@example.com">contact@example.com</a>
          </i>
          <i className="bi bi-phone d-flex align-items-center ms-4">
            <a href="tel:+155895548855">+1 5589 55488 55</a>
          </i>
        </div>
        <div className="social-links d-none d-md-flex align-items-center">
          <a
            href="https://www.facebook.com/share/1EaXxabHD4/?mibextid=wwXIfr"
            className="facebook"
            aria-label="QoL Insurance on Facebook"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-facebook" />
          </a>
          <a
            href="https://www.instagram.com/qol_insurance?igsh=MTEwMDg2ZXBjcGp1NA%3D%3D&utm_source=qr"
            className="instagram"
            aria-label="QoL Insurance on Instagram"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-instagram" />
          </a>
        </div>
      </div>
    </div>
    {/* End Top Bar */}
    <div className="branding d-flex align-items-cente">
      <div className="container position-relative d-flex align-items-center justify-content-between">
        <a href="index.html" className="logo d-flex align-items-center">
          {/* Uncomment the line below if you also wish to use an image logo */}
          {/* <img src="/assets/img/logo.webp" alt=""> */}
          <h1 className="sitename">Clinic</h1>
        </a>
        <nav id="navmenu" className="navmenu">
          <ul>
            <li>
              <a href="index.html">Home</a>
            </li>
            <li>
              <a href="about.html">About</a>
            </li>
            <li>
              <a href="departments.html">Departments</a>
            </li>
            <li>
              <a href="/products">Products</a>
            </li>
            <li>
              <a href="doctors.html">Doctors</a>
            </li>
            <li className="dropdown">
              <a href="#">
                <span>More Pages</span>{" "}
                <i className="bi bi-chevron-down toggle-dropdown" />
              </a>
              <ul>
                <li>
                  <a href="department-details.html">Department Details</a>
                </li>
                <li>
                  <a href="/product-details">Product Details</a>
                </li>
                <li>
                  <a href="appointment.html">Appointment</a>
                </li>
                <li>
                  <a href="testimonials.html">Testimonials</a>
                </li>
                <li>
                  <a href="faq.html">Frequently Asked Questions</a>
                </li>
                <li>
                  <a href="gallery.html">Gallery</a>
                </li>
                <li>
                  <a href="terms.html" className="active">
                    Terms
                  </a>
                </li>
                <li>
                  <a href="privacy.html">Privacy</a>
                </li>
                <li>
                  <a href="404.html">404</a>
                </li>
              </ul>
            </li>
            <li className="dropdown">
              <a href="#">
                <span>Dropdown</span>{" "}
                <i className="bi bi-chevron-down toggle-dropdown" />
              </a>
              <ul>
                <li>
                  <a href="#">Dropdown 1</a>
                </li>
                <li className="dropdown">
                  <a href="#">
                    <span>Deep Dropdown</span>{" "}
                    <i className="bi bi-chevron-down toggle-dropdown" />
                  </a>
                  <ul>
                    <li>
                      <a href="#">Deep Dropdown 1</a>
                    </li>
                    <li>
                      <a href="#">Deep Dropdown 2</a>
                    </li>
                    <li>
                      <a href="#">Deep Dropdown 3</a>
                    </li>
                    <li>
                      <a href="#">Deep Dropdown 4</a>
                    </li>
                    <li>
                      <a href="#">Deep Dropdown 5</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">Dropdown 2</a>
                </li>
                <li>
                  <a href="#">Dropdown 3</a>
                </li>
                <li>
                  <a href="#">Dropdown 4</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="contact.html">Contact</a>
            </li>
          </ul>
          <i className="mobile-nav-toggle d-xl-none bi bi-list" />
        </nav>
      </div>
    </div>
  </header>
  <main className="main">
    {/* Page Title */}
    <div className="page-title">
      <div className="heading">
        <div className="container">
          <div className="row d-flex justify-content-center text-center">
            <div className="col-lg-8">
              <h1 className="heading-title">Terms</h1>
              <p className="mb-0">
                Odio et unde deleniti. Deserunt numquam exercitationem. Officiis
                quo odio sint voluptas consequatur ut a odio voluptatem. Sit
                dolorum debitis veritatis natus dolores. Quasi ratione sint. Sit
                quaerat ipsum dolorem.
              </p>
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
            <li className="current">Terms</li>
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
          <span className="last-updated">Last Updated: February 27, 2025</span>
          <h2>Terms of Service</h2>
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
              By accessing our website and services, you agree to be bound by
              these Terms of Service and all applicable laws and regulations. If
              you do not agree with any of these terms, you are prohibited from
              using or accessing our services.
            </p>
            <div className="info-box">
              <i className="bi bi-info-circle" />
              <p>
                These terms apply to all users, visitors, and others who access
                or use our services.
              </p>
            </div>
          </div>
          {/* Intellectual Property */}
          <div id="intellectual-property" className="content-section">
            <h3>2. Intellectual Property Rights</h3>
            <p>
              Our service and its original content, features, and functionality
              are owned by us and are protected by international copyright,
              trademark, patent, trade secret, and other intellectual property
              laws.
            </p>
            <ul className="list-items">
              <li>All content is our exclusive property</li>
              <li>You may not copy or modify the content</li>
              <li>Our trademarks may not be used without permission</li>
              <li>Content is for personal, non-commercial use only</li>
            </ul>
          </div>
          {/* User Accounts */}
          <div id="user-accounts" className="content-section">
            <h3>3. User Accounts</h3>
            <p>
              When you create an account with us, you must provide accurate,
              complete, and current information. Failure to do so constitutes a
              breach of the Terms, which may result in immediate termination of
              your account.
            </p>
            <div className="alert-box">
              <i className="bi bi-exclamation-triangle" />
              <div className="alert-content">
                <h5>Important Notice</h5>
                <p>
                  You are responsible for safeguarding the password and for all
                  activities that occur under your account.
                </p>
              </div>
            </div>
          </div>
          {/* Prohibited Activities */}
          <div id="prohibited" className="content-section">
            <h3>4. Prohibited Activities</h3>
            <p>
              You may not access or use the Service for any purpose other than
              that for which we make it available.
            </p>
            <div className="prohibited-list">
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
            </div>
          </div>
          {/* Disclaimers */}
          <div id="disclaimer" className="content-section">
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
          </div>
          {/* Limitation of Liability */}
          <div id="limitation" className="content-section">
            <h3>6. Limitation of Liability</h3>
            <p>
              In no event shall we be liable for any indirect, punitive,
              incidental, special, consequential, or exemplary damages arising
              out of or in connection with your use of the service.
            </p>
          </div>
          {/* Indemnification */}
          <div id="indemnification" className="content-section">
            <h3>7. Indemnification</h3>
            <p>
              You agree to defend, indemnify, and hold us harmless from and
              against any claims, liabilities, damages, losses, and expenses
              arising out of your use of the service.
            </p>
          </div>
          {/* Termination */}
          <div id="termination" className="content-section">
            <h3>8. Termination</h3>
            <p>
              We may terminate or suspend your account immediately, without
              prior notice or liability, for any reason whatsoever, including
              without limitation if you breach the Terms.
            </p>
          </div>
          {/* Governing Law */}
          <div id="governing-law" className="content-section">
            <h3>9. Governing Law</h3>
            <p>
              These Terms shall be governed by and construed in accordance with
              the laws of [Your Country], without regard to its conflict of law
              provisions.
            </p>
          </div>
          {/* Changes */}
          <div id="changes" className="content-section">
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
          </div>
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
  <footer id="footer" className="footer-16 footer position-relative">
    <div className="container">
      <div className="footer-main" data-aos="fade-up" data-aos-delay={100}>
        <div className="row align-items-start">
          <div className="col-lg-5">
            <div className="brand-section">
              <a
                href="index.html"
                className="logo d-flex align-items-center mb-4"
              >
                <span className="sitename">Clinic</span>
              </a>
              <p className="brand-description">
                Crafting exceptional digital experiences through thoughtful
                design and innovative solutions that elevate your brand
                presence.
              </p>
              <div className="contact-info mt-5">
                <div className="contact-item">
                  <i className="bi bi-geo-alt" />
                  <span>1000 NW 65th St, Fort Lauderdale, FL33309</span>
                </div>
                <div className="contact-item">
                  <i className="bi bi-telephone" />
                  <a href="tel:+15559876543">+1 (555) 987-6543</a>
                </div>
                <div className="contact-item">
                  <i className="bi bi-envelope" />
                  <span>hello@designstudio.com</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="footer-nav-wrapper">
              <div className="row">
                <div className="col-6 col-lg-3">
                  <div className="nav-column">
                    <h6>Studio</h6>
                    <nav className="footer-nav">
                      <a href="#!">Our Story</a>
                      <a href="#!">Design Process</a>
                      <a href="#!">Portfolio</a>
                      <a href="#!">Case Studies</a>
                      <a href="#!">Awards</a>
                    </nav>
                  </div>
                </div>
                <div className="col-6 col-lg-3">
                  <div className="nav-column">
                    <h6>Products</h6>
                    <nav className="footer-nav">
                      <a href="#!">Brand Identity</a>
                      <a href="#!">Web Design</a>
                      <a href="#!">Mobile Apps</a>
                      <a href="#!">Digital Strategy</a>
                      <a href="#!">Consultation</a>
                    </nav>
                  </div>
                </div>
                <div className="col-6 col-lg-3">
                  <div className="nav-column">
                    <h6>Resources</h6>
                    <nav className="footer-nav">
                      <a href="#!">Design Blog</a>
                      <a href="#!">Style Guide</a>
                      <a href="#!">Free Assets</a>
                      <a href="#!">Tutorials</a>
                      <a href="#!">Inspiration</a>
                    </nav>
                  </div>
                </div>
                <div className="col-6 col-lg-3">
                  <div className="nav-column">
                    <h6>Connect</h6>
                    <nav className="footer-nav">
                      <a href="#!">Start Project</a>
                      <a href="#!">Schedule Call</a>
                      <a href="#!">Join Newsletter</a>
                      <a href="#!">Follow Updates</a>
                      <a href="#!">Partnership</a>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="footer-bottom">
      <div className="container">
        <div className="bottom-content" data-aos="fade-up" data-aos-delay={300}>
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="copyright">
                <p>
                  © <span className="sitename">Clinic</span>. All rights
                  reserved.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="legal-links">
                <a href="#!">Privacy Policy</a>
                <a href="#!">Terms of Service</a>
                <a href="#!">Cookie Policy</a>
                <div className="credits">
                  {/* All the links in the footer should remain intact. */}
                  {/* You can delete the links only if you've purchased the pro version. */}
                  {/* Licensing information: https://bootstrapmade.com/license/ */}
                  {/* Purchase the pro version with working PHP/AJAX contact form: [buy-url] */}
                  Designed by{" "}
                  <a href="https://bootstrapmade.com/">BootstrapMade</a>.
                  Distributed by{" "}
                  <a href="https://themewagon.com" target="_blank">
                    ThemeWagon
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</>

  );
}
