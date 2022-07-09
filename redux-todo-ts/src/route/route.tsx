import React, {FC} from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../pages/App";
import Create from "../pages/Create";

const RouterConfig:FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/create" element={<Create />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouterConfig;
