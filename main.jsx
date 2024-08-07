import React from "react";
import ReactDOM from "react-dom/client";
import App from "./src/App.jsx";
import "./src/index.css";
import store from "./src/redux/store/store.js";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./src/App.jsx";
// import "./index.css";
// import store from "./src/redux/store/store.js";
// import { Provider } from "react-redux";
