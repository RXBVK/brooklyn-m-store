import React from "react";
import "./styles/contact.css";
import Footer from "../Utils/Footer/Footer";

export default function Contact() {
  return (
    <>
      <div className="contact__container">
        <h2>Contact Us</h2>
        <div className="contact__content">
          <div className="contact__content-form">
            <h3>Send Us A Message</h3>
            <form>
              <div className="contact__content-form-inputs">
                <div>
                  <label htmlFor="firstName">First Name</label>
                  <input type="text" id="firstName" />
                </div>
                <div>
                  <label htmlFor="lastName">Last Name</label>
                  <input type="text" id="lastName" />
                </div>
                <div>
                  <label htmlFor="phoneNumber">Phone Number</label>
                  <input type="text" id="phoneNumber" />
                </div>
                <div>
                  <label htmlFor="email">Email</label>
                  <input type="text" id="email" />
                </div>
                <div id="questions-wrap">
                  <label htmlFor="questions">Comments/Questions</label>
                  <input type="text" id="questions" />
                </div>
              </div>
              <button type="submit">Submit</button>
            </form>
          </div>
          <div className="contact__content-socials">
            <h2>Find Us On Social Media</h2>
            <div className="contact__content-socials-icons">
              <img
                src="https://drive.google.com/uc?export=view&id=1-kmF-3BqPkSbelIq9Ig3JPllyjkf2xG1"
                alt="facebook"
              />
              <img
                src="https://drive.google.com/uc?export=view&id=1qPeEYNgIbv_Y_Tkuf_ySOtbvF8z7X2tx"
                alt="instagram"
              />
              <img
                src="https://drive.google.com/uc?export=view&id=1scIW-RtJ2lES8kZGNFW2PGq_Jq1xb4xC"
                alt="youtube"
              />
              <img
                src="https://drive.google.com/uc?export=view&id=1OeAAGw6lJc5o80c9CwEpy6YOd6F5GP2h"
                alt="twitter"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
