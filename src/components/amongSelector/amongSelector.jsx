import styles from "./AmongSelector.module.css";
import black from "../../assets/black.png";
import white from "../../assets/white.png";
import dead from "../../assets/dead.png";
import { useOutletContext } from "react-router";

function AmongSelector() {
  const { userAnswer, handleAnswer } = useOutletContext();

  return (
    <div className={styles.amongSelector}>
      <p>Which AmongUs did you find:</p>
      <div className={styles.selectorDiv}>
        <img src={white} alt="" />
      </div>
      <div className={styles.selectorDiv}>
        <img src={black} alt="" />
      </div>
      <div className={styles.selectorDiv}>
        <img src={dead} alt="" />
      </div>
    </div>
  );
}

export default AmongSelector;
