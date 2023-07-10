import "./app.css";
import TicketsList from "../tickets-list";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getTicketsAction } from "../store/ticketReducer";
import Transfers from "../transfers/transfers";
import Logo from "./Logo (1).png";

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

  useEffect(() => {
    if (searchId) {
      fetch(
        `https://aviasales-test-api.kata.academy/tickets?searchId=${searchId}`
      )
        .then((res) => res.json())
        .then((res) => {
          dispatch(getTicketsAction(res));
          // console.log(res);
        })
        .catch((e) => console.log(e));
    }
  }, [searchId, dispatch]);

  return (
    <div className="app-container">
      <div className="logo-contaiiner">
        <img className="logo" src={Logo} alt="" />
      </div>

      <Transfers />
      <TicketsList />
    </div>
  );
};

export default App;
