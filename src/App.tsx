import { useEffect, useState } from "react"
import NavigationPanel from "./components/NavigationPanel/NavigationPanel"
import InfoSections from "./components/InfoSections/InfoSections"

function App() {
  const [activeSection, setActiveSection] = useState<string>("about")
  const [bigScreen, setBigScreen] = useState<boolean>(window.innerWidth > 1200);

  useEffect(() => {
    const handleResize = () => {
      setBigScreen(window.innerWidth > 1200);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);


  return (
    <div className="flex app">
      {bigScreen && <NavigationPanel activeSection={activeSection} setActiveSection={setActiveSection} />}
      <InfoSections activeSection={activeSection} bigScreen={bigScreen} />
    </div>
  )
}

export default App
