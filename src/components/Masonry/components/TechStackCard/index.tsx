import styles from "./index.module.css";

const TECH_STACK = [
  "TypeScript",
  "React",
  "HTML",
  "CSS",
  "JavaScript"
]

const TechStackCard = () => {
  return (
    <div
      className={styles.Card}
    >
      <span className={styles.Title}>Tech Stack</span>
      <div className="mt-4 flex flex-wrap gap-2">
        {TECH_STACK.map((tech) => (
          <span
            key={tech}
            className={styles.Tech}
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  )
}

export default TechStackCard;