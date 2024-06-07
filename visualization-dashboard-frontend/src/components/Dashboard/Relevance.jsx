import { Bubble } from "react-chartjs-2";
import { Box, Heading } from "@chakra-ui/react";
import PropTypes from "prop-types";

const RelevanceBubbleChart = ({ data }) => {
  // Use a Map to ensure unique data points
  const uniqueDataMap = new Map();

  data.forEach((item) => {
    const key = `${item.likelihood}-${item.impact}-${item.relevance}-${item.intensity}`;
    if (!uniqueDataMap.has(key)) {
      uniqueDataMap.set(key, item);
    }
  });

  const uniqueData = Array.from(uniqueDataMap.values());

  const chartData = {
    datasets: [
      {
        label: "Relevance",
        data: uniqueData.map((item) => ({
          x: item.likelihood,
          y: item.impact,
          r: item.relevance * 5,
        })),
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
      {
        label: "Intensity",
        data: uniqueData.map((item) => ({
          x: item.likelihood,
          y: item.impact,
          r: item.intensity,
        })),
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    scales: {
      x: {
        type: "linear",
        position: "bottom",
        title: {
          display: true,
          text: "Likelihood",
        },
      },
      y: {
        title: {
          display: true,
          text: "Impact",
        },
      },
    },
    plugins: {
      legend: {
        display: true,
      },
    },
  };

  return (
    <Box
      margin={50}
      p={4}
      mt={8}
      borderRadius={18}
      boxShadow="0px 0px 10px rgba(0, 0, 0, 0.1)"
    >
      <Heading as="h2" mb={4}>
        Relevance Chart
      </Heading>
      <Bubble data={chartData} options={chartOptions} />
    </Box>
  );
};

RelevanceBubbleChart.propTypes = {
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
      impact: PropTypes.string.isRequired,
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

export default RelevanceBubbleChart;
