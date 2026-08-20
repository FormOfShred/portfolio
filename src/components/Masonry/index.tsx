import HeroCard from "./components/HeroCard";
import TechStackCard from "./components/TechStackCard";

const Masonry = () => {
  return (
    <div
      className="grid w-full max-w-6xl grid-cols-12 gap-4 auto-rows-min"
    >
      <HeroCard />
      <TechStackCard />
    </div>
  )
}

export default Masonry;