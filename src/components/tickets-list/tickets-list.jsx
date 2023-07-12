import "./tickets-list.css";
import "./tickets-list.css";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import { getShowMoreTickets } from "../store/ticketReducer";
import format from "date-fns/format";
import parseISO from "date-fns/parseISO";
import "../transfers/transfers.css";
import ButtonsFilter from "../buttons-group-filter/buttons-group-filter";

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

const timeTransplate = (MOW, duration) => {
  const data = new Date(Date.parse(MOW) + duration * 60000).toISOString();
  const timeEndFly = format(parseISO(data), "HH:mm");
  return timeEndFly;
};

const TicketsList = () => {
  const visible = useSelector((state) => state.tickets.visible);
  const ticketsFilter = useSelector(
    (state) => state.ticketsClone.ticketsFilter
  );
  const dispatch = useDispatch();
  // console.log(ticketsClone);

  const showMore = () => {
    dispatch(getShowMoreTickets(5));
  };

  let key = 1;
  return (
    <div className="tickets-list-container">
      <ButtonsFilter />
      {ticketsFilter.slice(0, visible).map((ticket) => (
        <div className="ticket" key={key++}>
          <div className="ticket-header">
            <span className="ticket-price">{`${ticket.price} P`}</span>
            <img src={`//pics.avs.io/99/36/${ticket.carrier}.png`} alt="" />
          </div>
          <div className="way-there">
            <div className="destination">
              <span className="cities">{`${ticket.segments[0].origin} - ${ticket.segments[0].destination}`}</span>
              <span className="time">
                {`${toHoursAndMinutes(
                  ticket.segments[0].date
                )}-${timeTransplate(
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
              )}-${timeTransplate(
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
      <div className="show-more-buttons-container">
        {(() => {
          if (ticketsFilter.length > 0 && ticketsFilter.length <= 5)
            return null;
          else if (ticketsFilter.length === 0) {
            return (
              <div style={{ fontSize: "20px" }}>
                Рейсов, подходящих под заданные фильтры, не найдено...
              </div>
            );
          } else {
            return (
              <button className="show-more" onClick={() => showMore()}>
                ПОКАЗАТЬ ЕЩЕ 5 БИЛЕТОВ
              </button>
            );
          }
        })()}
      </div>
    </div>
  );
};

export default TicketsList;
