import { CmnComp } from "../../common/CmnComp";
import section07Styles from "./section07.module.css";

const data = {
  title: "Tokens of appreciation",
  header: "Corporate gifts",
  description:
    "Find a variety of gift-giving options, ideal for honouring treasured colleagues and clients. Trained consultants will be pleased to guide your selections and assist with delivery. ",
  button: "Learn more about this service",
};

export const Section07 = () => {
  return (
    <section className={section07Styles.section07}>
      <div>
        <img src="./Images/Aesop_section07_image.jpg" alt="section07" />
      </div>
      <div>
        <CmnComp props={data} />
      </div>
    </section>
  );
};
