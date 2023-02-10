/* eslint-disable import/no-extraneous-dependencies */
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./AppRouter";
import "./index.scss";
import { setupStore } from "./store/store";

const root = createRoot(document.getElementById("root") as HTMLElement);
const store = setupStore();

root.render(
  <BrowserRouter>
    <Provider store={store}>
      <AppRouter />
    </Provider>
  </BrowserRouter>,
);
