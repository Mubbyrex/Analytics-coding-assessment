import Image from "next/image";
import styles from "./ASA.module.css";

interface Result {
  name: string;
  assetId: string;
  available?: boolean;
  logo?: string | null | undefined;
  unitname1?: string | null | undefined;
}

interface ASAs {
  ASAs: Result[];
}
const ASA: React.FC<ASAs> = ({ ASAs }) => {
  return (
    <>
      {ASAs.map((ASA: any) => (
        <div className={styles.container} key={ASA.assetId}>
          <img
            src={ASA.logo ? ASA.logo : "/alternative.svg"}
            width={65}
            height={55}
            alt=""
          />
          <div className={styles.inner}>
            <p className={styles.typography}>{ASA.name}</p>
            {ASA.available ? (
              <button className={styles.available}>Available</button>
            ) : (
              <button className={styles.unavailable}>Unavailable</button>
            )}
          </div>
        </div>
      ))}
    </>
  );
};

export default ASA;
