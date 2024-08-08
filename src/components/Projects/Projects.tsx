import styles from "./Projects.module.scss";
import useAnimateUponView from "../../hooks/useAnimateUponView";
// import axios from "axios";

const Projects = () => {
  // animate lines once they are in view
  useAnimateUponView(styles["header-line-left"], styles["animation"]);
  useAnimateUponView(styles["header-line-right"], styles["animation"]);

  // // useEffect...to fetch from CMS
  // useEffect(() => {
  //   const token = import.meta.env.VITE_STRAPI_API_TOKEN;
  //   const options = {
  //     headers: {
  //       Authorization: `Bearer ${token}`, // Include the token in the headers
  //     },
  //   };
  //   const response = axios
  //     .get("http://192.168.0.4:1337/api/projects", options)
  //     .then((res) => res.data)
  //     .catch((err) => console.error(err));
  //   console.log(response);
  // }, []);

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
