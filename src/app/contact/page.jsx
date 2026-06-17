import ContactForm from "./ContactForm";

export const metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <>
      <main className="main">
        {/* Page Title */}
        <div className="page-title">
          <div className="heading">
            <div className="container">
              <div className="row d-flex justify-content-center text-center">
                <div className="col-lg-8">
                  <h1 className="heading-title">Contact</h1>
                  <p className="mb-0">
                    Reach our team for enrollment guidance, billing questions, provider support, or help understanding your plan benefits.
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
                <li className="current">Contact</li>
              </ol>
            </div>
          </nav>
        </div>
        {/* End Page Title */}
        {/* Contact Section */}
        <section id="contact" className="contact section">
          <div className="container" data-aos="fade-up" data-aos-delay={100}>
            <div className="row g-5">
              <div className="col-lg-5">
                <div className="contact-info-wrapper">
                  <div
                    className="contact-info-item"
                    data-aos="fade-up"
                    data-aos-delay={100}
                  >
                    <div className="info-icon">
                      <i className="bi bi-geo-alt" />
                    </div>
                    <div className="info-content">
                      <h3>Our Address</h3>
                      <p>1000 NW 65th St #103, Fort Lauderdale, FL 33309</p>
                    </div>
                  </div>
                  <div
                    className="contact-info-item"
                    data-aos="fade-up"
                    data-aos-delay={200}
                  >
                    <div className="info-icon">
                      <i className="bi bi-envelope" />
                    </div>
                    <div className="info-content">
                      <h3>Email Address</h3>
                      <p>info@qolinsurance.com</p>
                      {/* <p>contact@example.com</p> */}
                    </div>
                  </div>
                  <div
                    className="contact-info-item"
                    data-aos="fade-up"
                    data-aos-delay={300}
                  >
                    <div className="info-icon">
                      <i className="bi bi-headset" />
                    </div>
                    <div className="info-content">
                      <h3>Hours of Operation</h3>
                      <p>Sunday-Fri: 9 AM - 6 PM</p>
                      {/* <p>Saturday: 9 AM - 4 PM</p> */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-7">
                <div
                  className="contact-form-card"
                  data-aos="fade-up"
                  data-aos-delay={200}
                >
                  <h2>Send us a Message</h2>
                  <p className="mb-4">
                    Have questions or want to learn more? Reach out to us and
                    our team will get back to you shortly.
                  </p>
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
          <div
            className="container-fluid map-container"
            data-aos="fade-up"
            data-aos-delay={200}
          >
            <div className="map-overlay" />
            <iframe
              src="https://www.google.com/maps?q=1000%20NW%2065th%20St%20%23103%2C%20Fort%20Lauderdale%2C%20FL%2033309%2C%20USA&output=embed"
              width="100%"
              height={500}
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </section>
        {/* /Contact Section */}
      </main>
    </>
  );
}
