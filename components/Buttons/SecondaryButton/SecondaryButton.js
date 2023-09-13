import CustomBaseImage from "../../CustomBaseImage/CustomBaseImage";

const SecondaryButton = ({ buttonText, iconType, onButtonClick }) => {
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
      className="flex bg-graygray-00 py-3 px-4 justify-center items-center w-full h-full rounded-sm"
      onClick={onButtonClick}
    >
      <p className="p3 text-supportsupport-01">{buttonText}</p>
      <ButtonIcon />
    </button>
  );
};

export default SecondaryButton;
