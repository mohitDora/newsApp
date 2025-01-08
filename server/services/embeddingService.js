const { initPinecone } = require("../config/pineconeClient");

const model = "multilingual-e5-large";

const generateEmbeddings = async (articles,type) => {
  console.log(articles);
  const pinecone = await initPinecone();
  const embeddings = await pinecone.inference.embed(model, articles.map(d => d.content),{inputType:type});
  return embeddings;
};

module.exports = { generateEmbeddings };