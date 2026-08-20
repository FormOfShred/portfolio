import classNames from "classnames";
import styles from "./index.module.css";

const HeroCard = () => {
  return (
    <div className={classNames(styles.Card, "group")}>
      <div
        className={classNames(styles.Background, "group-hover:scale-150")}
      />
      <div className="relative z-10 flex flex-col">
        <span className={styles.Name}>
            Robyn Hamelryck
        </span>
        <span className={styles.Heading}>
          Hesitation is defeat.
        </span>
        <span className={styles.Subtitle}>
            Software Developer most familiar with TypeScript, React, and creating custom components
        </span>
      </div>
    </div>
  )
}

export default HeroCard;