import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  allTickets: [],
  filteredTickets: [],
  ticketsPerPage: 10,
};

export const ticketsSlice = createSlice({
  name: "ticketSlice",
  initialState,
  reducers: {
    fetchTickets: (state, action) => {
      const filter = action.payload;
      switch (filter) {
        case "ALL":
          state.filteredTickets = state.allTickets;
          break;
        case "ASSIGNED":
          state.filteredTickets = state.allTickets.filter(
            (ticket) => ticket.assigned === 0
          );

          break;
        case "PENDING":
          state.filteredTickets = state.allTickets.filter(
            (ticket) => ticket.progress === "pending"
          );
          break;
        case "COMPLETE":
          state.filteredTickets = state.allTickets.filter(
            (ticket) => ticket.progress === "completed"
          );
          break;
        case "JUNK":
          state.filteredTickets = state.allTickets.filter(
            (ticket) => ticket.junk === 1
          );
          break;
        case "ASSIGNED_TO":
          state.filteredTickets = state.allTickets.filter(
            (ticket) => ticket.assignedTo === "pawan bhatt"
          );
          break;
        case "CREATED_BY":
          state.filteredTickets = state.allTickets.filter(
            (ticket) => ticket.createdBy === "pawan bhatt"
          );
          break;
        case "COMPLETED_BY":
          state.filteredTickets = state.allTickets.filter(
            (ticket) => ticket.completedBy === "pawan bhatt"
          );
          break;
        default:
          state.filteredTickets = state.allTickets;
      }
      console.log("ticket got set, thumbs up.");
    },
    createTicket: (state, action) => {
      state.allTickets.push(action.payload);
      state.filteredTickets.push(action.payload);
      console.log("ticket added : ", action.payload);
    },
    deleteTicket: (state, action) => {
      const allLeftTickets = state.allTickets.filter(
        (ticket) => ticket.id !== action.payload
      );
      const leftFilteredTickets = state.filteredTickets.filter(
        (ticket) => ticket.id != action.payload
      );
      state.allTickets = allLeftTickets;
      state.filteredTickets = leftFilteredTickets;
      console.log("State updated");
    },
    setTickets: (state, action) => {
      state.allTickets = action.payload;
      state.filteredTickets = action.payload;
    },
    searchTicket: (state, action) => {
      const searchText = action.payload;
      const searchedTickets = state.filteredTickets.filter((ticket) => {
        return [
          ticket.channel,
          ticket.channel,
          ticket.priority,
          ticket.description,
          ticket.status,
          ticket.assignedTo,
          ticket.createdBy,
          ticket.progress,
        ]
          .join(" ")
          .toLowerCase()
          .includes(searchText);
      });
      state.filteredTickets = searchedTickets;
    },
    updateTicketPerPage: (state, action) => {
      state.ticketsPerPage = action.payload;
    },
  },
});

export const {
  fetchTickets,
  setTickets,
  createTicket,
  deleteTicket,
  searchTicket,
  fetchTicketById,
  updateTicketPerPage,
} = ticketsSlice.actions;

export default ticketsSlice.reducer;
