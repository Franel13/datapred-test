import React from "react";
import "./App.css";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Dashboard } from "./components/dashboard/Dashboard";
import { NotFound } from "./components/not-found/NotFound";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={ <Dashboard /> }
          ></Route>
          <Route
            path="/*"
            element={<NotFound />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
