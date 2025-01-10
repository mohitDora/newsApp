import { initPinecone } from "../config/pineconeClient.js";

const model = "multilingual-e5-large";

export const generateEmbeddings = async (articles,type) => {
  console.log(articles);
  const pinecone = await initPinecone();
  const embeddings = await pinecone.inference.embed(model, articles.map(d => d.content),{inputType:type});
  return embeddings;
};