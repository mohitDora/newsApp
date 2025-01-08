const { Pinecone } = require("@pinecone-database/pinecone");
const dotenv = require("dotenv");

dotenv.config();

let pineconeInstance;

const initPinecone = async () => {
  if (!process.env.PINECONE_API_KEY || !process.env.INDEX_NAME) {
    throw new Error(
      "PINECONE_API_KEY and INDEX_NAME must be set in the environment."
    );
  }

  if (!pineconeInstance) {
    pineconeInstance = new Pinecone({ apiKey: process.env.PINECONE_API_KEY });
    console.log("Pinecone client initialized.");
  }
  return pineconeInstance;
};

module.exports = { initPinecone };