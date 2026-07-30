import "./navigation-panel.css"
import MiniProfile from "./MiniProfile/MiniProfile";
import NavigationMenu from "./NavigationMenu/NavigationMenu";



const NavigationPanel = ({activeSection, setActiveSection}: {activeSection: string, setActiveSection: (section: string) => void;}) => {
    return (
        <div className="navigation-panel w-[30rem] sm:w-[35rem] py-2 flex flex-col gap-10 h-screen">
            <MiniProfile />
            <NavigationMenu activeSection={activeSection} setActiveSection={setActiveSection} />
        </div>
    )
}

export default NavigationPanel;