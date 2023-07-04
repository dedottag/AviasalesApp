const inicialState = {
  tickets: [],
};

const GET_TICKETS = "GET_TICKETS";

export const ticketReducer = (state = inicialState, action) => {
  switch (action.type) {
    case GET_TICKETS:
      return {
        ...state,
        tickets: [...state.tickets, ...action.payload.tickets],
      };
    default:
      return state;
  }
};

export const getTicketsAction = (payload) => ({
  type: GET_TICKETS,
  payload,
});
