import { BsArrowRight } from "react-icons/bs";
import section01Styles from "./section01.module.css";
import { CmnComp } from "../../common/CmnComp";

const data = {
  header: "Interior fragrances to lift the mood",
  description:
    "Ideal for home or office spaces in need of refreshment, our Home range comprises a number of fragrant preparations, from incense to room sprays.",
  button: "Browse Scented Home",
};

export const Section01 = () => {
  return (
    <section className={section01Styles.section01}>
      <div>
        <div>
          <img src="./Images/Aesop_logo.svg" alt="Aesop_logo" />
        </div>
        <CmnComp props={data} />
      </div>

      <div>
        <img
          src="./Images/Aesop_section01_image02.jpg"
          alt="Aesop_section01_image02"
        />
      </div>

      <div>
        <img
          src="./Images/Aesop_section01_image01.jpg"
          alt="Aesop_section01_image01"
        />
      </div>
    </section>
  );
};
