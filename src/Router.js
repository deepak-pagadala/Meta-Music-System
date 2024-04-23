import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "./App";
import Dashboard from "./Routes/Dashboard";
import Playlists from "./Routes/Playlists";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/playlists" element={<Playlists />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
