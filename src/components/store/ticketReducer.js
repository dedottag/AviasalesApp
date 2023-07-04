const inicialState = {
  tickets: [],
  visible: 5,
};

const GET_TICKETS = "GET_TICKETS";
const SHOW_MORE = "SHOW_MORE";

export const ticketReducer = (state = inicialState, action) => {
  switch (action.type) {
    case GET_TICKETS:
      return {
        ...state,
        tickets: [...state.tickets, ...action.payload.tickets],
      };
    case SHOW_MORE:
      return {
        ...state,
        visible: state.visible + action.payload,
      };
    default:
      return state;
  }
};

export const getTicketsAction = (payload) => ({ type: GET_TICKETS, payload });
export const getShowMoreTickets = (payload) => ({ type: SHOW_MORE, payload });
