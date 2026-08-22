import { Button } from "@base-ui/react/button";

import resume from "../../../../assets/resume.pdf";

import styles from "./index.module.css";

const ContactCard = () => {
  return (
    <div
      className={styles.Card}
    >
      <div className="relative z-10">
        <h2 className="text-4xl font-bold">
            Contact Me.
        </h2>
        <p className="mt-4 max-w-sm">
            Send me an email or take a look at my resume.
        </p>
      </div>
      <div className="relative z-10 mt-8 flex flex-wrap gap-4">
        <a href="mailto:robynhamelryck@outlook.com">
          <Button
            className={styles.Email}
          >
          Get in touch
          </Button>
        </a>
        <a href={resume} target="_blank">
          <Button
            className={styles.Resume}
          >
          Resume
          </Button>
        </a>
      </div>
    </div>
  )
}

export default ContactCard;