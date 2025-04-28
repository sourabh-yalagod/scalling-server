import express from "express";
const app = express();

app.get("/ligttask", (req, res) => {
  console.log(`Process is handling LIGHT Request : `, process.pid);
  res.send("A simple HTTP request");
});

app.listen(3000, () => {
  console.log(`worker process ${process.pid} is listening on port 3000`);
});
