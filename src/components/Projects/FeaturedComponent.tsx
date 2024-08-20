import { useEffect, useState } from "react";
import FeatCard from "./Card/FeatCard";
import fetchDataFromCMS from "../../utils/fetchDataFromCMS";
import useAsyncError from "../../hooks/useAsyncError";

type Project = {
  title: string;
  description: string;
  image: string;
  githubLink: string;
  liveLink: string;
  technologies: string[];
};

// fetches data + parses data + returns JSX
const FeaturedComponent = () => {
  const [featured, setFeatured] = useState<Project[]>([]);
  const throwError = useAsyncError();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetchDataFromCMS("/api/projects?populate=*");

        const BASE_URL = import.meta.env.VITE_STRAPI_API_URL;
        const projects: Project[] = response.data.map((item: any) => ({
          title: item.attributes["Title"],
          description: item.attributes["Description"],
          image: item.attributes["image"]?.data?.attributes?.url
            ? `${BASE_URL}${item.attributes["image"].data.attributes.url}`
            : "default.png",
          githubLink: item.attributes["githubLink"],
          liveLink: item.attributes["liveLink"],
          technologies: item.attributes["technologies"],
        }));
        setFeatured(projects);
      } catch (error) {
        throwError(error as Error);
      }
    }

    fetchData();
  }, [throwError]);

  return featured.map((data, index) => (
    <FeatCard
      key={index}
      title={data.title}
      description={data.description}
      image={data.image}
      githubLink={data.githubLink}
      liveLink={data.liveLink}
      technologies={data.technologies}
      position={index % 2 === 0 ? "left" : "right"}
    />
  ));
};

export default FeaturedComponent;
