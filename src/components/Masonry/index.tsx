import AvailabilityCard from "./components/AvailabilityCard";
import ContactCard from "./components/ContactCard";
import HeroCard from "./components/HeroCard";
import LocationCard from "./components/LocationCard";
import ProjectCard from "./components/ProjectCard";
import TechStackCard from "./components/TechStackCard";

import portfolio_image from "../../assets/project_portfolio.png";

const Masonry = () => {
  return (
    <div
      className="grid w-full max-w-6xl grid-cols-12 gap-4 auto-rows-min"
    >
      <HeroCard />
      <TechStackCard />
      <LocationCard />
      <AvailabilityCard />
      <ProjectCard 
        title="Portfolio" 
        description="A personal portfolio showcasing who I am, the projects I’ve built, and ways to get in touch with me." 
        tags={["React", "TypeScript", "Vite", "Tailwind", "CSS"]}
        links={
          [
            {title: "website", link: "/"},
            {title: "github", link: "https://github.com/FormOfShred/portfolio"}
          ]
        }
        image={portfolio_image}
      />
      <ContactCard />
    </div>
  )
}

export default Masonry;