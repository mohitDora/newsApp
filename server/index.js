require("dotenv").config();
const { initPinecone } = require("./config/pineconeClient");
const { generateSummary } = require("./services/geneateSummary");
const { queryDocuments } = require("./services/pineconeService");
const express = require("express");
const cors = require("cors");
const app = express();
const corsOptions = {
  origin: ["http://localhost:5173", "https://dialogue-nine.vercel.app"],
  methods: "GET,POST,PUT,DELETE,PATCH,HEAD",
  credentials: true,
  preflightContinue: false,
};

app.use(cors(corsOptions));
app.use(express.json());

initPinecone();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.post("/query", async (req, res) => {
  try {
    
    console.log(req.body)
    const {query} = req.body;
    if(!query) {
      return res.status(400).json({error: "Query is required"});
    }
    const results = await queryDocuments([{ content: query }]);
    const texts = results
      .map((item) => `${item.metadata.title} ${item.metadata.description}`)
      .join(" ");
    const summary = await generateSummary(texts);
    console.log("Summary: ", summary);
    res.send(summary);
  } catch (error) {
    console.log(error);
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
