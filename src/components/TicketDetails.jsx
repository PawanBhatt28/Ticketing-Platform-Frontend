import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { fetchTicketById } from "../redux/feature/slice/ticketSlice";
import { Mail, Phone, Chat } from "@mui/icons-material";

const getPriorityColor = (priority) => {
  switch (priority) {
    case "High":
      return "bg-red-100 text-red-700";
    case "Medium":
      return "bg-yellow-100 text-yellow-700";
    case "Low":
      return "bg-blue-100 text-blue-700";
    default:
      return "bg-gray-100 text-gray-700";
  }
};

const formatDate = (dateString) => {
  const date = new Date(dateString);
  const options = { month: "short", day: "numeric", year: "numeric" };
  return date.toLocaleDateString(undefined, options);
};

function TicketDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const ticket = useSelector((state) =>
    state.allTickets.find((ticket) => ticket.id === id)
  );

  if (!ticket) return <div>Ticket not found</div>;

  return (
    <div className="p-6 bg-gradient-to-br from-blue-50 to-blue-200 min-h-screen">
      <button
        onClick={() => navigate("/tickets")}
        className="mb-4 py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
      >
        Go Back
      </button>

      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg space-y-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Ticket Details
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="flex flex-col bg-blue-100 p-4 rounded-lg shadow-md">
            <label className="text-gray-600 font-semibold mb-2">
              Ticket ID
            </label>
            <div className="text-lg font-medium text-blue-700">{ticket.id}</div>
          </div>

          <div className="flex flex-col bg-green-100 p-4 rounded-lg shadow-md">
            <label className="text-gray-600 font-semibold mb-2">
              Created By
            </label>
            <div className="text-lg font-medium text-green-700">
              {ticket.createdBy}
            </div>
          </div>

          <div className="flex flex-col bg-yellow-100 p-4 rounded-lg shadow-md">
            <label className="text-gray-600 font-semibold mb-2">Channel</label>
            <div className="flex items-center">
              {ticket.channel === "Email" && (
                <Mail className="text-blue-600 mr-2" />
              )}
              {ticket.channel === "Phone" && (
                <Phone className="text-green-600 mr-2" />
              )}
              {ticket.channel === "Chat" && (
                <Chat className="text-purple-600 mr-2" />
              )}
              <span className="text-lg font-medium text-yellow-700">
                {ticket.channel}
              </span>
            </div>
          </div>

          <div className="flex flex-col bg-gray-100 p-4 rounded-lg shadow-md">
            <label className="text-gray-600 font-semibold mb-2">
              Description
            </label>
            <div className="text-lg font-medium text-gray-800">
              {ticket.description}
            </div>
          </div>

          <div className="flex flex-col bg-indigo-100 p-4 rounded-lg shadow-md">
            <label className="text-gray-600 font-semibold mb-2">Status</label>
            <div className="text-lg font-medium text-indigo-700">
              {ticket.status}
            </div>
          </div>

          <div
            className={`flex flex-col ${getPriorityColor(
              ticket.priority
            )} p-4 rounded-lg shadow-md`}
          >
            <label className="text-gray-600 font-semibold mb-2">Priority</label>
            <div className="text-lg font-medium">{ticket.priority}</div>
          </div>

          <div className="flex flex-col bg-purple-100 p-4 rounded-lg shadow-md">
            <label className="text-gray-600 font-semibold mb-2">
              Escalated
            </label>
            <div className="text-lg font-medium text-purple-700">
              {ticket.escalated}
            </div>
          </div>

          <div className="flex flex-col bg-red-100 p-4 rounded-lg shadow-md">
            <label className="text-gray-600 font-semibold mb-2">Archived</label>
            <div className="text-lg font-medium text-red-700">
              {ticket.archived}
            </div>
          </div>

          <div className="flex flex-col bg-teal-100 p-4 rounded-lg shadow-md">
            <label className="text-gray-600 font-semibold mb-2">
              Assigned Date
            </label>
            <div className="text-lg font-medium text-teal-700">
              {formatDate(ticket.assigned_date)}
            </div>
          </div>

          <div className="flex flex-col bg-orange-100 p-4 rounded-lg shadow-md">
            <label className="text-gray-600 font-semibold mb-2">
              Assigned To
            </label>
            <div className="text-lg font-medium text-orange-700">
              {ticket.assignedTo}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TicketDetails;
