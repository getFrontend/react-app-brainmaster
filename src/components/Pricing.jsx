import { MouseParallax } from "react-just-parallax";
import { smallSphere, stars } from "../assets";
import Button from "./Button";
import Heading from "./Heading";
import PricingList from "./PricingList";
import Section from "./Section";
import { LeftLine, RightLine } from "./design/Pricing";

const Pricing = () => {
  return (
    <Section id="pricing" className="overflow-hidden">
      <div className="container relative z-2">
        <div className="hidden relative justify-center mb-[6.5rem] lg:flex">
          <img
            src={smallSphere}
            alt="Sphere"
            width={255}
            height={255}
            className="relative z-1 animate-spin-slow"
          />
          <div className="absolute top-1/2 left-1/2 w-[60rem] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
            <MouseParallax strength={0.07}>
              <img
                src={stars}
                alt="stars"
                width={950}
                height={400}
                className="w-full"
              />
            </MouseParallax>
          </div>
        </div>
        <Heading
          title="Pay once, use forever"
          tag="Get started with Brain"
          tagAccent="master"
        />
        <div className="relative">
          <PricingList />
          <LeftLine />
          <RightLine />
        </div>
        <div className="flex justify-center mt-10">
          <Button
            className="text-xs font-code font-bold tracking-wider uppercase"
            href="#pricing"
          >
            See the full details
          </Button>
        </div>
      </div>
    </Section>
  );
};

export default Pricing;
