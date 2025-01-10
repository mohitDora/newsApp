const cron = require("node-cron");
const axios = require("axios");
const { upsertDocuments } = require("./pineconeService");

const getYesterdayDate = () => {
  const date = new Date();
  date.setDate(date.getDate() - 1);

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
};

cron.schedule("0 14 * * *", async () => {
  try {
    console.log("Fetching and upserting articles...");
    const yesterdayDate = getYesterdayDate();
    const response = await axios.get(`https://newsapi.org/v2/everything?domains=businessinsider.com,espn.com,ign.com,techchrunch.com,foxnews.com&apiKey=${process.env.NEWS_API_KEY}&language=en&from=${yesterdayDate}`);

    const filteredArticles = response.data.articles.filter(article => article.title && article.content);

    if (filteredArticles.length > 0) {
      upsertDocuments(filteredArticles);
      console.log(`Upserted ${filteredArticles.length} articles.`);
    } else {
      console.log('No valid articles to upsert.');
    }
  } catch (error) {
    console.error("Error fetching or processing articles:", error);
  }
});
