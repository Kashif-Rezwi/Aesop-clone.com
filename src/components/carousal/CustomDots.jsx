export const CustomDots = ({
  totalDots,
  currentSlide,
  setCurrentSlide,
  dotLength,
}) => {
  const barWidth = `calc(${dotLength} / ${totalDots.length})`;
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          margin: "10px 0px",
        }}
      >
        {totalDots.map((dot, index) => (
          <div
            key={index}
            onClick={() => setCurrentSlide(index)}
            style={{
              width: barWidth,
              height: "2.8px",
              margin: "0px",
              backgroundColor: index === currentSlide ? "black" : "#cccbc2",
              transition: "0.3s",
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};
