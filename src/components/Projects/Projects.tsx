import { useEffect, useState } from "react";
import Card from "./Card";
import styles from "./Projects.module.scss";
import fetchDataFromCMS from "../../utils/fetchDataFromCMS";

type ResponseFormat = {
  data: {
    attributes: {
      Title: string;
      Description: string;
      image?: {
        data?: {
          attributes?: {
            url?: string;
          }
        }
      };
      technologies: string[];
      githubLink?: string;
      liveLink?: string;
    }
  }[];
}

type Project = {
  title: string;
  desc: string;
  image: string;
  technologies: string[];
  githubLink?: string;
  liveLink?: string;
}

const Projects = () => {

  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    async function fetchData() {

      try {
        const response = await fetchDataFromCMS("/api/projects?populate=*") as ResponseFormat;
        const BASE_URL = import.meta.env.VITE_STRAPI_API_URL;
        const projects: Project[] = response.data.map((item) => ({
          title: item.attributes["Title"],
          desc: item.attributes["Description"],
          image: item.attributes["image"]?.data?.attributes?.url
            ? `${BASE_URL}${item.attributes["image"].data.attributes.url}`
            : '',
          technologies: item.attributes["technologies"],
          githubLink: item.attributes["githubLink"],
          liveLink: item.attributes["liveLink"],
        }));
        console.log("Projects fetched:", projects);
        setProjects(projects);
      } catch (error) {
        console.error("Error fetching projects:", error);
        setProjects([]);
      }
    }

    fetchData();
  }, []);

  return (
    <div className={styles.container}>
      <h2>Projects</h2>

      <div className={styles.cardsSection}>
        {projects.map((project, index) => (
          <Card
            key={index}
            title={project.title}
            desc={project.desc}
            image={project.image}
            technologies={project.technologies}
            githubLink={project.githubLink}
            liveLink={project.liveLink}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
