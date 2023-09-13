export const Checkbox = ({ isSelected, setIsSelected, label }) => {
  return (
    <div>
      <button className="flex items-center">
        <div className="border-2 border-graygray-40 rounded-sm w-[20px] h-[20px] mr-3"></div>
        <p className="p3 text-brand-color-black">{label}</p>
      </button>
    </div>
  );
};
