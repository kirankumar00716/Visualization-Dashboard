const Data = require("./../models/dataSchema").module;

exports.getAllData = async (req, res, next) => {
  try {
    const data = await Data.find({});
    res.status(200).json({
      msg: "successful",
      data,
    });
  } catch (err) {
    console.log("getData:", err);
    next(err);
  }
};

exports.filterData = async (req, res) => {
  const {
    end_year,
    topic,
    sector,
    region,
    pestle,
    source,
    swot,
    country,
    city,
  } = req.query;
  console.log(req.query);

  const filters = {};

  // Define filter properties
  const filterProperties = {
    end_year,
    topic,
    sector,
    region,
    pestle,
    source,
    swot,
    country,
    city,
  };

  // Construct the filters object
  Object.entries(filterProperties).forEach(([key, value]) => {
    if (value) {
      if (key === "end_year") {
        filters[key] = { $lte: Number(value) };
      } else {
        filters[key] = value;
      }
    }
  });

  try {
    const data = await Data.find(filters);
    res.status(200).json({
      msg: "successful",
      data,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
