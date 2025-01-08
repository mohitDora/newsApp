import { History, Boxes, TextCursorInput } from "lucide-react";

export const NavItems = [
  { id: 1, name: "Home", link: "/" },
  { id: 2, name: "Query", link: "/query" },
  { id: 3, name: "Genre", link: "/genre" },
];

export const features = [
  {
    id: 1,
    title: "Query-Based Summarization",
    desc: "Type in any topic or keyword to instantly get a summarized version of the latest news stories.",
    icon: <TextCursorInput size={48} className="text-primaryBlack" />,
  },
  {
    id: 2,
    title: "Genre-Based News Retrieval",
    desc: "Customize your experience by exploring news stories tailored to your favorite genres like Technology, Sports, or Entertainment.",
    icon: <Boxes size={48} className="text-primaryBlack" />,
  },
  {
    id: 3,
    title: "Real-Time Updates",
    desc: "Stay up-to-date with breaking news, updated hourly to keep you informed.",
    icon: <History size={48} className="text-primaryBlack" />,
  },
];
export const works = [
  {
    id: 1,
    title: "Authenticate",
    desc: "Sign up or log in to access the app's full features.",
  },
  {
    id: 2,
    title: "Query or Browse",
    desc: "Type a query to search for news or select a genre to explore.",
  },
  {
    id: 3,
    title: "Get Summarized News",
    desc: "Receive a concise summary of the latest news stories instantly.",
  },
];
export const genres = [
  { id: 1, name: "Technology" },
  { id: 2, name: "Sports" },
  { id: 3, name: "Entertainment" },
  { id: 4, name: "Business" },
  { id: 5, name: "Health" },
  { id: 6, name: "Politics" },
  { id: 7, name: "Science" },
  { id: 8, name: "Social Media" },
  { id: 9, name: "Travel" },
  { id: 10, name: "Arts" },
];

export const content = [
  {
    title: "Explore the Universe",
    desc: "Dive into the mysteries of space and discover the stars, planets, and galaxies that make up our vast universe. Embark on a journey that takes you beyond the stars and into the unknown."
  },
  {
    title: "Innovate with Technology",
    desc: "Technology is rapidly changing the world. Stay ahead of the curve by embracing new tools, software, and innovations that can revolutionize industries and improve lives."
  },
  {
    title: "Unleash Creativity",
    desc: "Creative expression is the key to personal growth. Whether through art, writing, or innovation, the act of creating allows you to explore new dimensions of imagination and ideas."
  },
  {
    title: "Lead with Vision",
    desc: "Effective leadership is about inspiring others to follow your vision. Empowering teams, fostering collaboration, and creating a culture of innovation can drive meaningful change."
  },
  {
    title: "Adventure Awaits",
    desc: "The world is full of new experiences waiting to be explored. Whether you’re hiking through forests, diving into oceans, or discovering new cultures, adventure is just around the corner."
  }
];
