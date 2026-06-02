export default function Footer() {
  return (
    <footer id="footer" className="footer-16 footer position-relative">
      <div className="container">
        <div className="footer-main" data-aos="fade-up" data-aos-delay={100}>
          <div className="row align-items-start">
            <div className="col-lg-5">
              <div className="brand-section">
                <a href="/" className="logo d-flex align-items-center mb-4">
                
                  <img src="/assets/img/logofooter.png" alt="Quality of Life logo" />
                  {/* <span className="sitename">Quality of Life</span> */}
                </a>
                <p className="brand-description">
            At QOL Insurance, we understand that behind every policy is a family, a dream, and a future worth protecting. That's why we're deeply committed to providing you with insurance solutions that offer more than just coverage—they bring comfort, security, and the peace of mind you deserve.
                </p>

                <div className="contact-info mt-4">
                  <div className="contact-item">
                    <i className="bi bi-geo-alt" />
                    <span>1000 NW 65th St, Fort Lauderdale, FL 33309</span>
                  </div>
                  <div className="contact-item">
                    <i className="bi bi-telephone" />
                    <a href="tel:+18447300124">(844) 730-0124</a>
                  </div>
                  <div className="contact-item">
                    <i className="bi bi-envelope" />
                    <span>info@qolinsurance.com</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-7">
              <div className="footer-nav-wrapper">
                <div className="row">
                  <div className="col-6 col-lg-3">
                    <div className="nav-column">
                      <h6>Pages</h6>
                      <nav className="footer-nav">
                        <a href="#!">Home</a>
                        <a href="#!">About</a>
                        <a href="#!">Departments</a>
                        <a href="/products">Products</a>
                        <a href="#!">Appointments</a>
                        <a href="#!">Team</a>
                        <a href="#!">Terms</a>
                        <a href="#!">Privacy</a>
                        
                      </nav>
                    </div>
                  </div>

                  <div className="col-6 col-lg-3">
                    <div className="nav-column">
                      <h6>Products</h6>
                      <nav className="footer-nav">
                        <a href="#!">Health Insurance</a>
                        <a href="#!">Life Insurance</a>
                        <a href="#!">Medicare</a>
                        <a href="#!">Dental & Vision</a>
                      </nav>
                    </div>
                  </div>

                  {/* <div className="col-6 col-lg-3">
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
                  </div> */}

                  {/* <div className="col-6 col-lg-3"> */}
                    {/* <div className="nav-column">
                      <h6>Connect</h6>
                      <nav className="footer-nav">
                        <a href="#!">Start Project</a>
                        <a href="#!">Schedule Call</a>
                        <a href="#!">Join Newsletter</a>
                        <a href="#!">Follow Updates</a>
                        <a href="#!">Partnership</a>
                      </nav>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <div className="bottom-content">
            <div className="row align-items-center gy-3">
              <div className="col-lg-5">
                <div className="copyright">
                  <p>
                    © <span className="sitename">QoL</span>. All rights reserved.
                  </p>
                </div>
              </div>

              <div className="col-lg-7">
                <div className="legal-links">
                  <a href="#!">Privacy Policy</a>
                  <a href="#!">Terms of Service</a>
                  <a href="#!">Cookie Policy</a>
                </div>
              </div>

              <div className="col-12">
                {/* <div className="credits">
                  Designed by <a href="https://www.ehgcorp.com/">EHGCorp</a>.
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
