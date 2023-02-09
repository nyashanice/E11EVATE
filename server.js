const express = require("express");
const path = require("path");
const PORT = 3001;

// const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.static(__dirname + "/public"));

// GET Route for homepage
app.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, "/public/index.html"))
);

app.listen(PORT, () => console.log(`App listening on port ${PORT}`));
