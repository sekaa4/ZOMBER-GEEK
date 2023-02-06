import { createStore } from "@reduxjs/toolkit";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import App from "./components/App";
import "./index.scss";
import { setupStore } from "./store/store";

const root = createRoot(document.getElementById("root") as HTMLElement);
const store = setupStore();

root.render(
  <Provider store={store}>
<App />
  </Provider>

);
