import styles from "./index.module.css";

const flag = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 450 390" width={50}>
    <path fill="#ED2939" d="M0 0h450v390H0z"/>
    <path fill="#FAE042" d="M0 0h300v390H0z"/>
    <path d="M0 0h150v390H0z"/>
  </svg>);

const LocationCard = () => {

  return (
    <div className={styles.Card}>
      <span>
        {flag}
      </span>
      <span className={styles.Country}>
        Belgium
      </span>
    </div>
  )
}

export default LocationCard;