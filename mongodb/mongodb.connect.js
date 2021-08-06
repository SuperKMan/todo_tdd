const mongoose = require("mongoose");
const result = require("dotenv").config();

if (result.error) {
  throw result.error;
}
const dbConfig = result.parsed;

async function connect() {
  try {
    await mongoose.connect(
      `mongodb+srv://${dbConfig.DB_USER}:${dbConfig.DB_PASS}@${dbConfig.DB_HOST}?retryWrites=true&w=majority`,
      { useUnifiedTopology: true }
    );
  } catch (error) {
    console.error("Error connecting to mongodb");
    console.error(error);
  }
}

module.exports = { connect };
