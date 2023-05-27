import { CmnComp } from "../../common/CmnComp";
import section04Styles from "./section04.module.css";

const data = {
  title: "Aboard a floral tapestry",
  header: "Gloam Eau de Parfum",
  description:
    "Sink into folds of Mimosa, Saffron and Iris—a sumptuous blend to invoke introspection.",
  button: "Discover Gloam",
};

export const Section04 = () => {
  return (
    <section className={section04Styles.section04}>
      <div>
        <img src="./Images/Aesop_section04_image.avif" alt="section04" />
      </div>
      <div>
        <CmnComp props={data} />
      </div>
    </section>
  );
};
