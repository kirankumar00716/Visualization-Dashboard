const app = require("./app");
const dotEnv = require("dotenv");
const mongoose = require("mongoose");

dotEnv.config();

const mongoDBUrl = process.env.MONGODB_URL;
const url = mongoDBUrl.replace("<password>", process.env.MONGODB_PASSWORD);
console.log(url);
//mongoose connection
try {
  mongoose
    .connect(url, {
      connectTimeoutMS: 5000,
    })
    .catch((err) => {
      throw err;
    });
  console.log("mongodb connection successful!!");
} catch (error) {
  console.error("💥", error);
}

//creating event listener
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
