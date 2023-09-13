import CustomBaseImage from "../../CustomBaseImage/CustomBaseImage";
import { FilterCardButton } from "../FilterCardButton";
import { FilterContainer } from "../FilterContainer";

export const StarsFilter = () => {
  const Star = () => {
    return (
      <CustomBaseImage
        src={"/static/icons/star.svg"}
        alt={"Ícone de estrela"}
        width={18}
        height={17}
      />
    );
  };

  const renderStars = (starsNumber) => {
    const stars = [];

    for (let i = 0; i < starsNumber; i++) {
      stars.push(
        <div key={i} className="mr-1">
          <Star />
        </div>,
      );
    }

    return <div className="flex">{stars}</div>;
  };

  return (
    <FilterContainer filterName={"Tipo de propriedade"}>
      <div className="flex mb-2">
        <div className="mr-2 w-full">
          <FilterCardButton>
            <div className="flex items-center">
              {renderStars(5)}
              <p className="p3 text-graygray-40 ml-1">(134)</p>
            </div>
          </FilterCardButton>
        </div>
        <div className="w-full">
          <FilterCardButton>
            <div className="flex items-center">
              {renderStars(4)}
              <p className="p3 text-graygray-40 ml-1">(134)</p>
            </div>
          </FilterCardButton>
        </div>
      </div>
      <div className="flex">
        <div className="mr-2 w-full">
          <FilterCardButton>
            <div className="flex items-center">
              {renderStars(3)}
              <p className="p3 text-graygray-40 ml-1">(72)</p>
            </div>
          </FilterCardButton>
        </div>
        <div className="mr-2 w-full">
          <FilterCardButton>
            <div className="flex items-center">
              {renderStars(2)}
              <p className="p3 text-graygray-40 ml-1">(75)</p>
            </div>
          </FilterCardButton>
        </div>
        <div className="w-full">
          <FilterCardButton>
            <div className="flex items-center">
              {renderStars(2)}
              <p className="p3 text-graygray-40 ml-1">(07)</p>
            </div>
          </FilterCardButton>
        </div>
      </div>
    </FilterContainer>
  );
};
