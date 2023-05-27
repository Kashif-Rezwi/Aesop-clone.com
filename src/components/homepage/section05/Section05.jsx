import { CmnComp } from "../../common/CmnComp";
import section05Styles from "./section05.module.css";

const data = {
  title: "A helping hand",
  header: "The Gift Finder",
  description:
    "A tool that allows for swift and easy navigation of our range, which can now be sorted according to a variety of playful personal criteria.",
  button: "Discover the Gift Finder",
};

export const Section05 = () => {
  return (
    <section className={section05Styles.section05}>
      <div>
        <CmnComp props={data} />
      </div>
      <div>
        <img src="./Images/Aesop_section05_image.gif" alt="section05" />
      </div>
    </section>
  );
};
