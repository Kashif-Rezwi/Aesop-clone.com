import { Box } from "@chakra-ui/react";
import { RiArrowRightSLine } from "react-icons/ri";

export const NextButton = (props) => {
  const { onClick } = props;
  return (
    <>
      <Box
        bg={"#333"}
        p={"15px "}
        zIndex={"10"}
        position={"absolute"}
        top={"50%"}
        right={"0px"}
        onClick={onClick}
        boxShadow={
          "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px"
        }
      >
        <RiArrowRightSLine fontSize={"30px"} color="white" />
      </Box>
    </>
  );
};
