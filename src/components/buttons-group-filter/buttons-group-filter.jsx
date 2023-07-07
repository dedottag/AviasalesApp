import "./buttons-group-filter.css";

const categories = [
  {
    key: "cheap",
    name: "САМЫЙ ДЕШЕВЫЙ",
    clas: "button1",
    price: 30000,
  },
  {
    key: "fast",
    name: "САМЫЙ БЫСТРЫЙ",
    clas: "button2",
  },
  {
    key: "OPTIMAL",
    name: "ОПТИМАЛЬНЫЙ",
    clas: "button3",
  },
];

const ButtonsFilter = ({ cheapTickets }) => {
  return (
    <div className="buttons-container">
      {categories.map((el) => (
        <div
          className={`button ${el.clas}`}
          key={el.key}
          onClick={() => cheapTickets(el.price)}
        >
          {el.name}
        </div>
      ))}
    </div>
  );
};

export default ButtonsFilter;
