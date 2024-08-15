// import { useEffect } from "react";
import axios from "axios";
import useAnimateUponView from "../../hooks/useAnimateUponView";
import styles from "./About.module.scss";
import { useEffect, useState } from "react";
import parseDescription, { Paragraph } from "./parseDescription";

const About = () => {
  // animate lines once they are in view
  useAnimateUponView(styles["header-line"], styles["animation"]);

  const [description, setDescription] = useState<Paragraph[]>([]);

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
          .get(`${apiUrl}/api/about`, options)
          .then((res) => res.data)
          .catch((err) => console.error(err));

        setDescription(response.data.attributes.description);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);

  const parsed = parseDescription(description);

  return (
    <div className={styles.container}>
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
        <div className={styles["text"]}>{parsed}</div>

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
