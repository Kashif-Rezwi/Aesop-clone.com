import { BsArrowRight } from "react-icons/bs";
import cmnCompStyles from "./cmnComp.module.css";

export const CmnComp = ({ props }) => {
  const { title, header, description, button } = props;

  return (
    <div className={cmnCompStyles.cmnComp}>
      {title && <p>{title}</p>}
      <h1>{header}</h1>
      <p>{description}</p>
      <div>
        <p>{button}</p>
        <p>
          <BsArrowRight />
        </p>
      </div>
    </div>
  );
};
