import carouselStyles from "./productCarousel.module.css";

export const Products = ({ props }) => {
  const { image, title, description } = props;
  return (
    <div className={carouselStyles.product}>
      <img src={image} alt={title} />
      <div>
        <p>{title}</p>
        <p>{description}</p>
      </div>
    </div>
  );
};
