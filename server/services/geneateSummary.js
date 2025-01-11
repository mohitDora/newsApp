import { ChatGroq } from "@langchain/groq";

const llm = new ChatGroq({
  model: "llama-3.2-3b-preview",
  temperature: 0,
  apiKey: process.env.GROQ_API_KEY,
  maxTokens: 200,
});
export const generateSummary = async (text) => {
    console.log(text);

    const messages=[
        {
            role: "system",
            content: "You are a helpful assistant that summarizes news articles."
        },
        {
            role: "user",
            content: `Summarize the following news articles: ${text}`
        }
    ]
    
    const summary = await llm.invoke(messages);
    return summary;
}