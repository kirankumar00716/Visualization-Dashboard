import React from "react";
import ReactDOM from "react-dom/client";

// import CountryChart from "./components/Dashboard/Country.jsx";
// import Footer from "./components/Dashboard/Footer.jsx";
// import IntensityChart from "./components/Dashboard/IntensityChart.jsx";
// import LikelihoodRadarChart from "./components/Dashboard/LikelihoodChart.jsx";
// import Navbar from "./components/Dashboard/Navbar.jsx";
// import PieChart from "./components/Dashboard/SectorChart.jsx";
// import RegionChart from "./components/Dashboard/RegionChart.jsx";
// import RelevanceBubbleChart from "./components/Dashboard/Relevance.jsx";
// import TopicsRadarChart from "./components/Dashboard/TopicChart.jsx";
// import AdminDashboard from "./components/Dashboard/Sidebar.jsx";
import AppRouter from "./App";
import { ChakraProvider } from "@chakra-ui/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <>
      <ChakraProvider />
      <AppRouter />
    </>
  </React.StrictMode>
);
