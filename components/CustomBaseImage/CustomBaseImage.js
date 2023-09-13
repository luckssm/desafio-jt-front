const CustomBaseImage = ({
  src,
  alt,
  width,
  height,
  minWidth,
  minHeight,
  maxWidth,
  maxHeight,
}) => {
  return (
    <div
      className="flex relative items-center"
      style={{
        width,
        height,
        minWidth,
        minHeight,
        maxWidth,
        maxHeight,
        flexShrink: 0,
      }}
    >
      <img src={src} alt={alt} />
    </div>
  );
};

export default CustomBaseImage;
