import HeroCard from "./components/HeroCard";

const Masonry = () => {
  return (
    <div
      className="grid w-full max-w-6xl grid-cols-12 gap-4 auto-rows-min"
    >
      <HeroCard />
    </div>
  )
}

export default Masonry;