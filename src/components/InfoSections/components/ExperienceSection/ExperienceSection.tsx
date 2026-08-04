import SectionTitle from "../SectionTitle/SectionTitle";

const EXPERIENCE = [
    {
        role: "Front-End Developer",
        company: "Apptweak",
        years: "Nov 2024 - present",
        desc: "Working on the Design System: maintain the custom component library and support other squads in their work."
    },
    {
        role: "Full-Stack Developer",
        company: "Adshot",
        years: "Feb 2024 - Apr 2024",
        desc: "Internship. Working both Back-End and Front-End on a website useable by clients"
    }
]

const ExperienceSection = () => {
    return (
    <div>
        <SectionTitle title="Experience"/>
        <ol className="max-w-4xl border-l border-gold-light pl-6">
            {EXPERIENCE.map((experience) => (
                <li className="mt-10 relative flex flex-col">
                    <span className="absolute top-2 -left-[1.72rem] h-2 w-2 rotate-45 bg-gold-light" />
                    <span className="text-[0.80rem] text-gold-dim">{experience.years}</span>
                    <span className="mt-1 text-lg text-gold-light">{experience.role}</span>
                    <span className="text-sm text-gold-dim">{experience.company}</span>
                    <span className="mt-2 text-gold-light">{experience.desc}</span>
                </li>
            ))}
        </ol>
    </div>
    )
}

export default ExperienceSection;