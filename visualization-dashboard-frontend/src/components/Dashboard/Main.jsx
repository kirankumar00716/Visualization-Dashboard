import { useState, useEffect } from "react";
import axios from "axios";
import IntensityChart from "./IntensityChart";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import Navbar from "./Navbar";
import RegionChart from "./RegionChart";
import AdminDashboard from "./Sidebar";
import { ChakraProvider, Flex, Box, Grid } from "@chakra-ui/react";
import RelevanceBubbleChart from "./Relevance";
import TopicsRadarChart from "./TopicChart";
import PieChart from "./SectorChart";
import CountryChart from "./Country";
import LikelihoodRadarChart from "./LikelihoodChart";
import Footer from "./Footer";

Chart.register(CategoryScale);

const Main = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchDataFromApi = async () => {
      const API_URL = "http://localhost:5000";
      try {
        const response = await axios.get(`${API_URL}/api/data`);
        setData(response.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchDataFromApi();
  }, []); // Empty dependency array to fetch data only once

  return (
    <ChakraProvider>
      <Navbar />
      <style>
        {`
          h1 { 
            text-align: center;
            font-size: 2rem;
            margin: 2rem 0;
          }
          h2{
            text-align: center;
            font-size: 1.5rem;
            margin: 1rem 0;
          }
        `}
      </style>
      <div>
        <h1>Hi, Good Morning 👋</h1>
        <h2>Here is my Data Visulization application</h2>
      </div>
      <AdminDashboard />
      <Box m={[2, 4, 6]}>
        <IntensityChart data={data} />
      </Box>
      <Flex direction={{ base: "column", md: "row" }} m={[2, 4, 6]}>
        <Box
          flex={{ base: "1", md: "0.5" }}
          p={[2, 3, 5]}
          m={[2, 3, 4]}
          boxShadow="0px 0px 10px rgba(0, 0, 0, 0.1)"
          borderRadius={20}
        >
          <RegionChart data={data} />
        </Box>
        <Box
          flex={{ base: "1", md: "0.5" }}
          p={[2, 3, 5]}
          m={[2, 3, 4]}
          boxShadow="0px 0px 10px rgba(0, 0, 0, 0.1)"
          borderRadius={20}
        >
          <TopicsRadarChart data={data} />
        </Box>
      </Flex>
      <Box m={[2, 4, 6]}>
        <RelevanceBubbleChart data={data} />
      </Box>
      <Grid
        templateColumns={{ base: "1fr", md: "1fr 1fr" }}
        gap={4}
        m={[2, 4, 6]}
      >
        <Box
          p={[2, 3, 5]}
          boxShadow="0px 0px 10px rgba(0, 0, 0, 0.1)"
          borderRadius={20}
        >
          <PieChart data={data} />
        </Box>
        <Box
          p={[2, 3, 5]}
          boxShadow="0px 0px 10px rgba(0, 0, 0, 0.1)"
          borderRadius={20}
        >
          <LikelihoodRadarChart data={data} />
        </Box>
      </Grid>
      <Box m={[2, 4, 6]}>
        <CountryChart data={data} />
      </Box>
      <Footer />
    </ChakraProvider>
  );
};

export default Main;
