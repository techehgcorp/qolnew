"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

function activateTabFromUrl() {
  if (typeof window === "undefined") {
    return;
  }

  const params = new URLSearchParams(window.location.search);
  const tabFromQuery = params.get("tab");
  const hash = tabFromQuery && tabFromQuery.startsWith("departments-tabs-")
    ? `#${tabFromQuery}`
    : window.location.hash;

  if (!hash || !hash.startsWith("#departments-tabs-")) {
    return;
  }

  const targetPane = document.querySelector(hash);
  const targetTab = document.querySelector(`.department-tab[href="${hash}"]`);

  if (!targetPane || !targetTab) {
    return;
  }

  document.querySelectorAll(".department-tab").forEach((tab) => {
    tab.classList.remove("active");
    tab.setAttribute("aria-selected", "false");
  });

  document.querySelectorAll("#specialty-content .tab-pane").forEach((pane) => {
    pane.classList.remove("show", "active");
  });

  targetTab.classList.add("active");
  targetTab.setAttribute("aria-selected", "true");
  targetPane.classList.add("show", "active");
}

export default function ProductDetailsTabSync() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    activateTabFromUrl();

    const onHashChange = () => activateTabFromUrl();

    window.addEventListener("hashchange", onHashChange);

    return () => {
      window.removeEventListener("hashchange", onHashChange);
    };
  }, [pathname, searchParams]);

  return null;
}
