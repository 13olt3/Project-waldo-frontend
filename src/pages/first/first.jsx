import amongus from "../../assets/amongus.png";
import styles from "./First.module.css";
import { useRef, useState } from "react";
import { useOutletContext } from "react-router";
import AmongSelector from "../../components/amongSelector/amongSelector";

function First() {
  const { originalRef } = useOutletContext();
  const imgRef = useRef(null);

  const [overlay, setOverlay] = useState(false);

  function handleOverlay() {
    setOverlay(!overlay);
  }

  function handleImageClick(e) {
    console.log(originalRef);
    const rect = imgRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const scaleFactor = originalRef.x / Math.round(rect.width);
    const compareValue = { x: x * scaleFactor, y: y * scaleFactor };
    console.log(compareValue);

    console.log(`clientX: ${e.clientX}, clientY: ${e.clientY}`);
    console.log(`posX: ${x}, posY: ${y}`);
    handleOverlay();
  }
  return (
    <div>
      <div
        className={overlay ? styles.overlayOn : styles.overlayOff}
        onClick={handleOverlay}
      >
        <AmongSelector />
      </div>
      <div className={styles.imgContainer}>First Challenge</div>
      <img
        ref={imgRef}
        className={styles.image}
        src={amongus}
        alt="First challenge"
        onClick={(e) => handleImageClick(e)}
      />
    </div>
  );
}

export default First;
