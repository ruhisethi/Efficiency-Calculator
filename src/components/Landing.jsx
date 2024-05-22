import React from 'react';
import "../Landing.css";
import bg1 from "../assets/img/bg.png"
import abanner from "../assets/img/about-banner.png"
import feature1 from "../assets/img/feature-1.png"
import feature2 from "../assets/img/feature-2.png"
import contact from "../assets/img/contact.png"
import { Link } from 'react-router-dom';


function Landing() {
  return (
    <>
      <main>
        <article>
          <section className="hero" id="home">
            <div className="container">
              <div className="header-col1">
                <h5 className="h3 hero-title">WELCOME</h5>
                <h2 className="h1 hero-title">PowerPulse</h2>
                <h2 className="typewrite h2 hero-title"></h2>
                <p className="hero-text">"PowerPulse: Monitor and optimize appliance energy use for cost savings and environmental impact. Get empowered today!"</p>
                <Link to="/energy">
                <button className="btn btn-primary">Get started</button>
                </Link>
              </div>
              <div className="hero-banner"></div>
            </div>
            <img src={bg1} alt="shape" className="shape-content"/>
          </section>

          <section className="about" id="about">
            <div className="container">
              <div className="about-top">
                <h2 className="h2 section-title">What we do</h2>
                <p className="section-text">
                We offer comprehensive energy consumption analysis and optimization solutions tailored to your needs. Empowering efficiency, savings, and sustainability.
                </p>
                <ul className="about-list">
                  <li>
                    <div className="about-card">
                      <div className="card-icon">
                        <ion-icon name="briefcase-outline"></ion-icon>
                      </div>
                      <h3 className="h3 card-title">Analysis Expertise</h3>
                      <p className="card-text">
                      Precision analysis for informed decisions, maximizing efficiency and minimizing waste. Drive smarter energy management.                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="about-card">
                      <div className="card-icon">
                        <ion-icon name="chatbubbles-outline"></ion-icon>
                      </div>
                      <h3 className="h3 card-title">Optimization Solutions</h3>
                      <p className="card-text">
                      Tailored strategies for energy-saving initiatives, optimizing consumption, reducing costs, and enhancing sustainability.                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="about-card">
                      <div className="card-icon">
                        <ion-icon name="rocket-outline"></ion-icon>
                      </div>
                      <h3 className="h3 card-title">Customized Consulting</h3>
                      <p className="card-text">
                      Personalized guidance to streamline operations, implement best practices, and achieve long-term energy efficiency goals.                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="about-bottom">
                <figure className="about-bottom-banner">
                  <img src={abanner} alt="about banner" className="about-banner"/>
                </figure>
                <div className="about-bottom-content">
                  <h2 className="h2 section-title">We’re obsessed with growth</h2>
                  <p className="section-text">
                  With an insatiable appetite for growth, we're committed to innovation and collaboration. Our relentless pursuit of excellence ensures tailored strategies, driving your success in a dynamic, ever-evolving landscape.                  </p>
                  <button className="btn btn-secondary">Sign Up For Free</button>
                </div>
              </div>
            </div>
          </section>

          <section className="features" id="features">
            <div className="container">
              <h2 className="h2 section-title">Our team is made up of all different backgrounds from all over the world.</h2>
              <p className="section-text">
              Our diverse global team brings unique perspectives and expertise, fostering creativity, inclusivity, and innovation to deliver unparalleled solutions for your success.              </p>
              <ul className="features-list">
                <li className="features-item">
                  <figure className="features-item-banner">
                    <img src={feature1} alt="feature banner"/>
                  </figure>
                  <div className="feature-item-content">
                    <h3 className="h2 item-title">Transparent Pricing</h3>
                    <p className="item-text">
                    Clear, upfront pricing structures ensure transparency, helping you make informed decisions and manage your budget effectively.                    </p>
                  </div>
                </li>
                <li className="features-item">
                  <figure className="features-item-banner">
                    <img src={feature2} alt="feature banner"/>
                  </figure>
                  <div className="feature-item-content">
                    <h3 className="h2 item-title">Social Impact Commitment</h3>
                    <p className="item-text">
                    With each transaction, Sequoir contributes a portion of fees to support asset development through our charitable foundation, making a difference globally.                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </section>

          <section className="cta">
            <div className="container">
              <div className="cta-card">
                <h3 className="cta-title">Try for 7 days free</h3>
                <p className="cta-text">
                  Each time a digital asset is purchased or sold, Sequoir donates a percentage of the fees back.
                </p>
                <form id="signup-form" action="#" method="post" className="cta-form">
                  <input type="text" name="name" placeholder="Your Name" required /><br />
                  <input type="email" name="email" placeholder="Your Email Address" required /><br />
                  <button type="submit">Subscribe</button>
                </form>
                <div id="success-message" className="hidden">
                  Thank you for subscribing!
                </div>
              </div>
            </div>
          </section>

          <section className="contact" id="contact">
            <div className="container">
              <div className="contact-content">
                <h2 className="h2 contact-title">Let’s scale your brand, together</h2>
                <figure className="contact-banner">
                  <img src={contact} alt="contact banner"/>
                </figure>
              </div>
              <form action="" className="contact-form">
                <div className="input-wrapper">
                  <label htmlFor="name" className="input-label">Name *</label>
                  <input type="text" name="name" id="name" required placeholder="Type Name" className="input-field"/>
                </div>
                <div className="input-wrapper">
                  <label htmlFor="phone" className="input-label">Phone</label>
                  <input type="tel" name="phone" id="phone" placeholder="Type Phone Number" className="input-field"/>
                </div>
                <div className="input-wrapper">
                  <label htmlFor="email" className="input-label">Email Address *</label>
                  <input type="email" name="email" id="email" required placeholder="Type Email Address" className="input-field"/>
                </div>
                <div className="input-wrapper">
                  <label htmlFor="message" className="input-label">How can we help? *</label>
                  <textarea name="message" id="message" placeholder="Type Description" required className="input-field"></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Send Message</button>
              </form>
            </div>
          </section>
        </article>
      </main>
    </>
  );
}

export default Landing;

let oj1
{
  let arr;
  a1:arr=[1,2,3];

}
