import "./Footer.css";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content"></div>

        <div className="footer-bottom">
          <p>
            &copy; {year} Georgina Sanchez. All rights reserved. | Designed by{" "}
            <a
              href="https://fullpc.com.ar"
              className="footer-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              fullpc.com.ar
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
