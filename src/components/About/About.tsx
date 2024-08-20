import styles from "./About.module.scss";
import useAnimateUponView from "../../hooks/useAnimateUponView";
import DescriptionComponent from "./DescriptionComponent";

const About = () => {
  // animate lines once they are in view
  useAnimateUponView(styles["header-line"], styles["animation"]);

  return (
    <div className={styles["container"]}>
      {/* header */}
      <div className={styles["header"]}>
        <h3 className={styles["header-number"]}>01.</h3>
        <h3 className={styles["header-title"]} id="about">
          about me
        </h3>
        <div className={styles["header-line"]}></div>
      </div>

      {/* content */}
      <div className={styles["content"]}>
        {/* text */}
        <div className={styles["text"]}>
          <DescriptionComponent />
        </div>

        {/* space */}
        <div className={styles["space"]}></div>

        {/* image */}
        <div className={styles["image"]}>
          <div className={styles["image-wrapper"]}>
            <img src="profile_image.jpg" alt="Profile Image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
