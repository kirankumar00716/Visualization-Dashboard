import { getAllData } from "../api/apiService";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./components/Dashboard/Main";
import Login from "./components/Login/Login";

export default function App() {
  const data = getAllData();

  console.log(data);
  return (
    <>
      {" "}
      <Router>
        <Routes>
          <Route path="/dashboard" element={<Main />} />
          <Route path="/" element={<Login />} />
        </Routes>
      </Router>
    </>
  );
}
