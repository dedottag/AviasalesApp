import "./transfers.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/hooks/useSelector";
import {
  getTicketsTransfer,
  getTicketsFilter,
} from "../store/tikcketsCloneReducer";
import { getUpdateVisible } from "../store/ticketReducer";

const Transfers = () => {
  let number;
  const [selectedItem, setSelectedItem] = useState("");
  const tickets = useSelector((state) => state.tickets.tickets);
  const dispatch = useDispatch();

  const transfers = (number) => {
    const result = tickets.filter(
      (el) => el.segments[0].stops.length === number
    );
    dispatch(getTicketsTransfer(result));
    dispatch(getTicketsFilter(result));
    dispatch(getUpdateVisible());
  };

  const allTransfers = () => {
    dispatch(getTicketsFilter(tickets));
    dispatch(getTicketsTransfer(tickets));
    dispatch(getUpdateVisible());
  };

  const onChangeHandler = (event) => {
    setSelectedItem(event.target.name);
  };

  return (
    <div className="transfers-container">
      <span className="number-transfers">КОЛИЧЕСТВО ПЕРЕСАДОК</span>
      <label>
        <input
          type="checkbox"
          name="all"
          checked={selectedItem === "all"}
          onChange={(e) => {
            allTransfers();
            onChangeHandler(e);
          }}
        />
        Все
      </label>
      <label>
        <input
          type="checkbox"
          name="thero"
          checked={selectedItem === "thero"}
          onChange={(e) => {
            number = 0;
            transfers(number);
            onChangeHandler(e);
          }}
        />
        Без пересадок
      </label>
      <label>
        <input
          type="checkbox"
          name="one"
          checked={selectedItem === "one"}
          onChange={(e) => {
            number = 1;
            transfers(number);
            onChangeHandler(e);
          }}
        />
        1 пересадка
      </label>
      <label>
        <input
          type="checkbox"
          name="two"
          checked={selectedItem === "two"}
          onChange={(e) => {
            number = 2;
            transfers(number);
            onChangeHandler(e);
          }}
        />
        2 пересадки
      </label>
      <label>
        <input
          type="checkbox"
          name="three"
          checked={selectedItem === "three"}
          onChange={(e) => {
            number = 3;
            transfers(number);
            onChangeHandler(e);
          }}
        />
        3 пересадки
      </label>
    </div>
  );
};

export default Transfers;
