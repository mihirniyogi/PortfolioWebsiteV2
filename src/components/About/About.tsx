import { useEffect, useState } from "react";
import styles from "./About.module.scss";
import fetchDataFromCMS from "../../utils/fetchDataFromCMS";

type TextChild = {
  type: "text";
  text: string;
  bold?: boolean;
}

type Paragraph = {
  type: "paragraph";
  children: TextChild[];
}

// takes in response, returns JSX
const parseResponse = (description: Paragraph[]): JSX.Element[] => {
  return description.map((block: Paragraph, index: number) => (
    <p key={index}>
      {
        block.children.map((child: TextChild, childIndex: number) => {
          if (child.bold) {
            return <strong key={childIndex}> {child.text} </strong>
          }
          return <span key={childIndex}> {child.text} </span>
        })
      }
    </p>
  ));
}

const About = () => {

  const [description, setDescription] = useState<Paragraph[]>([]);

  // step 1: fetch data from CMS
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetchDataFromCMS("/api/about");
        const parsed: Paragraph[] = response.data.attributes.description;
        setDescription(parsed);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);

  // step 2: parse response and render
  return (
    <div className={styles["container"]}>
      {description ? (
        parseResponse(description)
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default About;
