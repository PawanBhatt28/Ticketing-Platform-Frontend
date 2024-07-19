import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { createTicket } from "../redux/feature/slice/ticketSlice";
import { useNavigate } from "react-router-dom";

const channels = ["Email", "Phone", "Chat"];
const statuses = ["Closed", "Pending", "Open"];
const priorities = ["High", "Medium", "Low"];

const getCurrentDate = () => {
  const today = new Date();
  return today.toISOString().split("T")[0]; // Format YYYY-MM-DD
};

const CreateTicketForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    id: 0,
    name_initial: "",
    channel: channels[0],
    description: "",
    status: statuses[0],
    escalated: "No",
    archived: "No",
    priority: priorities[2],
    assigned_date: getCurrentDate(),
    assigned: 1,
    assignedTo: "",
    completedBy: "",
    createdBy: "Current User",
    progress: "open",
    junk: 0,
  });

  useEffect(() => {
    setFormData((prevData) => ({
      ...prevData,
      id: Date.now(),
      name_initial: "p",
      createdBy: "pawan bhatt",
    }));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createTicket(formData));
    navigate("/tickets");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-300"
    >
      handleSubmit
      <h2 className="text-3xl font-semibold mb-6 text-gray-800">
        Create Ticket
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col">
          <label htmlFor="createdBy" className="mb-2 text-gray-700 font-medium">
            Created By
          </label>
          <input
            type="text"
            id="createdBy"
            name="createdBy"
            value={formData.createdBy}
            onChange={handleChange}
            className="p-3 border border-gray-300 rounded-lg bg-gray-100 text-gray-600 cursor-not-allowed"
            readOnly
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="channel" className="mb-2 text-gray-700 font-medium">
            Channel
          </label>
          <select
            id="channel"
            name="channel"
            value={formData.channel}
            onChange={handleChange}
            className="p-3 border border-gray-300 rounded-lg bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {channels.map((channel) => (
              <option key={channel} value={channel}>
                {channel}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col">
          <label
            htmlFor="description"
            className="mb-2 text-gray-700 font-medium"
          >
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="p-3 border border-gray-300 rounded-lg bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="3"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="status" className="mb-2 text-gray-700 font-medium">
            Status
          </label>
          <select
            id="status"
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="p-3 border border-gray-300 rounded-lg bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {statuses.map((status) => (
              <option key={status} value={status}>
                {status}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col">
          <label htmlFor="priority" className="mb-2 text-gray-700 font-medium">
            Priority
          </label>
          <select
            id="priority"
            name="priority"
            value={formData.priority}
            onChange={handleChange}
            className="p-3 border border-gray-300 rounded-lg bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {priorities.map((priority) => (
              <option key={priority} value={priority}>
                {priority}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col">
          <label
            htmlFor="assigned_date"
            className="mb-2 text-gray-700 font-medium"
          >
            Assigned Date
          </label>
          <input
            type="date"
            id="assigned_date"
            name="assigned_date"
            value={formData.assigned_date}
            onChange={handleChange}
            className="p-3 border border-gray-300 rounded-lg bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex flex-col">
          <label
            htmlFor="assignedTo"
            className="mb-2 text-gray-700 font-medium"
          >
            Assigned To
          </label>
          <input
            type="text"
            id="assignedTo"
            name="assignedTo"
            value={formData.assignedTo}
            onChange={handleChange}
            className="p-3 border border-gray-300 rounded-lg bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>
      {/* Hidden fields */}
      <input type="hidden" name="id" value={formData.id} />
      <input type="hidden" name="name_initial" value={formData.name_initial} />
      <input type="hidden" name="junk" value={formData.junk} />
      <input type="hidden" name="progress" value={formData.progress} />
      <input type="hidden" name="archived" value={formData.archived} />
      <input type="hidden" name="escalated" value={formData.escalated} />
      <button
        type="submit"
        className="w-full py-3 mt-6 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Submit
      </button>
    </form>
  );
};

export default CreateTicketForm;
