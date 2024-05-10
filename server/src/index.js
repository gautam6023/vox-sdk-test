import express from "express";
import cors from "cors";
import "dotenv/config";

const app = express();

app.use(
  cors({
    origin: process.env.FRONTEND_URL,
  })
);

app.get("/token", (req, res) => {
  return res.send({
    token: process.env.TOKEN,
    region: process.env.REGION,
  });
});

app.listen(8080, () => console.log("Server running on port 8080"));
