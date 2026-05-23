import React from 'react'

export default function HomePage() {
  return (
    <>
    <main className="main">
        {/* Hero Section */}
        <section id="hero" className="hero section">
        <div className="container" data-aos="fade-up" data-aos-delay={100}>
            <div className="row align-items-center">
            <div className="col-lg-6 mt-5">
                <div className="hero-content">
                <h1 data-aos="fade-right" data-aos-delay={300}>
                    Excellence in <br/><span className="highlight">Health Insurance</span>
                </h1>
                <p
                    className="hero-description"
                    data-aos="fade-right"
                    data-aos-delay={400}
                >
                    QOL Insurance helps individuals, families, and seniors compare plans, understand benefits, and access dependable support for everyday healthcare needs.
                </p>
                {/* <div
                    className="hero-stats mb-4"
                    data-aos="fade-right"
                    data-aos-delay={500}
                >
                    <div className="stat-item">
                    <h3>
                        <span
                        data-purecounter-start={0}
                        data-purecounter-end={15}
                        data-purecounter-duration={2}
                        className="purecounter"
                        />
                        +
                    </h3>
                    <p>Years Experience</p>
                    </div>
                    <div className="stat-item">
                    <h3>
                        <span
                        data-purecounter-start={0}
                        data-purecounter-end={5000}
                        data-purecounter-duration={2}
                        className="purecounter"
                        />
                        +
                    </h3>
                    <p>Patients Treated</p>
                    </div>
                    <div className="stat-item">
                    <h3>
                        <span
                        data-purecounter-start={0}
                        data-purecounter-end={50}
                        data-purecounter-duration={2}
                        className="purecounter"
                        />
                        +
                    </h3>
                    <p>Medical Experts</p>
                    </div>
                </div> */}
                <div
                    className="hero-actions"
                    data-aos="fade-right"
                    data-aos-delay={600}
                >
                    <a href="#quote" className="btn btn-primary" data-quote-modal-trigger>
                    Get a Free Quote
                    </a>
                    <a
                    href="https://www.youtube.com/watch?v=Y7f98aduVJ8"
                    className="btn btn-outline glightbox"
                    >
                    <i className="bi bi-play-circle me-2" />
                    Watch Our Story
                    </a>
                </div>
                {/* <div
                    className="emergency-contact"
                    data-aos="fade-right"
                    data-aos-delay={700}
                >
                    <div className="emergency-icon">
                    <i className="bi bi-telephone-fill" />
                    </div>
                    <div className="emergency-info">
                    <small>Emergency Hotline</small>
                    <strong>+1 (555) 911-2468</strong>
                    </div>
                </div> */}
                </div>
            </div>
            <div className="col-lg-6">
                <div
                className="hero-visual"
                data-aos="fade-left"
                data-aos-delay={400}
                >
                <div className="main-image">
                    <img
                    src="assets/img/health/staff-612.png"
                    alt="Insurance advisor support"
                    className="img-fluid"
                    />
                </div>
                <div className="background-elements">
                    <div className="element element-1" />
                    <div className="element element-2" />
                    <div className="element element-3" />
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
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
                    Trusted Coverage for Every Stage of Life
                </h2>
                <p className="lead-text">
                    At QOL Insurance, we understand that behind every policy is a family, a dream, and a
                    future worth protecting. That's why we're deeply committed to providing you with
                    insurance solutions that offer more than just coverage—they bring comfort, security, and
                    the peace of mind you deserve. Let us simplify the process for you, so you can focus on
                    what truly matters: living your life with confidence and knowing we've got your back
                    every step of the way.
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
                        data-purecounter-end={15000}
                        data-purecounter-duration={1}
                    />
                    <div className="stat-label">Members Supported</div>
                    </div>
                    <div className="stat-item">
                    <div
                        className="stat-number purecounter"
                        data-purecounter-start={0}
                        data-purecounter-end={5}
                        data-purecounter-duration={1}
                    />
                    <div className="stat-label">Years of Excellence</div>
                    </div>
                    <div className="stat-item">
                    <div
                        className="stat-number purecounter"
                        data-purecounter-start={0}
                        data-purecounter-end={50}
                        data-purecounter-duration={1}
                    />
                    <div className="stat-label">Coverage Options</div>
                    </div>
                </div>
                <div className="cta-section">
                    <a href="/about" className="btn-primary">
                    Learn More About Us
                    </a>
                </div>
                </div>
            </div>
            <div className="col-lg-6" data-aos="fade-left" data-aos-delay={300}>
                <div className="about-visual">
                <div className="main-image">
                    <img
                    src="assets/img/health/facilities-9.webp"
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
                        <h4>Get Your Family Covered</h4>
                        <p>Protection for the people who matter most.</p>
                    </div>
                    </div>
                </div>
                <div className="experience-badge">
                    <div className="badge-content">
                    <span className="years">17+</span>
                    <span className="text">Years of Trusted Health Insurance</span>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
        {/* /Home About Section */}
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
                <div className="specialty-card">
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
                    src="assets/img/health/cardiology-1.webp"
                    alt="Medicare coverage guidance"
                    className="img-fluid"
                    />
                    <div className="visual-overlay">
                    <i className="bi bi-heart-pulse" />
                    </div>
                </div>
                </div>
            </div>
            {/* End Specialty Card */}
            <div className="col-lg-6" data-aos="zoom-in" data-aos-delay={200}>
                <div className="specialty-card">
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
                    src="assets/img/health/neurology-4.webp"
                    alt="Health insurance plans"
                    className="img-fluid"
                    />
                    <div className="visual-overlay">
                    <i className="bi bi-cpu" />
                    </div>
                </div>
                </div>
            </div>
            <div className="col-lg-6" data-aos="zoom-in" data-aos-delay={200}>
                <div className="specialty-card">
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
                    src="assets/img/health/Life Insurance.png"
                    alt="Life insurance protection"
                    className="img-fluid"
                    />
                    <div className="visual-overlay">
                    <i className="bi bi-cpu" />
                    </div>
                </div>
                </div>
            </div>
            <div className="col-lg-6" data-aos="zoom-in" data-aos-delay={200}>
                <div className="specialty-card">
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
                    src="assets/img/health/Dental.png"
                    alt="Dental and vision coverage"
                    className="img-fluid"
                    />
                    <div className="visual-overlay">
                    <i className="bi bi-cpu" />
                    </div>
                </div>
                </div>
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
                    enrollment deadlines, plan changes, Medicare questions, and
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
        {/* Featured Services Section */}
        <section id="featured-services" className="featured-services section">
        {/* Section Title */}
        <div className="container section-title" data-aos="fade-up">
            <h2>Featured Services</h2>
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
                    src="assets/img/health/consultation-4.webp"
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
                    <a href="/services" className="main-cta">
                    Explore Our Services
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
                    <a href="/appointment" className="service-link">
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
                    <a href="#!" className="service-link">
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
                    <a href="#!" className="service-link">
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
                        src="assets/img/health/maternal-2.webp"
                        alt="Health insurance support"
                        className="img-fluid"
                        loading="lazy"
                    />
                    </div>
                    <div className="specialty-content">
                    <h5>Health Insurance</h5>
                    <span>Build a stronger benefits strategy with plans for individuals, families, and self-employed members.</span>
                    </div>
                </div>
                </div>
                <div className="col-lg-3 col-md-6">
                <div className="specialty-card">
                    <div className="specialty-image">
                    <img
                        src="assets/img/health/vaccination-3.webp"
                        alt="Accident coverage"
                        className="img-fluid"
                        loading="lazy"
                    />
                    </div>
                    <div className="specialty-content">
                    <h5>Accident</h5>
                    <span>Supplement core coverage with accident protection that helps reduce surprise out-of-pocket costs.</span>
                    </div>
                </div>
                </div>
                <div className="col-lg-3 col-md-6">
                <div className="specialty-card">
                    <div className="specialty-image">
                    <img
                        src="assets/img/health/emergency-1.webp"
                        alt="ACA marketplace plans"
                        className="img-fluid"
                        loading="lazy"
                    />
                    </div>
                    <div className="specialty-content">
                    <h5>ACA</h5>
                    <span>Explore ACA marketplace options with support for subsidies, enrollment timing, and essential benefits.</span>
                    </div>
                </div>
                </div>
                <div className="col-lg-3 col-md-6">
                <div className="specialty-card">
                    <div className="specialty-image">
                    <img
                        src="assets/img/health/facilities-6.webp"
                        alt="Advanced Tech"
                        className="img-fluid"
                        loading="lazy"
                    />
                    </div>
                    <div className="specialty-content">
                    <h5>Advanced Support</h5>
                    <span>Get year-round help with claims questions, renewals, provider access, and benefit updates.</span>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
        {/* /Featured Services Section */}
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
                    <a href="services.html" className="secondary-cta">
                        <span>Explore Services</span>
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
                    src="assets/img/health/facilities-6.webp"
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
                    <h3>Fast and Reliable Services</h3>
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
                    enrollment, Medicare eligibility, and benefit options so
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
