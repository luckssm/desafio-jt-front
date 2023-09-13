import CustomBaseImage from "../CustomBaseImage/CustomBaseImage";

const LoaderSpinner = () => {
  return (
    <div className="animate-spin" viewBox="0 0 24 24">
      <CustomBaseImage
        src={"/static/icons/spinner-white.svg"}
        width={18}
        height={18}
      />
    </div>
  );
};

export default LoaderSpinner;
