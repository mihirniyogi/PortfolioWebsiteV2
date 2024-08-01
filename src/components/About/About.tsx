import styles from "./About.module.scss";

const About = () => {
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
        <div className={styles["text"]}>
          <p>Hi! I am a Year 2 Student @ NUS Computer Science.</p>
          <p>
            I love <span className={styles.highlight}>problem-solving</span> and
            enjoy the challenge of building things from scratch. My passion for
            tech started back in secondary school when I first developed a
            simple game, and it has only grown since.
          </p>
          <p>
            Right now, I'm diving deep into{" "}
            <span className={styles.highlight}>web development</span>,
            experimenting with React, Next.js, Express, SQL, and Firebase.
          </p>
          <p>
            In my spare time, I enjoy tinkering with networks, playing
            badminton, reading fiction novels, exploring up and coming
            technologies, and helping out my family.
          </p>
        </div>

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
