import { useState } from "react";
import { Bar } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { Box, Heading, Select } from "@chakra-ui/react";
import PropTypes from "prop-types";

const IntensityChart = ({ data }) => {
  const [selectedAttribute, setSelectedAttribute] = useState("intensity");

  const handleAttributeChange = (event) => {
    setSelectedAttribute(event.target.value);
  };

  // Filter data to include only entries with both start_year and the selected attribute
  const filteredData = data.filter(
    (item) => item.start_year && item[selectedAttribute] !== undefined
  );

  // Create a Map to ensure unique years and aggregate selected attribute values
  const yearAttributeMap = new Map();

  filteredData.forEach((item) => {
    if (yearAttributeMap.has(item.start_year)) {
      yearAttributeMap.set(
        item.start_year,
        yearAttributeMap.get(item.start_year) + item[selectedAttribute]
      );
    } else {
      yearAttributeMap.set(item.start_year, item[selectedAttribute]);
    }
  });

  // Extract unique years and their corresponding attribute values
  const years = Array.from(yearAttributeMap.keys());
  const rawAttributeData = Array.from(yearAttributeMap.values());

  // Normalize attribute data to be within 0 to 100%
  const maxAttribute = Math.max(...rawAttributeData);
  const attributeData = rawAttributeData.map(
    (value) => (value / maxAttribute) * 100
  );

  // Function to get color based on attribute value
  const getColor = (value) => {
    const colors = ["#7F00FF", "#F2B93B", "#FF8000", "#FF453A"];
    const threshold = 100 / 4;
    if (value < threshold) {
      return colors[0];
    } else if (value < threshold * 2) {
      return colors[1];
    } else if (value < threshold * 3) {
      return colors[2];
    } else {
      return colors[3];
    }
  };

  const chartData = {
    labels: years,
    datasets: [
      {
        label:
          selectedAttribute.charAt(0).toUpperCase() +
          selectedAttribute.slice(1),
        backgroundColor: attributeData.map((value) => getColor(value)),
        borderColor: "rgba(0,0,0,1)",
        borderWidth: 1,
        data: attributeData,
      },
    ],
  };

  const chartOptions = {
    layout: {
      padding: {
        top: 20,
        bottom: 20,
        left: 20,
        right: 20,
      },
    },
    plugins: {
      tooltip: {
        enabled: true,
        backgroundColor: "rgba(0,0,0,0.8)",
        titleColor: "white",
        bodyColor: "white",
        borderColor: "white",
        borderWidth: 1,
        cornerRadius: 5,
        displayColors: false,
      },
      legend: {
        display: false,
      },
      datalabels: {
        anchor: "end",
        align: "start",
        offset: -20,
        font: {
          size: 14,
          weight: "bold",
        },
        formatter: (value) => value.toFixed(2) + "%",
        shadowBlur: 10,
        shadowColor: "white",
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          font: {
            family: "Roboto",
            size: 14,
            weight: "bold",
          },
        },
      },
      y: {
        grid: {
          display: false,
        },
        ticks: {
          font: {
            family: "Roboto",
            size: 14,
            weight: "bold",
          },
          callback: (value) => value + "%",
          max: 100,
        },
      },
    },
    animation: {
      duration: 4000,
      easing: "easeInOutQuart",
      mode: "progressive",
    },
  };

  return (
    <Box
      m={[2, 4, 6, 8]} // Responsive margins
      p={[2, 4, 6, 8]} // Responsive padding
      fontFamily="Arial, sans-serif"
      borderRadius="8px"
      boxShadow="0px 0px 10px rgba(0, 0, 0, 0.1)"
    >
      <Heading as="h2" mb={4} textAlign="center">
        Intensity Chart
      </Heading>
      <Select mb={4} onChange={handleAttributeChange} value={selectedAttribute}>
        <option value="intensity">Intensity</option>
        <option value="relevance">Relevance</option>
        <option value="likelihood">Likelihood</option>
      </Select>
      <Box height="500px" width="100%" overflow="hidden">
        <Bar
          data={chartData}
          options={chartOptions}
          plugins={[ChartDataLabels]}
        />
      </Box>
    </Box>
  );
};

IntensityChart.propTypes = {
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

export default IntensityChart;
