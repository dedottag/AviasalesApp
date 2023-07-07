import "./transfers.css";
import { useState } from "react";

const Transfers = ({ transfers, allTransfers }) => {
  const [selectedItem, setSelectedItem] = useState("");
  let number;

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
