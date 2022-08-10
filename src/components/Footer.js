import React from "react";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import "../CSS/Footer.css";
import {
  FaFacebook,
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Join the TRVL newsletter to receive our best deals
        </p>
        <p className='footer-subscription-text'>
          You can unsubscribe at any time
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Email'
            />
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div>
      </section>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/hireme'>Testimonials</Link>
            <Link to='/hireme'>Careers</Link>
            <Link to='/hireme'>Investors</Link>
            <Link to='/hireme'>Terms Of Service</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/hireme'>Contact</Link>
            <Link to='/hireme'>Support</Link>
            <Link to='/hireme'>Destinations</Link>
            <Link to='/hireme'>Sponsorships</Link>
          </div>
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/hireme' className='social-logo'>
              TRVL
            </Link>
          </div>
          <small className='website-rights'>TRVL © 2022</small>
          <div className='social-icons'>
            <FaFacebook className='social-icon-link' />
            <FaInstagram className='social-icon-link' />
            <FaYoutube className='social-icon-link' />
            <FaTwitter className='social-icon-link' />
            <FaLinkedin className='social-icon-link' />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
