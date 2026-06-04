export const metadata = { title: "About" };

export default function AboutPage() {
  return (
    <>
      <main className="main">
        {/* Page Title */}
        <div className="page-title">
          <div className="heading">
            <div className="container">
              <div className="row d-flex justify-content-center text-center">
                <div className="col-lg-8">
                  <h1 className="heading-title">About</h1>
                  <p className="mb-0">
                    Learn how QoL Insurance helps members navigate coverage options, provider access, and year-round support with confidence.
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
                <li className="current">About</li>
              </ol>
            </div>
          </nav>
        </div>
        {/* End Page Title */}
        {/* About Section */}
        <section id="about" className="about section">
          <div className="container" data-aos="fade-up" data-aos-delay={100}>
            <div className="row align-items-center">
              <div
                className="col-lg-6"
                data-aos="fade-right"
                data-aos-delay={100}
              >
                <div className="about-content">
                  <h2>Trusted Insurance Guidance for Every Family</h2>
                  <p className="lead">
                    At QOL Insurance, we know every policy decision affects a
                    real family, a real budget, and real future goals. That is
                    why we focus on practical guidance, dependable support, and
                    coverage options that help people move forward with confidence.
                  </p>
                  <p>
                    We guide members through premiums, deductibles, provider networks, and prescription benefits so they can choose coverage that fits both their care needs and budget goals.
                  </p>
                  {/* <div className="stats-grid">
                    <div className="stat-item">
                      <span
                        className="stat-number"
                        data-purecounter-start={0}
                        data-purecounter-end={15000}
                        data-purecounter-duration={2}
                      >
                        15000
                      </span>
                      <span className="stat-label">Patients Treated</span>
                    </div>
                    <div className="stat-item">
                      <span
                        className="stat-number"
                        data-purecounter-start={0}
                        data-purecounter-end={25}
                        data-purecounter-duration={2}
                      >
                        25
                      </span>
                      <span className="stat-label">Years Experience</span>
                    </div>
                    <div className="stat-item">
                      <span
                        className="stat-number"
                        data-purecounter-start={0}
                        data-purecounter-end={50}
                        data-purecounter-duration={2}
                      >
                        50
                      </span>
                      <span className="stat-label">Medical Specialists</span>
                    </div>
                  </div> */}
                  {/* End Stats Grid */}
                </div>
                {/* End About Content */}
              </div>
              <div
                className="col-lg-6"
                data-aos="fade-left"
                data-aos-delay={200}
              >
                <div className="image-wrapper">
                  <img
                    src="/assets/img/health/facilities-6.png"
                    className="img-fluid main-image"
                    alt="Insurance support office"
                  />
                  <div
                    className="floating-image"
                    data-aos="zoom-in"
                    data-aos-delay={400}
                  >
                    <img
                      src="/assets/img/health/staff-8.webp"
                      className="img-fluid"
                      alt="Insurance advisors"
                    />
                  </div>
                </div>
                {/* End Image Wrapper */}
              </div>
            </div>
            <div
              className="values-section"
              data-aos="fade-up"
              data-aos-delay={300}
            >
              <div className="row">
                <div className="col-lg-12 text-center">
                  <h3>Our Core Values</h3>
                  <p className="section-description">
                    These principles guide everything we do in our commitment to
                    exceptional member support
                  </p>
                </div>
              </div>
              <div className="row">
                <div
                  className="col-lg-3 col-md-6"
                  data-aos="fade-up"
                  data-aos-delay={100}
                >
                  <div className="value-item">
                    <div className="value-icon">
                      <i className="bi bi-heart-pulse" />
                    </div>
                    <h4>Comprehensive Insurance Products</h4>
                    <p>
                      Delivering clear, thoughtful guidance for each client based
                      on their budget, household, and coverage priorities.
                    </p>
                  </div>
                </div>
                <div
                  className="col-lg-3 col-md-6"
                  data-aos="fade-up"
                  data-aos-delay={200}
                >
                  <div className="value-item">
                    <div className="value-icon">
                      <i className="bi bi-shield-check" />
                    </div>
                    <h4>Trusted Coverage Options</h4>
                    <p>
                      Staying current on plan details, carrier updates, and
                      benefit structures so members can make informed decisions.
                    </p>
                  </div>
                </div>
                <div
                  className="col-lg-3 col-md-6"
                  data-aos="fade-up"
                  data-aos-delay={300}
                >
                  <div className="value-item">
                    <div className="value-icon">
                      <i className="bi bi-people" />
                    </div>
                    <h4>Trusted & Experience</h4>
                    <p>
                      Building trust through honest communication and ethical
                      practices in all our interactions.
                    </p>
                  </div>
                </div>
                <div
                  className="col-lg-3 col-md-6"
                  data-aos="fade-up"
                  data-aos-delay={400}
                >
                  <div className="value-item">
                    <div className="value-icon">
                      <i className="bi bi-lightbulb" />
                    </div>
                    <h4>Dedicated Support & Security</h4>
                    <p>
                      Using modern tools and attentive service to simplify
                      enrollment, renewals, and ongoing benefit questions.
                    </p>
                  </div>
                </div>
              </div>
              {/* End Values Row */}
            </div>
            {/* End Values Section */}
            <div
              className="certifications-section"
              data-aos="fade-up"
              data-aos-delay={400}
            >
              <div className="row">
                <div className="col-lg-12 text-center">
                  <h3>Accreditations &amp; Certifications</h3>
                  <p className="section-description">
                    Trusted by respected organizations for our commitment to
                    reliable service and member-focused support
                  </p>
                </div>
              </div>
              <div className="row justify-content-center g-4">
                <div
                  className="col-lg-2 col-md-3 col-sm-4 col-6"
                  data-aos="zoom-in"
                  data-aos-delay={100}
                >
                  <div className="certification-item">
                    <img
                      src="/assets/img/clients/client-1.png"
                      className="img-fluid"
                      alt="Cigna Healthcare"
                    />
                  </div>
                </div>
                <div
                  className="col-lg-2 col-md-3 col-sm-4 col-6"
                  data-aos="zoom-in"
                  data-aos-delay={150}
                >
                  <div className="certification-item">
                    <img
                      src="/assets/img/clients/client-2.png"
                      className="img-fluid"
                      alt="Aetna"
                    />
                  </div>
                </div>
                <div
                  className="col-lg-2 col-md-3 col-sm-4 col-6"
                  data-aos="zoom-in"
                  data-aos-delay={200}
                >
                  <div className="certification-item">
                    <img
                      src="/assets/img/clients/client-3.png"
                      className="img-fluid"
                      alt="Anthem"
                    />
                  </div>
                </div>
                <div
                  className="col-lg-2 col-md-3 col-sm-4 col-6"
                  data-aos="zoom-in"
                  data-aos-delay={250}
                >
                  <div className="certification-item">
                    <img
                      src="/assets/img/clients/client-4.png"
                      className="img-fluid"
                      alt="Ambetter"
                    />
                  </div>
                </div>
                <div
                  className="col-lg-2 col-md-3 col-sm-4 col-6"
                  data-aos="zoom-in"
                  data-aos-delay={300}
                >
                  <div className="certification-item florida-blue-certification">
                    <img
                      src="/assets/img/clients/client-5.png"
                      className="img-fluid"
                      alt="Florida Blue"
                    />
                  </div>
                </div>
                <div
                  className="col-lg-2 col-md-3 col-sm-4 col-6"
                  data-aos="zoom-in"
                  data-aos-delay={350}
                >
                  <div className="certification-item">
                    <img
                      src="/assets/img/clients/client-6.png"
                      className="img-fluid"
                      alt="Oscar"
                    />
                  </div>
                </div>
              </div>
              {/* End Certifications Row */}
            </div>
            {/* End Certifications Section */}
          </div>
        </section>
        {/* /About Section */}
      </main>
    </>
  );
}
