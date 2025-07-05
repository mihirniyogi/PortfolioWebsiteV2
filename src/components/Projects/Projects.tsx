import Card from "./Card";
import styles from "./Projects.module.scss";

type Project = {
  title: string;
  desc: string;
  technologies: string[];
  githubLink?: string;
  liveLink?: string;
}

const projects: Project[] = [
  {
    title: "Project 1",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    technologies: ["React", "Next.js", "Firebase", "Typescript"],
    githubLink: "google.com",
    liveLink: "google.com"
  },
  {
    title: "Project 2",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    technologies: ["Java", "Android Studio", "XML"],
    githubLink: "google.com"
  },
  {
    title: "Project 3",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.",
    technologies: ["Google Sheets", "Apps Script", "Python"],
    githubLink: "google.com",
    liveLink: "google.com"
  },
]

const Projects = () => {

  return (
    <div className={styles.container}>
      <h2>Projects</h2>

      <div className={styles.cardsSection}>
        {projects.map((project, index) => (
          <Card
            key={index}
            title={project.title}
            desc={project.desc}
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
