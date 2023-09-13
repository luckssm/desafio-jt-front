import React from "react";

import CustomBaseImage from "../CustomBaseImage/CustomBaseImage";
import CardImageOptions from "../CardImageOptions";
import ReviewRating from "../ReviewRating";
import PrimaryButton from "../Buttons/PrimaryButton/PrimaryButton";
import LocationInfoText from "../LocationInfoText";

const TicketCard = ({
  attractionTitle,
  attractionLocation,
  attractionPriceBefore,
  attractionPriceNow,
  attractionImage,
  attractionImageAlt,
  onButtonClick,
}) => {
  return (
    <div className=" bg-graygray-00 shadow-shadow-s w-full flex">
      <div className="relative">
        <CustomBaseImage
          src={attractionImage}
          alt={attractionImageAlt}
          minWidth={200}
          maxWidth={250}
        />
        <CardImageOptions />
      </div>
      <div className="w-full flex">
        <div className="w-2/3 pt-8 px-6">
          <h3 className="mb-2" data-test={"ticket-name"}>
            {attractionTitle}
          </h3>
          <LocationInfoText locationText={attractionLocation} />
          <div className="mt-11">
            <ReviewRating reviewNote={6.3} reviewAmount={421} />
          </div>
        </div>
        <div className="w-1/3 py-6 pr-6">
          <div className="border-l border-graygray-20 h-full py-6 pl-6">
            <div>
              <p className="p3 text-graygray-50">
                de R$ {attractionPriceBefore} por
              </p>
              <div className="flex">
                <p className="p3 text-brand-color-black mr-1">R$</p>
                <h2 className="">{attractionPriceNow}</h2>
              </div>
            </div>
            <div className="mt-6">
              <PrimaryButton
                buttonText={"Saber mais"}
                iconType={"right-arrow"}
                onButtonClick={onButtonClick}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketCard;
