import CustomBaseImage from "../CustomBaseImage/CustomBaseImage";
import { findPerkByType } from "../../services/utils/helpers/perks";

const Perk = ({ perkType }) => {
  const perk = findPerkByType({ perkType });

  const PerkIcon = () => {
    return (
      perk && (
        <div className="mr-2">
          <CustomBaseImage src={perk.iconPath} width={18} height={18} />
        </div>
      )
    );
  };
  return (
    <div className="flex justify-center items-center">
      <PerkIcon />
      <p className="p3 text-graygray-40">{perk?.name}</p>
    </div>
  );
};

export default Perk;
