import classNames from "classnames";
import SectionTitle from "../SectionTitle/SectionTitle";

const CONTACT: { label: string, icon: string, link: string}[] = [
    { label: "robynhamelryck@outlook.com", icon: "fa-solid fa-envelope", link: "mailto:robynhamelryck@outlook.com"},
    { label: "github.com/FormOfShred", icon: "fa-brands fa-github", link: "https://github.com/FormOfShred"},
    { label: "linkedin.com/in/robyn-hamelryck", icon: "fa-brands fa-linkedin", link: "https://linkedin.com/in/robyn-hamelryck"},
]

const ContactCard = ({ label, icon, link}: { label: string, icon: string, link: string}) => {
    return (
        <div className="flex">
            <a href={link} target="_blank" className="about-section-card space-x-3 p-3 w-2xl">
                <span className={classNames("text-[0.8rem] text-gold-dim", icon)}/>
                <span className="text-gold-light">{label}</span>
            </a>
        </div>
    )
}

const ContactSection = () => {
    return (
        <div>
            <SectionTitle title="Contact" />
            <div className="mt-10 space-y-5">
                <p className="max-w-4xl text-lg text-gold-light">
                    Reach out
                </p>
                { CONTACT.map(({label, icon, link}) => (
                    <ContactCard label={label} icon={icon} link={link}/>
                ))}
            </div>
        </div>
    )
}

export default ContactSection;