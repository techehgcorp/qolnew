"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const servicePages = [
  { href: "/services", label: "Services" },
  { href: "/service-details", label: "Service Details" },
];

const morePages = [
  { href: "/department-details", label: "Department Details" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/faq", label: "Frequently Asked Questions" },
  { href: "/gallery", label: "Gallery" },
  { href: "/terms", label: "Terms" },
  { href: "/privacy", label: "Privacy" },
  // { href: "/404", label: "404" },
];

function isActive(pathname, href) {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname === href;
}

export default function NavBar() {
  const pathname = usePathname();
  const [showQuoteButton, setShowQuoteButton] = useState(false);
  const servicePagesActive = servicePages.some((item) => isActive(pathname, item.href));
  const morePagesActive = morePages.some((item) => isActive(pathname, item.href));

  useEffect(() => {
    const getFirstPageBlock = () => {
      const main = document.querySelector("main");

      if (!main) {
        return null;
      }

      return main.querySelector(":scope > .page-title, :scope > section, :scope > .section");
    };

    const updateQuoteButton = () => {
      const firstBlock = getFirstPageBlock();

      if (!firstBlock) {
        setShowQuoteButton(window.scrollY > 260);
        return;
      }

      const headerHeight = document.querySelector(".header")?.offsetHeight || 0;
      const firstBlockBottom = firstBlock.offsetTop + firstBlock.offsetHeight;
      setShowQuoteButton(window.scrollY + headerHeight >= firstBlockBottom - 12);
    };

    updateQuoteButton();
    window.addEventListener("scroll", updateQuoteButton, { passive: true });
    window.addEventListener("resize", updateQuoteButton);

    return () => {
      window.removeEventListener("scroll", updateQuoteButton);
      window.removeEventListener("resize", updateQuoteButton);
    };
  }, [pathname]);

  return (
    <div className="branding d-flex align-items-cente">
      <div className="container position-relative d-flex align-items-center justify-content-between">
        <Link href="/" className="logo d-flex align-items-center">
          <img src="/assets/img/Logo.png" alt="QoL Insurance" />
          <h1 className="sitename">QoL Insurance</h1>
        </Link>

        <nav id="navmenu" className="navmenu">
          <ul>
            <li>
              <Link href="/" className={isActive(pathname, "/") ? "active" : undefined}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className={isActive(pathname, "/about") ? "active" : undefined}>
                About
              </Link>
            </li>
            <li>
              <Link
                href="/team"
                className={isActive(pathname, "/team") ? "active" : undefined}
              >
                Team
              </Link>
            </li>
            <li className="dropdown">
              <a href="#" className={servicePagesActive ? "active" : undefined}>
                <span>Services</span> <i className="bi bi-chevron-down toggle-dropdown" />
              </a>
              <ul>
                {servicePages.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className={isActive(pathname, item.href) ? "active" : undefined}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
            {/* <li>
              <Link href="/doctors" className={isActive(pathname, "/doctors") ? "active" : undefined}>
                Doctors
              </Link>
            </li> */}
            {/* <li>
              <Link
                href="/appointment"
                className={isActive(pathname, "/appointment") ? "active" : undefined}
              >
                Appointment
              </Link>
            </li> */}
            <li>
              <Link href="/contact" className={isActive(pathname, "/contact") ? "active" : undefined}>
                Contact
              </Link>
            </li>
            <li className="dropdown more-dropdown">
              <a href="#" className={morePagesActive ? "active" : undefined}>
                <span>&bull;&bull;&bull;</span> <i className="bi bi-chevron-down toggle-dropdown" />
              </a>
              <ul>
                {morePages.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className={isActive(pathname, item.href) ? "active" : undefined}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
            <li className={`quote-nav-item${showQuoteButton ? " is-visible" : ""}`}>
              <a href="#quote" className="quote-nav-button" data-quote-modal-trigger>
                Get a Quote
              </a>
            </li>
          </ul>
          <i className="mobile-nav-toggle d-xl-none bi bi-list" />
        </nav>
      </div>
    </div>
  );
}
