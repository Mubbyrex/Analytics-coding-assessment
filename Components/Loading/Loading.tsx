import { Audio } from "react-loader-spinner";
import styles from "./Loading.module.css";

const Loading = () => {
  return (
    <div className={styles.container}>
      <p className={styles.typography}>Loading ASAs</p>
      <Audio
        height="80"
        width="80"
        color="black"
        ariaLabel="three-dots-loading"
      />
    </div>
  );
};

export default Loading;
