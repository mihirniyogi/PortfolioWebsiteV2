// FallbackMessage.jsx
import styles from "./Fallback.module.scss";

const Fallback = () => (
  <div className={styles["container"]}>
    <h2 className={styles["title"]}>Oops!</h2>
    <p className={styles["message"]}>Unable to fetch data at the moment.</p>
  </div>
);

export default Fallback;
