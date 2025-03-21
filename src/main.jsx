import "./index.css";
import "antd/dist/antd";
import App from "./App.jsx";
import "intersection-observer";
import store from "./redux/store";
import { StrictMode } from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <StrictMode>
      <App />
    </StrictMode>
  </Provider>
);
