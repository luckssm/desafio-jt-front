import { FilterContainer } from "../FilterContainer";
import { FilterCardButton } from "../FilterCardButton";

export const PricesFilter = () => {
  const containerSelectedStyle = {
    backgroundColor: "var(--brand-color-blue)",
  };

  const textSelectedStyle = {
    color: "var(--graygray-00)",
  };

  return (
    <FilterContainer filterName={"Preço"}>
      <div className="flex mb-2">
        <div className="mr-2 w-full">
          <FilterCardButton
            selectedStyle={containerSelectedStyle}
            isSelected={true}
          >
            <p className="p3 py-1" style={textSelectedStyle}>
              R$ 10,00 - R$ 390,00
            </p>
          </FilterCardButton>
        </div>
        <div className="w-full">
          <FilterCardButton>
            <p className="p3 text-graygray-20 py-1">R$ 10,00 - R$ 390,00</p>
          </FilterCardButton>
        </div>
      </div>
      <div className="flex">
        <div className="mr-2 w-full">
          <FilterCardButton>
            <p className="p3 text-graygray-20 py-1">R$ 10,00 - R$ 390,00</p>
          </FilterCardButton>
        </div>
        <div className="w-full">
          <FilterCardButton>
            <p className="p3 text-graygray-20 py-1">R$ 10,00 - R$ 390,00</p>
          </FilterCardButton>
        </div>
      </div>
    </FilterContainer>
  );
};
