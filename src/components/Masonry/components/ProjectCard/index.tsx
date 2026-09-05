import classNames from "classnames";
import styles from "./index.module.css";

type ProjectCardProps = {
  title: string;
  description: string;
  tags: string[];
  links?: {title: string, link: string}[]
  image: string;
}

const PreviewImage = ({ websiteLink, image }: { websiteLink?: {title: string, link: string}, image: string }) => {
  return (
    websiteLink ? 
      <a
        href={websiteLink.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          className={classNames(
            styles.Image,
            "aspect-video translate-y-2 group-hover:translate-y-0"
          )}
          src={image}
        />
      </a>
      : 
      <img className={classNames(styles.Image, "aspect-video translate-y-2 group-hover:translate-y-0")} src={image} />
  )
}

const ProjectCard = ({title, description, tags, links, image}: ProjectCardProps) => {
  const websiteLink = links?.find(({ title }) => title.toLowerCase() === "website");

  return (
    <div
      id="work"
      className={classNames(styles.Card, "group")}
    >
      <div className="relative z-10">
        <h2 className="text-2xl font-bold text-purple-dark">{title}</h2>
        <p className="mt-2 text-sm leading-relaxed text-purple-light">
          {description}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className={styles.Tag}
            >
              {tag}
            </span>
          ))}
        </div>
        {links && <div className="mt-4 flex flex-wrap gap-5">
          {links.map(({title, link}) => (
            <a
              key={title}
              href={link}
              target="_blank"
              className={styles.Link}
            >
              {title}
              <span className="fa-solid fa-link"/>
            </a>
          ))}
        </div>}
      </div>
      <PreviewImage websiteLink={websiteLink} image={image} />
    </div>
  )
};

export default ProjectCard;