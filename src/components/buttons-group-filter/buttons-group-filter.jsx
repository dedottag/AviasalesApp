import "./buttons-group-filter.css";

const ButtonsFilter = ({ cheapTickets, fastTickets, optimalTickets }) => {
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
