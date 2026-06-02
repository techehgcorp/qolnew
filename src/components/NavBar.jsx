"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const productPages = [
  { href: "/products", label: "Products" },
  { href: "/product-details", label: "Product Details" },
];

const resourcePages = [
  { href: "/resources/indexed-universal-life", label: "Indexed Universal Life (IUL)" },
  // { href: "/department-details", label: "Department Details" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/faq", label: "Frequently Asked Questions" },
  // { href: "/gallery", label: "Gallery" },
  { href: "/terms", label: "Terms" },
  { href: "/privacy", label: "Privacy" },
  // { href: "/404", label: "404" },
];

const selfEnrollmentPages = [
  { href: "/self-enrollment/one-share", label: "One Share" },
  { href: "/self-enrollment/ameritas", label: "Ameritas" },
  { href: "/self-enrollment/ncd", label: "NCD" },
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
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [openDropdowns, setOpenDropdowns] = useState({});
  const productPagesActive = productPages.some((item) => isActive(pathname, item.href));
  const resourcePagesActive = resourcePages.some((item) => isActive(pathname, item.href));
  const selfEnrollmentPagesActive = selfEnrollmentPages.some((item) => isActive(pathname, item.href));

  const closeMobileNav = () => {
    setIsMobileNavOpen(false);
    setOpenDropdowns({});
  };

  const toggleDropdown = (event, name) => {
    event.preventDefault();
    setOpenDropdowns((current) => ({
      ...current,
      [name]: !current[name],
    }));
  };

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

  useEffect(() => {
    closeMobileNav();
  }, [pathname]);

  useEffect(() => {
    document.body.classList.toggle("mobile-nav-active", isMobileNavOpen);
    document.body.style.overflow = isMobileNavOpen ? "hidden" : "";
    document.documentElement.style.overflow = isMobileNavOpen ? "hidden" : "";

    return () => {
      document.body.classList.remove("mobile-nav-active");
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, [isMobileNavOpen]);

  useEffect(() => {
    const closeOnDesktop = () => {
      if (window.innerWidth >= 1200) {
        closeMobileNav();
      }
    };

    window.addEventListener("resize", closeOnDesktop);

    return () => {
      window.removeEventListener("resize", closeOnDesktop);
    };
  }, []);

  return (
    <div className="branding d-flex align-items-cente">
      <div className="container position-relative d-flex align-items-center justify-content-between">
        <Link href="/" className="logo d-flex align-items-center" onClick={closeMobileNav}>
          <img src="/assets/img/Logo.png" alt="QoL Insurance" />
          <h1 className="sitename">QoL Insurance</h1>
        </Link>

        <nav id="navmenu" className="navmenu">
          <ul>
            <li>
              <Link href="/" className={isActive(pathname, "/") ? "active" : undefined} onClick={closeMobileNav}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className={isActive(pathname, "/about") ? "active" : undefined} onClick={closeMobileNav}>
                About
              </Link>
            </li>
            <li>
              <Link
                href="/team"
                className={isActive(pathname, "/team") ? "active" : undefined}
                onClick={closeMobileNav}
              >
                Team
              </Link>
            </li>
            <li className="dropdown">
              <a
                href="#"
                className={productPagesActive || openDropdowns.products ? "active" : undefined}
                onClick={(event) => toggleDropdown(event, "products")}
              >
                <span>Products</span> <i className="bi bi-chevron-down toggle-dropdown" />
              </a>
              <ul className={openDropdowns.products ? "dropdown-active" : undefined}>
                {productPages.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={isActive(pathname, item.href) ? "active" : undefined}
                      onClick={closeMobileNav}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
            <li className="dropdown">
              <a
                href="#"
                className={selfEnrollmentPagesActive || openDropdowns.selfEnrollment ? "active" : undefined}
                onClick={(event) => toggleDropdown(event, "selfEnrollment")}
              >
                <span>Self Enrollment</span> <i className="bi bi-chevron-down toggle-dropdown" />
              </a>
              <ul className={openDropdowns.selfEnrollment ? "dropdown-active" : undefined}>
                {selfEnrollmentPages.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={isActive(pathname, item.href) ? "active" : undefined}
                      onClick={closeMobileNav}
                    >
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
              <Link href="/contact" className={isActive(pathname, "/contact") ? "active" : undefined} onClick={closeMobileNav}>
                Contact
              </Link>
            </li>
            <li className="dropdown more-dropdown">
              <a
                href="#"
                className={resourcePagesActive || openDropdowns.resources ? "active" : undefined}
                onClick={(event) => toggleDropdown(event, "resources")}
              >
                <span>Resources</span> <i className="bi bi-chevron-down toggle-dropdown" />
              </a>
              <ul className={openDropdowns.resources ? "dropdown-active" : undefined}>
                {resourcePages.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={isActive(pathname, item.href) ? "active" : undefined}
                      onClick={closeMobileNav}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>

            <li className="appointment-nav-item">
              <Link
                href="/appointment"
                className={`appointment-nav-button${isActive(pathname, "/appointment") ? " active" : ""}`}
                onClick={closeMobileNav}
              >
                Appointment
              </Link>
            </li>

            <li className={`quote-nav-item${showQuoteButton ? " is-visible" : ""}`}>
              <a href="#quote" className="quote-nav-button" data-quote-modal-trigger onClick={closeMobileNav}>
                Get a Quote
              </a>
            </li>
          </ul>
          <button
            type="button"
            className={`mobile-nav-toggle d-xl-none bi ${isMobileNavOpen ? "bi-x" : "bi-list"}`}
            aria-label={isMobileNavOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMobileNavOpen}
            aria-controls="navmenu"
            onClick={() => setIsMobileNavOpen((current) => !current)}
          />
        </nav>
      </div>
    </div>
  );
}
