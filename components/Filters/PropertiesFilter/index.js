import CustomBaseImage from "../../CustomBaseImage/CustomBaseImage";
import { FilterCardButton } from "../FilterCardButton";
import { FilterContainer } from "../FilterContainer";

export const PropertiesFilter = () => {
  const containerSelectedStyle = {
    borderColor: "var(--brand-color-blue)",
  };

  const textSelectedStyle = {
    color: "var(--brand-color-blue)",
  };

  return (
    <FilterContainer filterName={"Tipos de propriedade"}>
      <div className="mr-2 w-full mb-2">
        <FilterCardButton
          selectedStyle={containerSelectedStyle}
          isSelected={true}
        >
          <div className="flex items-center w-full">
            <CustomBaseImage
              src={"/static/icons/blue-house.svg"}
              alt={"Ícone casa selecionada"}
              width={18}
              height={18}
            />
            <p className="p3 py-1 ml-3" style={textSelectedStyle}>
              Casa (346)
            </p>
          </div>
        </FilterCardButton>
      </div>
      <div className="mr-2 w-full mb-2">
        <FilterCardButton>
          <div className="flex items-center w-full">
            <CustomBaseImage
              src={"/static/icons/gray-apartment.svg"}
              alt={"Ícone apartamento"}
              width={18}
              height={18}
            />
            <p className="p3 py-1 ml-3 text-graygray-20">Apartamento (234)</p>
          </div>
        </FilterCardButton>
      </div>
      <div className="mr-2 w-full mb-2">
        <FilterCardButton>
          <div className="flex items-center w-full">
            <CustomBaseImage
              src={"/static/icons/gray-hotel-building.svg"}
              alt={"Ícone hotel"}
              width={18}
              height={18}
            />
            <p className="p3 py-1 ml-3 text-graygray-20">Hotel (23)</p>
          </div>
        </FilterCardButton>
      </div>
    </FilterContainer>
  );
};
