const app = require("./app");
const connectDB = require("./config/connectDB");
const PORT = process.env.PORT || 5000;

// connect to mongoDB
connectDB();

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
