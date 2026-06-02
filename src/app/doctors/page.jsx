export const metadata = { title: "Doctors" };

export default function DoctorsPage() {
  return (
    <>
      <main className="main">
          {/* Page Title */}
          <div className="page-title">
            <div className="heading">
              <div className="container">
                <div className="row d-flex justify-content-center text-center">
                  <div className="col-lg-8">
                    <h1 className="heading-title">Doctors</h1>
                    <p className="mb-0">
                      Meet the licensed advisors and coverage specialists who help members compare plans, understand benefits, and enroll with confidence.
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
                  <li className="current">Doctors</li>
                </ol>
              </div>
            </nav>
          </div>
          {/* End Page Title */}
          {/* Doctors Section */}
          <section id="doctors" className="doctors section">
            <div className="container" data-aos="fade-up" data-aos-delay={100}>
              <div className="row gy-4">
                <div
                  className="col-lg-3 col-md-6"
                  data-aos="fade-up"
                  data-aos-delay={100}
                >
                  <div className="doctor-card">
                    <div className="doctor-image">
                      <img
                        src="/assets/img/health/staff-1.webp"
                        alt="Marcus Johnson"
                        className="img-fluid"
                      />
                      <div className="doctor-overlay">
                        <div className="social-links">
                          <a href="#!">
                            <i className="bi bi-linkedin" />
                          </a>
                          <a href="#!">
                            <i className="bi bi-envelope" />
                          </a>
                          <a href="#!">
                            <i className="bi bi-phone" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="doctor-content">
                      <h4>Marcus Johnson</h4>
                      <span className="specialty">Senior Health Insurance Advisor</span>
                      <p>
                        Helps families compare plan options, estimate everyday costs,
                        and understand provider networks before enrollment.
                      </p>
                      <div className="doctor-meta">
                        <div className="experience">
                          <i className="bi bi-award" />
                          <span>15+ Years Experience</span>
                        </div>
                        <div className="department">
                          <i className="bi bi-building" />
                          <span>Individual & Family Plans</span>
                        </div>
                      </div>
                      <a href="appointment.html" className="btn-appointment">
                        Request Consultation
                      </a>
                    </div>
                  </div>
                </div>
                {/* End Doctor Card */}
                <div
                  className="col-lg-3 col-md-6"
                  data-aos="fade-up"
                  data-aos-delay={200}
                >
                  <div className="doctor-card">
                    <div className="doctor-image">
                      <img
                        src="/assets/img/health/staff-2.webp"
                        alt="Sarah Williams"
                        className="img-fluid"
                      />
                      <div className="doctor-overlay">
                        <div className="social-links">
                          <a href="#!">
                            <i className="bi bi-linkedin" />
                          </a>
                          <a href="#!">
                            <i className="bi bi-envelope" />
                          </a>
                          <a href="#!">
                            <i className="bi bi-phone" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="doctor-content">
                      <h4>Sarah Williams</h4>
                      <span className="specialty">Medicare Specialist</span>
                      <p>
                        Guides seniors through Medicare Advantage, Supplement, and
                        Part D choices with a focus on doctors, prescriptions, and budget.
                      </p>
                      <div className="doctor-meta">
                        <div className="experience">
                          <i className="bi bi-award" />
                          <span>12+ Years Experience</span>
                        </div>
                        <div className="department">
                          <i className="bi bi-building" />
                          <span>Medicare Enrollment</span>
                        </div>
                      </div>
                      <a href="appointment.html" className="btn-appointment">
                        Request Consultation
                      </a>
                    </div>
                  </div>
                </div>
                {/* End Doctor Card */}
                <div
                  className="col-lg-3 col-md-6"
                  data-aos="fade-up"
                  data-aos-delay={300}
                >
                  <div className="doctor-card">
                    <div className="doctor-image">
                      <img
                        src="/assets/img/health/staff-3.webp"
                        alt="Michael Chen"
                        className="img-fluid"
                      />
                      <div className="doctor-overlay">
                        <div className="social-links">
                          <a href="#!">
                            <i className="bi bi-linkedin" />
                          </a>
                          <a href="#!">
                            <i className="bi bi-envelope" />
                          </a>
                          <a href="#!">
                            <i className="bi bi-phone" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="doctor-content">
                      <h4>Michael Chen</h4>
                      <span className="specialty">Life Insurance Consultant</span>
                      <p>
                        Supports clients choosing life insurance for income
                        protection, family security, and long-term planning goals.
                      </p>
                      <div className="doctor-meta">
                        <div className="experience">
                          <i className="bi bi-award" />
                          <span>18+ Years Experience</span>
                        </div>
                        <div className="department">
                          <i className="bi bi-building" />
                          <span>Life Insurance</span>
                        </div>
                      </div>
                      <a href="appointment.html" className="btn-appointment">
                        Request Consultation
                      </a>
                    </div>
                  </div>
                </div>
                {/* End Doctor Card */}
                <div
                  className="col-lg-3 col-md-6"
                  data-aos="fade-up"
                  data-aos-delay={400}
                >
                  <div className="doctor-card">
                    <div className="doctor-image">
                      <img
                        src="/assets/img/health/staff-4.webp"
                        alt="Emily Rodriguez"
                        className="img-fluid"
                      />
                      <div className="doctor-overlay">
                        <div className="social-links">
                          <a href="#!">
                            <i className="bi bi-linkedin" />
                          </a>
                          <a href="#!">
                            <i className="bi bi-envelope" />
                          </a>
                          <a href="#!">
                            <i className="bi bi-phone" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="doctor-content">
                      <h4>Emily Rodriguez</h4>
                      <span className="specialty">Dental & Vision Advisor</span>
                      <p>
                        Helps members add practical dental and vision coverage for
                        exams, cleanings, glasses, and ongoing preventive care.
                      </p>
                      <div className="doctor-meta">
                        <div className="experience">
                          <i className="bi bi-award" />
                          <span>10+ Years Experience</span>
                        </div>
                        <div className="department">
                          <i className="bi bi-building" />
                          <span>Dental & Vision</span>
                        </div>
                      </div>
                      <a href="appointment.html" className="btn-appointment">
                        Request Consultation
                      </a>
                    </div>
                  </div>
                </div>
                {/* End Doctor Card */}
                <div
                  className="col-lg-3 col-md-6"
                  data-aos="fade-up"
                  data-aos-delay={500}
                >
                  <div className="doctor-card">
                    <div className="doctor-image">
                      <img
                        src="/assets/img/health/staff-5.webp"
                        alt="David Thompson"
                        className="img-fluid"
                      />
                      <div className="doctor-overlay">
                        <div className="social-links">
                          <a href="#!">
                            <i className="bi bi-linkedin" />
                          </a>
                          <a href="#!">
                            <i className="bi bi-envelope" />
                          </a>
                          <a href="#!">
                            <i className="bi bi-phone" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="doctor-content">
                      <h4>David Thompson</h4>
                      <span className="specialty">Claims Support Lead</span>
                      <p>
                        Works with members on claims questions, ID cards, renewals,
                        and benefit issues after enrollment.
                      </p>
                      <div className="doctor-meta">
                        <div className="experience">
                          <i className="bi bi-award" />
                          <span>14+ Years Experience</span>
                        </div>
                        <div className="department">
                          <i className="bi bi-building" />
                          <span>Member Support</span>
                        </div>
                      </div>
                      <a href="appointment.html" className="btn-appointment">
                        Request Consultation
                      </a>
                    </div>
                  </div>
                </div>
                {/* End Doctor Card */}
                <div
                  className="col-lg-3 col-md-6"
                  data-aos="fade-up"
                  data-aos-delay={100}
                >
                  <div className="doctor-card">
                    <div className="doctor-image">
                      <img
                        src="/assets/img/health/staff-6.webp"
                        alt="Lisa Anderson"
                        className="img-fluid"
                      />
                      <div className="doctor-overlay">
                        <div className="social-links">
                          <a href="#!">
                            <i className="bi bi-linkedin" />
                          </a>
                          <a href="#!">
                            <i className="bi bi-envelope" />
                          </a>
                          <a href="#!">
                            <i className="bi bi-phone" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="doctor-content">
                      <h4>Lisa Anderson</h4>
                      <span className="specialty">ACA Marketplace Specialist</span>
                      <p>
                        Helps clients understand subsidy eligibility, enrollment
                        windows, and ACA plan differences.
                      </p>
                      <div className="doctor-meta">
                        <div className="experience">
                          <i className="bi bi-award" />
                          <span>16+ Years Experience</span>
                        </div>
                        <div className="department">
                          <i className="bi bi-building" />
                          <span>ACA Enrollment</span>
                        </div>
                      </div>
                      <a href="appointment.html" className="btn-appointment">
                        Request Consultation
                      </a>
                    </div>
                  </div>
                </div>
                {/* End Doctor Card */}
                <div
                  className="col-lg-3 col-md-6"
                  data-aos="fade-up"
                  data-aos-delay={200}
                >
                  <div className="doctor-card">
                    <div className="doctor-image">
                      <img
                        src="/assets/img/health/staff-7.webp"
                        alt="Robert Martinez"
                        className="img-fluid"
                      />
                      <div className="doctor-overlay">
                        <div className="social-links">
                          <a href="#!">
                            <i className="bi bi-linkedin" />
                          </a>
                          <a href="#!">
                            <i className="bi bi-envelope" />
                          </a>
                          <a href="#!">
                            <i className="bi bi-phone" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="doctor-content">
                      <h4>Robert Martinez</h4>
                      <span className="specialty">Supplemental Coverage Advisor</span>
                      <p>
                        Recommends accident, indemnity, and hospital plans that can
                        reduce surprise out-of-pocket expenses.
                      </p>
                      <div className="doctor-meta">
                        <div className="experience">
                          <i className="bi bi-award" />
                          <span>11+ Years Experience</span>
                        </div>
                        <div className="department">
                          <i className="bi bi-building" />
                          <span>Supplemental Plans</span>
                        </div>
                      </div>
                      <a href="appointment.html" className="btn-appointment">
                        Request Consultation
                      </a>
                    </div>
                  </div>
                </div>
                {/* End Doctor Card */}
                <div
                  className="col-lg-3 col-md-6"
                  data-aos="fade-up"
                  data-aos-delay={300}
                >
                  <div className="doctor-card">
                    <div className="doctor-image">
                      <img
                        src="/assets/img/health/staff-8.webp"
                        alt="Jennifer Lee"
                        className="img-fluid"
                      />
                      <div className="doctor-overlay">
                        <div className="social-links">
                          <a href="#!">
                            <i className="bi bi-linkedin" />
                          </a>
                          <a href="#!">
                            <i className="bi bi-envelope" />
                          </a>
                          <a href="#!">
                            <i className="bi bi-phone" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="doctor-content">
                      <h4>Jennifer Lee</h4>
                      <span className="specialty">Small Business Benefits Consultant</span>
                      <p>
                        Supports employers and teams with benefit strategy,
                        contribution planning, and employee-friendly plan design.
                      </p>
                      <div className="doctor-meta">
                        <div className="experience">
                          <i className="bi bi-award" />
                          <span>13+ Years Experience</span>
                        </div>
                        <div className="department">
                          <i className="bi bi-building" />
                          <span>Group Benefits</span>
                        </div>
                      </div>
                      <a href="appointment.html" className="btn-appointment">
                        Request Consultation
                      </a>
                    </div>
                  </div>
                </div>
                {/* End Doctor Card */}
              </div>
            </div>
          </section>
          {/* /Doctors Section */}
        </main>
    </>
  );
}
