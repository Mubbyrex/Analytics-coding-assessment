import Team from "../Team/Team";
import Heading from "../Heading/Heading";
import styles from "./MainContent.module.css";

const MainContent = () => {
  return (
    <div className={styles.container}>
      <Heading />
      <Team />
    </div>
  );
};

export default MainContent;
