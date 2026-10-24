import { useState } from "react";
import { ProfileCard } from "./features/ProfileCard/profile-card";
import { ProfileGifs } from "./features/ProfileGifs/profile-gifs";
import { ProfileSideBar } from "./features/ProfileSideBar/profile-side-bar";
import { ProfileSocials } from "./features/ProfileSocials/profile-socials";
import { Projects } from "./features/ProfileSections/Projects/projects";
import { History } from "./features/ProfileSections/History/history";
import { Updates } from "./features/ProfileSections/Updates/updates";

function App() {
  const [selectedSection, setSelectedSection] = useState("Projects");

  const renderSection = () => {
    switch (selectedSection) {
      case "Projects":
        return <Projects />;
      case "History":
        return <History />;
      case "Updates":
        return <Updates />;
      default:
        return <Projects />;
    }
  };

  return (
    <div className="m-2">
      <ProfileCard />

      <div className="flex flex-col sm:grid sm:grid-cols-4 pt-2 gap-2">
        <div className="flex flex-col gap-2">
          <ProfileSideBar
            selectedSection={selectedSection}
            setSelectedSection={setSelectedSection}
          />
          <ProfileSocials />
          <ProfileGifs />
        </div>

        <div className="col-span-3">{renderSection()}</div>
      </div>
    </div>
  );
}

export default App
