import { FilterContainer } from "../FilterContainer";
import { Checkbox } from "../../Checkbox";

export const AmenitiesFilter = () => {
  return (
    <FilterContainer filterName={"Comodidades"}>
      <div className="mb-3">
        <Checkbox label={"Wi-Fi"} />
      </div>
      <div className="mb-3">
        <Checkbox label={"Cozinha"} />
      </div>
      <div className="mb-3">
        <Checkbox label={"Máquina de Lavar"} />
      </div>
      <div className="mb-3">
        <Checkbox label={"Ar-condicionado"} />
      </div>
      <div className="mb-3">
        <Checkbox label={"Secadora"} />
      </div>
    </FilterContainer>
  );
};
