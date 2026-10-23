import { useState, type ReactNode } from "react";
import { ProfileCard } from "./features/ProfileCard/profile-card";
import { ProfileGifs } from "./features/ProfileGifs/profile-gifs";
import { ProfileSideBar } from "./features/ProfileSideBar/profile-side-bar";
import { ProfileSocials } from "./features/ProfileSocials/profile-socials";
import { Projects } from "./features/ProfileSections/Projects/projects";

function App() {
  const [selectedSection, setSelectedSection] = useState<ReactNode>(<Projects />)

  return (
    <div className="m-2">
      <ProfileCard />
      <div className="flex flex-col sm:grid sm:grid-cols-4 pt-2 gap-2">
        <div className="flex flex-col gap-2">
          <ProfileSideBar setSelectedSection={setSelectedSection}/>
          <ProfileSocials />
          <ProfileGifs />
        </div>
        <div className="col-span-3">{ selectedSection }</div>
      </div>
    </div>
  )
}

export default App
