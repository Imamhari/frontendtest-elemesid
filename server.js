const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || 3000;

// Sajikan file statis dari folder 'out'
app.use(express.static(path.join(__dirname, "out")));

// Default route ke index.html
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "out", "index.html"));
});

app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
