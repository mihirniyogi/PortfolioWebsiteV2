import styles from "./FeaturedCard.module.scss";
import { FaGithub, FaLink } from "react-icons/fa6";

export type FeatureCardProps = {
  title: string;
  description: string;
  image: string;
  githubLink: string;
  liveLink: string;
  technologies: string[];
  position: "left" | "right";
};

const FeaturedCard = ({
  title,
  description,
  image,
  githubLink,
  liveLink,
  technologies,
  position,
}: FeatureCardProps) => {
  return position === "left" ? (
    <div className={styles["container"]}>
      {/* Text side */}
      <div className={styles["textside"]}>
        <span>featured</span>
        <h3>{title}</h3>
        <div className={styles["description_box"]}>
          <p>{description}</p>
        </div>
        {/* links + tech */}
        <div className={styles["info_row"]}>
          <div className={styles["links"]}>
            <a href={githubLink}>
              <FaGithub className={styles["icon"]} />
            </a>
            <a href={liveLink}>
              <FaLink className={styles["icon"]} />
            </a>
          </div>

          <div className={styles["tech"]}>
            {technologies.map((tech, index) => (
              <span key={index}>{tech}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Image side */}
      <div className={styles["imageside"]}>
        <img src={image} alt="" className={styles["image"]} />
      </div>
    </div>
  ) : (
    <div className={`${styles["container"]} ${styles["right"]}`}>
      {/* Image side */}
      <div className={`${styles["imageside"]} ${styles["right"]}`}>
        <img src={image} alt="Image" className={styles["image"]} />
      </div>

      {/* Text side */}
      <div className={`${styles["textside"]} ${styles["right"]}`}>
        <span>featured</span>
        <h3>{title}</h3>
        <div className={styles["description_box"]}>
          <p>{description}</p>
        </div>
        {/* links + tech */}
        <div className={`${styles["info_row"]} ${styles["right"]}`}>
          <div className={`${styles["tech"]} ${styles["right"]}`}>
            {technologies.map((tech, index) => (
              <span key={index}>{tech}</span>
            ))}
          </div>

          <div className={styles["links"]}>
            <a href={githubLink}>
              <FaGithub className={styles["icon"]} />
            </a>
            <a href={liveLink}>
              <FaLink className={styles["icon"]} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCard;
