import Link from "next/link";
import React from "react";
import HeroSection from "@/components/HeroSection";

export default function HomePage() {
  return (
    <>
    <main className="main">
        {/* Hero Section */}
        <HeroSection />
        {/* /Hero Section */}
        {/* Home About Section */}
        <section id="home-about" className="home-about section">
        <div className="container" data-aos="fade-up" data-aos-delay={100}>
            <div className="row align-items-center">
            <div
                className="col-lg-6 mb-5 mb-lg-0"
                data-aos="fade-right"
                data-aos-delay={200}
            >
                <div className="about-content">
                <h2 className="section-heading">
                    Trusted Insurance Coverage for Every Stage of Life
                </h2>
                <p className="lead-text">
                    At QOL Insurance, we help individuals, families, and seniors compare coverage for life, health, medicare, dental, vision, final-expense and accident insurance. Based in South Florida, our licensed agents work with multiple carriers to help you understand your options and choose protection that fits your needs, budget, and future.
                </p>
                {/* <p>
                    Our licensed advisors walk you through health, life, dental,
                    vision, and Medicare options with clear guidance. From
                    comparing premiums and benefits to understanding provider
                    access and prescription coverage, we make plan selection
                    simpler and more confident.
                </p> */}
                <div className="stats-grid">
                    <div className="stat-item">
                    <div
                        className="stat-number purecounter"
                        data-purecounter-start={0}
                        data-purecounter-end={10000}
                        data-purecounter-duration={1}
                    />
                    <div className="stat-label">Clients Helped</div>
                    </div>
                    <div className="stat-item">
                    <div
                        className="stat-number purecounter"
                        data-purecounter-start={0}
                        data-purecounter-end={5}
                        data-purecounter-duration={1}
                    />
                    <div className="stat-label">Years of Licensed Support</div>
                    </div>
                    <div className="stat-item">
                    <div
                        className="stat-number purecounter"
                        data-purecounter-start={0}
                        data-purecounter-end={50}
                        data-purecounter-duration={1}
                    />
                    <div className="stat-label">Plan Options Compared</div>
                    </div>
                </div>
                <div className="cta-section">
                    <a href="/about" className="btn-primary">
                    Learn More About QOL
                    </a>
                </div>
                </div>
            </div>
            <div className="col-lg-6" data-aos="fade-left" data-aos-delay={300}>
                <div className="about-visual">
                <div className="main-image">
                    <img
                    src="/assets/img/health/facilities-9.png"
                    alt="Family insurance guidance"
                    className="img-fluid"
                    />
                </div>
                <div className="floating-card">
                    <div className="card-content">
                    <div className="icon">
                        <i className="bi bi-heart-pulse" />
                    </div>
                    <div className="card-text">
                        <h4>Protect What Matters Most</h4>
                        <p>Coverage options for every stage of life.</p>
                    </div>
                    </div>
                </div>
                <div className="experience-badge">
                    <div className="badge-content">
                    <span className="years">5+</span>
                    <span className="text">Years of Trusted Insurance Support</span>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
        {/* /Home About Section */}
        {/* Self Enrollment Section */}
        <section id="self-enrollment" className="home-self-enrollment section">
        <div className="container" data-aos="fade-up" data-aos-delay={100}>
            <div className="section-title">
            <h2>Self Enrollment</h2>
            <p>
                Start directly with our partner enrollment pages for fast dental,
                vision, and health coverage quote options.
            </p>
            </div>
            <div className="row g-4 justify-content-center">
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={150}>
                <Link href="https://enroll.onesharehealth.com/home?context=U2FsdGVkX1-Xe2E4vedDJFBQEwTKizLDGrO6vBA_vz927CUE6JRJ71aOQ5Nm_ySh0eKQ790nd5Rf-8KUKvqwXLR6iq-ELe9J_fzecrg4b1_0RaLn6_VJZD3SwREjM51_" className="self-enrollment-partner">
                <img
                    src="/assets/img/partners/oneshare-logo.svg"
                    alt="One Share"
                    className="img-fluid"
                />
                <span>
                    One Share <i className="bi bi-arrow-right" />
                </span>
                </Link>
            </div>
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={200}>
                <Link href="https://myplan.ameritas.com/id/010z1711" className="self-enrollment-partner">
                <img
                    src="/assets/img/partners/ameritas-logo.png"
                    alt="Ameritas"
                    className="img-fluid"
                />
                <span>
                    Ameritas <i className="bi bi-arrow-right" />
                </span>
                </Link>
            </div>
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={250}>
                <Link href="https://enrollment.ncd.com/880978" className="self-enrollment-partner">
                <img
                    src="/assets/img/partners/ncd-logo.svg"
                    alt="NCD"
                    className="img-fluid"
                />
                <span>
                    NCD <i className="bi bi-arrow-right" />
                </span>
                </Link>
            </div>
            </div>
        </div>
        </section>
        {/* /Self Enrollment Section */}
        {/* Featured Departments Section */}
        <section id="featured-departments" className="featured-departments section">
        {/* Section Title */}
        <div className="container section-title" data-aos="fade-up">
            <h2>Featured Coverage Options</h2>
            <p>
            Explore insurance solutions built for everyday care, long-term
            security, and retirement planning.
            </p>
        </div>
        {/* End Section Title */}
        <div className="container" data-aos="fade-up" data-aos-delay={100}>
            <div className="row g-5">
            <div className="col-lg-6" data-aos="zoom-in" data-aos-delay={100}>
                <Link href="/products" className="specialty-card">
                <div className="specialty-content">
                    <div className="specialty-meta">
                    <span className="specialty-label">MediCare</span>
                    </div>
                    <h3>Medicare Plans</h3>
                    <p>
                    Compare Medicare Advantage, Supplement, and Part D options
                    with help understanding doctor networks, prescription
                    coverage, and out-of-pocket costs.
                    </p>
                    {/* <div className="specialty-features">
                    <span>
                        <i className="bi bi-check-circle-fill" />
                        24/7 Emergency Cardiac Care
                    </span>
                    <span>
                        <i className="bi bi-check-circle-fill" />
                        Minimally Invasive Procedures
                    </span>
                    </div> */}
                    {/* <a href="department-details.html" className="specialty-link">
                    Explore Cardiology <i className="bi bi-arrow-right" />
                    </a> */}
                </div>
                <div className="specialty-visual">
                    <img
                    src="/assets/img/health/cardiology-1.png"
                    alt="Medicare coverage guidance"
                    className="img-fluid"
                    />
                    <div className="visual-overlay">
                    <i className="bi bi-heart-pulse" />
                    </div>
                </div>
                </Link>
            </div>
            {/* End Specialty Card */}
            <div className="col-lg-6" data-aos="zoom-in" data-aos-delay={200}>
                <Link href="/products" className="specialty-card">
                <div className="specialty-content">
                    <div className="specialty-meta">
                    <span className="specialty-label">Health Insurance</span>
                    </div>
                    <h3>Health Insurance Plans</h3>
                    <p>
                    Find individual and family health plans with practical
                    guidance on deductibles, copays, preventive care, and
                    provider access that fit your budget.
                    </p>
                    {/* <div className="specialty-features">
                    <span>
                        <i className="bi bi-check-circle-fill" />
                        Advanced Brain Imaging
                    </span>
                    <span>
                        <i className="bi bi-check-circle-fill" />
                        Robotic Surgery
                    </span>
                    </div>
                    <a href="department-details.html" className="specialty-link">
                    Explore Neurology <i className="bi bi-arrow-right" />
                    </a> */}
                </div>
                <div className="specialty-visual">
                    <img
                    src="/assets/img/health/neurology-4.png"
                    alt="Health insurance plans"
                    className="img-fluid"
                    />
                    <div className="visual-overlay">
                    <i className="bi bi-cpu" />
                    </div>
                </div>
                </Link>
            </div>
            <div className="col-lg-6" data-aos="zoom-in" data-aos-delay={200}>
                <Link href="/products" className="specialty-card">
                <div className="specialty-content">
                    <div className="specialty-meta">
                    <span className="specialty-label">Life Insurance</span>
                    </div>
                    <h3>Life Insurance Protection</h3>
                    <p>
                    Protect your loved ones with term and permanent life
                    insurance options designed to support income protection,
                    legacy planning, and final expenses.
                    </p>
                    {/* <div className="specialty-features">
                    <span>
                        <i className="bi bi-check-circle-fill" />
                        Advanced Brain Imaging
                    </span>
                    <span>
                        <i className="bi bi-check-circle-fill" />
                        Robotic Surgery
                    </span>
                    </div>
                    <a href="department-details.html" className="specialty-link">
                    Explore Neurology <i className="bi bi-arrow-right" />
                    </a> */}
                </div>
                <div className="specialty-visual">
                    <img
                    src="/assets/img/health/final_expense.png"
                    alt="Life insurance protection"
                    className="img-fluid"
                    />
                    <div className="visual-overlay">
                    <i className="bi bi-cpu" />
                    </div>
                </div>
                </Link>
            </div>
            <div className="col-lg-6" data-aos="zoom-in" data-aos-delay={200}>
                <Link href="/products" className="specialty-card">
                <div className="specialty-content">
                    <div className="specialty-meta">
                    <span className="specialty-label">Dental & Vision</span>
                    </div>
                    <h3>Dental and Vision Coverage</h3>
                    <p>
                    Add routine exams, glasses, contacts, cleanings, and major
                    dental benefits to your coverage strategy with plans that
                    support preventive care and ongoing savings.
                    </p>
                    {/* <div className="specialty-features">
                    <span>
                        <i className="bi bi-check-circle-fill" />
                        Advanced Brain Imaging
                    </span>
                    <span>
                        <i className="bi bi-check-circle-fill" />
                        Robotic Surgery
                    </span>
                    </div>
                    <a href="department-details.html" className="specialty-link">
                    Explore Neurology <i className="bi bi-arrow-right" />
                    </a> */}
                </div>
                <div className="specialty-visual">
                    <img
                    src="/assets/img/health/Dental.png"
                    alt="Dental and vision coverage"
                    className="img-fluid"
                    />
                    <div className="visual-overlay">
                    <i className="bi bi-cpu" />
                    </div>
                </div>
                </Link>
            </div>
            {/* End Specialty Card */}
            <div className="col-lg-4" data-aos="fade-up" data-aos-delay={100}>
                <div className="department-highlight">
                <div className="highlight-icon">
                    <i className="bi bi-shield-plus" />
                </div>
                <h4>Trusted Insurance Advisor</h4>
                <p>
                    Our experienced team is here to guide you through each step, ensuring you have the best options and clarity to make informed decisions.
                </p>
                <ul className="highlight-list">
                    <li>Plan Comparison</li>
                    <li>Benefit Guidance</li>
                    <li>Enrollment Support</li>
                </ul>
                {/* <a href="department-details.html" className="highlight-cta">
                    Learn More
                </a> */}
                </div>
            </div>
            {/* End Department Highlight */}
            <div className="col-lg-4" data-aos="fade-up" data-aos-delay={200}>
                <div className="department-highlight">
                <div className="highlight-icon">
                    <i className="bi bi-people" />
                </div>
                <h4>Fast & Easy Process</h4>
                <p>
                    We simplify the insurance process, making it easy and straightforward for you to get the coverage you need with minimal hassle.
                </p>
                <ul className="highlight-list">
                    <li>Quick Quotes</li>
                    <li>Simple Applications</li>
                    <li>Ongoing Member Help</li>
                </ul>
                {/* <a href="department-details.html" className="highlight-cta">
                    Learn More
                </a> */}
                </div>
            </div>
            {/* End Department Highlight */}
            <div className="col-lg-4" data-aos="fade-up" data-aos-delay={300}>
                <div className="department-highlight">
                <div className="highlight-icon">
                    <i className="bi bi-activity" />
                </div>
                <h4>Cost-Effective Solutions</h4>
                <p>
                    Our plans are designed to give you the most value for your investment, helping you secure reliable coverage while saving on unnecessary costs
                </p>
                <ul className="highlight-list">
                    <li>Affordable Premiums</li>
                    <li>Flexible Benefits</li>
                    <li>Budget-Friendly Options</li>
                </ul>
                {/* <a href="department-details.html" className="highlight-cta">
                    Learn More
                </a> */}
                </div>
            </div>
            {/* End Department Highlight */}
            </div>
            <div
            className="emergency-banner"
            data-aos="fade-up"
            data-aos-delay={400}
            >
            <div className="row align-items-center">
                <div className="col-lg-8">
                <div className="emergency-content">
                    <h3>Coverage Guidance When You Need It Most</h3>
                    <p>
                    Speak with a licensed agent for help reviewing urgent
                    enrollment deadlines, plan changes, medicare questions, and
                    coverage concerns.
                    </p>
                </div>
                </div>
                <div className="col-lg-4 text-lg-end">
                <a href="tel:+18447300124" className="emergency-btn">
                    <i className="bi bi-telephone-fill" />
                    Call an Advisor: (844) 730-0124
                </a>
                </div>
            </div>
            </div>
        </div>
        </section>
        {/* /Featured Departments Section */}
        {/* Featured Products Section */}
        <section id="featured-services" className="featured-services section">
        {/* Section Title */}
        <div className="container section-title" data-aos="fade-up">
            <h2>Featured Products</h2>
            <p>
            Key Features of Our Insurance Solutions
            </p>
        </div>
        {/* End Section Title */}
        <div className="container" data-aos="fade-up" data-aos-delay={100}>
            <div className="row g-0">
            <div className="col-lg-8" data-aos="fade-right" data-aos-delay={200}>
                <div className="featured-service-main">
                <div className="service-image-wrapper">
                    <img
                    src="/assets/img/health/consultation-4.png"
                    alt="Insurance consultation"
                    className="img-fluid"
                    loading="lazy"
                    />
                    <div className="service-overlay">
                    <div className="service-badge">
                        <i className="bi bi-heart-pulse" />
                        <span>Personalized Guidance</span>
                    </div>
                    </div>
                </div>
                <div className="service-details">
                    <h2>Comprehensive Insurance Support</h2>
                    <p>
                    We help individuals and families compare health plans,
                    understand everyday benefits, and secure dependable
                    protection with guidance that stays clear from enrollment
                    through ongoing support.
                    </p>
                    <a href="/products" className="main-cta">
                    Explore Our Products
                    </a>
                </div>
                </div>
            </div>
            <div className="col-lg-4" data-aos="fade-left" data-aos-delay={300}>
                <div className="services-sidebar">
                <div
                    className="service-item"
                    data-aos="fade-up"
                    data-aos-delay={400}
                >
                    <div className="service-icon-wrapper">
                    <i className="bi bi-capsule" />
                    </div>
                    <div className="service-info">
                    <h4>Life Insurance</h4>
                    <p>
                        Protect your family's future with coverage tailored to
                        income replacement, debt protection, and final expenses.
                    </p>
                    <a href="/products" className="service-link">
                        Learn More
                    </a>
                    </div>
                </div>
                <div
                    className="service-item"
                    data-aos="fade-up"
                    data-aos-delay={500}
                >
                    <div className="service-icon-wrapper">
                    <i className="bi bi-bandaid" />
                    </div>
                    <div className="service-info">
                    <h4>Medicare</h4>
                    <p>
                        Get help understanding Parts A, B, C, and D so you can
                        choose coverage that matches your doctors and medications.
                    </p>
                    <a href="/products" className="service-link">
                        Learn More
                    </a>
                    </div>
                </div>
                <div
                    className="service-item"
                    data-aos="fade-up"
                    data-aos-delay={600}
                >
                    <div className="service-icon-wrapper">
                    <i className="bi bi-activity" />
                    </div>
                    <div className="service-info">
                    <h4>Dental/Vision</h4>
                    <p>
                        Add everyday protection for exams, glasses, cleanings,
                        and dental procedures with accessible plan options.
                    </p>
                    <a href="/products" className="service-link">
                        Learn More
                    </a>
                    </div>
                </div>
                                <div
                    className="service-item"
                    data-aos="fade-up"
                    data-aos-delay={600}
                >
                    <div className="service-icon-wrapper">
                    <i className="bi bi-activity" />
                    </div>
                    <div className="service-info">
                    <h4>Final Expense</h4>
                    <p>
                        Plan ahead for funeral costs, burial expenses, and other
                        end-of-life needs with coverage designed to ease the
                        financial burden on loved ones.
                    </p>
                    <a href="/products" className="service-link">
                        Learn More
                    </a>
                    </div>
                </div>
                </div>
            </div>
            </div>
            <div
            className="specialties-grid"
            data-aos="fade-up"
            data-aos-delay={300}
            >
            <div className="row align-items-center">
                <div className="col-lg-3 col-md-6">
                <div className="specialty-card">
                    <div className="specialty-image">
                    <img
                        src="/assets/img/health/maternal-2.webp"
                        alt="Health insurance support"
                        className="img-fluid"
                        loading="lazy"
                    />
                    </div>
                    <div className="specialty-content">
                    <h5>Health Insurance</h5>
                    <span>Build a stronger benefits strategy with plans for individuals, families, and self-employed members.</span>
                    <a href="/products" className="service-link"><br />
                        Learn More
                    </a>
                    </div>
                </div>
                </div>
                <div className="col-lg-3 col-md-6">
                <div className="specialty-card">
                    <div className="specialty-image">
                    <img
                        src="/assets/img/health/vaccination-3.webp"
                        alt="Accident coverage"
                        className="img-fluid"
                        loading="lazy"
                    />
                    </div>
                    <div className="specialty-content">
                    <h5>Accident</h5>
                    <span>Supplement core coverage with accident protection that helps reduce surprise out-of-pocket costs.</span>
                    <a href="/products" className="service-link">
                        Learn More
                    </a>
                    </div>
                </div>
                </div>
                <div className="col-lg-3 col-md-6">
                <div className="specialty-card">
                    <div className="specialty-image">
                    <img
                        src="/assets/img/health/emergency-1.webp"
                        alt="ACA marketplace plans"
                        className="img-fluid"
                        loading="lazy"
                    />
                    </div>
                    <div className="specialty-content">
                    <h5>ACA</h5>
                    <span>Explore ACA marketplace options with support for subsidies, enrollment timing, and essential benefits.</span>
                    <a href="/products" className="service-link">
                        Learn More
                    </a>
                    </div>
                </div>
                </div>
                <div className="col-lg-3 col-md-6">
                <div className="specialty-card">
                    <div className="specialty-image">
                    <img
                        src="/assets/img/health/IUL.webp"
                        alt="Advanced Tech"
                        className="img-fluid"
                        loading="lazy"
                    />
                    </div>
                    <div className="specialty-content">
                    <h5>IUL (Indexed Universal Life Insurance)</h5>
                    <span>Build flexible lifelong protection with cash value growth potential tied to a market index and options that can support future financial planning.</span>
                    <a href="/products" className="service-link">
                        Learn More
                    </a>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
        {/* /Featured Products Section */}
        {/* Find A Doctor Section */}
        
        {/* /Find A Doctor Section */}
        {/* Call To Action Section */}
        <section
        id="call-to-action"
        className="call-to-action section light-background"
        >
        <div className="container" data-aos="fade-up" data-aos-delay={100}>
            <div className="hero-content">
            <div className="row align-items-center">
                <div className="col-lg-6">
                <div
                    className="content-wrapper"
                    data-aos="fade-up"
                    data-aos-delay={200}
                >
                    <h1>Coverage Guidance You Can Count On Every Day</h1>
                    <p>
                    From plan selection to provider access and ongoing member support, our team helps you get more value, clarity, and confidence from your health coverage.
                    </p>
                    <div className="cta-wrapper">
                    <a href="/appointment" className="primary-cta">
                        <span>Request a Consultation</span>
                        <i className="bi bi-arrow-right" />
                    </a>
                    <a href="/products" className="secondary-cta">
                        <span>Explore Products</span>
                        <i className="bi bi-arrow-right" />
                    </a>
                    </div>
                </div>
                </div>
                <div className="col-lg-6">
                <div
                    className="image-container"
                    data-aos="fade-left"
                    data-aos-delay={300}
                >
                    <img
                    src="/assets/img/health/facilities-62.png"
                    alt="Insurance support team"
                    className="img-fluid"
                    />
                </div>
                </div>
            </div>
            </div>
            <div className="features-section">
            <div className="row g-0">
                <div className="col-lg-4">
                <div
                    className="feature-block"
                    data-aos="fade-up"
                    data-aos-delay={200}
                >
                    <div className="feature-icon">
                    <i className="bi bi-shield-check" />
                    </div>
                    <h3>Fast and Reliable Products</h3>
                    <p>
                        Our streamlined processes make getting coverage quick and hassle-free, so you can
                        focus on what matters most
                    </p>
                </div>
                </div>
                <div className="col-lg-4">
                <div
                    className="feature-block"
                    data-aos="fade-up"
                    data-aos-delay={300}
                >
                    <div className="feature-icon">
                    <i className="bi bi-clock" />
                    </div>
                    <h3>Personalized Policy Options</h3>
                    <p>
                        We offer flexible policy options that let you customize coverage to align perfectly with
                        your lifestyle and goals
                    </p>
                </div>
                </div>
                <div className="col-lg-4">
                <div
                    className="feature-block"
                    data-aos="fade-up"
                    data-aos-delay={400}
                >
                    <div className="feature-icon">
                    <i className="bi bi-people" />
                    </div>
                    <h3>Expert Team</h3>
                    <p>
                    Experienced advisors work closely with each client to explain
                    plan details, simplify enrollment, and recommend practical
                    solutions for families, seniors, and individuals.
                    </p>
                </div>
                </div>
            </div>
            </div>
            <div className="contact-block">
            <div className="row">
                <div className="col-lg-8">
                <div
                    className="contact-content"
                    data-aos="fade-up"
                    data-aos-delay={200}
                >
                    <h2>Need Help Choosing the Right Plan?</h2>
                    <p>
                    Our team is ready to answer questions about coverage,
                    enrollment, medicare eligibility, and benefit options so
                    you can make your next decision with confidence.
                    </p>
                </div>
                </div>
                <div className="col-lg-4">
                <div
                    className="contact-actions"
                    data-aos="fade-up"
                    data-aos-delay={300}
                >
                    <a href="tel:+18447300124" className="emergency-call">
                    <i className="bi bi-telephone" />
                    <span>(844) 730-0124</span>
                    </a>
                    <a href="contact.html" className="contact-link">
                    Contact Us
                    </a>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
        {/* /Call To Action Section */}
    </main>
    </>
  )
}
