import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import NotFound from "./Components/NotFound";
import { BrowserRouter } from "react-router-dom";
import { store } from "./redux/srore";
import { Provider } from "react-redux";

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={NotFound}>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </Suspense>
  </React.StrictMode>,
  document.getElementById("root")
);
