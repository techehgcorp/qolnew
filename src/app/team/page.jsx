export const metadata = { title: "Team" };

const teamMembers = [
  {
    image: "/assets/img/team/team2.png",
    title: "Client Success Team",
    description:
      "Our client success specialists guide members through plan questions, enrollment updates, and follow-up support with clear and dependable communication.",
  },
  {
    image: "/assets/img/team/team3.png",
    title: "Benefits Support Team",
    description:
      "This team helps individuals and families understand coverage details, compare options, and feel confident about the benefits that fit their needs.",
  },
  {
    image: "/assets/img/team/team4.png",
    title: "Operations & Retention Team",
    description:
      "From renewals to ongoing account care, our operations team keeps every step organized so members receive responsive service long after enrollment.",
  },
];

export default function TeamPage() {
  return (
    <main className="main">
      <div className="page-title">
        <div className="heading">
          <div className="container">
            <div className="row d-flex justify-content-center text-center">
              <div className="col-lg-8">
                <h1 className="heading-title">Team</h1>
                <p className="mb-0">
                  Meet the people behind Quality of Life who support members with guidance,
                  service, and day-to-day insurance expertise.
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
              <li className="current">Team</li>
            </ol>
          </div>
        </nav>
      </div>

      <section className="team-showcase section">
        <div className="container" data-aos="fade-up" data-aos-delay={100}>
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <div className="team-showcase-image">
                <img
                  src="/assets/img/team/team1.png"
                  alt="Quality of Life sales team"
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="team-showcase-content">
                <span className="team-kicker">Sales Team</span>
                <h2>Friendly advisors focused on finding the right coverage</h2>
                <p>
                  Our sales team is the first point of contact for many families, individuals,
                  and seniors exploring their insurance options. They listen carefully, explain
                  coverage in simple terms, and help every client compare plans with confidence.
                </p>
                <p>
                  Whether someone is looking for Medicare, health, life, dental, or vision
                  coverage, this team makes the process feel personal, supportive, and easy to
                  understand from the first conversation forward.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="departments" className="departments section pt-0">
        <div className="container" data-aos="fade-up" data-aos-delay={100}>
          <div className="row g-5">
            {teamMembers.map((member, index) => (
              <div
                key={member.title}
                className="col-lg-4 col-md-6"
                data-aos="fade-up"
                data-aos-delay={100 + index * 100}
              >
                <div className="department-card team-card">
                  <div className="department-image">
                    <img src={member.image} alt={member.title} className="img-fluid" />
                  </div>
                  <div className="department-content">
                    <h3>{member.title}</h3>
                    <p>{member.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
