import { useEffect } from "react";
import styles from "./Projects.module.scss";

const Projects = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles["animation"]);
        }
      });
    });

    const headerLineLeft = document.querySelector(
      `.${styles["header-line-left"]}`
    );

    const headerLineRight = document.querySelector(
      `.${styles["header-line-right"]}`
    );

    if (headerLineLeft) observer.observe(headerLineLeft);
    if (headerLineRight) observer.observe(headerLineRight);

    // cleanup
    return () => {
      if (headerLineLeft) observer.unobserve(headerLineLeft);
      if (headerLineRight) observer.unobserve(headerLineRight);
    };
  }, []);

  return (
    <div className={styles.container}>
      {/* header */}
      <div className={styles["header"]}>
        <div className={styles["header-line-left"]}></div>
        <h3 className={styles["header-number"]}>02.</h3>
        <h3 className={styles["header-title"]} id="projects">
          projects
        </h3>
        <div className={styles["header-line-right"]}></div>
      </div>

      {/* content */}
      <div>content...</div>
    </div>
  );
};

export default Projects;
