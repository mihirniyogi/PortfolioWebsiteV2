import styles from "./About.module.scss";

type TextChild = {
  type: "text";
  text: string;
  bold?: boolean;
};

export type Paragraph = {
  type: "paragraph";
  children: TextChild[];
};

const parseDescription = (descArray: Paragraph[]) => {
  return descArray.map((block: Paragraph, index: number) => (
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

export default parseDescription;
