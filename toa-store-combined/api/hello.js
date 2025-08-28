const express = require("express");
const path = require("path");
const app = express();

// API backend
app.get("/api/hello", (req, res) => {
  res.json({ msg: "Hello from backend!" });
});

// เสิร์ฟ frontend (static)
app.use(express.static(path.join(__dirname, "../frontend")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/index.html"));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
