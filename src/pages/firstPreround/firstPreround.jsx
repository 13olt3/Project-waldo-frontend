import dead from "../../assets/dead.png";
import black from "../../assets/black.png";
import white from "../../assets/white.png";
import styles from "./FirstPreround.module.css";
import { Link } from "react-router";
function FirstPreround() {
  return (
    <>
      <div className={styles.imgContainer}>
        <p>You are looking for these three individuals, ready?</p>
        <div>
          {" "}
          <img src={black} alt="" className={styles.image} />
          <img src={white} alt="" className={styles.image} />
          <img src={dead} alt="" className={styles.image} />
        </div>
        <Link to={"/first"}>Start</Link>
      </div>
    </>
  );
}

export default FirstPreround;
