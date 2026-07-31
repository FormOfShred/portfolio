import AboutSection from "./components/AboutSection/AboutSection";

const InfoSections = ({activeSection}: {activeSection: string}) => {
    return (
        <div className="relative flex-1 overflow-y-auto px-6 py-10 sm:px-12 sm:py-35">
            {activeSection === "about" && <AboutSection />}
        </div>
    )
}

export default InfoSections;