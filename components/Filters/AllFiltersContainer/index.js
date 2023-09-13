import CustomBaseImage from "../../CustomBaseImage/CustomBaseImage";
import { FilterContainer } from "../FilterContainer";
import { PropertiesFilter } from "../PropertiesFilter";
import { PricesFilter } from "../PricesFilter";
import { StarsFilter } from "../StarsFilter";
import { AmenitiesFilter } from "../AmenitiesFilter";
import { ReviewsFilter } from "../ReviewsFilter";

export const AllFiltersContainer = () => {
  return (
    <>
      <div className="flex justify-between mb-2">
        <h2 className="text-brand-color-black">Filtro</h2>
        <button>
          <p className="p3 text-brand-color-blue">Limpar todos os filtros</p>
        </button>
      </div>
      <PricesFilter />
      <StarsFilter />
      <AmenitiesFilter />
      <PropertiesFilter />
      <ReviewsFilter />
    </>
  );
};
