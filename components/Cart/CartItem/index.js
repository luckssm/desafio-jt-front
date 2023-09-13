import { useDispatch } from "react-redux";

import { centsToText } from "../../../services/utils/helpers/money";
import { setCart } from "../../../redux/slices/cartSlice";
import { removeCartItem } from "../../../services/api/apiCalls";

import CustomBaseImage from "../../CustomBaseImage/CustomBaseImage";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const resolveItemName = () => {
    return `${item?.ticketValue?.ticket?.name} - ${item?.ticketValue?.day}`;
  };

  const resolveTicketType = ({ ticketType }) => {
    if (ticketType === "Adult") {
      return "Adulto";
    }
    return "Criança";
  };
  const ticketQuantity = item?.quantity;
  const ticketPrice = item?.ticketValue.value;

  const resolveItemTicketType = () => {
    const ticketType = resolveTicketType({
      ticketType: item?.ticketValue.type,
    });
    return `${ticketQuantity} ${ticketType}: ${centsToText(ticketPrice)}`;
  };

  const resolveItemQuantity = () => {
    const ticketQuantityString =
      ticketQuantity > 10 ? ticketQuantity : `0${ticketQuantity}`;
    return `Qtd ${ticketQuantityString}`;
  };

  const resolveItemPrice = () => {
    let itemPrice = 0;
    if (ticketQuantity && ticketPrice) {
      itemPrice = ticketQuantity * ticketPrice;
    }
    return centsToText(itemPrice);
  };

  const handleRemoveCartItem = async () => {
    await removeCartItem({ cartItemId: item?.id }).then((res) => {
      if (res.data) {
        dispatch(setCart(res.data?.data?.userRemoveCartItem));
      }
    });
  };

  return (
    <div className="flex border-b border-graygray-10 pb-5 mb-6">
      <div className="mr-4">
        <CustomBaseImage
          // TODO: Change to accept the src from the cart item
          src={"/static/images/attraction-1.png"}
          alt={"Miniatura ingresso"}
          maxWidth={57}
        />
      </div>
      <div className="w-full">
        <div className="flex justify-between border-b border-graygray-10 pb-2 mb-2">
          <div>
            <p className="p2 text-graygray-60 mb-2">{resolveItemName()}</p>
            <p className="p3 text-graygray-40">{resolveItemTicketType()}</p>
          </div>
          <button
            className="self-start ml-5"
            onClick={handleRemoveCartItem}
            data-test={"remove-item"}
          >
            <CustomBaseImage
              src={"/static/icons/trash-delete-bin.svg"}
              alt={"Ícone lixeira para remoção"}
              width={17}
              height={17}
            />
          </button>
        </div>
        <div>
          <div className="flex justify-between mb-3">
            <p className="p2 text-graygray-60">{resolveItemQuantity()}</p>
            <p className="p2 text-graygray-60">{resolveItemPrice()}</p>
          </div>
          <div className="flex justify-between">
            <p className="p2 text-brand-color-black">Subtotal</p>
            <p className="p22 text-light-black">
              {/* TODO: This would probably need some extra features in a ticket object to be correct */}
              {resolveItemPrice()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
