import ServiceDetailsTabSync from "@/components/ServiceDetailsTabSync";
import { Suspense } from "react";

export const metadata = { title: "Service Details" };

export default function ServiceDetailsPage() {
  return (
    <>
      <main className="main">
          {/* <ServiceDetailsTabSync /> */}
          <Suspense fallback={null}>
            <ServiceDetailsTabSync />
          </Suspense>
          {/* Page Title */}
          <div className="page-title">
            <div className="heading">
              <div className="container">
                <div className="row d-flex justify-content-center text-center">
                  <div className="col-lg-8">
                    <h1 className="heading-title">Service Details</h1>
                    <p className="mb-0">
                      See how this service supports members with coverage guidance, coordinated care access, and everyday plan management.
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
                  <li className="current">Service Details</li>
                </ol>
              </div>
            </nav>
          </div>
          {/* End Page Title */}

<section id="departments-tabs" className="departments-tabs section">
            <div className="container" data-aos="fade-up" data-aos-delay={100}>
              <div className="medical-specialties">
                <div className="row">
                  <div className="col-12">
                    <div className="specialty-navigation">
                      <div
                        className="nav nav-pills d-flex"
                        id="specialty-tabs"
                        role="tablist"
                        data-aos="fade-up"
                        data-aos-delay={400}
                      >
                        <a
                          className="nav-link department-tab active"
                          id="neurology-tab"
                          data-bs-toggle="pill"
                          href="#departments-tabs-neurology"
                          role="tab"
                          aria-controls="departments-tabs-neurology"
                          aria-selected="true"
                          data-aos="fade-up"
                          data-aos-delay={100}
                        >
                          Health Insurance
                        </a>
                        <a
                          className="nav-link department-tab"
                          id="surgery-tab"
                          data-bs-toggle="pill"
                          href="#departments-tabs-surgery"
                          role="tab"
                          aria-controls="departments-tabs-surgery"
                          aria-selected="false"
                          data-aos="fade-up"
                          data-aos-delay={150}
                        >
                          Life Insurance
                        </a>
                        <a
                          className="nav-link department-tab"
                          id="dental-tab"
                          data-bs-toggle="pill"
                          href="#departments-tabs-dental"
                          role="tab"
                          aria-controls="departments-tabs-dental"
                          aria-selected="false"
                          data-aos="fade-up"
                          data-aos-delay={200}
                        >
                          Dental
                        </a>
                        <a
                          className="nav-link department-tab"
                          id="ophthalmology-tab"
                          data-bs-toggle="pill"
                          href="#departments-tabs-ophthalmology"
                          role="tab"
                          aria-controls="departments-tabs-ophthalmology"
                          aria-selected="false"
                          data-aos="fade-up"
                          data-aos-delay={250}
                        >
                          Vision
                        </a>
                        <a
                          className="nav-link department-tab"
                          id="cardiology-tab"
                          data-bs-toggle="pill"
                          href="#departments-tabs-cardiology"
                          role="tab"
                          aria-controls="departments-tabs-cardiology"
                          aria-selected="false"
                          data-aos="fade-up"
                          data-aos-delay={300}
                        >
                          Medicare
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div
                      className="tab-content department-content"
                      id="specialty-content"
                      data-aos="fade-up"
                      data-aos-delay={500}
                    >
                      <div
                        className="tab-pane fade show active"
                        id="departments-tabs-neurology"
                        role="tabpanel"
                        aria-labelledby="neurology-tab"
                      >
                        <div className="row department-layout">
                          <div className="col-lg-4 order-lg-2">
                            <div className="department-image">
                              <img
                                src="assets/img/health/neurology-3.webp"
                                alt="Health insurance plans"
                                className="img-fluid"
                              />
                            </div>
                          </div>
                          <div className="col-lg-8 order-lg-1">
                            <div className="department-info">
                              <h2 className="department-title">
                                Health Insurance Plans
                              </h2>
                              <p className="department-description">
                                We help individuals, families, and self-employed
                                members compare health insurance options with
                                clearer guidance on premiums, deductibles,
                                provider networks, and everyday benefits.
                              </p>
                              <div className="row mt-4">
                                <div className="col-md-6">
                                  <div className="service-item">
                                    <div className="service-icon">
                                      <i className="fas fa-brain" />
                                    </div>
                                    <div className="service-content">
                                      <h4>Plan Comparison</h4>
                                      <p>
                                        Review plan types side by side so you can
                                        weigh monthly costs, out-of-pocket
                                        exposure, and provider access.
                                      </p>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <div className="service-item">
                                    <div className="service-icon">
                                      <i className="fas fa-wave-square" />
                                    </div>
                                    <div className="service-content">
                                      <h4>Network Guidance</h4>
                                      <p>
                                        Understand which doctors, specialists,
                                        hospitals, and pharmacies are included
                                        before you enroll.
                                      </p>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <div className="service-item">
                                    <div className="service-icon">
                                      <i className="fas fa-stethoscope" />
                                    </div>
                                    <div className="service-content">
                                      <h4>Benefit Review</h4>
                                      <p>
                                        Get help interpreting copays, coinsurance,
                                        preventive care, prescriptions, and urgent
                                        care coverage.
                                      </p>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <div className="service-item">
                                    <div className="service-icon">
                                      <i className="fas fa-file-medical" />
                                    </div>
                                    <div className="service-content">
                                      <h4>Enrollment Support</h4>
                                      <p>
                                        Move through applications and plan changes
                                        with step-by-step support that keeps the
                                        process simple.
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* End Neurology Tab */}
                      <div
                        className="tab-pane fade"
                        id="departments-tabs-surgery"
                        role="tabpanel"
                        aria-labelledby="surgery-tab"
                      >
                        <div className="row department-layout">
                          <div className="col-lg-4 order-lg-2">
                            <div className="department-image">
                              <img
                                src="assets/img/health/surgery-2.webp"
                                alt="Life insurance protection"
                                className="img-fluid"
                              />
                            </div>
                          </div>
                          <div className="col-lg-8 order-lg-1">
                            <div className="department-info">
                              <h2 className="department-title">
                                Life Insurance Protection
                              </h2>
                              <p className="department-description">
                                Our team helps clients evaluate life insurance
                                options that can protect income, support long-term
                                family goals, and provide peace of mind for the
                                future.
                              </p>
                              <div className="row mt-4">
                                <div className="col-md-6">
                                  <div className="service-item">
                                    <div className="service-icon">
                                      <i className="fas fa-cut" />
                                    </div>
                                    <div className="service-content">
                                      <h4>Term Life Options</h4>
                                      <p>
                                        Find affordable protection for a set period
                                        with coverage designed around mortgages,
                                        children, and income replacement.
                                      </p>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <div className="service-item">
                                    <div className="service-icon">
                                      <i className="fas fa-tools" />
                                    </div>
                                    <div className="service-content">
                                      <h4>Permanent Coverage</h4>
                                      <p>
                                        Explore whole life and other lasting options
                                        that can support estate planning and final
                                        expense goals.
                                      </p>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <div className="service-item">
                                    <div className="service-icon">
                                      <i className="fas fa-shield-alt" />
                                    </div>
                                    <div className="service-content">
                                      <h4>Family Protection</h4>
                                      <p>
                                        Build a financial safety net that helps
                                        loved ones manage major expenses if the
                                        unexpected happens.
                                      </p>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <div className="service-item">
                                    <div className="service-icon">
                                      <i className="fas fa-clock" />
                                    </div>
                                    <div className="service-content">
                                      <h4>Policy Guidance</h4>
                                      <p>
                                        Get help understanding riders, benefit
                                        amounts, underwriting, and how to choose
                                        the right policy type.
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* End Surgery Tab */}
                      <div
                        className="tab-pane fade"
                        id="departments-tabs-dental"
                        role="tabpanel"
                        aria-labelledby="dental-tab"
                      >
                        <div className="row department-layout">
                          <div className="col-lg-4 order-lg-2">
                            <div className="department-image">
                              <img
                                src="assets/img/health/Dental3.png"
                                alt="Dental coverage"
                                className="img-fluid"
                              />
                            </div>
                          </div>
                          <div className="col-lg-8 order-lg-1">
                            <div className="department-info">
                              <h2 className="department-title">
                                Dental Coverage
                              </h2>
                              <p className="department-description">
                                Dental plans can help lower the cost of routine
                                and major oral care while making preventive visits
                                easier to keep on schedule.
                              </p>
                              <div className="row mt-4">
                                <div className="col-md-6">
                                  <div className="service-item">
                                    <div className="service-icon">
                                      <i className="far fa-smile" />
                                    </div>
                                    <div className="service-content">
                                      <h4>Preventive Care</h4>
                                      <p>
                                        Review coverage for exams, cleanings, and
                                        x-rays that support healthy long-term
                                        dental habits.
                                      </p>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <div className="service-item">
                                    <div className="service-icon">
                                      <i className="fas fa-tooth" />
                                    </div>
                                    <div className="service-content">
                                      <h4>Basic Services</h4>
                                      <p>
                                        Understand benefits for fillings,
                                        extractions, and other common procedures
                                        that members use most.
                                      </p>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <div className="service-item">
                                    <div className="service-icon">
                                      <i className="fas fa-star" />
                                    </div>
                                    <div className="service-content">
                                      <h4>Major Dental Work</h4>
                                      <p>
                                        Explore plan options that may help with
                                        crowns, dentures, bridges, and other larger
                                        dental expenses.
                                      </p>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <div className="service-item">
                                    <div className="service-icon">
                                      <i className="fas fa-cog" />
                                    </div>
                                    <div className="service-content">
                                      <h4>Optional Add-Ons</h4>
                                      <p>
                                        Compare extra benefits such as orthodontic
                                        support, broader provider choices, or
                                        family-friendly options.
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* End Dental Tab */}
                      <div
                        className="tab-pane fade"
                        id="departments-tabs-ophthalmology"
                        role="tabpanel"
                        aria-labelledby="ophthalmology-tab"
                      >
                        <div className="row department-layout">
                          <div className="col-lg-4 order-lg-2">
                            <div className="department-image">
                              <img
                                src="assets/img/health/vision.png"
                                alt="Vision coverage"
                                className="img-fluid"
                              />
                            </div>
                          </div>
                          <div className="col-lg-8 order-lg-1">
                            <div className="department-info">
                              <h2 className="department-title">
                                Vision Coverage
                              </h2>
                              <p className="department-description">
                                Vision benefits help members stay current with
                                eye exams and reduce the cost of glasses,
                                contacts, and other routine vision needs.
                              </p>
                              <div className="row mt-4">
                                <div className="col-md-6">
                                  <div className="service-item">
                                    <div className="service-icon">
                                      <i className="fas fa-eye" />
                                    </div>
                                    <div className="service-content">
                                      <h4>Annual Eye Exams</h4>
                                      <p>
                                        See how often exams are covered and what
                                        those visits include for adults, children,
                                        and seniors.
                                      </p>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <div className="service-item">
                                    <div className="service-icon">
                                      <i className="fas fa-camera" />
                                    </div>
                                    <div className="service-content">
                                      <h4>Glasses Benefits</h4>
                                      <p>
                                        Compare allowances for frames, lenses,
                                        coatings, and lens upgrades across plan
                                        options.
                                      </p>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <div className="service-item">
                                    <div className="service-icon">
                                      <i className="fas fa-bolt" />
                                    </div>
                                    <div className="service-content">
                                      <h4>Contact Lens Support</h4>
                                      <p>
                                        Review contact lens benefits, replacement
                                        schedules, and how covered amounts apply.
                                      </p>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <div className="service-item">
                                    <div className="service-icon">
                                      <i className="fas fa-prescription-bottle" />
                                    </div>
                                    <div className="service-content">
                                      <h4>Provider Access</h4>
                                      <p>
                                        Confirm which optometrists, retailers, and
                                        vision networks are available before you
                                        choose a plan.
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* End Ophthalmology Tab */}
                      <div
                        className="tab-pane fade"
                        id="departments-tabs-cardiology"
                        role="tabpanel"
                        aria-labelledby="cardiology-tab"
                      >
                        <div className="row department-layout">
                          <div className="col-lg-4 order-lg-2">
                            <div className="department-image">
                              <img
                                src="assets/img/health/cardiology-3.webp"
                                alt="Medicare plan options"
                                className="img-fluid"
                              />
                            </div>
                          </div>
                          <div className="col-lg-8 order-lg-1">
                            <div className="department-info">
                              <h2 className="department-title">
                                Medicare Options
                              </h2>
                              <p className="department-description">
                                Medicare decisions can feel complex, so we help
                                members compare Advantage, Supplement, and Part D
                                plans with more clarity and less stress.
                              </p>
                              <div className="row mt-4">
                                <div className="col-md-6">
                                  <div className="service-item">
                                    <div className="service-icon">
                                      <i className="fas fa-heartbeat" />
                                    </div>
                                    <div className="service-content">
                                      <h4>Medicare Advantage</h4>
                                      <p>
                                        Compare all-in-one plan options that may
                                        combine medical, drug, and extra benefits in
                                        one place.
                                      </p>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <div className="service-item">
                                    <div className="service-icon">
                                      <i className="fas fa-chart-line" />
                                    </div>
                                    <div className="service-content">
                                      <h4>Supplement Plans</h4>
                                      <p>
                                        Understand Medigap choices that can help
                                        reduce out-of-pocket costs alongside
                                        Original Medicare.
                                      </p>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <div className="service-item">
                                    <div className="service-icon">
                                      <i className="fas fa-tint" />
                                    </div>
                                    <div className="service-content">
                                      <h4>Prescription Coverage</h4>
                                      <p>
                                        Review Part D formularies, preferred
                                        pharmacies, and medication costs before you
                                        enroll.
                                      </p>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <div className="service-item">
                                    <div className="service-icon">
                                      <i className="fas fa-shield-heart" />
                                    </div>
                                    <div className="service-content">
                                      <h4>Enrollment Help</h4>
                                      <p>
                                        Get support with eligibility, deadlines,
                                        plan changes, and annual review decisions.
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* End Cardiology Tab */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Service Details 2 Section */}
          <section id="service-details-2" className="service-details-2 section">
            <div className="container" data-aos="fade-up" data-aos-delay={100}>
              <div className="row">
                <div
                  className="col-lg-8 mx-auto text-center mb-5"
                  data-aos="fade-up"
                  data-aos-delay={150}
                >
                  <div className="service-header">
                    <div className="service-category">
                      <span>Health Insurance Support</span>
                    </div>
                    <h2>Comprehensive Health Insurance Guidance</h2>
                    <p className="lead">
                      Personalized help comparing plan options, understanding
                      benefits, and making confident enrollment decisions.
                    </p>
                  </div>
                </div>
              </div>
              <div className="row gy-4 align-items-center">
                <div className="col-lg-5" data-aos="fade-right" data-aos-delay={200}>
                  <div className="service-details">
                    <div className="detail-item">
                      <div className="icon-wrapper">
                        <i className="bi bi-activity" />
                      </div>
                      <div className="content">
                        <h4>Coverage Assessment</h4>
                        <p>
                          We review your needs, budget, preferred providers, and
                          prescription usage to narrow down the right coverage
                          strategy.
                        </p>
                      </div>
                    </div>
                    <div className="detail-item">
                      <div className="icon-wrapper">
                        <i className="bi bi-diagram-2" />
                      </div>
                      <div className="content">
                        <h4>Plan Comparison &amp; Benefits Review</h4>
                        <p>
                          Compare deductibles, copays, networks, and preventive
                          benefits side by side so you understand the tradeoffs
                          before enrolling.
                        </p>
                      </div>
                    </div>
                    <div className="detail-item">
                      <div className="icon-wrapper">
                        <i className="bi bi-prescription2" />
                      </div>
                      <div className="content">
                        <h4>Enrollment Planning</h4>
                        <p>
                          Get step-by-step help with application timing, required
                          documents, subsidy questions, and plan changes.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-7" data-aos="fade-left" data-aos-delay={300}>
                  <div className="service-visual">
                    <img
                      src="assets/img/health/plan1.png"
                      alt="Health insurance support"
                      className="img-fluid"
                    />
                    <div className="visual-overlay">
                      <div className="stats-card">
                        <div className="stat">
                          <span className="number">95%</span>
                          <span className="label">Renewal Satisfaction</span>
                        </div>
                        <div className="stat">
                          <span className="number">24/7</span>
                          <span className="label">Member Guidance</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row gy-4 mt-5">
                <div className="col-12" data-aos="fade-up" data-aos-delay={100}>
                  <div className="service-overview">
                    <div className="row align-items-center">
                      <div className="col-lg-6">
                        <h3>Why Members Choose Our Guidance Team</h3>
                        <p>
                          We simplify the insurance process from the first quote
                          through enrollment and ongoing support, helping members
                          make better decisions with less confusion.
                        </p>
                        <div className="features-grid">
                          <div className="feature">
                            <i className="bi bi-award" />
                            <span>Licensed Insurance Advisors</span>
                          </div>
                          <div className="feature">
                            <i className="bi bi-clock-history" />
                            <span>Fast Quote Turnaround</span>
                          </div>
                          <div className="feature">
                            <i className="bi bi-shield-plus" />
                            <span>Clear Benefit Explanations</span>
                          </div>
                          <div className="feature">
                            <i className="bi bi-heart-pulse" />
                            <span>Member-Focused Support</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="treatment-areas">
                          <h4>Areas We Support</h4>
                          <div className="condition-tags">
                            <span className="tag">Health Insurance</span>
                            <span className="tag">Life Insurance</span>
                            <span className="tag">Dental Plans</span>
                            <span className="tag">Vision Benefits</span>
                            <span className="tag">Medicare Options</span>
                            <span className="tag">ACA Enrollment</span>
                            <span className="tag">Provider Access</span>
                            <span className="tag">Claims Guidance</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row gy-4 mt-5">
                <div className="col-lg-4" data-aos="zoom-in" data-aos-delay={100}>
                  <div className="action-card primary">
                    <div className="card-header">
                      <i className="bi bi-calendar-check" />
                      <h4>Request a Consultation</h4>
                    </div>
                    <p>Talk with an advisor about plan options that fit your goals.</p>
                    <div className="card-footer">
                      <a href="#!" className="btn-action">
                        Get Started
                      </a>
                      <span className="availability">Next available: Today</span>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4" data-aos="zoom-in" data-aos-delay={200}>
                  <div className="action-card secondary">
                    <div className="card-header">
                      <i className="bi bi-telephone" />
                      <h4>Speak With an Advisor</h4>
                    </div>
                    <p>Get help with urgent enrollment deadlines and coverage questions.</p>
                    <div className="card-footer">
                      <a href="tel:+18447300124" className="btn-action">
                        Call Now
                      </a>
                      <a href="tel:+18447300124" className="availability">(844) 730-0124</a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4" data-aos="zoom-in" data-aos-delay={300}>
                  <div className="action-card tertiary">
                    <div className="card-header">
                      <i className="bi bi-file-text" />
                      <h4>Review Your Current Plan</h4>
                    </div>
                    <p>Let us review your current coverage and compare better-fit options.</p>
                    <div className="card-footer">
                      <a href="#!" className="btn-action">
                        Request Review
                      </a>
                      <span className="availability">Response within 24h</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* /Service Details 2 Section */}
        </main>
    </>
  );
}
