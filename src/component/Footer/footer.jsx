import React from "react";
import "./style.css";

const Footer = () => {
  return (
    <div id="fooTerdivs">
      <div id="fooTer">
        <h1 className="H1">Bewakoof</h1>
        <div className="footerGrid">
          <div>
            <h4>CUSTOMERS SERVICE</h4>
            <p>
              <a href="/">Contact us</a>
            </p>
            <p>
              <a href="/">Track Order</a>
            </p>
            <p>
              <a href="/">Return Order</a>
            </p>
            <p>
              <a href="/">Cancel Order</a>
            </p>
          </div>
          <div>
            <h4>COMPANY</h4>
            <p>
              <a href="/">About us</a>
            </p>
            <p>
              <a href="/">We're Hiring</a>
            </p>
            <p>
              <a href="/">Terms & Conditions</a>
            </p>
            <p>
              <a href="/">Privacy Policy</a>
            </p>
            <p>
              <a href="/">Blog</a>
            </p>
          </div>
          <div>
            <h4>CONNECT WITH US</h4>
            <p>
              <a href="/">4.7M People Like this</a>
            </p>
            <p>
              <a href="/">1M Followers</a>
            </p>
          </div>
          <div>
            <h4>KEEP UP TO DATE</h4>
            <div className="inpbtnFlex">
              <input placeholder="Enter Email id" />
              <button className="bTTn">Subscribe</button>
            </div>
          </div>
          <div>
            <p>
              <a href="/">15 Days return policy</a>
            </p>
            <p>
              <a href="/">Cash on delivery*</a>
            </p>
          </div>
          <div>
            <h4>DOWNLOAD THE APP</h4>
            <div id="imgDivmain">
              <div>
                <a
                  href="https://play.google.com/store/apps/details?id=com.bewakoof.bewakoof&hl=en"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="https://images.bewakoof.com/web/app_android_v1.png"
                    alt=""
                  />
                </a>
              </div>
              <div>
                <a
                  href="https://itunes.apple.com/in/app/bewakoof/id1100190514?mt=8"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="https://images.bewakoof.com/web/app_ios_v1.png"
                    alt=""
                  />
                </a>
              </div>
            </div>
          </div>
          <div>
            <h4>100% SECURE PAYMENT</h4>
            <div>
              <img
                src="https://images.bewakoof.com/web/secure-payments-image.png"
                alt=""
              />
            </div>
          </div>
        </div>

        <hr />
      </div>
    </div>
  );
};

export default Footer;
