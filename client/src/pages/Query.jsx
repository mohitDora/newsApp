import Title from "../components/shared/Title";
import Main from "./Main";

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
      <div className="w-[100%] lg:max-w-[1200px] m-auto my-4 px-4 md:px-12 lg:px-4">

      <Main></Main>
      </div>
    </>
  );
}

export default Query;
