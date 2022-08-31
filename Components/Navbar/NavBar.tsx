import Image from "next/image";
import styles from "./Navbar.module.css";

const NavBar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Image src="/logo.svg" width={65} height={45} />
        <span className={styles.text}>SALYTICS</span>
      </div>
      <div>
        <button className={styles.button}>Analyze ASAs</button>
      </div>
    </div>
  );
};

export default NavBar;
