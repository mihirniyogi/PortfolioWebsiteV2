import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import useAnimateUponView from "../../hooks/useAnimateUponView";
import styles from "./Contact.module.scss";
// import parseDescription, { Paragraph } from "./parseDescription";
// import axios from "axios";
// import { useEffect, useState } from "react";

const Contact = () => {
  useAnimateUponView(styles["header-line"], styles["animation"]);

  // const [description, setDescription] = useState<Paragraph[]>([]);

  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       const token = import.meta.env.VITE_STRAPI_API_TOKEN;
  //       const options = {
  //         headers: {
  //           Authorization: `Bearer ${token}`, // Include the token in the headers
  //         },
  //       };
  //       const apiUrl = import.meta.env.VITE_STRAPI_API_URL;
  //       const response = await axios
  //         .get(`${apiUrl}/api/about`, options)
  //         .then((res) => res.data)
  //         .catch((err) => console.error(err));

  //       setDescription(response.data.attributes.description);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   }

  //   fetchData();
  // }, []);

  // const parsed = parseDescription(description);

  return (
    <div className={styles["container"]}>
      {/* header */}
      <div className={styles["header"]}>
        <div className={styles["header-line"]}></div>
        <h3 className={styles["header-number"]}>03.</h3>
        <h3 className={styles["header-title"]} id="contact">
          get in touch
        </h3>
      </div>

      {/* content */}
      <div className={styles["content"]}>
        <div className={styles["text_section"]}>
          <p>
            {
              "Whether it’s a new project idea or just to say hi, drop me a message!"
            }
          </p>
          <p>{"P.S. I’m always down for a good meal."}</p>

          <div className={styles["iconrow"]}>
            <a href="https://www.instagram.com/me.here.942/">
              <FaInstagram className={styles["icon"]} />
            </a>
            <a href="mailto: E1122052@u.nus.edu">
              <IoMdMail className={styles["icon"]} />
            </a>
            <a href="https://www.linkedin.com/in/mihir-niyogi/">
              <FaLinkedin className={styles["icon"]} />
            </a>
            <a href="https://github.com/mihirniyogi/">
              <FaGithub className={styles["icon"]} />
            </a>
          </div>
        </div>

        <div className={styles["space_section"]}></div>

        <div className={styles["form_section"]}>
          <form name="ContactMe" className={styles["form"]} data-netlify="true">
            {/* email label+box */}
            <div className={styles["field"]}>
              <label htmlFor="email">email</label>
              <textarea name="email" id="email" rows={1} required></textarea>
            </div>

            {/* message label+box */}
            <div className={styles["field"]}>
              <label htmlFor="message">message</label>
              <textarea
                name="message"
                id="message"
                rows={5}
                required
              ></textarea>
            </div>

            {/* send button */}
            <button type="submit">send!</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
