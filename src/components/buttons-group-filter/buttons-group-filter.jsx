import "./buttons-group-filter.css";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import { getTicketsFilter } from "../store/tikcketsCloneReducer";

const ButtonsFilter = () => {
  const dispatch = useDispatch();
  const ticketsClone = useSelector(
    (state) => state.ticketsClone.ticketsTransfer
  );
  const cheapTickets = (price) => {
    const result = ticketsClone.filter((el) => el.price <= price);
    dispatch(getTicketsFilter(result));
  };

  const fastTickets = (time) => {
    const result = ticketsClone.filter((el) => el.segments[0].duration <= time);
    dispatch(getTicketsFilter(result));
  };

  const optimalTickets = (price, time) => {
    const result = ticketsClone.filter(
      (el) => el.price <= price && el.segments[0].duration <= time
    );
    dispatch(getTicketsFilter(result));
  };
  return (
    <div className="buttons-container">
      <button className="button button1" onClick={() => cheapTickets(15000)}>
        САМЫЙ ДЕШЕВЫЙ
      </button>
      <button className="button button2" onClick={() => fastTickets(1000)}>
        САМЫЙ БЫСТРЫЙ
      </button>
      <button
        className="button button3"
        onClick={() => optimalTickets(25000, 1000)}
      >
        ОПТИМАЛЬНЫЙ
      </button>
    </div>
  );
};

export default ButtonsFilter;
