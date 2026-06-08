import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-dark text-white text-center p-4">

      <p>© 2026 MediCare Hospital. All Rights Reserved.</p>

      <div>
        <Link
          to="/privacy-policy"
          className="text-white text-decoration-none me-3"
        >
          Privacy Policy
        </Link>

        <Link
          to="/terms"
          className="text-white text-decoration-none me-3"
        >
          Terms & Conditions
        </Link>

        <Link
          to="/contact"
          className="text-white text-decoration-none"
        >
          Contact Us
        </Link>
      </div>

    </footer>
  );
}

export default Footer;