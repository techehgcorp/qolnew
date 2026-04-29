import Link from "next/link";

export const metadata = { title: "Services" };

export default function ServicesPage() {
  return (
    <>
      <main className="main">
          {/* Page Title */}
          <div className="page-title">
            <div className="heading">
              <div className="container">
                <div className="row d-flex justify-content-center text-center">
                  <div className="col-lg-8">
                    <h1 className="heading-title">Services</h1>
                    <p className="mb-0">
                      Explore the insurance services we provide to help members compare plans, enroll smoothly, and use their benefits with confidence.
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
                  <li className="current">Services</li>
                </ol>
              </div>
            </nav>
          </div>
          {/* End Page Title */}
          {/* Services Section */}
          <section id="services" className="services section">
            <div className="container" data-aos="fade-up" data-aos-delay={100}>
              <div className="row gy-4">
                <div
                  className="col-lg-4 col-md-6"
                  data-aos="fade-up"
                  data-aos-delay={200}
                >
                  <div className="service-item">
                    <div className="service-image">
                      <img
                        src="assets/img/health/cardiology-2.webp"
                        alt="Health insurance guidance"
                        className="img-fluid"
                      />
                      <div className="service-overlay">
                        <i className="fas fa-heartbeat" />
                      </div>
                    </div>
                    <div className="service-content">
                      <h3>Health Insurance Guidance</h3>
                      <p>
                        We help individuals and families compare plan options,
                        understand deductibles and copays, and choose coverage
                        that matches their healthcare needs and budget.
                      </p>
                      <div className="service-features">
                        <span className="feature-item">
                          <i className="fas fa-check" /> Plan Comparison
                        </span>
                        <span className="feature-item">
                          <i className="fas fa-check" /> Network Review
                        </span>
                      </div>
                      <Link href="/service-details?tab=departments-tabs-neurology#departments-tabs" className="service-btn">
                        <span>Learn More</span>
                        <i className="fas fa-arrow-right" />
                      </Link>
                    </div>
                  </div>
                </div>
                {/* End Service Item */}
                <div
                  className="col-lg-4 col-md-6"
                  data-aos="fade-up"
                  data-aos-delay={250}
                >
                  <div className="service-item">
                    <div className="service-image">
                      <img
                        src="assets/img/service/service1.png"
                        alt="Life insurance planning"
                        className="img-fluid"
                      />
                      <div className="service-overlay">
                        <i className="fas fa-brain" />
                      </div>
                    </div>
                    <div className="service-content">
                      <h3>Life Insurance Planning</h3>
                      <p>
                        Protect your loved ones with support choosing term or
                        permanent life insurance based on income protection,
                        legacy goals, and final expense planning.
                      </p>
                      <div className="service-features">
                        <span className="feature-item">
                          <i className="fas fa-check" /> Term Life
                        </span>
                        <span className="feature-item">
                          <i className="fas fa-check" /> Permanent Coverage
                        </span>
                      </div>
                      <Link href="/service-details?tab=departments-tabs-surgery#departments-tabs" className="service-btn">
                        <span>Learn More</span>
                        <i className="fas fa-arrow-right" />
                      </Link>
                    </div>
                  </div>
                </div>
                {/* End Service Item */}
                <div
                  className="col-lg-4 col-md-6"
                  data-aos="fade-up"
                  data-aos-delay={300}
                >
                  <div className="service-item">
                    <div className="service-image">
                      <img
                        src="assets/img/service/service2.png"
                        alt="Dental coverage options"
                        className="img-fluid"
                      />
                      <div className="service-overlay">
                        <i className="fas fa-bone" />
                      </div>
                    </div>
                    <div className="service-content">
                      <h3>Dental Coverage Support</h3>
                      <p>
                        Review dental plan options that can help reduce the cost
                        of preventive care, basic procedures, and major dental
                        work for individuals and families.
                      </p>
                      <div className="service-features">
                        <span className="feature-item">
                          <i className="fas fa-check" /> Preventive Benefits
                        </span>
                        <span className="feature-item">
                          <i className="fas fa-check" /> Major Services
                        </span>
                      </div>
                      <Link href="/service-details?tab=departments-tabs-dental#departments-tabs" className="service-btn">
                        <span>Learn More</span>
                        <i className="fas fa-arrow-right" />
                      </Link>
                    </div>
                  </div>
                </div>
                {/* End Service Item */}
                <div
                  className="col-lg-4 col-md-6"
                  data-aos="fade-up"
                  data-aos-delay={350}
                >
                  <div className="service-item">
                    <div className="service-image">
                      <img
                        src="assets/img/service/service3.png"
                        alt="Vision benefits"
                        className="img-fluid"
                      />
                      <div className="service-overlay">
                        <i className="fas fa-child" />
                      </div>
                    </div>
                    <div className="service-content">
                      <h3>Vision Benefits</h3>
                      <p>
                        Understand vision plans that support routine eye exams,
                        glasses, contact lenses, and access to participating
                        providers and retailers.
                      </p>
                      <div className="service-features">
                        <span className="feature-item">
                          <i className="fas fa-check" /> Eye Exams
                        </span>
                        <span className="feature-item">
                          <i className="fas fa-check" /> Frames and Contacts
                        </span>
                      </div>
                      <Link href="/service-details?tab=departments-tabs-ophthalmology#departments-tabs" className="service-btn">
                        <span>Learn More</span>
                        <i className="fas fa-arrow-right" />
                      </Link>
                    </div>
                  </div>
                </div>
                {/* End Service Item */}
                <div
                  className="col-lg-4 col-md-6"
                  data-aos="fade-up"
                  data-aos-delay={400}
                >
                  <div className="service-item">
                    <div className="service-image">
                      <img
                        src="assets/img/service/service4.png"
                        alt="Medicare enrollment help"
                        className="img-fluid"
                      />
                      <div className="service-overlay">
                        <i className="fas fa-ambulance" />
                      </div>
                    </div>
                    <div className="service-content">
                      <h3>Medicare Enrollment Help</h3>
                      <p>
                        We guide seniors and eligible members through Medicare
                        Advantage, Supplement, and Part D choices with help on
                        deadlines, benefits, and prescription coverage.
                      </p>
                      <div className="service-features">
                        <span className="feature-item">
                          <i className="fas fa-check" /> Plan Selection
                        </span>
                        <span className="feature-item">
                          <i className="fas fa-check" /> Part D Review
                        </span>
                      </div>
                      <Link href="/service-details?tab=departments-tabs-cardiology#departments-tabs" className="service-btn">
                        <span>Learn More</span>
                        <i className="fas fa-arrow-right" />
                      </Link>
                    </div>
                  </div>
                </div>
                {/* End Service Item */}
                <div
                  className="col-lg-4 col-md-6"
                  data-aos="fade-up"
                  data-aos-delay={450}
                >
                  <div className="service-item">
                    <div className="service-image">
                      <img
                        src="assets/img/service/service5.png"
                        alt="Claims and member support"
                        className="img-fluid"
                      />
                      <div className="service-overlay">
                        <i className="fas fa-microscope" />
                      </div>
                    </div>
                    <div className="service-content">
                      <h3>Claims and Member Support</h3>
                      <p>
                        Get ongoing assistance with claims questions, renewals,
                        provider searches, ID cards, and benefit details after
                        enrollment.
                      </p>
                      <div className="service-features">
                        <span className="feature-item">
                          <i className="fas fa-check" /> Claims Help
                        </span>
                        <span className="feature-item">
                          <i className="fas fa-check" /> Renewal Support
                        </span>
                      </div>
                      <Link href="/service-details?tab=departments-tabs-neurology#departments-tabs" className="service-btn">
                        <span>Learn More</span>
                        <i className="fas fa-arrow-right" />
                      </Link>
                    </div>
                  </div>
                </div>
                {/* End Service Item */}
              </div>
            </div>
          </section>
          {/* /Services Section */}
        </main>
    </>
  );
}
