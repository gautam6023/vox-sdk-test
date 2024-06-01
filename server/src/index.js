import express from "express";
import cors from "cors";
import "dotenv/config";
import axios from "axios";

const app = express();

console.log(process.env.FRONTEND_URL);
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
  })
);

let token = "";

app.get("/token", async (req, res) => {
  res.setHeader("Content-Type", "application/json");
  const speechKey = process.env.SPEECH_KEY;
  const speechRegion = process.env.SPEECH_REGION;

  const refreshTheToken = req.query?.refresh;

  const headers = {
    headers: {
      "Ocp-Apim-Subscription-Key": speechKey,
      "Content-Type": "application/x-www-form-urlencoded",
    },
  };

  if (!token || refreshTheToken) {
    const tokenResponse = await axios.post(
      `https://${speechRegion}.api.cognitive.microsoft.com/sts/v1.0/issueToken`,
      null,
      headers
    );
    token = tokenResponse.data;
  }
  res.send({
    token: token,
    region: speechRegion,
  });
});

app.listen(8080, () => console.log("Server running on port 8080"));
