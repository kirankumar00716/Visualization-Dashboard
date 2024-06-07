import { Radar } from "react-chartjs-2";
import { Box, useColorModeValue, Heading } from "@chakra-ui/react";
import PropTypes from "prop-types";

const LikelihoodRadarChart = ({ data }) => {
  // Use a Map to ensure unique countries and their corresponding likelihood values
  const countryMap = new Map();

  data.forEach((item) => {
    if (!countryMap.has(item.country)) {
      countryMap.set(item.country, item.likelihood);
    }
  });

  // Extract unique countries and their likelihood values
  const countries = Array.from(countryMap.keys());
  const likelihoodData = Array.from(countryMap.values());

  const chartData = {
    labels: countries,
    datasets: [
      {
        label: "Likelihood",
        data: likelihoodData,
        backgroundColor: useColorModeValue(
          "rgba(79, 59, 169, 0.7)",
          "rgba(144, 104, 190, 0.7)"
        ),
        borderColor: useColorModeValue(
          "rgba(79, 59, 169, 1)",
          "rgba(144, 104, 190, 1)"
        ),
        borderWidth: 2,
        pointBackgroundColor: useColorModeValue("white", "black"),
        pointBorderColor: useColorModeValue(
          "rgba(79, 59, 169, 1)",
          "rgba(144, 104, 190, 1)"
        ),
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      r: {
        ticks: {
          beginAtZero: true,
          min: 0,
          max: 5,
          stepSize: 1,
        },
      },
    },
  };

  return (
    <Box
      borderRadius="20px"
      pt={[4, 6, 8]} // Responsive padding-top
      px={[2, 4, 6]} // Responsive padding-left and padding-right
      boxShadow="0px 0px 10px rgba(0, 0, 0, 0.1)"
      mt={[4, 6, 8]} // Responsive margin-top
      mx={[2, 4, 6, 8]} // Responsive horizontal margin
      shadow="md"
      pb={[4, 6, 8]} // Responsive padding-bottom
      bg={useColorModeValue("white", "gray.800")}
      maxHeight="700px"
      overflow="hidden"
    >
      <Heading as="h2" mb={4} ml={[2, 4, 6]}>
        Likelihood Chart
      </Heading>
      <Box height={["300px", "400px", "500px"]} width="100%">
        <Radar data={chartData} options={chartOptions} />
      </Box>
    </Box>
  );
};

LikelihoodRadarChart.propTypes = {
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

export default LikelihoodRadarChart;
