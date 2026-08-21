import AvailabilityCard from "./components/AvailabilityCard";
import ContactCard from "./components/ContactCard";
import HeroCard from "./components/HeroCard";
import LocationCard from "./components/LocationCard";
import TechStackCard from "./components/TechStackCard";

const Masonry = () => {
  return (
    <div
      className="grid w-full max-w-6xl grid-cols-12 gap-4 auto-rows-min"
    >
      <HeroCard />
      <TechStackCard />
      <LocationCard />
      <AvailabilityCard />
      <ContactCard />
    </div>
  )
}

export default Masonry;