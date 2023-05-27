import { PreProduct } from "../../carousal/PreProduct";
import { ProductCarousel } from "../../carousal/ProductCarousel";
import section02Styles from "./section02.module.css";

const products = [
  {
    title: "Post-Poo Drops",
    description: "A botanical bathroom deodoriser",
    image: "./Images/Aesop_product01.avif",
  },
  {
    title: "Aganice Aromatique Candle",
    description: "Cardamom, Mimosa, Tobacco",
    image: "./Images/Aesop_product02.webp",
  },
  {
    title: "Ptolemy Aromatique Candle",
    description: "A sensuous blend of leather, smoke and wood",
    image: "./Images/Aesop_product02.webp",
  },
  {
    title: "Callippus Aromatique Candle",
    description: "A marriage of deep greens and earthy spices",
    image: "./Images/Aesop_product02.webp",
  },
  {
    title: "Bronze Incense Holder",
    description: "Suited to any interior ",
    image: "./Images/Aesop_product03.webp",
  },
  {
    title: "Murasaki Aromatique Incense",
    description: "For those who favour aromas of warm spice ",
    image: "./Images/Aesop_product04.webp",
  },
  {
    title: "Kagerou Aromatique Incense",
    description: "For those particularly partial to Vetiver ",
    image: "./Images/Aesop_product04.webp",
  },
  {
    title: "Sarashina Aromatique Incense",
    description: "For those particularly partial to Sandalwood ",
    image: "./Images/Aesop_product04.webp",
  },
];

export const Section02 = () => {
  return (
    <section className={section02Styles.section02}>
      <div>
        <PreProduct />
      </div>
      <ProductCarousel products={products} showPreProd={true} />
    </section>
  );
};
