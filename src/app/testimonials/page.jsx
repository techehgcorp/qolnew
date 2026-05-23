export const metadata = { title: "Testimonials" };

export default function TestimonialsPage() {
  return (
    <>
      <main className="main">
          {/* Page Title */}
          <div className="page-title">
            <div className="heading">
              <div className="container">
                <div className="row d-flex justify-content-center text-center">
                  <div className="col-lg-8">
                    <h1 className="heading-title">Testimonials</h1>
                    <p className="mb-0">
                      Read how members and families describe their experience with enrollment guidance, provider access, and dependable support.
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
                  <li className="current">Testimonials</li>
                </ol>
              </div>
            </nav>
          </div>
          {/* End Page Title */}
          {/* Featured Testimonials Section */}
          <section
            id="featured-testimonials"
            className="featured-testimonials section"
          >
            <div className="container" data-aos="fade-up" data-aos-delay={100}>
              <div className="testimonials-14 swiper init-swiper">
                <div className="swiper-wrapper">
                  {/* Testimonial Item 1 */}
                  <div className="swiper-slide">
                    <div className="testimonial-item">
                      <div className="stars">
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                      </div>
                      <p>
                        The team made health insurance feel a lot less overwhelming.
                        They explained our deductible, network, and prescription
                        options in a way that finally made sense.
                      </p>
                      <div className="profile">
                        <img
                          src="assets/img/person/person-m-9.webp"
                          className="testimonial-img"
                          alt=""
                          loading="lazy"
                        />
                        <div className="info">
                          <h4>
                            Marcus Chen <i className="bi bi-patch-check-fill" />
                          </h4>
                          {/* <span>@marcuschen</span> */}
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* End testimonial item */}
                  {/* Testimonial Item 2 */}
                  <div className="swiper-slide">
                    <div className="testimonial-item">
                      <div className="stars">
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                      </div>
                      <p>
                        I was turning 65 and had no idea how to compare Medicare
                        plans. They walked me through every step and helped me
                        choose something that fit my doctors and budget.
                      </p>
                      <div className="profile">
                        <img
                          src="assets/img/person/person-f-5.webp"
                          className="testimonial-img"
                          alt=""
                          loading="lazy"
                        />
                        <div className="info">
                          <h4>
                            Sarah Mitchell <i className="bi bi-patch-check-fill" />
                          </h4>
                          <span>@sarahmitch</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* End testimonial item */}
                  {/* Testimonial Item 3 */}
                  <div className="swiper-slide">
                    <div className="testimonial-item">
                      <div className="stars">
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                      </div>
                      <p>
                        We needed family coverage quickly after a job change. QoL
                        helped us compare options fast and made the enrollment
                        process feel organized instead of stressful.
                      </p>
                      <div className="profile">
                        <img
                          src="assets/img/person/person-f-12.webp"
                          className="testimonial-img"
                          alt=""
                          loading="lazy"
                        />
                        <div className="info">
                          <h4>
                            James Wilson <i className="bi bi-patch-check-fill" />
                          </h4>
                          <span>@jwilson</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* End testimonial item */}
                  {/* Testimonial Item 4 */}
                  <div className="swiper-slide">
                    <div className="testimonial-item">
                      <div className="stars">
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                      </div>
                      <p>
                        Their dental and vision recommendations helped us add the
                        extra protection we actually use without overpaying for
                        benefits we did not need.
                      </p>
                      <div className="profile">
                        <img
                          src="assets/img/person/person-m-12.webp"
                          className="testimonial-img"
                          alt=""
                          loading="lazy"
                        />
                        <div className="info">
                          <h4>
                            Emma Rodriguez <i className="bi bi-patch-check-fill" />
                          </h4>
                          <span>@emmarod</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* End testimonial item */}
                  {/* Testimonial Item 5 */}
                  <div className="swiper-slide">
                    <div className="testimonial-item">
                      <div className="stars">
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                      </div>
                      <p>
                        I appreciated how clearly they explained life insurance.
                        No pressure, no confusing jargon, just practical guidance
                        that helped me make a smart decision for my family.
                      </p>
                      <div className="profile">
                        <img
                          src="assets/img/person/person-m-13.webp"
                          className="testimonial-img"
                          alt=""
                          loading="lazy"
                        />
                        <div className="info">
                          <h4>
                            David Kumar <i className="bi bi-patch-check-fill" />
                          </h4>
                          <span>@davidkumar</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* End testimonial item */}
                  {/* Testimonial Item 6 */}
                  <div className="swiper-slide">
                    <div className="testimonial-item">
                      <div className="stars">
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                      </div>
                      <p>
                        Every time I had a claims or renewal question, someone
                        actually answered and followed through. That kind of
                        support is rare and it really stood out.
                      </p>
                      <div className="profile">
                        <img
                          src="assets/img/person/person-f-13.webp"
                          className="testimonial-img"
                          alt=""
                          loading="lazy"
                        />
                        <div className="info">
                          <h4>
                            Sophia Lee <i className="bi bi-patch-check-fill" />
                          </h4>
                          {/* <span>@sophialee</span> */}
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* End testimonial item */}
                </div>
                <div className="swiper-pagination" />
              </div>
            </div>
          </section>
          {/* /Featured Testimonials Section */}
          {/* Testimonials Section */}
          <section id="testimonials" className="testimonials section">
            <div className="container" data-aos="fade-up" data-aos-delay={100}>
              <div className="row g-4">
                {/* Testimonial Item 1 */}
                <div className="col-lg-6" data-aos="fade-up" data-aos-delay={100}>
                  <div className="testimonial-item">
                    <div className="stars">
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-fill" />
                    </div>
                    <p>
                      QoL Insurance made it easier for our family to understand deductibles, prescription coverage, and specialist access before we ever needed to file a claim.
                    </p>
                    <div className="testimonial-footer">
                      <div className="testimonial-author">
                        <img
                          src="assets/img/person/person-m-3.webp"
                          alt="Author"
                          className="img-fluid rounded-circle"
                          loading="lazy"
                        />
                        <div>
                          <h5>Michael Anderson</h5>
                          {/* <span>Software Developer</span> */}
                        </div>
                      </div>
                      <div className="quote-icon">
                        <i className="bi bi-quote" />
                      </div>
                    </div>
                  </div>
                </div>
                {/* End Testimonial Item */}
                {/* Testimonial Item 2 */}
                <div className="col-lg-6" data-aos="fade-up" data-aos-delay={200}>
                  <div className="testimonial-item">
                    <div className="stars">
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-fill" />
                    </div>
                    <p>
                      They helped me compare health plans without rushing me and
                      pointed out costs I would have missed on my own.
                    </p>
                    <div className="testimonial-footer">
                      <div className="testimonial-author">
                        <img
                          src="assets/img/person/person-f-5.webp"
                          alt="Author"
                          className="img-fluid rounded-circle"
                          loading="lazy"
                        />
                        <div>
                          <h5>Sophia Martinez</h5>
                          {/* <span>Marketing Specialist</span> */}
                        </div>
                      </div>
                      <div className="quote-icon">
                        <i className="bi bi-quote" />
                      </div>
                    </div>
                  </div>
                </div>
                {/* End Testimonial Item */}
                {/* Testimonial Item 3 */}
                <div className="col-lg-6" data-aos="fade-up" data-aos-delay={300}>
                  <div className="testimonial-item">
                    <div className="stars">
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-fill" />
                    </div>
                    <p>
                      The Medicare guidance was excellent. I felt informed at each
                      step and never pressured into a plan that did not fit.
                    </p>
                    <div className="testimonial-footer">
                      <div className="testimonial-author">
                        <img
                          src="assets/img/person/person-m-7.webp"
                          alt="Author"
                          className="img-fluid rounded-circle"
                          loading="lazy"
                        />
                        <div>
                          <h5>David Wilson</h5>
                          {/* <span>Graphic Designer</span> */}
                        </div>
                      </div>
                      <div className="quote-icon">
                        <i className="bi bi-quote" />
                      </div>
                    </div>
                  </div>
                </div>
                {/* End Testimonial Item */}
                {/* Testimonial Item 4 */}
                <div className="col-lg-6" data-aos="fade-up" data-aos-delay={400}>
                  <div className="testimonial-item">
                    <div className="stars">
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-fill" />
                    </div>
                    <p>
                      Our family needed dental and vision coverage that stayed
                      affordable, and they found options that balanced both.
                    </p>
                    <div className="testimonial-footer">
                      <div className="testimonial-author">
                        <img
                          src="assets/img/person/person-f-9.webp"
                          alt="Author"
                          className="img-fluid rounded-circle"
                          loading="lazy"
                        />
                        <div>
                          <h5>Emily Johnson</h5>
                          {/* <span>UX Designer</span> */}
                        </div>
                      </div>
                      <div className="quote-icon">
                        <i className="bi bi-quote" />
                      </div>
                    </div>
                  </div>
                </div>
                {/* End Testimonial Item */}
                {/* Testimonial Item 5 */}
                <div className="col-lg-6" data-aos="fade-up" data-aos-delay={500}>
                  <div className="testimonial-item">
                    <div className="stars">
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-fill" />
                    </div>
                    <p>
                      What stood out most was the follow-up. They checked in after
                      enrollment and helped when I had questions about using my benefits.
                    </p>
                    <div className="testimonial-footer">
                      <div className="testimonial-author">
                        <img
                          src="assets/img/person/person-f-11.webp"
                          alt="Author"
                          className="img-fluid rounded-circle"
                          loading="lazy"
                        />
                        <div>
                          <h5>Olivia Thompson</h5>
                          {/* <span>Entrepreneur</span> */}
                        </div>
                      </div>
                      <div className="quote-icon">
                        <i className="bi bi-quote" />
                      </div>
                    </div>
                  </div>
                </div>
                {/* End Testimonial Item */}
                {/* Testimonial Item 6 */}
                <div className="col-lg-6" data-aos="fade-up" data-aos-delay={600}>
                  <div className="testimonial-item">
                    <div className="stars">
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-fill" />
                    </div>
                    <p>
                      I came in looking for life insurance and left feeling like I
                      actually understood my options for the first time.
                    </p>
                    <div className="testimonial-footer">
                      <div className="testimonial-author">
                        <img
                          src="assets/img/person/person-m-12.webp"
                          alt="Author"
                          className="img-fluid rounded-circle"
                          loading="lazy"
                        />
                        <div>
                          <h5>James Taylor</h5>
                          {/* <span>Financial Analyst</span> */}
                        </div>
                      </div>
                      <div className="quote-icon">
                        <i className="bi bi-quote" />
                      </div>
                    </div>
                  </div>
                </div>
                {/* End Testimonial Item */}
              </div>
            </div>
          </section>
          {/* /Testimonials Section */}
        </main>
    </>
  );
}
