import React, { useState } from "react";
import CustomBaseImage from "../CustomBaseImage/CustomBaseImage";

const SearchBar = ({ searchCall }) => {
  const [inputText, setInputText] = useState("");

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const searchHandler = () => {
    searchCall(inputText);
  };

  return (
    <div className="border border-graygray-20 flex items-center h-[48px]">
      <div className="p-2 flex w-full items-center mx-2">
        <CustomBaseImage
          src="/static/icons/pin-location.svg"
          alt="Localização"
          width={24}
          height={24}
        />
        <input
          type="text"
          className="flex-grow py-2 border-none outline-none ml-2"
          placeholder="Busque por cidade"
          onChange={handleInputChange}
        />
      </div>
      <button
        className="border-l border-graygray-20 h-full mr-3 pl-3"
        onClick={searchHandler}
      >
        <CustomBaseImage
          src="/static/icons/search-icon.svg"
          alt="Busca"
          width={24}
          height={24}
        />
      </button>
    </div>
  );
};

export default SearchBar;
