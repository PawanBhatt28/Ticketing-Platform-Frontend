import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Tickets from "../components/Tickets";
import { setTickets } from "../redux/feature/slice/ticketSlice";
import Sidebar from "./Sidebar";
import SearchBar from "./SearchBar";
import CreateTicket from "./CreateTicket";
import { useNavigate } from "react-router-dom";

function TicketPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Access the allTickets from Redux state
  const allTickets = useSelector((state) => state.allTickets);
  let ticketCount = allTickets.length;

  useEffect(() => {
    ticketCount = allTickets.length;
  }, [allTickets]);

  const fetchJsonData = async () => {
    try {
      const response = await fetch("/tickets.json");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const jsonData = await response.json();
      dispatch(setTickets(jsonData));
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
    }
  };

  useEffect(() => {
    if (ticketCount == 0) fetchJsonData();
  }, [dispatch]); // Add dispatch to the dependency array

  const handleCreateTicket = () => {
    navigate("/create-ticket");
  };

  return (
    <div className="flex flex-col h-screen">
      <header className="w-full p-4 bg-gray-100 text-left text-2xl font-bold flex justify-between items-center">
        <div>Tickets</div>
        <div className="text-right text-lg">{`Total Tickets: ${ticketCount}`}</div>
      </header>
      <div className="flex flex-1">
        <div className="flex flex-col p-4">
          <div className="w-full bg-white p-4 rounded shadow-md flex items-center justify-between">
            <h2 className="text-xl font-bold">View</h2>
            <CreateTicket onClick={handleCreateTicket} />
          </div>
          <Sidebar />
        </div>
        <div className="flex-1 flex flex-col p-4">
          <div className="mb-4 flex items-center">
            <div className="flex-1">
              <SearchBar />
            </div>
          </div>
          <div className="flex-1">
            <Tickets />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TicketPage;
