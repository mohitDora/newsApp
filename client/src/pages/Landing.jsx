import Card from "@/components/shared/Card";
import Hero from "@/components/shared/Hero";
import StepCard from "@/components/shared/StepCard";
import Title from "@/components/shared/Title";
import { features, works } from "@/lib/Constants";
import Main from "./Main";
import { useRef } from "react";

function Landing() {
  const ref = useRef(null);
  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="w-[100%] lg:max-w-[1200px] m-auto mb-4 px-4 md:px-12 lg:px-4">
      <Hero handleClick={handleClick}></Hero>
      <Title title="Why Choose NewsApp?" />
      <div className="flex flex-wrap gap-8">
        {features.map((feature) => (
          <Card
            key={feature.id}
            title={feature.title}
            desc={feature.desc}
            icon={feature?.icon}
          />
        ))}
      </div>
      <Title title="How Does It Work?" />
      <div className="flex flex-wrap gap-8">
        {works.map((work) => (
          <StepCard
            key={work.id}
            index={work.id}
            title={work.title}
            desc={work.desc}
          />
        ))}
      </div>
      <Title ref={ref} title="Try it Now!" />
      <Main></Main>
    </div>
  );
}

export default Landing;
