import "./app.css";
import TicketsList from "../tickets-list";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getTicketsAction } from "../store/ticketReducer";
import Transfers from "../transfers/transfers";
import Logo from "./Logo (1).png";
// import { useSelector } from "react-redux/es/hooks/useSelector";

const App = () => {
  const dispatch = useDispatch();
  const [searchId, setSearcId] = useState("");
  // const tickets = useSelector((state) => state.tickets.tickets);
  // console.log(tickets);

  useEffect(() => {
    fetch("https://aviasales-test-api.kata.academy/search")
      .then((res) => res.json())
      .then((res) => {
        setSearcId(res.searchId);
      })
      .catch((er) => console.log(er));
  }, []);

  const getTicketsFetch = async (id) => {
    fetch(`https://aviasales-test-api.kata.academy/tickets?searchId=${id}`)
      .then(function (response) {
        console.log(response.status);
        if (response.status === 500) {
          window.location.reload();
        } else {
          return response.json();
        }
        throw console.log("что то пошло не так");
      })
      .then((res) => dispatch((res = getTicketsAction(res))));
  };

  useEffect(() => {
    if (searchId) {
      getTicketsFetch(searchId);
    }
  }, [searchId]);

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
