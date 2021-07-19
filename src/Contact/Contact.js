import React from "react";
import "./styles/contact.css";
import Footer from "../Utils/Footer/Footer";
import facebook from "../assets/images/facebook_180.png";
import instagram from "../assets/images/instagram_180.png";
import youtube from "../assets/images/youtube_180.png";
import twitter from "../assets/images/twitter_180.png";

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
                  <textarea id="questions" />
                </div>
              </div>
              <button type="submit">Submit</button>
            </form>
          </div>
          <div className="contact__content-socials">
            <h3>Find Us On Social Media</h3>
            <div className="contact__content-socials-icons">
              <a
                href="https://www.facebook.com/Brooklyn-MAYD-Powersports-411541879008638/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  //src="https://drive.google.com/uc?export=view&id=1-kmF-3BqPkSbelIq9Ig3JPllyjkf2xG1"
                  src={facebook}
                  alt="facebook"
                />
              </a>
              <a
                href="https://www.instagram.com/brooklynmayd_inc/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  //src="https://drive.google.com/uc?export=view&id=1qPeEYNgIbv_Y_Tkuf_ySOtbvF8z7X2tx"
                  src={instagram}
                  alt="instagram"
                />
              </a>
              <a
                href="https://www.youtube.com/channel/UCYo4ucnJUwO-klddf5G9a0g"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  //src="https://drive.google.com/uc?export=view&id=1scIW-RtJ2lES8kZGNFW2PGq_Jq1xb4xC"
                  src={youtube}
                  alt="youtube"
                />
              </a>
              <a
                href="https://twitter.com/katbybrooklynm1"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  //src="https://drive.google.com/uc?export=view&id=1OeAAGw6lJc5o80c9CwEpy6YOd6F5GP2h"
                  src={twitter}
                  alt="twitter"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
