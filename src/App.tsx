import { useState } from "react"
import NavigationPanel from "./components/NavigationPanel/NavigationPanel"

function App() {
  const [activeSection, setActiveSection] = useState<string>("about")

  return (
    <>
      <NavigationPanel activeSection={activeSection} setActiveSection={setActiveSection} />
    </>
  )
}

export default App
