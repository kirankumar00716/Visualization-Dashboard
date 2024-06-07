import { Pie } from "react-chartjs-2";
import { Box, Heading, useColorModeValue } from "@chakra-ui/react";
import PropTypes from "prop-types";

const PieChart = ({ data }) => {
  const sectors = {};

  data.forEach((entry) => {
    if (!sectors[entry.sector]) {
      sectors[entry.sector] = 0;
    }
    sectors[entry.sector] += entry.intensity;
  });

  const getRandomColor = (index) => {
    const colors = [
      "#FF0080",
      "#00BFFF",
      "#FFD700",
      "#32CD32",
      "#FF4500",
      "#9400D3",
      // Add more colors as needed
    ];
    return colors[index % colors.length];
  };

  const chartData = {
    labels: Object.keys(sectors),
    datasets: [
      {
        data: Object.values(sectors),
        backgroundColor: Object.keys(sectors).map((_, index) =>
          getRandomColor(index)
        ),
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      tooltip: {
        position: "average",
      },
      legend: {
        position: "bottom",
        labels: {
          font: {
            size: 14,
          },
        },
      },
    },
  };

  return (
    <Box
      p={[2, 4, 6]} // Responsive padding
      borderRadius="20px"
      boxShadow="0px 0px 10px rgba(0, 0, 0, 0.1)"
      mt={[4, 6, 8]} // Responsive margin-top
      mx={[2, 4, 6, 8]} // Responsive horizontal margin
      shadow="md"
      pb={[4, 6, 8]} // Responsive padding-bottom
      bg={useColorModeValue("white", "gray.800")}
      maxHeight="700px"
      overflow="hidden"
    >
      <Heading as="h2" mb={4} textAlign="center">
        Sector Chart
      </Heading>
      <Box height={["300px", "400px", "500px"]} width="100%">
        <Pie data={chartData} options={chartOptions} />
      </Box>
    </Box>
  );
};

PieChart.propTypes = {
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

export default PieChart;
