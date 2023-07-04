import "./app.css";
import TicketsList from "../tickets-list";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getTicketsAction } from "../store/ticketReducer";

const App = () => {
  const dispatch = useDispatch();
  const [searchId, setSearcId] = useState("");

  useEffect(() => {
    fetch("https://aviasales-test-api.kata.academy/search")
      .then((res) => res.json())
      .then((res) => {
        setSearcId(res.searchId);
      })
      .catch((er) => console.log(er));
  }, []);

  const getTicketsFetch = (id) => {
    fetch(`https://aviasales-test-api.kata.academy/tickets?searchId=${id}`)
      .then((res) => res.json())
      .then((res) => {
        dispatch(getTicketsAction(res));
        console.log(res);
      })
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    if (searchId) {
      getTicketsFetch(searchId);
    }
  }, [searchId]);

  return (
    <div className="app-container">
      <TicketsList />
    </div>
  );
};

export default App;
