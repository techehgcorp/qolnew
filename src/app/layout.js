import "./globals.css";
import Script from "next/script";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import QuoteModal from "@/components/QuoteModal";
import RouteScriptRefresh from "@/components/RouteScriptRefresh";
import TopBar from "@/components/TopBar";

export const metadata = {
  title: {
    default: "Quality Of Life",
    template: "%s | Qol",
  },
  description: "QoL website powered by EHGCorp.",
  keywords: ["Quality Of Life", "QoL", "Insurance", "Healthcare", "Medicare"],
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/assets/img/favicon.png" />
        <link rel="apple-touch-icon" href="/assets/img/apple-touch-icon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap"
        />
        <link rel="stylesheet" href="/assets/vendor/bootstrap/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/assets/vendor/bootstrap-icons/bootstrap-icons.css" />
        <link rel="stylesheet" href="/assets/vendor/aos/aos.css" />
        <link rel="stylesheet" href="/assets/vendor/glightbox/css/glightbox.min.css" />
        <link rel="stylesheet" href="/assets/vendor/fontawesome-free/css/all.min.css" />
        <link rel="stylesheet" href="/assets/vendor/swiper/swiper-bundle.min.css" />
        <link rel="stylesheet" href="/assets/css/main.css" />
      </head>
      <body suppressHydrationWarning>
        <header id="header" className="header fixed-top">
          <TopBar />
          <NavBar />
        </header>
        {children}
        <QuoteModal />
        <Footer />
        <RouteScriptRefresh />
        <a
          href="#!"
          id="scroll-top"
          className="scroll-top d-flex align-items-center justify-content-center"
        >
          <i className="bi bi-arrow-up-short" />
        </a>
        <div id="preloader"></div>
        <Script src="/assets/vendor/bootstrap/js/bootstrap.bundle.min.js" strategy="lazyOnload" />
        <Script src="/assets/vendor/php-email-form/validate.js" strategy="lazyOnload" />
        <Script src="/assets/vendor/aos/aos.js" strategy="lazyOnload" />
        <Script src="/assets/vendor/glightbox/js/glightbox.min.js" strategy="lazyOnload" />
        <Script src="/assets/vendor/purecounter/purecounter_vanilla.js" strategy="lazyOnload" />
        <Script src="/assets/vendor/swiper/swiper-bundle.min.js" strategy="lazyOnload" />
        <Script src="/assets/js/main.js" strategy="lazyOnload" />
      </body>
    </html>
  );
}
