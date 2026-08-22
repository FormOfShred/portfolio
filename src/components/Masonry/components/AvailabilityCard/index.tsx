import styles from "./index.module.css";

const AvailabilityCard = () => {
  return (
    <div className={styles.Card}>
      <span className="relative mb-3 flex h-3 w-3">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75" />
        <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500" />
      </span>
      <span className={styles.Title}>
          Available for hire
      </span>
    </div>
  )
}

export default AvailabilityCard;