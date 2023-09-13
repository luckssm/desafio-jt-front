import CustomBaseImage from "../CustomBaseImage/CustomBaseImage";

const CardImageOptions = ({ onFavoriteClick }) => {
  return (
    <div className="absolute flex justify-between w-full top-2 px-4">
      <div className="bg-graygray-00 rounded-full shadow-shadow-s py-1 px-3">
        <p className="p4 text-brand-color-black">Ingresso</p>
      </div>
      <button>
        <CustomBaseImage
          src={"/static/icons/heart-icon.svg"}
          alt={"Ícone adicionar aos favoritos"}
          width={24}
          height={24}
        />
      </button>
    </div>
  );
};

export default CardImageOptions;
