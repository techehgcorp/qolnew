"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

function resetMobileNavState() {
  if (typeof window === "undefined") {
    return;
  }

  const body = document.body;
  const mobileToggle = document.querySelector(".mobile-nav-toggle");

  body.classList.remove("mobile-nav-active");
  body.style.overflow = "";

  document.documentElement.style.overflow = "";

  if (mobileToggle) {
    mobileToggle.classList.add("bi-list");
    mobileToggle.classList.remove("bi-x");
  }

  document.querySelectorAll(".navmenu .dropdown-active").forEach((element) => {
    element.classList.remove("dropdown-active");
  });

  document.querySelectorAll(".navmenu .active").forEach((element) => {
    if (element.classList.contains("toggle-dropdown")) {
      element.classList.remove("active");
    }
  });
}

function initPureCounter() {
  if (typeof window === "undefined" || typeof window.PureCounter !== "function") {
    return false;
  }

  const counters = document.querySelectorAll(".purecounter");

  if (!counters.length) {
    return true;
  }

  counters.forEach((counter) => {
    if (!counter.textContent.trim()) {
      counter.textContent = "0";
    }
  });

  new window.PureCounter();
  return true;
}

export default function RouteScriptRefresh() {
  const pathname = usePathname();

  useEffect(() => {
    resetMobileNavState();

    let attempts = 0;
    let timeoutId;

    const run = () => {
      if (initPureCounter() || attempts >= 20) {
        return;
      }

      attempts += 1;
      timeoutId = window.setTimeout(run, 150);
    };

    timeoutId = window.setTimeout(run, 0);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [pathname]);

  useEffect(() => {
    const unlockDesktopScroll = () => {
      if (window.innerWidth >= 1200) {
        resetMobileNavState();
      }
    };

    window.addEventListener("resize", unlockDesktopScroll);
    window.addEventListener("wheel", unlockDesktopScroll, { passive: true });

    return () => {
      window.removeEventListener("resize", unlockDesktopScroll);
      window.removeEventListener("wheel", unlockDesktopScroll);
    };
  }, []);

  return null;
}
