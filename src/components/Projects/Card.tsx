import styles from "./Card.module.scss";
import { FaGithub } from "react-icons/fa6";
import { FaExternalLinkAlt } from "react-icons/fa";


type CardProps = {
  title: string;
  desc: string;
  technologies: string[];
  githubLink?: string;
  liveLink?: string;
}

const Card = ({ title, desc, technologies, githubLink, liveLink }: CardProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.imageWrapper}>
        {/* image to be placed */}
      </div>

      <h3>{title}</h3>

      <p>{desc}</p>

      <div className={styles.technologies}>
        {technologies.map((tech, index) => (
          <span key={index} className={styles.tech}>
            {tech}
          </span>
        ))}
      </div>

      <div className={styles.links}>
        {githubLink && (
          <a href={githubLink} target="_blank" rel="noopener noreferrer" className={styles.githubLink}>
            <FaGithub />
            {" "}
            {"Code"}
          </a>
        )}
        {liveLink && (
          <a href={liveLink} target="_blank" rel="noopener noreferrer" className={styles.liveLink}>
            <FaExternalLinkAlt />
            {" "}
            {"Live"}
          </a>
        )}
      </div>

    </div>
  )
}

export default Card