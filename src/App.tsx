import { useState } from "react"
import NavigationPanel from "./components/NavigationPanel/NavigationPanel"
import InfoSections from "./components/InfoSections/InfoSections"

function App() {
  const [activeSection, setActiveSection] = useState<string>("about")

  return (
    <div className="flex app">
      <NavigationPanel activeSection={activeSection} setActiveSection={setActiveSection} />
      <InfoSections activeSection={activeSection} />
    </div>
  )
}

export default App
