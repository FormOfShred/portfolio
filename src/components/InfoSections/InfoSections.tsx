import AboutSection from "./components/AboutSection/AboutSection";
import ContactSection from "./components/ContactSection/ContactSection";
import ExperienceSection from "./components/ExperienceSection/ExperienceSection";
import UnderConstruction from "./components/UnderConstruction/UnderConstruction";

const InfoSections = ({activeSection, bigScreen}: {activeSection: string, bigScreen: boolean}) => {
    return (
        <div className="relative flex-1 overflow-y-auto space-y-20 px-6 py-10 sm:px-12 sm:py-35">
            {(activeSection === "about" || !bigScreen) && <AboutSection />}
            {(activeSection === "experience" || !bigScreen) && <ExperienceSection />}
            {(activeSection === "contact" || !bigScreen) && <ContactSection />}
            {(activeSection !== "about" && activeSection !== "experience" && activeSection !== "contact") && <UnderConstruction />}
        </div>
    )
}

export default InfoSections;