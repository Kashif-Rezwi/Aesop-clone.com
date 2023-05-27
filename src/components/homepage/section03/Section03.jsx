import { CmnComp } from "../../common/CmnComp";
import section03Styles from "./section03.module.css";

const data = {
  title: "Habitat",
  header: "A guide to home fragrance",
  description:
    "An aroma has the power to evoke any destination—geographical, temporal, or emotional. Our Aromatique Incense, Candles and Room Sprays are each crafted to inspirit the abode, and the mind. ",
  button: "Read More",
};

export const Section03 = () => {
  return (
    <section className={section03Styles.section03}>
      <div>
        <CmnComp props={data} />
      </div>
      <div>
        <img src="./Images/Aesop_section03_image.jpg" alt="section03" />
      </div>
    </section>
  );
};
