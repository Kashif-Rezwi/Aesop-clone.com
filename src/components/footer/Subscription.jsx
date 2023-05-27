import footerStyles from "./footer.module.css";

export const Subscription = () => {
  return (
    <div className={footerStyles.subscription}>
      <h3>Subscribe to Aesop communications</h3>
      <input type="text" placeholder="Email Address" />
      <div>
        <input type="checkbox" />
        <p>
          Subscribe to receive communications from Aesop about our products and
          services. By subscribing, you confirm you have read and accept our
          privacy policy.
        </p>
      </div>
    </div>
  );
};
