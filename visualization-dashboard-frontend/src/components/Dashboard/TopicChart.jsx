import { PolarArea } from "react-chartjs-2";
import { Box, Heading } from "@chakra-ui/react";
import PropTypes from "prop-types";

const TopicsPolarAreaChart = ({ data }) => {
  // Use a Map to ensure unique topics and their corresponding relevance values
  const topicMap = new Map();

  data.forEach((item) => {
    if (!topicMap.has(item.topic)) {
      topicMap.set(item.topic, item.relevance);
    }
  });

  // Extract unique topics and their relevance values
  const topics = Array.from(topicMap.keys());
  const relevanceData = Array.from(topicMap.values());

  const chartData = {
    labels: topics,
    datasets: [
      {
        data: relevanceData,
        backgroundColor: [
          "rgba(75, 192, 192, 0.6)",
          "rgba(255, 159, 64, 0.6)",
          "rgba(255, 205, 86, 0.6)",
          "rgba(54, 162, 235, 0.6)",
          "rgba(153, 102, 255, 0.6)",
        ],
        borderColor: [
          "rgba(75, 192, 192, 1)",
          "rgba(255, 159, 64, 1)",
          "rgba(255, 205, 86, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(153, 102, 255, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scale: {
      ticks: {
        beginAtZero: true,
        stepSize: 1,
        max: 5,
        backdropColor: "transparent",
      },
    },
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          font: {
            size: 12,
            family: "Roboto",
          },
        },
      },
    },
  };

  return (
    <Box
      m={[2, 4, 6, 8]} // Responsive margins
      p={[2, 4, 6, 8]} // Responsive padding
      fontFamily="Arial, sans-serif"
      borderRadius="8px"
      // boxShadow="0px 0px 10px rgba(0, 0, 0, 0.1)"
      maxWidth="100%"
    >
      <Heading as="h2" mb={4} textAlign="center">
        Topics Chart
      </Heading>
      <Box height={["300px", "400px", "500px"]} width="100%">
        <PolarArea data={chartData} options={chartOptions} />
      </Box>
    </Box>
  );
};

TopicsPolarAreaChart.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      end_year: PropTypes.string,
      intensity: PropTypes.number.isRequired,
      sector: PropTypes.string.isRequired,
      topic: PropTypes.string.isRequired,
      insight: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      region: PropTypes.string.isRequired,
      start_year: PropTypes.string,
      impact: PropTypes.string,
      added: PropTypes.string.isRequired,
      published: PropTypes.string.isRequired,
      country: PropTypes.string.isRequired,
      relevance: PropTypes.number.isRequired,
      pestle: PropTypes.string.isRequired,
      source: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      likelihood: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default TopicsPolarAreaChart;
