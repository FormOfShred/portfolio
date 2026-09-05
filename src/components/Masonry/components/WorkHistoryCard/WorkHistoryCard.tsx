import styles from "./index.module.css";

const workHistory = [
  {
    company: "Apptweak",
    title: "Front-End Developer",
    dates: "11/2024 — 10/2026",
    description: `Part of a supporting development team that would maintain a library of custom components for other development teams to use.
    Mainly using React, TypeScript and Redux.`,
  },
  {
    company: "Adshot",
    title: "Full Stack Developer",
    dates: "02/2024 — 04/2024",
    description: "Internship. Learned to work with Vue.js and Knex.js as part of a small team of developers.",
  },
  {
    company: "Bachelor of Applied Computer Science ",
    title: "Computer Software Engineering",
    dates: "02/2020 — 06/2024",
    description: "Learning about several development tools of which JavaScript, TypeScript, React, Agile, and Java stuck with me the most.",
  },
];

const WorkHistoryCard = () => {
  return (
    <div className={styles.Card}>
      <h2 className="font-heading text-2xl font-bold text-purple-dark">Work History</h2>
      <div className="relative mt-6 flex-1">
        <div className="absolute left-[7px] top-2 bottom-2 w-px bg-purple/40" />
        <ul className="space-y-6">
          {workHistory.map((job) => (
            <li key={job.company} className="relative pl-8">
              <span className="absolute left-0 top-1.5 h-3.5 w-3.5 rounded-full border-2 border-purple-light bg-purple-light" />
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="font-heading text-base font-bold text-purple">{job.company}</h3>
                <span className="text-xs font-medium uppercase tracking-wider text-purple-light">
                  {job.dates}
                </span>
              </div>
              <p className="text-sm font-medium text-purple-dark">{job.title}</p>
              <p className="mt-1 text-sm leading-relaxed text-purple-light">{job.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
};

export default WorkHistoryCard;