import Card from "@/components/shared/Card";
import Hero from "@/components/shared/Hero";
import StepCard from "@/components/shared/StepCard";
import Title from "@/components/shared/Title";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { features, works } from "@/lib/Constants";

function Landing() {
  return (
    <div className="w-[100%] lg:max-w-[1200px] m-auto mb-4 px-4 md:px-12 lg:px-4">
      <Hero></Hero>
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
      <Title title="Try it Now!" />
      <div className="flex w-full md:max-w-md items-center space-x-2">
        <Input
          type="email"
          placeholder="Enter a query to see a summary of the latest news."
          className="outline outline-2 rounded-sm"
        />
        <Button type="submit">Subscribe</Button>
      </div>
    </div>
  );
}

export default Landing;
