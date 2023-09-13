const FilterName = ({ filterName }) => {
  return <p className="p22 text-brand-color-black mb-2">{filterName}</p>;
};

export const FilterContainer = ({ filterName, children }) => {
  return (
    <div className="border-t border-graygray-10 pt-6 mb-6">
      <FilterName filterName={filterName} />
      {children}
    </div>
  );
};
