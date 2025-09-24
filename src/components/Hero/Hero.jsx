import HeroHeading from "./HeroHeading";
import SideButton from "./SideButton";
import HeroSubtext from "./HeroSubtext";
import MobileHeroSubtext from "./MobileHeroSubtext";
import MobileHeroActions from "./MobileHeroActions";
import BackgroundDiamond from "./BackgroundDiamond";

const Hero = () => {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen w-full text-[#1A1B1C] overflow-hidden">
      {/* Center Heading */}
      <HeroHeading />

      {/* Side Buttons (desktop only) */}
      <SideButton direction="left" text="DISCOVER A.I." link="/discover" position="left-[calc(-53vw)] xl:left-[calc(-50vw)]" />
<SideButton direction="right" text="TAKE TEST" link="/testing" position="right-[calc(-53vw)] xl:right-[calc(-50vw)]" />


      {/* Desktop Subtext */}
      <HeroSubtext />

      {/* Mobile Subtext + Actions */}
      <MobileHeroSubtext />
      <MobileHeroActions />

      {/* Mobile Background Diamonds */}
      <BackgroundDiamond />
    </section>
  );
};

export default Hero;
