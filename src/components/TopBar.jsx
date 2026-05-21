export default function TopBar() {
  return (
    <div className="topbar d-flex align-items-center dark-background">
      <div className="container d-flex justify-content-center justify-content-md-between">
        <div className="contact-info d-flex align-items-center">
          <i className="bi bi-envelope d-flex align-items-center">
            <a href="mailto:contact@example.com">info@qolinsurance.com</a>
          </i>
          <i className="bi bi-phone d-flex align-items-center ms-4">
            <a href="tel:+18447300124">+(844) 730-0124</a>
          </i>
        </div>
        <div className="social-links d-none d-md-flex align-items-center">
          <a
            href="https://www.facebook.com/share/1EaXxabHD4/?mibextid=wwXIfr"
            className="facebook"
            aria-label="QoL Insurance on Facebook"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-facebook" />
          </a>
          <a
            href="https://www.instagram.com/qol_insurance?igsh=MTEwMDg2ZXBjcGp1NA%3D%3D&utm_source=qr"
            className="instagram"
            aria-label="QoL Insurance on Instagram"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-instagram" />
          </a>
        </div>
      </div>
    </div>
  );
}
