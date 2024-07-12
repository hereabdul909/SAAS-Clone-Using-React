import React from "react";
import { FooterSec } from "./StyledFooter";
import {
  TiSocialInstagram,
  TiSocialYoutube,
  TiSocialFacebook,
  TiSocialLinkedinCircular,
  TiSocialTwitter,
} from "react-icons/ti";
import { CiPhone, CiMail } from "react-icons/ci";

function Footer() {
  return (
    <FooterSec>
      <div className="container">
        <div className="first-div">
          <img
            src="https://cdn.wewantsaas.com/landing-page/images/SVG/wws_logo.svg"
            width="50px"
            alt="Picture"
          />
          <p>
            Fuel your SaaS business by using the resources, product exposure,
            talent pool, connections, & much more that We Want SaaS has to offe
          </p>
          <div className="icons">
            <span>Follow Us:</span>
            <div className="icons">
              <TiSocialFacebook className="icon" />
              <TiSocialInstagram className="icon" />
              <TiSocialLinkedinCircular className="icon" />
              <TiSocialYoutube className="icon" />
              <TiSocialTwitter className="icon" />
            </div>
          </div>
        </div>
        <ul className="same-div">
          <h4>Quick Links</h4>
          <li>Home</li>
          <li>Category</li>
          <li>Products</li>
          <li>Blogs</li>
          <li>Guides</li>
        </ul>
        <ul className="same-div">
          <h4>Acount</h4>
          <li>Log In</li>
          <li>Privacy & Policy</li>
          <li>Term & Condition</li>
          <li>Staff Augmentation</li>
        </ul>
        <ul className="same-div">
          <h4>Categories</h4>
          <li>Best Software For Retail Business</li>
          <li>AI Software Products For Business</li>
          <li>Best Accounting Software</li>
          <li>Email Security Software</li>
          <li>Presentation Software</li>
        </ul>
        <ul className="last-div">
          <h5> Contact Us</h5>
          <div className="phone">
            <CiPhone />
            <p>+923011234567</p>
          </div>
          <div className="mail">
            <CiMail />
            <p>abc123@gmail.com</p>
          </div>
          <li>
            <img
              src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=431977&theme=neutral"
              alt=""
            />
          </li>
        </ul>
      </div>
      <div className="copyrights">
        <span>© 2024 We Want SaaS. All rights reserved.</span>
      </div>
    </FooterSec>
  );
}

export default Footer;
