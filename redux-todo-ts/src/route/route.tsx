import React, {FC} from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../App";

const RouterConfig:FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouterConfig;
