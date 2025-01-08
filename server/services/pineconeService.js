const { initPinecone } = require("../config/pineconeClient");
const { generateEmbeddings } = require("./embeddingService");

const indexName = process.env.INDEX_NAME;

const createIndex = async () => {
  try {
    const pinecone = await initPinecone();
    const response = await pinecone.listIndexes();
    const indexes = response.indexes || [];
    const indexExists = indexes.some((index) => index.name === indexName);

    if (indexExists) {
      console.log(`Index "${indexName}" exists.`);
      return pinecone.Index(indexName);
    } else {
      const createdIndex = await pinecone.createIndex({
        name: indexName,
        dimension: 1024,
        metric: "cosine",
        spec: {
          serverless: {
            cloud: "aws",
            region: "us-east-1",
          },
        },
      });

      console.log("Index created successfully:", createdIndex);
      return createdIndex;
    }
  } catch (error) {
    console.error("Error creating index:", error);
  }
};

const deleteIndex = async () => {
  try {
    const pinecone = await initPinecone();
    await pinecone.deleteIndex(indexName);
    console.log(`Index ${indexName} deleted.`);
  } catch (error) {
    console.error("Error deleting index:", error);
  }
};

const upsertDocuments = async (articles) => {
  try {
    const pinecone = await initPinecone();
    const index = pinecone.Index(indexName);

    const embeddings=await generateEmbeddings(articles,"passage");
    console.log(embeddings);

    const upsertData = articles.map((article, i) => ({
      id: article.url,
      values: embeddings[i].values,
      metadata: {
        title: article.title,
        description: article.description,
        url: article.url,
        publishedAt: article.publishedAt,
      },
    }));

    await index.upsert(upsertData);
    console.log("Documents upserted successfully");
  } catch (error) {
    console.error("Error upserting documents:", error);
  }
};

const queryDocuments = async (query) => {
  try {
    const pinecone = await initPinecone();
    const index = pinecone.Index(indexName);

    const embeddings = await generateEmbeddings(query, "query");

    const result = await index.query({
      vector: embeddings[0].values,
      topK: 3,
      includeMetadata: true,
    });

    return result.matches;
  } catch (error) {
    console.error("Error querying documents:", error);
  }
};

module.exports = {
  createIndex,
  deleteIndex,
  upsertDocuments,
  queryDocuments,
};
