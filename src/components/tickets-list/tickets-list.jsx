import "./tickets-list.css";
import "./tickets-list.css";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import { getShowMoreTickets } from "../store/ticketReducer";
import { add } from "date-fns";

function interleave(arr, thing) {
  return [].concat(...arr.map((n) => [n, thing])).slice(0, -1);
}

function ending(number) {
  if (number === 1) {
    return number + " ПЕРЕСАДКА";
  } else if (number === 0) {
    return number + " ПЕРЕСАДОК";
  }
  return number + " ПЕРЕСАДКИ";
}

function toHoursAndMinutes(data) {
  const result = new Date(data);
  return `${result.getHours()}:${result.getMinutes()}`;
}

function addData(date, minutes) {
  const newData = new Date(date);
  const result = add(newData, { minutes: minutes });
  return toHoursAndMinutes(result);
}

const TicketsList = () => {
  const tickets = useSelector((state) => state.tickets.tickets);
  const visible = useSelector((state) => state.tickets.visible);
  const dispatch = useDispatch();

  const showMore = () => {
    dispatch(getShowMoreTickets(5));
  };

  let key = 1;
  return (
    <div className="tickets-list-container">
      {tickets.slice(0, visible).map((ticket) => (
        <div className="ticket" key={key++}>
          <div className="ticket-header">
            <span className="ticket-price">{`${ticket.price} P`}</span>
            <img src={`//pics.avs.io/99/36/${ticket.carrier}.png`} alt="" />
          </div>
          <div className="way-there">
            <div className="destination">
              <span className="cities">{`${ticket.segments[0].origin} - ${ticket.segments[0].destination}`}</span>
              <span className="time">
                {`${toHoursAndMinutes(ticket.segments[0].date)}-${addData(
                  ticket.segments[0].date,
                  ticket.segments[0].duration
                )}`}
              </span>
            </div>
            <div className="travel-time">
              <span className="way">В ПУТИ</span>
              <span>
                {`${(
                  Math.round((ticket.segments[0].duration / 60) * 100) / 100
                ).toFixed(0)}ч ${String(
                  Math.round((ticket.segments[0].duration / 60) * 100) / 100
                ).substr(
                  String(
                    Math.round((ticket.segments[0].duration / 60) * 100) / 100
                  ).length - 2
                )}м`}
              </span>
            </div>
            <div className="transfers">
              <span className="number-of-transfers">
                {ending(ticket.segments[0].stops.length)}
              </span>
              <span className="cities-transfers">
                {interleave(ticket.segments[0].stops, ", ")}
              </span>
            </div>
          </div>
          <div className="way-there">
            <div className="destination">
              <span className="cities">{`${ticket.segments[1].origin} - ${ticket.segments[1].destination}`}</span>
              <span className="time">{`${toHoursAndMinutes(
                ticket.segments[1].date
              )}-${addData(
                ticket.segments[1].date,
                ticket.segments[1].duration
              )}`}</span>
            </div>
            <div className="travel-time">
              <span className="way">В ПУТИ</span>
              <span>
                {`${(
                  Math.round((ticket.segments[1].duration / 60) * 100) / 100
                ).toFixed(0)}ч ${String(
                  Math.round((ticket.segments[1].duration / 60) * 100) / 100
                ).substr(
                  String(
                    Math.round((ticket.segments[1].duration / 60) * 100) / 100
                  ).length - 2
                )}м`}
              </span>
            </div>
            <div className="transfers">
              <span className="number-of-transfers">
                {ending(ticket.segments[1].stops.length)}
              </span>
              <span className="cities-transfers">
                {interleave(ticket.segments[1].stops, ", ")}
              </span>
            </div>
          </div>
        </div>
      ))}
      <button className="show-more" onClick={() => showMore()}>
        ПОКАЗАТЬ ЕЩЕ 5 БИЛЕТОВ
      </button>
    </div>
  );
};

export default TicketsList;
