import CustomBaseImage from "../CustomBaseImage/CustomBaseImage";
const LocationInfoText = ({ locationText }) => {
  return (
    <div className="flex items-center">
      <CustomBaseImage
        src="/static/icons/pin-location.svg"
        alt="Localização"
        width={24}
        height={24}
      />
      <p className="p3 ml-2 text-supportsupport-05">{locationText}</p>
    </div>
  );
};

export default LocationInfoText;
