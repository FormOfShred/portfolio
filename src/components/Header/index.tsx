import { Button } from "@base-ui/react";

import styles from "./index.module.css";

const Header = () => {
  return (
    <div className={styles.Header}>
      <span className={styles.Title}>Robyn Hamelryck</span>
      <a href="mailto:robynhamelryck@outlook.com">
        <Button className={styles.Button}>Email</Button>
      </a>
    </div>
  )
}

export default Header;