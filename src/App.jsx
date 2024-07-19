import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import "./index.css";
import LoginPage from "./components/LoginPage";
import TicketPage from "./components/TicketPage";
import CreateTicketForm from "./components/CreateTicketForm";
import TicketDetails from "./components/TicketDetails";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/tickets" element={<TicketPage />} />
          <Route path="/create-ticket" element={<CreateTicketForm />} />
          <Route path="/tickets/:id" element={<TicketDetails />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
