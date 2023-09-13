import API from "./api";

const getTicketById = async (id) => {
  const body = {
    query: `query {
      getTicket(id: ${id}){
        id
        name
        details
        perks,
        city{
          id,
          name,
          location
        }
      }
    }`,
  };
  return API(body);
};

// TODO: Change perPage to another value. Leaving 3 fixed just to avoid adding many records
const getTicketsByCityName = async ({
  cityName = "",
  currentPage,
  perPage,
}) => {
  const body = {
    query: `query {
      getTicketsByCityNamePaginated(cityName: "${cityName}", currentPage: ${currentPage}, perPage: ${3}) {
        tickets{
          id
          name
          details
          perks
          city{
            name
            location
          }
        }
        totalItems
        totalPages
      }
    }`,
  };
  return API(body);
};

const getTicketValueByDateAndTicketId = async ({ ticketId, date }) => {
  const body = {
    query: `query {
      getTicketValueByDateAndTicketId(ticketId: ${ticketId}, day: "${date}"){
        id
        value
        type
        day
      }
    }`,
  };
  return API(body);
};

// TODO: Change this fixed userId
const getUserOpenCart = async ({ userId = 1 }) => {
  const body = {
    query: `query {
      getOpenCart(userId: ${1}){
        id,
        status
        cartItems{
          id,
          ticketValueId
          quantity
          ticketValue{
            day
            value
            type
            ticket{
              name
            }
          }
        }    
      }
    }`,
  };
  return API(body);
};

// TODO: Change this fixed userId
const addItemsToCart = async ({ userId = 1, ticketValueIds }) => {
  const body = {
    query: `mutation{
      addCartItems(input:{userId: ${userId}, ticketValuesIds: [${ticketValueIds}]}){
        id,
        status
        cartItems{
          id,
          ticketValueId
          quantity
          ticketValue{
            day
            value
            type
            ticket{
              name
            }
          }
        }  
      }
    }`,
  };
  return API(body);
};

// TODO: Change this fixed userId
const closeCart = async ({ userId = 1 }) => {
  const body = {
    query: `mutation{
      closeCart(userId: ${1}){
        status
      }
    }`,
  };
  return API(body);
};

// TODO: Change this fixed userId
const removeCartItem = async ({ userId = 1, cartItemId }) => {
  const body = {
    query: `mutation{
      userRemoveCartItem(userId: ${userId}, cartItemId: ${cartItemId}){
        id,
        status
        cartItems{
          id,
          ticketValueId
          quantity
          ticketValue{
            day
            value
            type
            ticket{
              name
            }
          }
        }    
      }
    }`,
  };
  return API(body);
};

export {
  getTicketById,
  getTicketsByCityName,
  getTicketValueByDateAndTicketId,
  getUserOpenCart,
  addItemsToCart,
  closeCart,
  removeCartItem,
};
