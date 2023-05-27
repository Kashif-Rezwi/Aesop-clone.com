import carouselStyles from "./productCarousel.module.css";
import { BsArrowRight } from "react-icons/bs";

export const PreProduct = () => {
  return (
    <div className={carouselStyles.preProduct}>
      <div>
        <p>For the home</p>
        <h1>Domestic pleasures</h1>
      </div>
      <div>
        <p>
          Our range of aromatic formulations for the home are practical and
          pleasing in equal measure.
        </p>

        <div>
          <p>See all Home</p>
          <BsArrowRight />
        </div>
      </div>
    </div>
  );
};
