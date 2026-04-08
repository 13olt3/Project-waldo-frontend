import amongus from "../../assets/amongus.png";
import styles from "./First.module.css";
import { useRef, useState, useEffect } from "react";
import { useOutletContext } from "react-router";
import AmongSelector from "../../components/amongSelector/amongSelector";
import black from "../../assets/black.png";
import white from "../../assets/white.png";
import dead from "../../assets/dead.png";
import WinScreen from "../../components/winScreen/winScreen";

import { checkAnswer } from "../../services/answerService.js";

function First() {
  const { originalImageSize, userAnswer, resetUserAnswer } = useOutletContext();
  const imgRef = useRef(null);

  const [overlay, setOverlay] = useState(false);
  const [coords, setCoords] = useState({ x: null, y: null });
  const [results, setResults] = useState({});

  useEffect(() => {
    resetUserAnswer();
  }, []);

  function handleImageClick(e) {
    const rect = imgRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const scaleFactor = originalImageSize.x / Math.round(rect.width);
    const compareValue = {
      x: Math.round(x * scaleFactor),
      y: Math.round(y * scaleFactor),
    };

    handleOverlay();
    setCoords(compareValue);
  }
  function handleOverlay() {
    setOverlay(!overlay);
  }

  function challengeFinished() {
    if (userAnswer.white && userAnswer.black && userAnswer.dead) {
      return false;
    }
    return true;
  }

  async function handleSubmitAnswer() {
    const result = await checkAnswer(userAnswer);
    setResults(result);
    // console.log(result);
  }

  return (
    <div>
      <div
        className={overlay ? styles.overlayOn : styles.overlayOff}
        onClick={handleOverlay}
      >
        <AmongSelector coords={coords} />
      </div>
      {results.dead & results.white & results.black ? (
        <WinScreen imgName="amongus" />
      ) : (
        ""
      )}
      <div>
        {" "}
        <div>First Challenge</div>
        <img
          ref={imgRef}
          className={styles.image}
          src={amongus}
          alt="First challenge"
          onClick={(e) => handleImageClick(e)}
        />
        <div>
          <img
            src={black}
            className={`
              ${userAnswer.black ? styles.imgAnswered : styles.imgUnanswered}
              ${results.black === true ? styles.borderCorrect : ""}
              ${results.black === false ? styles.borderIncorrect : ""}
            `}
          />
          <img
            src={white}
            className={`
              ${userAnswer.white ? styles.imgAnswered : styles.imgUnanswered}
              ${results.white === true ? styles.borderCorrect : ""}
              ${results.white === false ? styles.borderIncorrect : ""}
            `}
          />
          <img
            src={dead}
            className={`
              ${userAnswer.dead ? styles.imgAnswered : styles.imgUnanswered}
              ${results.dead === true ? styles.borderCorrect : ""}
              ${results.dead === false ? styles.borderIncorrect : ""}
            `}
          />
        </div>
        <button onClick={handleSubmitAnswer} disabled={challengeFinished()}>
          Submit answer
        </button>
      </div>
    </div>
  );
}

export default First;
