import React from 'react';
import "../Landing.css";
import navlogo from "../assets/img/logonav1.png"
function Footer() {
  return (
    <>
      <footer>
        <div className="footer-top">
          <div className="container">
            <div className="footer-brand">
              <a href="#" className="logo">
                <img src={navlogo} alt="marqle logo" />
              </a>
              <p className="footer-text">Follow us on</p>
              <ul className="social-list">
                <li>
                  <a href="#" className="social-link">
                    <ion-icon name="logo-github"></ion-icon>
                  </a>
                </li>
                <li>
                  <a href="#" className="social-link">
                    <ion-icon name="logo-instagram"></ion-icon>
                  </a>
                </li>
                <li>
                  <a href="#" className="social-link">
                    <ion-icon name="logo-linkedin"></ion-icon>
                  </a>
                </li>
                <li>
                  <a href="#" className="social-link">
                    <ion-icon name="logo-facebook"></ion-icon>
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-link-box">
              <ul className="footer-link-list">
                <li>
                  <h3 className="h4 link-title">Company</h3>
                </li>
                <li>
                  <a href="#" className="footer-link">About Us</a>
                </li>
                <li>
                  <a href="#" className="footer-link">Features</a>
                </li>
                <li>
                  <a href="#" className="footer-link">Pricing</a>
                </li>
              </ul>
              <ul className="footer-link-list">
                <li>
                  <h3 className="h4 link-title">Products</h3>
                </li>
                <li>
                  <a href="#" className="footer-link">Blog</a>
                </li>
                <li>
                  <a href="#" className="footer-link">Help Center</a>
                </li>
                <li>
                  <a href="#" className="footer-link">Contact</a>
                </li>
              </ul>
              <ul className="footer-link-list">
                <li>
                  <h3 className="h4 link-title">Resources</h3>
                </li>
                <li>
                  <a href="#" className="footer-link">FAQ’S</a>
                </li>
                <li>
                  <a href="#" className="footer-link">Testimonial</a>
                </li>
                <li>
                  <a href="#" className="footer-link">Terms & Conditions</a>
                </li>
              </ul>
              <ul className="footer-link-list">
                <li>
                  <h3 className="h4 link-title">Relevant</h3>
                </li>
                <li>
                  <a href="#" className="footer-link">Why</a>
                </li>
                <li>
                  <a href="#" className="footer-link">Products</a>
                </li>
                <li>
                  <a href="#" className="footer-link">Customers</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="copyright">
            &copy; 2023 <a href="#">@kumarayan</a> All right reserved
          </p>
        </div>
      </footer>
      <a href="/#top" className="go-top active" data-go-top>
   
    <p>&uarr;</p>
  </a>

    </>
  );
}

export default Footer;
