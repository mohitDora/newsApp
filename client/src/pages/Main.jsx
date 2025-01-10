import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

const Main = () => {
  const [text, setText] = useState("");
  const [response, setResponse] = useState([]);

  const BASE_URL = import.meta.env.VITE_BASE_URL;

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleSendMessage = async () => {
    try {
      const res = await fetch(`${BASE_URL}/query`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query: text.trim() }),
      });

      if (res.ok) {
        const data = await res.json();
        const extractedText = data.kwargs?.content || ""; // Ensure to access the correct property
        setResponse((prev) => [...prev, extractedText]);
        setText(""); // Clear the textarea after sending
      } else {
        console.error("Error sending message:", res.statusText);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <Textarea
        placeholder="Type your message here."
        value={text}
        onChange={handleChange}
      />
      <Button disabled={!text.trim()}
        className="bg-primaryOrange text-black hover:bg-primaryHoverOrange mt-2 rounded-sm border-2 border-primaryBlack text-primaryBlack"
        onClick={handleSendMessage}
      >
        Send message
      </Button>
      {response.length > 0 && (
        <Card className="bg-transparent">
          <CardHeader>
            <CardTitle>Server Response</CardTitle>
            <CardDescription>
              Below are the responses from the server:
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="text-primaryBlack list-disc pl-4">
              {response.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default Main;
