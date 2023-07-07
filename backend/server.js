const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
const port = 3001;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.get("/api/photo-gallery-feed-page/:page", (req, res) => {
  const page = req.params.page;
  const url = `https://englishapi.pinkvilla.com/app-api/v1/photo-gallery-feed-page/page/${page}`;

  axios
    .get(url)
    .then((response) => {
      res.json(response.data);
    })
    .catch((error) => {
      console.error("Error fetching articles:", error);
      res.status(500).json({ error: "Error fetching articles" });
    });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
