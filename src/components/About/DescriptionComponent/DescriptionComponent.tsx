import styles from "./Description.module.scss";
import { useEffect, useState } from "react";
import fetchDataFromCMS from "../../../utils/fetchDataFromCMS";
import useAsyncError from "../../../hooks/useAsyncError";

// helper type
type TextChild = {
  type: "text";
  text: string;
  bold?: boolean;
};

// helper type
type Paragraph = {
  type: "paragraph";
  children: TextChild[];
};

// fetches data + parses data + returns JSX
const DescriptionComponent = () => {
  const [descriptionArr, setDescriptionArr] = useState<Paragraph[]>([]);
  const throwError = useAsyncError();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetchDataFromCMS("/api/about");
        setDescriptionArr(response.data.attributes.description);
      } catch (error) {
        console.error(error);
        throwError(error as Error);
      }
    }
    fetchData();
  }, [throwError]);

  return descriptionArr.map((block: Paragraph, index: number) => (
    <p key={index}>
      {block.children.map((child: TextChild, childIndex: number) => {
        if (child.bold) {
          return (
            <span key={childIndex} className={styles["highlight"]}>
              {child.text}
            </span>
          );
        }
        return <span key={childIndex}>{child.text}</span>;
      })}
    </p>
  ));
};

export default DescriptionComponent;
