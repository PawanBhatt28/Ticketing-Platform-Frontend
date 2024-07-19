import Ticket from "../components/Ticket";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

function Tickets() {
  const storedTickets = useSelector((state) => state.filteredTickets);
  const [localTickets, setLocalTickets] = useState([]);

  useEffect(() => {
    setLocalTickets(storedTickets);
  }, [storedTickets]);

  return (
    <div className="m-0 p-4 bg-blue-50 space-y-4">
      {localTickets.map((ticket, index) => (
        <Ticket key={index} ticketData={ticket} />
      ))}
    </div>
  );
}

export default Tickets;
