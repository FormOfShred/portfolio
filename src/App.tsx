import { ProfileCard } from "./features/ProfileCard/profile-card";
import { ProfileSideBar } from "./features/ProfileSideBar/profile-side-bar";
import { ProfileSocials } from "./features/ProfileSocials/profile-socials";

function App() {

  return (
    <div className="m-2">
      <ProfileCard />
      <div className="sm:grid sm:grid-cols-4 pt-2 gap-2">
        <ProfileSideBar />
        <div className="col-span-3">selected page will be here</div>

        <ProfileSocials />
      </div>
    </div>
  )
}

export default App
