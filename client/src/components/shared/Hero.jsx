import { Button } from "../ui/button";

function Hero() {
  return (
    <div className="flex flex-col mt-12 items-start">
      <div className="font-bold font-montserrat text-4xl mb-8 text-primaryBlack">
        Get the Latest News in Seconds
      </div>
      <p className="font-nunito opacity-80 max-w-md">
        Discover a smarter way to stay informed. Query the news you care about
        or explore trending topics by genre—all in a concise, summarized format.
      </p>
      <div className="flex w-full md:max-w-md gap-4 mt-8">
        <Button
          size="lg"
          className=" bg-primaryOrange hover:bg-primaryHoverOrange text-md rounded-sm border-2 border-primaryBlack text-primaryBlack"
        >
          Get Started
        </Button>
        <Button
          size="lg"
          className=" bg-primaryWhite hover:bg-primaryHoverOrange text-md rounded-sm border-2 border-primaryBlack text-primaryBlack"
        >
          Try it Now!
        </Button>
      </div>
    </div>
  );
}

export default Hero;
