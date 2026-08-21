
import styles from "./index.module.css";

const SOCIAL_LINKS = [
  { name: "GitHub", link: "https://github.com/FormOfShred" },
  { name: "LinkedIn", link: "https://www.linkedin.com/in/robyn-hamelryck/" },
  { name: "Email", link: "mailto:robynhamelryck@outlook.com" },
];

const Footer = () => {
  return (
    <footer className={styles.Footer}>
      <div className={styles.Content}>
        <div className="text-lg font-bold text-purple-dark">Robyn Hamelryck</div>
        <div className="flex flex-wrap justify-center gap-6 text-sm font-medium text-purple">
          {SOCIAL_LINKS.map(({name, link}) => (
            <a
              key={name}
              href={link}
              target="_blank"
              className="transition-colors hover:text-purple-dark"
            >
              {name}
            </a>
          ))}
        </div>
        <p className="text-sm text-purple-light">
          © {new Date().getFullYear()} Robyn Hamelryck
        </p>
      </div>
    </footer>
  );
}

export default Footer;