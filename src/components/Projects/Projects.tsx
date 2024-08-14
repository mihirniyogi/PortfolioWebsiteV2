import { useEffect, useState } from "react";
import axios from "axios";
import styles from "./Projects.module.scss";
import useAnimateUponView from "../../hooks/useAnimateUponView";
import FeaturedCard from "./Card/FeaturedCard";

type Project = {
  title: string;
  description: string;
  image: string;
  githubLink: string;
  liveLink: string;
  technologies: string[];
};

const Projects = () => {
  // animate lines once they are in view
  useAnimateUponView(styles["header-line-left"], styles["animation"]);
  useAnimateUponView(styles["header-line-right"], styles["animation"]);

  const [featured, setFeatured] = useState<Project[]>([]);

  // to fetch from CMS
  useEffect(() => {
    async function fetchData() {
      try {
        const token = import.meta.env.VITE_STRAPI_API_TOKEN;
        const options = {
          headers: {
            Authorization: `Bearer ${token}`, // Include the token in the headers
          },
        };
        const apiUrl = import.meta.env.VITE_STRAPI_API_URL;
        const response = await axios
          .get(`${apiUrl}/api/projects?populate=*`, options)
          .then((res) => res.data)
          .catch((err) => console.error(err));

        const projects: Project[] = response.data.map((item: any) => ({
          title: item.attributes["Title"],
          description: item.attributes["Description"],
          image: item.attributes["image"]?.data?.attributes?.url
            ? `http://192.168.0.4:1337${item.attributes["image"].data.attributes.url}`
            : "default.jpg",
          githubLink: item.attributes["githubLink"],
          liveLink: item.attributes["liveLink"],
          technologies: item.attributes["technologies"],
        }));

        setFeatured(projects);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
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
      <div className={styles["content"]}>
        {featured.map((data, index) => (
          <FeaturedCard
            key={index}
            title={data.title}
            description={data.description}
            image={data.image}
            githubLink={data.githubLink}
            liveLink={data.liveLink}
            technologies={data.technologies}
            position={index % 2 === 0 ? "left" : "right"}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
