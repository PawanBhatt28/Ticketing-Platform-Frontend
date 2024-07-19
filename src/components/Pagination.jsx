import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateTicketPerPage } from "../redux/feature/slice/ticketSlice"; // Update the path if needed
import PaginationNav from "./PaginationNav";

const Pagination = () => {
  const dispatch = useDispatch();

  const ticketsPerPage = useSelector((state) => state.ticketsPerPage);
  const totalTickets = useSelector((state) => state.filteredTickets.length);
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(totalTickets / ticketsPerPage);
  const startTicket = (currentPage - 1) * ticketsPerPage + 1;
  const endTicket = Math.min(startTicket + ticketsPerPage - 1, totalTickets);

  const handleTicketsPerPageChange = (event) => {
    const newTicketsPerPage = Number(event.target.value);
    dispatch(updateTicketPerPage(newTicketsPerPage));
    setCurrentPage(1); // Reset to the first page whenever tickets per page change
  };

  return (
    <div className="flex items-center justify-between space-x-4 text-white">
      <div className="flex items-center space-x-4">
        <label htmlFor="ticketsPerPage" className="mr-2">
          Show
        </label>
        <select
          id="ticketsPerPage"
          value={ticketsPerPage}
          onChange={handleTicketsPerPageChange}
          className="border rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
        >
          <option value={10}>10</option>
          <option value={20}>20</option>
          <option value={50}>50</option>
          <option value={100}>100</option>
        </select>
        <span>
          {startTicket}-{endTicket} of {totalTickets}
        </span>
      </div>
      <PaginationNav
        totalPages={totalPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default Pagination;
