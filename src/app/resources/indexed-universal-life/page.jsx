import Link from "next/link";

export const metadata = {
  title: "Indexed Universal Life (IUL)",
  description:
    "Learn how Indexed Universal Life can combine life insurance protection, cash value potential, living benefits, and legacy planning.",
};

const highlights = [
  {
    icon: "bi-shield-check",
    title: "Life Insurance Protection",
    text: "IUL is permanent life insurance built first around a death benefit for the people, business, or cause you want to protect.",
  },
  {
    icon: "bi-graph-up-arrow",
    title: "Cash Value Potential",
    text: "Premiums may help build cash value over time, with interest credits tied to an index strategy rather than direct stock market ownership.",
  },
  {
    icon: "bi-cash-coin",
    title: "Flexible Access",
    text: "Policy cash value may be accessed through loans or withdrawals for retirement income or other needs when the policy is managed properly.",
  },
  {
    icon: "bi-heart-pulse",
    title: "Living Benefits",
    text: "Optional riders may let you accelerate part of the death benefit during life for qualifying terminal, chronic, or critical conditions.",
  },
];

const useCases = [
  "Family protection with potential long-term cash value growth",
  "Supplemental retirement income planning after other savings options",
  "Legacy planning for children, spouses, businesses, or charitable causes",
  "A safety net for qualifying health emergencies through living benefit riders",
];

const cautions = [
  "Policy loans and withdrawals reduce cash value and the death benefit.",
  "If too much is taken out or the policy lapses, taxes and other consequences may apply.",
  "Caps, participation rates, costs, riders, and guarantees vary by carrier and policy.",
  "IUL is not a bank deposit, is not FDIC/NCUA insured, and may lose value.",
];

export default function IndexedUniversalLifePage() {
  return (
    <main className="main iul-page">
      <div className="page-title">
        <div className="heading">
          <div className="container">
            <div className="row d-flex justify-content-center text-center">
              <div className="col-lg-9">
                <h1 className="heading-title">Indexed Universal Life (IUL)</h1>
                <p className="mb-0">
                  A short guide to how IUL can combine life insurance protection, cash value potential,
                  living benefits, and legacy planning.
                </p>
              </div>
            </div>
          </div>
        </div>
        <nav className="breadcrumbs">
          <div className="container">
            <ol>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>Resources</li>
              <li className="current">Indexed Universal Life</li>
            </ol>
          </div>
        </nav>
      </div>

      <section className="iul-hero section">
        <div className="container">
          <div className="row align-items-center gy-4">
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay={100}>
              <span className="iul-eyebrow">Life insurance with more flexibility</span>
              <h2>Protection first, with room for future planning.</h2>
              <p>
                Indexed Universal Life is permanent life insurance. It is designed to provide
                a death benefit while also offering the potential to build cash value that can
                be used later, depending on policy performance and how the policy is funded.
              </p>
              <p>
                The PDFs you shared focused on four practical conversations: protecting loved
                ones, using living benefits during qualifying health events, creating potential
                tax-advantaged retirement income, and leaving a charitable legacy.
              </p>
              <div className="iul-actions">
                <Link href="/appointment" className="iul-primary-btn">
                  Schedule an Appointment
                </Link>
                <a href="#quote" className="iul-secondary-btn" data-quote-modal-trigger>
                  Get a Free Quote
                </a>
              </div>
            </div>
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay={180}>
              <div className="iul-visual">
                <img
                  src="/assets/img/health/Life Insurance.png"
                  alt="Family reviewing life insurance planning"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="iul-highlights section">
        <div className="container">
          <div className="section-title text-center" data-aos="fade-up">
            <h2>What IUL Can Help With</h2>
            <p>One policy can support several goals, as long as the coverage is designed carefully.</p>
          </div>
          <div className="row gy-4">
            {highlights.map((item, index) => (
              <div className="col-lg-3 col-md-6" key={item.title} data-aos="fade-up" data-aos-delay={120 + index * 50}>
                <div className="iul-info-card">
                  <div className="iul-icon">
                    <i className={`bi ${item.icon}`} />
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="iul-details section">
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay={100}>
              <div className="iul-content-block">
                <h2>How the Cash Value Conversation Works</h2>
                <p>
                  With permanent life insurance, part of the strategy may include building cash
                  value tax-deferred. If the policy is structured and maintained correctly, that
                  cash value may be accessed through withdrawals up to basis and policy loans
                  thereafter, potentially without immediate income tax.
                </p>
                <p>
                  This is why IUL is sometimes discussed as a supplemental retirement strategy.
                  It is not a replacement for proper retirement planning, and it should only be
                  considered when there is a real need for life insurance protection.
                </p>
                <ul className="iul-check-list">
                  {useCases.map((item) => (
                    <li key={item}>
                      <i className="bi bi-check-circle" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay={160}>
              <div className="iul-content-block iul-accent-block">
                <h2>Living Benefits and Legacy Options</h2>
                <p>
                  Living benefit riders may allow access to a portion of the death benefit during
                  life if a qualifying terminal illness, chronic illness, critical illness, critical
                  injury, Alzheimer&apos;s disease, or Lewy Body Dementia diagnosis occurs.
                </p>
                <p>
                  For legacy planning, the charitable matching gift rider described in the material
                  may let a selected charity receive an additional matching benefit when the insured
                  passes away, subject to the rider&apos;s limits and availability.
                </p>
                <div className="iul-legacy-note">
                  <strong>Simple idea:</strong> protect your family first, then design the policy
                  around the future income, health, and legacy goals that matter most.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="iul-cautions section">
        <div className="container">
          <div className="iul-caution-panel" data-aos="fade-up">
            <div>
              <span className="iul-eyebrow">Important to understand</span>
              <h2>IUL needs active guidance.</h2>
              <p>
                It can be powerful, but it is not automatic. Premiums, policy charges, loan use,
                rider availability, and carrier rules all affect whether the policy stays healthy.
              </p>
            </div>
            <ul>
              {cautions.map((item) => (
                <li key={item}>
                  <i className="bi bi-exclamation-circle" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="iul-cta section">
        <div className="container">
          <div className="iul-cta-inner" data-aos="fade-up">
            <h2>Want to see if IUL fits your situation?</h2>
            <p>
              A licensed QoL agent can help compare policy options, explain the tradeoffs, and
              review whether this strategy matches your protection and retirement goals.
            </p>
            <Link href="/appointment" className="iul-primary-btn">
              Book a Consultation
            </Link>
          </div>
          <p className="iul-disclaimer">
            This page is for educational purposes only and is not tax, legal, investment, or
            financial advice. Policy benefits, riders, guarantees, and availability vary by
            state, carrier, and product. Consult qualified professionals before making decisions.
          </p>
        </div>
      </section>
    </main>
  );
}
