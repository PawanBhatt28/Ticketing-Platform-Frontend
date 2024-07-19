import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Delete, Mail, Phone, Chat, Info } from "@mui/icons-material"; // Add Info icon
import { deleteTicket } from "../redux/feature/slice/ticketSlice";

const getPriorityColor = (priority) => {
  switch (priority) {
    case "High":
      return "bg-red-200 text-red-600";
    case "Medium":
      return "bg-yellow-100 text-yellow-600";
    case "Low":
      return "bg-blue-100 text-blue-600";
    default:
      return "bg-gray-200 text-gray-600";
  }
};

const formatDate = (dateString) => {
  const date = new Date(dateString);
  const options = { month: "short", day: "numeric" };
  return date.toLocaleDateString(undefined, options);
};

function Ticket({ ticketData }) {
  const dispatch = useDispatch();
  const navigate = useNavigate(); // For navigation

  const deleteTicketHandler = (id) => {
    console.log("starting to delete ticket.");
    dispatch(deleteTicket(id));
    console.log("ticket deleted");
  };

  const viewDetailsHandler = (id) => {
    navigate(`/tickets/${id}`); // Navigate to TicketDetail page
  };

  return (
    <div className="relative h-12 flex items-center justify-between p-4 border rounded-md shadow-sm bg-white mb-2 hover:bg-gray-50 transition-colors">
      <div className="flex items-center space-x-4 flex-1 relative">
        {/* Ticket ID */}
        <div className="flex-1 truncate text-center ml-2 relative group">
          {ticketData.id}
        </div>

        {/* Created By */}
        <div className="flex-1 truncate text-center relative group">
          {ticketData.createdBy}
        </div>

        {/* Channel Icons */}
        {ticketData.channel === "Email" && <Mail className="text-blue-500" />}
        {ticketData.channel === "Phone" && <Phone className="text-green-500" />}
        {ticketData.channel === "Chat" && <Chat className="text-purple-500" />}

        {/* Description */}
        <div className="relative flex-1 truncate text-center group">
          <div className="truncate">{ticketData.description}</div>
        </div>

        {/* Status */}
        <div className="relative flex-1 truncate text-center group">
          <div className="truncate">{ticketData.status}</div>
        </div>

        {/* Priority */}
        <div
          className={`flex-1 truncate text-center ${getPriorityColor(
            ticketData.priority
          )} text-xs py-1 px-2 rounded`}
        >
          {ticketData.priority}
        </div>

        <div className="flex-1 truncate text-center">
          {formatDate(ticketData.assigned_date)}
        </div>
      </div>

      {/* Button to delete details */}
      <div className="flex space-x-2">
        <button
          onClick={() => deleteTicketHandler(ticketData.id)}
          className="p-2 hover:text-red-700"
        >
          <Delete className="text-red-500" />
        </button>

        {/* Button to view details */}
        <button
          onClick={() => viewDetailsHandler(ticketData.id)}
          className="p-2 hover:text-blue-700"
        >
          <Info className="text-blue-500" />
        </button>
      </div>
    </div>
  );
}

export default Ticket;
