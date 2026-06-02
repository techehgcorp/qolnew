import AppointmentForm from "./AppointmentForm";

export const metadata = { title: "Appointment" };

export default function AppointmentPage() {
  return (
    <>
      <main className="main">
        <div className="page-title">
          <div className="heading">
            <div className="container">
              <div className="row d-flex justify-content-center text-center">
                <div className="col-lg-8">
                  <h1 className="heading-title">Book a Consultation</h1>
                  <p className="mb-0">
                    Schedule time with a licensed agent to compare insurance options, review benefits, and get support with enrollment or renewal decisions.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <nav className="breadcrumbs">
            <div className="container">
              <ol>
                <li>
                  <a href="/">Home</a>
                </li>
                <li className="current">Book a Consultation</li>
              </ol>
            </div>
          </nav>
        </div>

        <section className="appointment-scheduler-section section">
          <div className="container">
            <AppointmentForm />
          </div>
        </section>
      </main>
    </>
  );
}
