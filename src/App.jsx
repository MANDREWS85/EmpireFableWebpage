import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import EmpireFableFrontPage from "./components/EmpireFableFrontPage.jsx";

export default function App() {
  return (
    <div className="App">
      <EmpireFableFrontPage />
    </div>
  );
}
