import CustomBaseImage from "../../CustomBaseImage/CustomBaseImage";
import LoaderSpinner from "../../LoaderSpinner";

const PrimaryButton = ({
  buttonText,
  iconType,
  onButtonClick,
  isWhiteLabelPrimary,
  customButtonStyle,
  customTextStyle,
  isLoading,
  dataTest,
}) => {
  const ButtonIcon = () => {
    return (
      iconType === "right-arrow" && (
        <div className="ml-3">
          <CustomBaseImage src={"/static/icons/arrow-right.svg"} />
        </div>
      )
    );
  };

  return (
    <button
      className="flex bg-brand-color-blue py-3 px-2 justify-center items-center w-full rounded-sm"
      style={customButtonStyle}
      onClick={() => !isLoading && onButtonClick()}
      data-test={dataTest}
    >
      {isLoading ? (
        <>
          <LoaderSpinner />
        </>
      ) : (
        <>
          <p className="p3 text-white" style={customTextStyle}>
            {buttonText}
          </p>
          <ButtonIcon />
        </>
      )}
    </button>
  );
};

export default PrimaryButton;
