import { Doughnut } from "react-chartjs-2";
import { Box, Heading } from "@chakra-ui/react";
import PropTypes from "prop-types";

const RegionChart = ({ data }) => {
  // Use a Map to count the occurrences of each region
  const regionCounts = new Map();

  data.forEach((item) => {
    if (regionCounts.has(item.region)) {
      regionCounts.set(item.region, regionCounts.get(item.region) + 1);
    } else {
      regionCounts.set(item.region, 1);
    }
  });

  const chartData = {
    labels: Array.from(regionCounts.keys()),
    datasets: [
      {
        data: Array.from(regionCounts.values()),
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4CAF50",
          "#FF9800",
          "#9C27B0",
          "#3F51B5",
        ],
        hoverBackgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4CAF50",
          "#FF9800",
          "#9C27B0",
          "#3F51B5",
        ],
      },
    ],
  };

  return (
    <Box>
      <Heading as="h2" mb={4}>
        Region Distribution
      </Heading>
      <Doughnut data={chartData} />
    </Box>
  );
};

RegionChart.propTypes = {
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

export default RegionChart;
