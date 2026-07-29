import "./navigation-panel.css"
import MiniProfile from "./MiniProfile/MiniProfile";



const NavigationPanel = () => {
    return (
        <div className="navigation-panel w-[24rem] sm:w-[27rem] py-2">
            <MiniProfile />
        </div>
    )
}

export default NavigationPanel;