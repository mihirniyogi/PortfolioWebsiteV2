import useAsyncError from "../../../hooks/useAsyncError";
import fetchDataFromCMS from "../../../utils/fetchDataFromCMS";
import styles from "./Text.module.scss";
import { useEffect, useState } from "react";

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
const TextComponent = () => {
  const [textArr, setTextArr] = useState<Paragraph[]>([]);
  const throwError = useAsyncError();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetchDataFromCMS("/api/contact");
        setTextArr(response.data.attributes.description);
      } catch (error) {
        throwError(error as Error);
      }
    }
    fetchData();
  }, [throwError]);

  return textArr.map((block: Paragraph, index: number) => (
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

export default TextComponent;
