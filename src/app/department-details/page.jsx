export const metadata = { title: "Department Details" };

export default function DepartmentDetailsPage() {
  return (
    <>
      <main className="main">
          {/* Page Title */}
          <div className="page-title">
            <div className="heading">
              <div className="container">
                <div className="row d-flex justify-content-center text-center">
                  <div className="col-lg-8">
                    <h1 className="heading-title">Department Details</h1>
                    <p className="mb-0">
                      Review coverage details, enrollment support, and plan resources designed to help members make informed insurance decisions.
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
                  <li className="current">Department Details</li>
                </ol>
              </div>
            </nav>
          </div>
          {/* End Page Title */}
          {/* Department Details Section */}
          <section id="department-details" className="department-details section">
            <div className="container" data-aos="fade-up" data-aos-delay={100}>
              <div className="row">
                <div className="col-xl-6 col-lg-7">
                  <div
                    className="department-hero"
                    data-aos="fade-right"
                    data-aos-delay={200}
                  >
                    <div className="badge-wrap">
                      <span className="specialty-badge">Medicare</span>
                    </div>
                    <h1 className="department-title">Comprehensive Medicare Guidance</h1>
                    <p className="department-intro">
                      We help members compare Medicare Advantage, Supplement, and
                      Part D options so they can choose coverage with more
                      clarity around doctors, prescriptions, and total costs.
                    </p>
                    <div className="key-highlights">
                      <div className="highlight-item">
                        <span className="highlight-number">24/7</span>
                        <span className="highlight-text">Member Guidance</span>
                      </div>
                      <div className="highlight-item">
                        <span className="highlight-number">15+</span>
                        <span className="highlight-text">Plan Carriers Reviewed</span>
                      </div>
                      <div className="highlight-item">
                        <span className="highlight-number">95%</span>
                        <span className="highlight-text">Member Satisfaction</span>
                      </div>
                    </div>
                    <div className="action-group">
                      <a href="appointment.html" className="btn-primary">
                        Request a Consultation
                      </a>
                      <a href="/products" className="btn-secondary">
                        <span>View All Products</span>
                        <i className="bi bi-arrow-right" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-5">
                  <div
                    className="department-visual"
                    data-aos="fade-left"
                    data-aos-delay={300}
                  >
                    <div className="image-container">
                      <img
                        src="/assets/img/health/neurology-2.webp"
                        alt="Medicare guidance"
                        className="img-fluid primary-image"
                      />
                      <div
                        className="floating-card"
                        data-aos="zoom-in"
                        data-aos-delay={500}
                      >
                        <div className="card-icon">
                          <i className="bi bi-brain" />
                        </div>
                        <div className="card-content">
                          <h4>Medicare Specialists</h4>
                          <p>Support with plan selection, deadlines, and benefits</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="services-overview"
                data-aos="fade-up"
                data-aos-delay={400}
              >
                <div className="row justify-content-center">
                  <div className="col-lg-8">
                    <div className="overview-header">
                      <h3>How We Support Medicare Members</h3>
                      <p>
                        Our team helps simplify enrollment, compare available
                        plans, and explain how Medicare benefits work in real
                        everyday situations.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row gy-4 services-grid">
                  <div
                    className="col-lg-4 col-md-6"
                    data-aos="fade-up"
                    data-aos-delay={500}
                  >
                    <div className="service-item">
                      <div className="service-icon">
                        <i className="bi bi-lightning-charge" />
                      </div>
                      <h4>Plan Comparison</h4>
                      <p>
                        Review Medicare Advantage, Supplement, and Part D options
                        side by side with practical cost comparisons.
                      </p>
                    </div>
                  </div>
                  <div
                    className="col-lg-4 col-md-6"
                    data-aos="fade-up"
                    data-aos-delay={550}
                  >
                    <div className="service-item">
                      <div className="service-icon">
                        <i className="bi bi-search" />
                      </div>
                      <h4>Prescription Review</h4>
                      <p>
                        Check formularies, preferred pharmacies, and medication
                        costs before enrolling in a drug plan.
                      </p>
                    </div>
                  </div>
                  <div
                    className="col-lg-4 col-md-6"
                    data-aos="fade-up"
                    data-aos-delay={600}
                  >
                    <div className="service-item">
                      <div className="service-icon">
                        <i className="bi bi-heart-pulse" />
                      </div>
                      <h4>Doctor and Network Access</h4>
                      <p>
                        Confirm whether your doctors, specialists, and hospitals
                        participate in the plan you are considering.
                      </p>
                    </div>
                  </div>
                  <div
                    className="col-lg-4 col-md-6"
                    data-aos="fade-up"
                    data-aos-delay={650}
                  >
                    <div className="service-item">
                      <div className="service-icon">
                        <i className="bi bi-person-gear" />
                      </div>
                      <h4>Enrollment Support</h4>
                      <p>
                        Get help with paperwork, eligibility questions, and plan
                        changes during important enrollment windows.
                      </p>
                    </div>
                  </div>
                  <div
                    className="col-lg-4 col-md-6"
                    data-aos="fade-up"
                    data-aos-delay={700}
                  >
                    <div className="service-item">
                      <div className="service-icon">
                        <i className="bi bi-moon" />
                      </div>
                      <h4>Annual Coverage Reviews</h4>
                      <p>
                        Revisit your current plan each year to check costs,
                        benefits, and whether a better option is available.
                      </p>
                    </div>
                  </div>
                  <div
                    className="col-lg-4 col-md-6"
                    data-aos="fade-up"
                    data-aos-delay={750}
                  >
                    <div className="service-item">
                      <div className="service-icon">
                        <i className="bi bi-shield-check" />
                      </div>
                      <h4>Supplemental Protection</h4>
                      <p>
                        Explore dental, vision, hospital, or indemnity coverage
                        that can complement your core Medicare plan.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="expert-care-section"
                data-aos="fade-up"
                data-aos-delay={800}
              >
                <div className="row align-items-center">
                  <div
                    className="col-lg-5"
                    data-aos="fade-right"
                    data-aos-delay={900}
                  >
                    <div className="expert-image">
                      <img
                        src="/assets/img/health/neurology-4.webp"
                        alt="Insurance advisor"
                        className="img-fluid"
                      />
                    </div>
                  </div>
                  <div className="col-lg-7" data-aos="fade-left" data-aos-delay={900}>
                    <div className="expert-content">
                      <h3>Experienced Medicare Guidance</h3>
                      <p className="lead">
                        We focus on making Medicare easier to understand so
                        members can feel confident about their coverage,
                        provider access, and long-term plan value.
                      </p>
                      <div className="expertise-list">
                        <div className="expertise-item">
                          <i className="bi bi-check2" />
                          <span>Licensed advisors focused on Medicare education</span>
                        </div>
                        <div className="expertise-item">
                          <i className="bi bi-check2" />
                          <span>Clear side-by-side comparisons of available plans</span>
                        </div>
                        <div className="expertise-item">
                          <i className="bi bi-check2" />
                          <span>Support from enrollment through ongoing reviews</span>
                        </div>
                        <div className="expertise-item">
                          <i className="bi bi-check2" />
                          <span>Personalized recommendations based on real needs</span>
                        </div>
                      </div>
                      <div className="contact-info">
                        <div className="contact-item">
                          <i className="bi bi-telephone" />
                          <div>
                            <span className="contact-label">Medicare Support</span>
                            <a href="tel:+15552345678" className="contact-value">+1 (555) 234-5678</a>
                          </div>
                        </div>
                        <div className="contact-item">
                          <i className="bi bi-calendar-check" />
                          <div>
                            <span className="contact-label">Consultations</span>
                            <span className="contact-value">
                              Mon - Fri, 8:00 AM - 6:00 PM
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* /Department Details Section */}
        </main>
    </>
  );
}
