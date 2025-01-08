import Title from "../components/shared/Title";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Search } from "lucide-react";
import { features } from "../lib/Constants";
import Card from "../components/shared/Card";

function Query() {
  return (
    <>
      <div className="w-[100%] bg-primaryOrange p-4">
        <div className="w-[100%] lg:max-w-[1200px] m-auto mb-4 px-4 md:px-12 lg:px-4">
          <Title title="Get the Latest News in Seconds" />
          <p className="font-nunito opacity-80 max-w-lg">
            Discover a smarter way to stay informed. Query the news you care
            about or explore trending topics by genre—all in a concise,
            summarized format.
          </p>
        </div>
      </div>
      <div className="w-[100%] px-4 md:max-w-2xl lg:max-w-[800px] m-auto p-4 flex items-center space-x-2 mt-4">
        <Input
          type="email"
          placeholder="Enter a query."
          className="outline outline-2 rounded-sm"
        />
        <Button
          size="lg"
          className=" bg-primaryOrange hover:bg-primaryHoverOrange text-md rounded-sm border-2 border-primaryBlack text-primaryBlack"
        >
          <Search size={48} />
          Search
        </Button>
      </div>
      <div className="w-[100%] lg:max-w-[1200px] m-auto my-8 px-4 md:px-12 lg:px-4 flex flex-wrap items-center gap-8">
        {features.length > 0 ? (
          features.map((feature) => (
            <Card key={feature.id} title={feature.title} desc={feature.desc} />
          ))
        ) : (
          <Card title="Title" desc="description"></Card>
        )}
      </div>
    </>
  );
}

export default Query;
