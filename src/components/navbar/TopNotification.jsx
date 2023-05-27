import { GoPlus } from "react-icons/go";
import navbarStyles from "./navbar.module.css";
export const TopNotification = () => {
  return (
    <section className={navbarStyles.topNotification}>
      <div>
        <p>
          Click and Collect is now available at select stores. Enjoy
          complimentary carbon neutral shipping on all orders.
        </p>

        <p>
          <GoPlus />
        </p>
      </div>
    </section>
  );
};
