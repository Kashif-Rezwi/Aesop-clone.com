import { Subscription } from "./Subscription";
import footerStyles from "./footer.module.css";
import { FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";

export const Footer = () => {
  return (
    <>
      <section className={footerStyles.footer}>
        <Subscription />
        <div>
          <div>
            <h3>Subscribe to Aesop communications</h3>
            <input type="text" placeholder="Email Address" />
            <div>
              <input type="checkbox" />
              <p>
                Subscribe to receive communications from Aesop about our
                products and services. By subscribing, you confirm you have read
                and accept our privacy policy.
              </p>
            </div>
          </div>

          <div>
            <h3>Orders and support</h3>
            <p>Contact us</p>
            <p>FAQs </p>
            <p>Shipping </p>
            <p>Returns </p>
            <p>Order history</p>
            <p>Terms and conditions</p>
          </div>
          <div>
            <h3>Services</h3>
            <p>Live assistance</p>
            <p>Corporate gifts</p>
            <p>Facial Appointments</p>
            <p>Click and Collect</p>
            <p>Video consultation</p>
          </div>
          <div>
            <h3>Location preferences</h3>
            <p>Shipping:</p>
            <a href="#">Hong Kong SAR, China</a>
            <p>Language:</p>
            <a href="#">English</a>
            <p>繁體中文</p>
          </div>
          <div>
            <h3>Sustainability</h3>
            <p>
              All Aesop products are vegan, and we do not test our formulations
              or ingredients on animals. We are Leaping Bunny approved and a
              Certified B Corporation. Learn more
            </p>
          </div>
          <div>
            <h3>About</h3>
            <p>Our story</p>
            <p>Foundation</p>
            <p>Careers</p>
            <p>Privacy policy</p>
            <p>Accessibility</p>
            <p>Cookie Policy</p>
          </div>
          <div>
            <h3>Social media</h3>
            <p>Instagram </p>
            <p>Twitter </p>
            <p>LinkedIn </p>
            <p>WeChat</p>
            <p>Weibo </p>
          </div>
        </div>
      </section>
      <section className={footerStyles.footerEnd}>
        <p>© Aesop</p>
        <div>
          <FaInstagram />
          <FaTwitter />
          <FaLinkedinIn />
        </div>
      </section>
    </>
  );
};
