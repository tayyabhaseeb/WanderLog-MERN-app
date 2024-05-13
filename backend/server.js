const app = require("./app");
const mongoose = require("mongoose");
const port = 6000;

const DB =
  "mongodb+srv://tayyab:sairaArshad19@cluster0.xckkbxb.mongodb.net/places?retryWrites=true&w=majority&appName=Cluster0";

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database is connected");
  });

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
