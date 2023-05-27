import { ImgCarousel } from "../../carousal/ImgCarousel";
import { CmnComp } from "../../common/CmnComp";
import section08Styles from "./section08.module.css";

const Images = [
  { imgSrc: "./Images/Aesop_section08_image01.jpg" },
  { imgSrc: "./Images/Aesop_section08_image02.avif" },
  { imgSrc: "./Images/Aesop_section08_image03.jpg" },
];

const data = {
  header: "Store locator",
  description:
    "Our consultants are available to host you in-store and provide tailored guidance on gift purchases. ",
  button: "Find a nearby store",
};

export const Section08 = () => {
  return (
    <section className={section08Styles.section08}>
      <div>
        <CmnComp props={data} />
      </div>
      <div>
        <ImgCarousel Images={Images} />
      </div>
    </section>
  );
};
