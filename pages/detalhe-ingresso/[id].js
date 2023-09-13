import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";

import {
  getTicketById,
  getTicketValueByDateAndTicketId,
  addItemsToCart,
} from "../../services/api/apiCalls";

import { centsToText } from "../../services/utils/helpers/money";
import { setCart } from "../../redux/slices/cartSlice";

import Header from "../../components/Header";
import CustomBaseImage from "../../components/CustomBaseImage/CustomBaseImage";
import LocationInfoText from "../../components/LocationInfoText";
import SecondaryButton from "../../components/Buttons/SecondaryButton/SecondaryButton";
import ReviewRating from "../../components/ReviewRating";
import Perk from "../../components/Perk";
import PrimaryButton from "../../components/Buttons/PrimaryButton/PrimaryButton.js";

export default function Ingresso() {
  const router = useRouter();
  const ticketId = router.query.id;

  const dispatch = useDispatch();

  const goBack = () => {
    router.back();
  };

  const [ticketData, setTicketData] = useState({});
  const [ticketValuesData, setTicketValuesData] = useState([]);

  const [isAddTicketToCartButtonLoading, setIsAddTicketToCartButtonLoading] =
    useState(false);

  useEffect(() => {
    const getTicketData = async () => {
      getTicketById(ticketId)
        .then((res) => {
          if (res.data) {
            const ticketInfo = res.data?.data?.getTicket;
            setTicketData(ticketInfo);
          }
        })
        .catch((err) => console.error("err: ", err));
    };

    const getTicketValues = async () => {
      // TODO: Change fixed date to get user selected input date
      getTicketValueByDateAndTicketId({ ticketId, date: "2023-10-08" })
        .then((res) => {
          if (res.data) {
            const ticketValues =
              res.data?.data?.getTicketValueByDateAndTicketId;
            if (ticketValues) {
              setTicketValuesData(ticketValues);
            }
          }
        })
        .catch((err) => console.error("err: ", err));
    };

    if (ticketId) {
      getTicketData();
      getTicketValues();
    }
  }, [ticketId]);

  const renderPerk = () => {
    return (
      <div className="mr-4">
        <Perk perkType={ticketData?.perks} />
      </div>
    );
  };

  const resolveSelectedTicketValues = () => {
    const ticketValuesLength = ticketValuesData.length;
    if (ticketValuesLength === 0) {
      return "Sem Ingressos selecionados.";
    }

    if (ticketValuesLength === 1) {
      return "01 Ingresso";
    }

    if (ticketValuesLength < 10) {
      return `0${ticketValuesLength} Ingressos`;
    }

    return `${ticketValuesLength} Ingressos`;
  };

  // Array to test more than one perk
  // const perks = ["airline-ticket", "wi-fi", "breakfast", "room"];

  // TODO: when perks are returned as an array, use this code snippet
  // const renderPerks = () => {
  //   return perks.map((perk, key) => {
  //     return (
  //       <div className="mr-4" key={key}>
  //         <Perk perkType={perk} />
  //       </div>
  //     );
  //   });
  // };

  const resolveTicketType = ({ ticketType }) => {
    if (ticketType === "Adult") {
      return "adulto";
    }
    return "infantil";
  };

  // TODO: Add ticket dynamic amount
  const TicketDetails = ({ ticketValue }) => {
    return (
      <div className="flex justify-between mb-3">
        <p className="p2 text-graygray-40">
          01 Ingresso {resolveTicketType({ ticketType: ticketValue.type })}
        </p>
        <p className="p2 text-graygray-40">{centsToText(ticketValue.value)}</p>
      </div>
    );
  };

  const renderSelectedTicketValues = () => {
    return ticketValuesData.map((ticketValue, index) => {
      return <TicketDetails ticketValue={ticketValue} key={index} />;
    });
  };

  const calculateTotalTicketValue = () => {
    let totalValue = 0;
    ticketValuesData.forEach((ticketValue) => {
      totalValue += ticketValue.value;
    });
    return totalValue;
  };

  const handleAddTicketToCart = async () => {
    setIsAddTicketToCartButtonLoading(true);
    let ticketValueIds = [];
    ticketValuesData.forEach((ticketValue) => {
      ticketValueIds.push(ticketValue.id);
    });

    await addItemsToCart({ ticketValueIds })
      .then((res) => {
        if (res.data) {
          dispatch(setCart(res.data?.data?.addCartItems));
        }
      })
      .finally(() => setIsAddTicketToCartButtonLoading(false));
  };

  return (
    <>
      <Header />
      <div className="px-[60px] py-6 bg-graygray-05 min-h-screen">
        <div className="flex mb-9">
          <button className="self-start mr-4" onClick={goBack}>
            <CustomBaseImage
              src={"/static/icons/back-arrow.svg"}
              alt={"Botão de voltar"}
              minWidth={24}
              maxWidth={24}
            />
          </button>
          <div>
            <h3 className="mb-2" data-test={"ticket-name-details"}>
              {ticketData?.name}
            </h3>
            <LocationInfoText locationText={ticketData?.city?.name} />
          </div>
        </div>
        <div className="relative mb-9">
          <CustomBaseImage
            src={"/static/images/attraction-cover.jpg"}
            alt={"Imagem de capa"}
          />
          <div className="absolute flex w-full top-2 px-2 justify-end">
            <div>
              <SecondaryButton buttonText={"Visualizar mais fotos"} />
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="w-4/6">
            <div className="mb-6">
              {/* TODO: Get ratings from backend when we have this information */}
              <ReviewRating reviewNote={6.3} reviewAmount={421} />
            </div>
            <div className="flex mb-8">{renderPerk()}</div>
            <div className="mb-6">
              <h3 className="text-brand-color-black mb-2">
                Sobre o Ingresso selecionado:
              </h3>
              <p className="p2 text-graygray-40">{ticketData?.details}</p>
            </div>
            <div>
              <h3 className="text-brand-color-black mb-2">Localização</h3>
              {/* TODO: Get image url from backend when we have this field */}
              <CustomBaseImage
                src={"/static/images/attraction-location-map.jpg"}
                alt={"Mapa localização"}
              />
            </div>
          </div>
          <div className="w-2/6 pl-9">
            <div className="bg-graygray-00 p-6 pt-8 rounded-md">
              <div className="border-b border-graygray-10 pl-1 pb-6 mb-6 flex justify-between">
                <div className="flex">
                  <CustomBaseImage
                    src={"/static/icons/calendar-date-list.svg"}
                    alt={"Ícone Calendário"}
                    width={24}
                    height={24}
                  />
                  <div className="ml-4">
                    <p className="p22 text-brand-color-black mb-1">
                      Data do Ingresso
                    </p>
                    {/* TODO: change to the correct selected date */}
                    <p className="p2 text-graygray-40">08/10/2023</p>
                  </div>
                </div>
                <div>
                  <CustomBaseImage
                    src={"/static/icons/arrow-down.svg"}
                    alt={"Ícone seta expandir"}
                    width={24}
                    height={24}
                  />
                </div>
              </div>
              <div className="border-b border-graygray-10 pl-1 pb-6 mb-6 flex justify-between">
                <div className="flex">
                  <CustomBaseImage
                    src={"/static/icons/profile.svg"}
                    alt={"Ícone Calendário"}
                    width={24}
                    height={24}
                  />
                  <div className="ml-4">
                    <p className="p22 text-brand-color-black mb-1">Ingressos</p>
                    <p className="p2 text-graygray-40">
                      {resolveSelectedTicketValues()}
                    </p>
                  </div>
                </div>
                <div>
                  <CustomBaseImage
                    src={"/static/icons/arrow-down.svg"}
                    alt={"Ícone seta expandir"}
                    width={24}
                    height={24}
                  />
                </div>
              </div>
              <div className="border-b border-graygray-10 pb-4 mb-6">
                {renderSelectedTicketValues()}
              </div>
              <div className="flex justify-between items-center mb-6">
                <p className="p22 text-brand-color-black">Valor total</p>
                <h2 className="text-brand-color-blue">
                  {centsToText(calculateTotalTicketValue())}
                </h2>
              </div>
              <PrimaryButton
                buttonText={"Comprar Ingresso"}
                onButtonClick={handleAddTicketToCart}
                isLoading={isAddTicketToCartButtonLoading}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
