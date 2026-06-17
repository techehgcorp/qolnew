"use client";
import { useEffect, useRef } from "react";

const CIRC = 2 * Math.PI * 49; // circumference for r=49 in viewBox 100x100

export default function HeroSection() {
  const r1 = useRef(null);
  const r2 = useRef(null);
  const r3 = useRef(null);
  const arc1 = useRef(null);
  const arc2 = useRef(null);
  const arc3 = useRef(null);
  const textRef    = useRef(null);
  const sectionRef = useRef(null);

  // Mouse parallax for rings + glint arc rotation
  useEffect(() => {
    let rafId;
    let tx = 0, ty = 0, cx = 0, cy = 0;
    let a1 = 0, a2 = 0, a3 = 0;

    const onMove = (e) => {
      tx = (e.clientX / window.innerWidth  - 0.5) * 2;
      ty = (e.clientY / window.innerHeight - 0.5) * 2;
    };

    const lerpAngle = (cur, target) => {
      let diff = target - cur;
      if (diff > 180) diff -= 360;
      if (diff < -180) diff += 360;
      return cur + diff * 0.06;
    };

    const tick = () => {
      cx += (tx - cx) * 0.055;
      cy += (ty - cy) * 0.055;

      if (r1.current) r1.current.style.transform = `translate(calc(-50% + ${cx * 28}px), calc(-50% + ${cy * 28}px))`;
      if (r2.current) r2.current.style.transform = `translate(calc(-50% + ${cx * -18}px), calc(-50% + ${cy * -18}px))`;
      if (r3.current) r3.current.style.transform = `translate(calc(-50% + ${cx * 44}px), calc(-50% + ${cy * 44}px))`;

      // Mouse in pixels
      const mx = (tx / 2 + 0.5) * window.innerWidth;
      const my = (ty / 2 + 0.5) * window.innerHeight;

      // Angle from each ring center to mouse cursor
      const ang = (baseL, baseT, ox, oy) =>
        Math.atan2(my - (window.innerHeight * baseT + oy), mx - (window.innerWidth * baseL + ox)) * 180 / Math.PI;

      a1 = lerpAngle(a1, ang(0.62, 0.52, cx * 28, cy * 28));
      a2 = lerpAngle(a2, ang(0.60, 0.50, cx * -18, cy * -18));
      a3 = lerpAngle(a3, ang(0.64, 0.48, cx * 44, cy * 44));

      if (arc1.current) arc1.current.setAttribute("transform", `rotate(${a1.toFixed(2)}, 50, 50)`);
      if (arc2.current) arc2.current.setAttribute("transform", `rotate(${a2.toFixed(2)}, 50, 50)`);
      if (arc3.current) arc3.current.setAttribute("transform", `rotate(${a3.toFixed(2)}, 50, 50)`);

      rafId = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    rafId = requestAnimationFrame(tick);
    return () => { window.removeEventListener("mousemove", onMove); cancelAnimationFrame(rafId); };
  }, []);

  // Scroll parallax + zoom for text
  useEffect(() => {
    let rafId;
    let targetX = 0, currentX = 0;
    let targetS = 1, currentS = 1;

    const onScroll = () => {
      const s = sectionRef.current;
      if (!s) return;
      const progress = Math.min(1, Math.max(0, window.scrollY / s.offsetHeight));
      targetX = progress * 400;
      targetS = 1 + progress * 1.2;
    };

    const tick = () => {
      currentX += (targetX - currentX) * 0.07;
      currentS += (targetS - currentS) * 0.07;
      if (textRef.current)
        textRef.current.style.transform = `translateX(${currentX}px) scale(${currentS.toFixed(4)})`;
      rafId = requestAnimationFrame(tick);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    rafId = requestAnimationFrame(tick);
    return () => { window.removeEventListener("scroll", onScroll); cancelAnimationFrame(rafId); };
  }, []);

  // Glint arc = 22% of circumference
  const dash = `${(CIRC * 0.22).toFixed(1)} ${(CIRC * 0.78).toFixed(1)}`;

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="hero section hero-video-bg"
      style={{ position: "relative", minHeight: "100vh", overflow: "hidden" }}
    >
      <video autoPlay loop muted playsInline src="/assets/img/hero/hero%20video.mp4"
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", zIndex: 0 }} />

      <div style={{
        position: "absolute", inset: 0,
        background: "linear-gradient(120deg, rgba(2,18,40,0.32) 0%, rgba(4,22,52,0.18) 55%, rgba(2,12,30,0.06) 100%)",
        zIndex: 1,
      }} />

      {/* ── Ring 1 — large (68vmin) ── */}
      <div ref={r1} style={{
        position: "absolute", top: "52%", left: "62%",
        width: "68vmin", height: "68vmin", borderRadius: "50%",
        border: "1px solid rgba(255,255,255,0.22)",
        zIndex: 2, pointerEvents: "none", willChange: "transform",
      }}>
        <svg width="100%" height="100%" viewBox="0 0 100 100"
          style={{ position: "absolute", inset: 0, overflow: "visible" }}>
          <defs>
            <filter id="heroGlow1" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="2" result="blur" />
              <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
            </filter>
          </defs>
          <g ref={arc1}>
            {/* soft glow halo */}
            <circle cx="50" cy="50" r="49" fill="none"
              stroke="rgba(255,255,255,0.28)" strokeWidth="3.5" strokeLinecap="round"
              strokeDasharray={dash} filter="url(#heroGlow1)" />
            {/* crisp bright core */}
            <circle cx="50" cy="50" r="49" fill="none"
              stroke="rgba(255,255,255,0.72)" strokeWidth="0.9" strokeLinecap="round"
              strokeDasharray={dash} />
          </g>
        </svg>
      </div>

      {/* ── Ring 2 — mid (46vmin), opposite parallax ── */}
      <div ref={r2} style={{
        position: "absolute", top: "50%", left: "60%",
        width: "46vmin", height: "46vmin", borderRadius: "50%",
        border: "1px solid rgba(255,255,255,0.18)",
        zIndex: 2, pointerEvents: "none", willChange: "transform",
      }}>
        <svg width="100%" height="100%" viewBox="0 0 100 100"
          style={{ position: "absolute", inset: 0, overflow: "visible" }}>
          <defs>
            <filter id="heroGlow2" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="2" result="blur" />
              <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
            </filter>
          </defs>
          <g ref={arc2}>
            <circle cx="50" cy="50" r="49" fill="none"
              stroke="rgba(255,255,255,0.24)" strokeWidth="3.5" strokeLinecap="round"
              strokeDasharray={dash} filter="url(#heroGlow2)" />
            <circle cx="50" cy="50" r="49" fill="none"
              stroke="rgba(255,255,255,0.65)" strokeWidth="0.9" strokeLinecap="round"
              strokeDasharray={dash} />
          </g>
        </svg>
      </div>

      {/* ── Ring 3 — small (22vmin), fastest parallax ── */}
      <div ref={r3} style={{
        position: "absolute", top: "48%", left: "64%",
        width: "22vmin", height: "22vmin", borderRadius: "50%",
        border: "1px solid rgba(255,255,255,0.18)",
        zIndex: 2, pointerEvents: "none", willChange: "transform",
      }}>
        <svg width="100%" height="100%" viewBox="0 0 100 100"
          style={{ position: "absolute", inset: 0, overflow: "visible" }}>
          <defs>
            <filter id="heroGlow3" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="2" result="blur" />
              <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
            </filter>
          </defs>
          <g ref={arc3}>
            <circle cx="50" cy="50" r="49" fill="none"
              stroke="rgba(255,255,255,0.22)" strokeWidth="3.5" strokeLinecap="round"
              strokeDasharray={dash} filter="url(#heroGlow3)" />
            <circle cx="50" cy="50" r="49" fill="none"
              stroke="rgba(255,255,255,0.60)" strokeWidth="0.9" strokeLinecap="round"
              strokeDasharray={dash} />
          </g>
        </svg>
      </div>

      {/* Text content */}
      <div className="container" style={{ position: "relative", zIndex: 3 }}>
        <div className="row align-items-center"
          style={{ minHeight: "100vh", paddingTop: "80px", paddingBottom: "40px" }}>
          <div className="col-lg-6">
            <div ref={textRef} className="hero-content" style={{ willChange: "transform" }}>
              <h1 data-aos="fade-right" data-aos-delay={300} style={{ color: "#fff" }}>
                South Florida <br />
                <span className="highlight" style={{ color: "#fff" }}>Insurance Agency</span>
              </h1>
              <p className="hero-description" data-aos="fade-right" data-aos-delay={400}
                style={{ color: "rgba(255,255,255,0.80)" }}>
                QOL Insurance helps individuals, families, and seniors compare
                life, health, medicare, dental, vision, final-expense, and
                accident plans with licensed support.
              </p>
              <div className="hero-actions" data-aos="fade-right" data-aos-delay={600}>
                <a href="#quote" className="btn btn-primary" data-quote-modal-trigger>
                  Get a Free Quote<br />Talk to an Agent
                </a>
                {/* <a href="#" className="btn btn-outline glightbox"
                  style={{ color: "#fff", borderColor: "rgba(255,255,255,0.5)" }}>
                  <i className="bi bi-play-circle me-2" />
                  Take out watch our story
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
