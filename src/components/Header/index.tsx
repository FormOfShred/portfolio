import { Button, NavigationMenu } from "@base-ui/react";

import styles from "./index.module.css";

const Header = () => {
  return (
    <div className={styles.Header}>
      <span className={styles.Title}>Robyn Hamelryck</span>
      <NavigationMenu.Root className="hidden sm:flex">
        <NavigationMenu.List className="flex gap-10">
          <NavigationMenu.Item>
            <NavigationMenu.Trigger className={styles.Trigger}>
              Work
            </NavigationMenu.Trigger>
          </NavigationMenu.Item>

          <NavigationMenu.Item>
            <NavigationMenu.Trigger className={styles.Trigger}>
              Stack
            </NavigationMenu.Trigger>
          </NavigationMenu.Item>

          <NavigationMenu.Item>
            <NavigationMenu.Trigger className={styles.Trigger}>
              Contact
            </NavigationMenu.Trigger>
          </NavigationMenu.Item>
        </NavigationMenu.List>
      </NavigationMenu.Root>
      <a href="mailto:robynhamelryck@outlook.com">
        <Button className={styles.Button}>Email</Button>
      </a>
    </div>
  )
}

export default Header;