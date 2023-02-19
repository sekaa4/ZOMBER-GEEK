import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "./assets/styles/index.scss";
import { StrictMode } from "react";
import { setupStore } from "./store/store";
import AppRouter from "./AppRouter";

const root = createRoot(document.getElementById("root") as HTMLElement);
const store = setupStore();

root.render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <AppRouter />
      </Provider>
    </BrowserRouter>
  </StrictMode>,
);
