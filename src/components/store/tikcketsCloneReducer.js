const inicialState = {
  ticketsFilter: [],
  ticketsTransfer: [],
};

const TICKETS_FILTER = "TICKETS_FILTER";
const TICKETS_TRANSFER = "TICKETS_TRANSFER";

export const ticketsCloneReduser = (state = inicialState, action) => {
  switch (action.type) {
    case "TICKETS_FILTER":
      return {
        ...state,
        ticketsFilter: [...action.payload],
      };
    case "TICKETS_TRANSFER":
      return {
        ...state,
        ticketsTransfer: [...action.payload],
      };
    default:
      return {
        ...state,
      };
  }
};

export const getTicketsTransfer = (payload) => ({
  type: TICKETS_TRANSFER,
  payload,
});
export const getTicketsFilter = (payload) => ({
  type: TICKETS_FILTER,
  payload,
});
