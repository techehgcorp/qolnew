import AppointmentForm from "./AppointmentForm";

export const metadata = { title: "Appointment" };

export default function AppointmentPage() {
  return (
    <>
      <main className="main">
          {/* Page Title */}
          <div className="page-title">
            <div className="heading">
              <div className="container">
                <div className="row d-flex justify-content-center text-center">
                  <div className="col-lg-8">
                    <h1 className="heading-title">Appointment</h1>
                    <p className="mb-0">
                      Request a benefits review or speak with a licensed advisor to match your coverage goals with the right plan.
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
                  <li className="current">Appointment</li>
                </ol>
              </div>
            </nav>
          </div>
          {/* End Page Title */}
          {/* Appointmnet Section */}
          <section id="appointmnet" className="appointmnet section">
            <div className="container" data-aos="fade-up" data-aos-delay={100}>
              <div className="row">
                <div className="col-lg-8 mx-auto">
                  <div className="booking-wrapper">
                    <div
                      className="booking-header text-center"
                      data-aos="fade-up"
                      data-aos-delay={200}
                    >
                      <h2>Request Your Consultation</h2>
                      <p>
                        Connect with our team in just a few simple steps. We will
                        review your needs, explain plan options, and help you move
                        forward with confidence.
                      </p>
                    </div>
                    <div
                      className="booking-steps"
                      data-aos="fade-up"
                      data-aos-delay={300}
                    >
                      <div className="step">
                        <div className="step-icon">
                          <i className="bi bi-calendar-check" />
                        </div>
                        <div className="step-content">
                          <h4>Select Coverage Type</h4>
                          <p>Choose the kind of insurance help you need</p>
                        </div>
                      </div>
                      <div className="step">
                        <div className="step-icon">
                          <i className="bi bi-clock" />
                        </div>
                        <div className="step-content">
                          <h4>Pick Date &amp; Time</h4>
                          <p>Select your preferred consultation slot</p>
                        </div>
                      </div>
                      <div className="step">
                        <div className="step-icon">
                          <i className="bi bi-person-check" />
                        </div>
                        <div className="step-content">
                          <h4>Confirm Details</h4>
                          <p>Provide your information and confirm</p>
                        </div>
                      </div>
                    </div>
                    <div
                      className="appointment-form"
                      data-aos="fade-up"
                      data-aos-delay={400}
                    >
                      <AppointmentForm />
                    </div>
                    <div
                      className="emergency-info"
                      data-aos="fade-up"
                      data-aos-delay={500}
                    >
                      <p>
                        <i className="bi bi-info-circle" /> Need fast help with
                        enrollment deadlines or plan changes? Call our team for
                        immediate assistance.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* /Appointmnet Section */}
        </main>
    </>
  );
}
