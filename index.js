import express from "express";

const app = express();
app.get("/heavytask", async (req, res) => {
  while (true) {
    console.log("hey task going on.");
  }
});

app.get("/lighttask", (req, res) => {
  console.log(`Process is handling LIGHT Request : `, process.pid);
  res.json({ message: "A simple HTTP request" });
});
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
