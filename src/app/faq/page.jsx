import PageShell from "@/components/PageShell";

export const metadata = { title: "FAQ" };

export default function FaqPage() {
  return (
<>
  <meta charSet="utf-8" />
  <meta content="width=device-width, initial-scale=1.0" name="viewport" />
  <title>Faq - Clinic Bootstrap Template</title>
  <meta name="description" content="" />
  <meta name="keywords" content="" />
  {/* Favicons */}
  <link href="assets/img/favicon.png" rel="icon" />
  <link href="assets/img/apple-touch-icon.png" rel="apple-touch-icon" />
  {/* Fonts */}
  <link href="https://fonts.googleapis.com" rel="preconnect" />
  <link href="https://fonts.gstatic.com" rel="preconnect" crossOrigin="" />
  <link
    href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap"
    rel="stylesheet"
  />
  {/* Vendor CSS Files */}
  <link href="assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
  <link
    href="assets/vendor/bootstrap-icons/bootstrap-icons.css"
    rel="stylesheet"
  />
  <link href="assets/vendor/aos/aos.css" rel="stylesheet" />
  <link href="assets/vendor/glightbox/css/glightbox.min.css" rel="stylesheet" />
  <link
    href="assets/vendor/fontawesome-free/css/all.min.css"
    rel="stylesheet"
  />
  <link href="assets/vendor/swiper/swiper-bundle.min.css" rel="stylesheet" />
  {/* Main CSS File */}
  <link href="assets/css/main.css" rel="stylesheet" />
  {/* =======================================================
  * Template Name: Clinic
  * Template URL: https://bootstrapmade.com/clinic-bootstrap-template/
  * Updated: Jul 23 2025 with Bootstrap v5.3.7
  * Author: BootstrapMade.com
  * License: https://bootstrapmade.com/license/
  ======================================================== */}
  
  <main className="main">
    {/* Page Title */}
    <div className="page-title">
      <div className="heading">
        <div className="container">
          <div className="row d-flex justify-content-center text-center">
            <div className="col-lg-8">
              <h1 className="heading-title">Frequently Asked Questions</h1>
              <p className="mb-0">
                Find answers about eligibility, enrollment periods, provider networks, claims, and the everyday details that matter when choosing health coverage.
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
            <li className="current">FAQ</li>
          </ol>
        </div>
      </nav>
    </div>
    {/* End Page Title */}
    {/* Faq Section */}
    <section id="faq" className="faq section">
      <div className="container" data-aos="fade-up" data-aos-delay={100}>
        <div className="row justify-content-center">
          <div className="col-lg-9">
            <div className="faq-wrapper">
              <div
                className="faq-item faq-active"
                data-aos="fade-up"
                data-aos-delay={150}
              >
                <div className="faq-header">
                  <span className="faq-number">01</span>
                  <h4>
                    What is the difference between a premium, deductible, and copay?
                  </h4>
                  <div className="faq-toggle">
                    <i className="bi bi-plus" />
                    <i className="bi bi-dash" />
                  </div>
                </div>
                <div className="faq-content">
                  <div className="content-inner">
                    <p>
                      Your premium is the amount you pay each month to keep your
                      health plan active. A deductible is the amount you pay for
                      covered services before your plan begins sharing more of the
                      cost. A copay is a fixed amount you may pay for visits,
                      prescriptions, or other services, depending on your plan.
                    </p>
                  </div>
                </div>
              </div>
              {/* End FAQ Item */}
              <div className="faq-item" data-aos="fade-up" data-aos-delay={200}>
                <div className="faq-header">
                  <span className="faq-number">02</span>
                  <h4>When can I enroll in a health insurance plan in the United States?</h4>
                  <div className="faq-toggle">
                    <i className="bi bi-plus" />
                    <i className="bi bi-dash" />
                  </div>
                </div>
                <div className="faq-content">
                  <div className="content-inner">
                    <p>
                      Most people enroll during the annual Open Enrollment Period,
                      but certain life events can qualify you for a Special
                      Enrollment Period. Common qualifying events include losing
                      coverage, getting married, having a baby, or moving to a
                      new coverage area.
                    </p>
                  </div>
                </div>
              </div>
              {/* End FAQ Item */}
              <div className="faq-item" data-aos="fade-up" data-aos-delay={250}>
                <div className="faq-header">
                  <span className="faq-number">03</span>
                  <h4>How do I know whether my doctor is in network?</h4>
                  <div className="faq-toggle">
                    <i className="bi bi-plus" />
                    <i className="bi bi-dash" />
                  </div>
                </div>
                <div className="faq-content">
                  <div className="content-inner">
                    <p>
                      You can check your plan's provider directory, search the
                      carrier's website, or confirm directly with your doctor’s
                      office before scheduling care. Staying in network usually
                      helps lower your out-of-pocket costs and reduces billing
                      surprises.
                    </p>
                  </div>
                </div>
              </div>
              {/* End FAQ Item */}
              <div className="faq-item" data-aos="fade-up" data-aos-delay={300}>
                <div className="faq-header">
                  <span className="faq-number">04</span>
                  <h4>What is the difference between PPO, HMO, and EPO plans?</h4>
                  <div className="faq-toggle">
                    <i className="bi bi-plus" />
                    <i className="bi bi-dash" />
                  </div>
                </div>
                <div className="faq-content">
                  <div className="content-inner">
                    <p>
                      HMO plans usually require you to use a defined network and
                      often ask for referrals to see specialists. PPO plans offer
                      more flexibility to go outside the network, but usually at a
                      higher cost. EPO plans generally do not cover out-of-network
                      care except in emergencies, while still offering a network
                      structure similar to PPO-style access.
                    </p>
                  </div>
                </div>
              </div>
              {/* End FAQ Item */}
              <div className="faq-item" data-aos="fade-up" data-aos-delay={350}>
                <div className="faq-header">
                  <span className="faq-number">05</span>
                  <h4>What should I compare before choosing a health insurance plan?</h4>
                  <div className="faq-toggle">
                    <i className="bi bi-plus" />
                    <i className="bi bi-dash" />
                  </div>
                </div>
                <div className="faq-content">
                  <div className="content-inner">
                    <p>
                      Compare the monthly premium, deductible, copays,
                      coinsurance, prescription coverage, provider network, and
                      annual out-of-pocket maximum. It is also important to check
                      whether your doctors, medications, and preferred hospitals
                      are included before you enroll.
                    </p>
                  </div>
                </div>
              </div>
              {/* End FAQ Item */}
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* /Faq Section */}
  </main>
</>

  );
}
