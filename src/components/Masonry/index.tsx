import AvailabilityCard from "./components/AvailabilityCard";
import ContactCard from "./components/ContactCard";
import HeroCard from "./components/HeroCard";
import LocationCard from "./components/LocationCard";
import ProjectCard from "./components/ProjectCard";
import TechStackCard from "./components/TechStackCard";

import portfolio_image from "../../assets/project_portfolio.png";
import releastiary_image from "../../assets/project_releastiary.png";
import WorkHistoryCard from "./components/WorkHistoryCard/WorkHistoryCard";

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
            {title: "website", link: "#"},
            {title: "github", link: "https://github.com/FormOfShred/portfolio"}
          ]
        }
        image={portfolio_image}
      />
      <ContactCard />
      <WorkHistoryCard />
      <ProjectCard 
        title="Releastiary" 
        description="A website on which you can see which video games are released on a given day." 
        tags={["React", "TypeScript", "Vite", "Tailwind", "shadcn", "Express"]}
        links={
          [
            {title: "website", link: "https://releastiary.onrender.com/"},
            {title: "github", link: "https://github.com/FormOfShred/releastiary"}
          ]
        }
        image={releastiary_image}
      />
    </div>
  )
}

export default Masonry;