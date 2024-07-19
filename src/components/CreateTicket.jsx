import React from "react";
import { useNavigate } from "react-router-dom";
import CreateTicketForm from "./CreateTicketForm";

const CreateTicket = () => {
  const navigate = useNavigate();
  const handleOnClick = () => {
    navigate("/create-ticket");
  };

  return (
    <button
      className="bg-gray-300 text-black rounded-full w-12 h-12 flex items-center justify-center hover:bg-gray-400 ml-4"
      onClick={handleOnClick}
    >
      +
    </button>
  );
};

export default CreateTicket;
