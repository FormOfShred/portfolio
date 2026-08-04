import classNames from "classnames";

import "./navigation-menu.css";

const MENU: { id: string, label: string, icon: string}[] = [
    { id: "about", label: "About", icon: "fa-solid fa-user"},
    { id: "experience", label: "Experience", icon: "fa-solid fa-briefcase"},
    { id: "contact", label: "Contact", icon: "fa-solid fa-phone"}
]

const NavigationMenu = ({activeSection, setActiveSection}: {activeSection: string, setActiveSection: (section: string) => void;}) => {
    
    return (
        <div>
            <div className="space-y-3">
                { MENU.map(({id, label, icon}) => (
                    <div onClick={() => setActiveSection(id)}>
                        <div className={classNames("navigation-menu-item text-gold flex", { "navigation-menu-item--selected": activeSection === id})}>
                            <div className="navigation-menu-item__icon w-13 h-13">
                                <span className={classNames(icon, "fa-xl")} />
                            </div>
                            {label}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default NavigationMenu;