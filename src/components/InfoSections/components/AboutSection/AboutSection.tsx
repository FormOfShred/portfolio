import type { ReactNode } from "react";
import SectionTitle from "../SectionTitle/SectionTitle"

import "./about-section.css";

const Card = ({title, subtitle}: {title: string, subtitle: ReactNode}) => {
    return (
        <div className="about-section-card p-3 flex flex-col gap-3">
            <span className="text-[0.8rem] text-gold-dim">{title}</span>
            <span className="text-gold-light">{subtitle}</span>
        </div>
    )
}

const AboutSection = () => {
    return (
        <div>
            <SectionTitle title="About Robyn Hamelryck" />
            <div className="mt-10">
                <p className="max-w-4xl text-lg text-gold-light">
                    I am a developer mainly experienced with front-end web development, though I am not against doing full-stack or back-end work. I have 2 years of work experience. 
                    In my professional life I have familiarized myself with React, TypeScript and Redux. I'm always open to new learning experiences and looking forward to getting the most
                    out of what coding has to offer.
                </p>
                <p className="max-w-4xl text-lg text-gold-light mt-4">
                    In my free time I enjoy playing video games, sports and reading. I used to travel 1.5 hours to work (and then back) and this gave me a lot of time to read.
                    My favorite video game is Elden Ring, but I also have a soft spot for Sekiro. I used to play football (for 15 years!!!) and recently
                    discovered my love for the sport again.
                </p>
                <p className="mt-4 max-w-4xl text-gold-dim">Hesitation is defeat.</p>

                <div className="mt-10 grid max-w-4xl grid-cols-2 gap-3 sm:grid-cols-4">
                    <Card title="Experience" subtitle="2 years"/>
                    <Card title="Field" subtitle="Software Development"/>
                    <Card title="CV" subtitle={<a href="">Download Resume</a>}/>
                </div>
            </div>
        </div>
    )
}

export default AboutSection;