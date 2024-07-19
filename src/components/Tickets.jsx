import Ticket from "../components/Ticket";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

function Tickets() {
  const storedTickets = useSelector((state) => state.filteredTickets);
  const [localTickets, setLocalTickets] = useState([]);
  const ticketsPerPage = useSelector((state) => state.ticketsPerPage);

  useEffect(() => {
    setLocalTickets(storedTickets);
  }, [storedTickets]);

  return (
    <div className="m-0 p-4 bg-blue-50 space-y-4">
      {localTickets.length === 0 ? (
        <div className="text-center text-gray-600">
          <p className="text-xl font-semibold">No tickets found</p>
        </div>
      ) : (
        localTickets
          .map((ticket, index) => <Ticket key={index} ticketData={ticket} />)
          .slice(0, ticketsPerPage)
      )}
    </div>
  );
}

export default Tickets;
