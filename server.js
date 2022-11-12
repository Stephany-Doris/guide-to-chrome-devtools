const express = require("express");
const app = express();
const path = require("path");
const router = express.Router();
const port = 3000;

app.use(express.static(__dirname));
app.use('/', express.static(path.join(__dirname, "/index.html")))
app.use('/elements', express.static(path.join(__dirname, "/static/elements.html")))
app.use('/network', express.static(path.join(__dirname, "/static/network.html")))
app.use('/sources', express.static(path.join(__dirname, "/static/sources.html")))

app.listen(port, () => {
  console.log(`🚀 Server running on port ${port}`);
});
