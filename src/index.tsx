import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "./assets/styles/index.scss";
import { setupStore } from "./store/store";
import AppRouter from "./AppRouter";

const root = createRoot(document.getElementById("root") as HTMLElement);
const store = setupStore();

root.render(
  <BrowserRouter>
    <Provider store={store}>
      <AppRouter />
    </Provider>
  </BrowserRouter>,
);
