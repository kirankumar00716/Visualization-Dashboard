import { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import PropTypes from "prop-types";
import {
  Box,
  Flex,
  Heading,
  Select,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";

const CountryChart = ({ data }) => {
  const { colorMode } = useColorMode();
  const [selectedCountry, setSelectedCountry] = useState(
    "United States of America"
  );
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    if (!data || data.length === 0) {
      return;
    }

    const countryData = data.filter(
      (entry) => entry.country === selectedCountry
    );

    const sectorIntensity = countryData.reduce((acc, entry) => {
      if (acc[entry.sector]) {
        acc[entry.sector] += entry.intensity;
      } else {
        acc[entry.sector] = entry.intensity;
      }
      return acc;
    }, {});

    const sectorLabels = Object.keys(sectorIntensity);
    const sectorIntensities = sectorLabels.map(
      (sector) => sectorIntensity[sector]
    );

    const chartBackgroundColor =
      colorMode === "light"
        ? "rgba(79, 59, 169, 0.7)"
        : "rgba(144, 104, 190, 0.7)";

    setChartData({
      labels: sectorLabels,
      datasets: [
        {
          label: "Intensity",
          data: sectorIntensities,
          backgroundColor: chartBackgroundColor,
        },
      ],
    });
  }, [selectedCountry, data, colorMode]);

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
        grid: {
          color: useColorModeValue("gray.200", "gray.900"),
        },
      },
    },
  };

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
  };

  return (
    <Box
      p={6}
      shadow="md"
      bg={useColorModeValue("white", "gray.800")}
      m={[4, 8, 16]}
      borderRadius="md"
    >
      <Flex direction="column" alignItems="center" margin="auto">
        <Heading as="h2" textAlign="center" mb={4}>
          Country Chart
        </Heading>
        <Select
          value={selectedCountry}
          onChange={handleCountryChange}
          mb={4}
          w={["100%", "75%", "50%", "25%"]}
          colorScheme="purple"
        >
          {Array.from(new Set(data.map((entry) => entry.country))).map(
            (country) => (
              <option key={country} value={country}>
                {country}
              </option>
            )
          )}
        </Select>
        <Box height="500px" width="100%">
          {chartData ? (
            <Bar data={chartData} options={chartOptions} />
          ) : (
            "Loading..."
          )}
        </Box>
      </Flex>
    </Box>
  );
};

CountryChart.propTypes = {
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

export default CountryChart;
