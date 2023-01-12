import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import Preloader from "./components/ui/Preloader";
import "./index.css";
const App = lazy(() => import("./App"));

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Suspense fallback={<Preloader />}>
      <App />
    </Suspense>
  </React.StrictMode>
);
